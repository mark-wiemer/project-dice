import NavBar from "../components/NavBar";
import HeaderRow from "../components/HeaderRow";

export default function Homepage() {
    return (
        <>
            <header>
                <HeaderRow header={<>Welcome to <span className="highlight">mitch</span>wiemer.com</>} />
                <NavBar />
            </header>

            <main className="page-content">

                <h2>Hey</h2>

                <section>
                    <p>Thanks for stopping in</p>
                    <p>The purpose of this website is nothing more than a sandbox to practice web development. 
                        I probably know you and told you to check it out.</p>
                    <p>I am working on a cleaner navigation system. Thank you for your patience while I continue this endeavor.</p>
                    <p>See the devlog for the latest updates. Also it is the only content on the website right now.</p>
                </section>

            </main>
        </>
    )
}