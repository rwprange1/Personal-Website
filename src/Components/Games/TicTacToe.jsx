import React from 'react'
import { useState, useRef } from "react";
import x from '../../assets/cross.png';
import o from '../../assets/circle.png';





let data = ["","","","","","","","",""];
let xwins = 0;
let owins = 0;
let draws = 0;


const TicTacToe = () => {
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);

    let boxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];
    const [winner, setWinner] = useState('');

    let count = 0;
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (box,num) => {
        if(lock){
            return 0;
        }
        if(count % 2 === 0 && data[num] === ""){
            box.target.innerHTML = `<img src='${x}'>`;
            data[num]= "x";
            count++;
        }else{
            if(data[num] === ""){
                box.target.innerHTML = `<img src='${o}'>`;
                data[num]= "o";
                count++;
            }
        }

        if(!checkWin()){
            checkDraw();
        }

    }

    const checkWin = () =>{
        //Row checkers
        let toRet = false;
        if(data[0]===data[1] && data[2]===data[1] && data[0] !== ""){
            won(data[0]);
            toRet = true;
        }else if(data[3]===data[4] && data[4]===data[5] && data[4] !== ""){
            won(data[4]);
            toRet = true;
        }else if(data[6]===data[7] && data[8]===data[7] && data[8] !== ""){
            won(data[6]);
            toRet = true;
        }
        //Left diagonal
        else if(data[0]===data[4] && data[4]===data[8] && data[8] !== ""){
            won(data[0]);
            toRet = true;
        }
        //Right diagonal
        else if(data[2]===data[4] && data[4]===data[6] && data[6] !== ""){
            won(data[2]);
            toRet = true;
        }

        //Column checkers
        else if(data[0]===data[3] && data[3]===data[6] && data[0] !== ""){
            won(data[0]);
            toRet = true;
        }else if(data[1]===data[4] && data[4]===data[7] && data[1] !== ""){
            won(data[1]);
            toRet = true;
        }else if(data[2]===data[5] && data[5]===data[8] && data[2] !== ""){
            won(data[5]);
            toRet = true;
        }
        return toRet;
    }

    const checkDraw = () =>{
        for(let i = 0; i < data.length; i++){
            if(data[i] === ""){
                return false;
            }
        }
        setLock(true);
        won("draw");

    }


    const won = (winner) =>{
        setLock(true);
        if(winner === "x"){
            setWinner(x);
            xwins++;
        } else if (winner === 'o'){
            setWinner(o);
            owins++;
        } else{
            setWinner("Draw");
            draws++;
        }

    }


    const reset = () => {
        data  = ["","","","","","","","",""];
        titleRef.current.innerHTML = "Tic Tac Toes In <span> React</span></h1>";
        setLock(false);
        count = 0;
        boxes.map((e)=>{
            e.current.innerHTML ="";
        });
        setWinner("");


    }

    return(
        <div className='container text-center items-center content-center bg-gray-800'>
            <div className="flex items-center justify-center">

                {winner.length === 0 ?
                    <h1
                        className="text-2xl sm:text-4xl text-white"
                        ref={titleRef}
                    >
                        Tic-Tac-Toe
                    </h1> :
                    <div className="flex items-center gap-4">
                        <h1
                            className="text-2xl sm:text-4xl text-red-600"
                            ref={titleRef}
                        >
                            Winner:
                        </h1>

                        {winner.length > 0 && (
                            <img className="h-12 w-auto" src={winner} alt="Winner" />
                        )}
                    </div>
                }
            </div>

            <h1 className='text-xs text-white sm:text-2xl ' >X has won {xwins} times</h1>
            <h1 className='text-xs text-white sm:text-2xl' >O has won {owins} times</h1>
            <h1 className='text-xs text-white sm:text-2xl' >There has been {draws} draws </h1>
            {/*This is the html for the board it is a 3x3 frid of boxes*/}
            <div className="flex justify-center items-center  bg-gray-800">
                <div className="grid grid-cols-3 bg-gray-700">
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box0}
                        onClick={(box) => toggle(box, 0)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box1}
                        onClick={(box) => toggle(box, 1)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box2}
                        onClick={(box) => toggle(box, 2)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box3}
                        onClick={(box) => toggle(box, 3)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box4}
                        onClick={(box) => toggle(box, 4)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box5}
                        onClick={(box) => toggle(box, 5)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box6}
                        onClick={(box) => toggle(box, 6)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box7}
                        onClick={(box) => toggle(box, 7)}
                    ></div>
                    <div
                        className="w-24 h-24 border border-white flex items-center justify-center text-2xl text-white cursor-pointer"
                        ref={box8}
                        onClick={(box) => toggle(box, 8)}
                    ></div>
                </div>
            </div>

            {/*the reset button which resets the board*/}
            <button className="rounded-2xl bg-blue-600 w-15/100 cursor-pointer mt-1" onClick={() => {reset()}}>Reset</button>




        </div>
    )
}
export default TicTacToe
