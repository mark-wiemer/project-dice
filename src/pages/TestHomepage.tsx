
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function TestHomepage() {
  return (
    <div className="page center">

      <img src={logo} alt="Alt text" width="200" height="200" className="center logo"></img>
      <h1>Project Dice</h1>

      <span><p>This page is still WIP. Please go to devlog to see the latest content.</p></span>
      <span>
        <Link to="/devlog">
          <button className="homepageButton">View Devlog</button>
        </Link>
        <Link to="/testhomepage">
          <button className="homepageButton wip">Test: Updated HomePage</button>
        </Link>
      </span>

      <br />
      <span>
        <button className="homepageButton wip">WIP 2</button>
        <button className="homepageButton wip">WIP 3</button>

      </span>



      {/* <div className="dropdown">
        <button>This is a test button dropdown</button>
        <div className="content">
          <a href="">Apple</a>
          <a href="">Orange</a>
          <a href="">Banana</a>
        </div>
      </div> */}

      {/* <footer>
        <hr />
        <a
          href="https://github.com/mowiemer/project-dice"
          target="_blank"
          rel="noreferrer"
        >
          View website source
        </a>
      </footer> */}
    </div>
  )
}