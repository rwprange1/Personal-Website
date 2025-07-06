
import {Link, Outlet} from 'react-router-dom';

function Games (): React.ReactElement {
    const games = [
        { id: 'tic-tac-toe', name: 'Tic-Tac-Toe' },
        { id: 'snake', name: 'Snake Game' },
    ];






    return (
        <div className="games">
            <ul>
                {games.map((game) => (
                    <li key={game.id} className="cursor-pointer">
                        <Link to={game.id}>{game.name}</Link>
                    </li>
                ))}
            </ul>

            <Outlet/>
        </div>

    )
}
export default Games;
