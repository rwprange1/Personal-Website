
import { useParams } from 'react-router-dom';
//import FlappyBird from '../games/FlappyBird';
//import SpaceInvaders from '../games/SpaceInvaders';
import TicTacToe from './TicTacToe';

function GameDetail() {
    const { gameId } = useParams();
    console.log(gameId + " in GameDetail");
    return (
        <div>
            <h2>Playing Game: {gameId}</h2>

            {gameId === 'tic-tac-toe' && <TicTacToe />}
           
            {/* add more games here as needed */}
        </div>
    );
}

export default GameDetail;

//  {gameId === 'flappybird' && <FlappyBird />}
//             {gameId === 'spaceinvaders' && <SpaceInvaders />}