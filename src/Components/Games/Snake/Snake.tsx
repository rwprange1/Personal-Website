
import Canvas from './Canvas.tsx';
import {GameWrapper} from "./Game.styles.ts";
import {useRef} from "react";

function Snake() {

    const canvasRef = useRef<HTMLCanvasElement>(null);


    // const draw = (ctx: CanvasRenderingContext2D ) => {
    //     <Canvas ref={canvasRef} draw={draw}/>
    // }

    return(
        <GameWrapper>

        

        </GameWrapper>





    )
}

export default Snake;