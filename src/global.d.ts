export {};


declare global {

    interface researchObject{
        date: string,
        title: string,
        desc: string,
        link: string
    };

    interface projectObject{
        title: string,
        desc: string,
        img: string,
    }

    interface quaternion{
        scalar: number,
        vec: vec3
    }

    type vec = vec2 | vec3 | vec4;
    type mat = mat2 | mat3 | mat4;

    type mat2 = [
        [number, number],
        [number, number]
    ];

    type mat3 = [
        [number, number, number],
        [number, number, number],
        [number, number, number]
    ];

    type mat4 = [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
    ];


   

    type vec2 = [number, number];
    type vec3 = [number, number, number];
    type vec4 = [number, number, number, number];

}