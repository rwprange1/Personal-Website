import React, {forwardRef, useEffect} from 'react';
import * as S from "./Canvas.styles"
type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> & {
    draw: (context: CanvasRenderingContext2D) => void;
}


const Canvas: React.FC<CanvasProps> = forwardRef<HTMLCanvasElement,CanvasProps>(
    ({draw, ...props }, canvasRef) => {

        useEffect(() => {
            if (!canvasRef) return;

            const  canvas = (canvasRef as React.RefObject<HTMLCanvasElement> ).current;
            if (!canvas) return;

            const context = canvas.getContext("2d");

            if (!context) return;

            draw(context);

            }, [canvasRef,draw]);

        if (!canvasRef) return null;

        return (
            <S.Canvas ref={canvasRef} {...props}/>

        );
});

export default Canvas ;