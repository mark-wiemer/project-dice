import NavBar from "../components/NavBar";
import HeaderRow from "../components/HeaderRow";
import Card from "../components/Card";
import chess from "../assets/chess.png";
import running from "../assets/running.png";
import coding from "../assets/coding.png";
import piano from "../assets/piano.png";
import ducks from "../assets/ducks.png";
import napping from "../assets/napping.png";
import braille from "../assets/braille.png";
import movies from "../assets/movies.png";
export default function Homepage() {
    return (
        <>
            <header>
                <HeaderRow header={<>Welcome to <span className="highlight">mitch</span>wiemer.com</>} />
                <NavBar />
            </header>

            <main className="page-content">

                <h2>Hey, </h2>

                <section>
                    <p>Thanks for stopping in</p>
                    <p>The purpose of this website is nothing more than a sandbox to practice web development.
                        I probably know you and told you to check it out.</p>
                    <p>I am working on a cleaner navigation system. Thank you for your patience while I continue this endeavor.</p>
                    <p>See the devlog for the latest updates. Also it is the only content on the website right now.</p>
                </section>

                <br />

                <h2>Interests</h2>
                <p>Here are a list of interests of mine in no particular order, for CSS/React/flex/hover/visual design/js clicking practice. Soon you'll be able to click and have it flip
                    for more info. Still working on making cards look more professional.
                </p>

                <div className="card-container">
                    <Card title="Chess" image={chess} description="Chess exercises my brain" />
                    <Card title="Running" image={running} description="I like running because it moves my legs and distracts from stagnation" />
                    <Card title="Coding" image={coding} description="Coding is cool because I can make my cool thoughts be real thoughts" />
                    <Card title="Piano" image={piano} description="Piano helps finger dexterity and also sounds nice" />
                    <Card title="Confusing" image={ducks} description="Self-explanatory" />
                    <Card title="Napping" image={napping} description="Nothing beats a rainstorm nap" />
                    <Card title="Braille" image={braille} description="You never know when you'll need it" />
                    <Card title="Movies" image={movies} description="Love a good flick" />
                </div>
            </main>


        </>
    )
}