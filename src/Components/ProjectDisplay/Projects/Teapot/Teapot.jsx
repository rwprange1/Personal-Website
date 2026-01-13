import { initShaders, getVertexShader, getFragmentShader } from "./common_files/initShaders";
import { initWebGL, getMousePosition } from "./common_files/utils";
import {Camera} from "./Camera"
import {findY, multQuat} from "./quaternion"
import {createTeapotGeometry} from "./createTeapotData"
import { use, useEffect, useRef } from "react";
import { matToFloat32Array , transpose, mix, cross, normalize, length, vector_scale, vector_add, add} from "./MV";
import { CgNametag } from "react-icons/cg";


/**
 * This will be the main file for displaying a 3d teapot and the modification of its lighting properties.
 * We also implement useful rotation of the teapot using quaternion rotations
 * @author Richard Prange
 * @version 11/25/2025
 */












export default function Teapot(){

   
    var program;
    var gl;
    var vertexShdr;
    var fragmentShdr;


    var numVertices;
    var dataBuffer;

    var camera; 
    var quaternion;

    var cameraPos = [0, 8., 10.0 ,1.0]; 
    var lookAtPoint = [0.0, 0.0, 0.0, 1.0]; 
    var up = [0.0, 1.0, 0.0, 1.0];


    var shininess = 16;

    var lightPos = [-58., -60.,  100.0,  1.0];
    var diffuseIntensity = 2.0;
    var specularIntensity = 2.0;

    var lightAmbient = [1,1,1,1.];
    var lightDiffuse = [1,1,1,1.];
    var lightSpecular = [1. , 1., 1., 1.];

    var materialAmbient = [.4, 0, .2, 1.0];
    var materialDiffuse = [.4, 0, .4, 1.];
    var materialSpecular = [.4, .77, .77, 1.0];



    var near = .5;
    var far = 100.;
    var left = -.65;
    var right = .65;
    var bottom = -.65;
    var topCam = .65;


    var isHeld = false;
    var prevPoint;
    var click;
    var quatPointer;

    var diffPointer;
    var specularPointer;
    var lightPosPointer;

    const canvas = useRef(null);
    const isMounted = useRef(false);

    useEffect(()=>{
        isMounted.current = true;
        
            gl = initWebGL(canvas.current);
        
            if (!gl) {
                this.alert("WebGL isnt available");
            }


            vertexShdr = getVertexShader("vertex-shader", gl);
            fragmentShdr = getFragmentShader("fragment-shader",gl)

            program = initShaders(gl,vertexShdr ,fragmentShdr);
            gl.useProgram(program);

            gl.disable(gl.CULL_FACE);
            gl.enable(gl.DEPTH_TEST);

            gl.viewport(0,0,canvas.current.width, canvas.current.height);
            gl.clearColor(0.0,0.0,0.0,1.0);

            quaternion = [1.0, 0.0, 0.0, 0.0];
            quatPointer = gl.getUniformLocation(program, "uRotQuat");
            gl.uniform4fv(quatPointer, quaternion);

            buildBuffers();
            console.log("Buffers Built")
            buildCamera();
            console.log("Camera Built")
            calculateLight();
            console.log("Light Built")
            initHTMLEventListeners();
            console.log("Listeners Built")
        
       




        //
        // Provides requestAnimationFrame in a cross browser way.
        //
        // Source Angel/Shreiner book tools
        // 
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback, element) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        const render = () =>{
            if (!isMounted.current) return;
            console.log("Render")
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, numVertices);
            requestAnimFrame(render);
        }

        render()


        return () =>{
            console.log("unmount")
            isMounted.current = false;
            gl.deleteBuffer(dataBuffer);
            gl.deleteShader(vertexShdr);
            gl.deleteShader(fragmentShdr);
            gl.deleteProgram(program);
        }
    }, [])

        /**
     * This is the render loop, we clear the canvas and display the content and call render again
     */
    function render() {
        

    }


    /**
 * This function initializes the html listener functions
 */

function initHTMLEventListeners(){
    

    
    canvas.current.addEventListener("mousemove", (event) => {
        if (!isHeld || click === null) return; 
        
        if (prevPoint === undefined || prevPoint === null){
            let localCoords = getMousePosition(event, canvas.current)
            prevPoint = findY(localCoords[0], localCoords[1]);
            return;
        }

        if(click === 0 ){
            let localCoords = getMousePosition(event, canvas.current)
            let val = findY(localCoords[0], localCoords[1]);
            
            let axis = cross(val, prevPoint);
            
            axis = normalize(axis);
            
            let theta = length(axis)/150;
            
            let cos = Math.cos(theta);
            let sin = Math.sin(theta);

            axis = vector_scale(axis, sin);
            let rotation = [cos, axis[0], axis[1], axis[2]];
            
            quaternion = multQuat(quaternion, rotation);
            gl.uniform4fv(quatPointer, quaternion);
            prevPoint = val;

        }else if (click === 1){ 
            // zoom in/out
            let localCoords = getMousePosition(event, canvas.current)
            let val = [localCoords[0], localCoords[1], 0.0 , 0.0];

            if (val[1] - prevPoint[1] > 0){
                let check=  add(cameraPos, vector_scale(camera.lookAtDirection, -2));

                if (check[2] < 2) check[2] =2;
                cameraPos = check
            }else{
                let check =  add(cameraPos, vector_scale(camera.lookAtDirection, 2));
                if (check[2] < 2) check[2] =2;
                cameraPos = check
            }
            buildCamera()
            prevPoint = val;
        }
    });

    canvas.current.addEventListener("mousedown", (event) =>{
        isHeld = true;
        click = event.button;
    });

    canvas.current.addEventListener("mouseup", ()=>{
        isHeld = false;
        click = null;
        prevPoint = null;
    });
}
    


    /**
 * This function passes the needed lighting values to the vertex and fragment shaders
 */
