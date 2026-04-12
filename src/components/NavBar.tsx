
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
        
        <nav className="navbar">
            <ul >
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/devlog">Devlog</Link></li>
                <li><Link to="#" className="wip">(WIP) Running Dashboard</Link></li>
                <li><Link to="#" className="wip">(WIP) Logo Skewer</Link></li>
                <li><Link to="#" className="wip">(WIP) Browser Game</Link></li>
                <li><Link to="#" className="wip">(WIP) 3D Color Visualizer</Link></li>
                <li><Link to="#" className="wip">(WIP) Feedback</Link></li>
                <li><Link to="/mystery" className="mystery">Mystery Page?</Link></li>
            </ul>
        </nav>
        </>
    );
}