function calculateLight(){
    let ambientProduct = mix(lightAmbient, materialAmbient, 1.0);
    let diffuseProduct = mix(lightDiffuse, materialDiffuse, diffuseIntensity);
    let specularProduct = mix(lightSpecular, materialSpecular, specularIntensity);

    let colorPointer = gl.getUniformLocation(program, "uColor");
    gl.uniform4fv(colorPointer, [.7, .4, .4, 1.0]); // give the object a bit of a pink color
    
    let ambPointer = gl.getUniformLocation(program, "ambientProduct");
    gl.uniform4fv(ambPointer, ambientProduct);

    diffPointer = gl.getUniformLocation(program, "diffuseProduct");
    gl.uniform4fv(diffPointer, diffuseProduct);

    specularPointer = gl.getUniformLocation(program, "specularProduct");
    gl.uniform4fv(specularPointer, specularProduct);

    let shininessPointer = gl.getUniformLocation(program, "shininess");
    gl.uniform1f(shininessPointer, shininess);

    lightPosPointer = gl.getUniformLocation(program, "lightPos");
    gl.uniform4fv(lightPosPointer, lightPos);

    let viewerPosPointer = gl.getUniformLocation(program, "viewerPos");
    gl.uniform4fv(viewerPosPointer, cameraPos);
}



/**
 * This function loads in the teapot and the index buffer to the gpu
 */
function buildBuffers(){
    // generate hte teapot model
	let teapot_geom = createTeapotGeometry(12);
	numVertices = teapot_geom[0].length;
    let vals = [...teapot_geom[0]];
    
    vals.push(...teapot_geom[1]);



    let data = matToFloat32Array(vals);
    
    dataBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,
        data,
        gl.STATIC_DRAW
    );

    bindBuffer();
}


/**
 * Tell webgl the positions of the attributes in the GLbuffer 
 */
function bindBuffer(){
    gl.bindBuffer(gl.ARRAY_BUFFER,  dataBuffer);

    let vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    let vNorm = gl.getAttribLocation(program, "vNorm");
    gl.vertexAttribPointer(vNorm, 4, gl.FLOAT, false, 0, 16*numVertices); // each element is a vec4f, 4 4 byte floats
    gl.enableVertexAttribArray(vNorm);
}




/**
 * Called when we want to initialize or change some specifications about our camera
 * It will rebuild the camera and set the html values to the new information
 */
function buildCamera(){
    camera = new Camera(cameraPos, lookAtPoint, up);
    updateCameraUniforms();
}

/**
 * This should only be called after a camera has been built, it will 
 * call the camera perspective function which builds the projection/perspective matrix.
 * It will then load our projection and view matrices to the shader
 */
function updateCameraUniforms(){
    //console.log(left, right, bottom, topCam, near, far)
    camera.perspective(left, right, bottom, topCam, near, far);
    let modelMatrix = gl.getUniformLocation(program, "uCamera");
    let perspectiveMatrix = gl.getUniformLocation(program, "uPerspectiveMatrix");
    gl.uniformMatrix4fv(modelMatrix, false, matToFloat32Array(transpose(camera.modelViewMatrix)));
    gl.uniformMatrix4fv(perspectiveMatrix, false , matToFloat32Array(camera.perspectiveMatrix));
}









/**
 * A simple helper function to reset the world and camera view and position
 */
function reset(){
    

    cameraPos = [0, 6., 10.0 ,1.0]; 
    lookAtPoint = [0.0, 0.0, 0.0, 1.0]; 
    up = [0.0, 1.0, 0.0, 1.0];

    near = 1.0;
    far = 50.;
    left = -.65;
    right = .65;
    bottom = -.65;
    topCam = .65;   

    lightPos = [-58., -60.,  100.0,  1.0];

   
    quaternion = [1.0, 0.0, 0.0, 0.0];
    gl.uniform4fv(quatPointer, quaternion);

    buildCamera();
    calculateLight();
}
    
    
 

  





    return(
        <div className="flex  bg-red-300">
            <canvas ref={canvas} id="gl-canvas" width="512" height="512" className="bg-amber-500"/>
            <h2 className="text-2xl">Hold left click to rotate me! Hold you scroll wheel and move your mouse to zoom!</h2>
        </div>
    )

}