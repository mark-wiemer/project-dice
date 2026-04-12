
import NavBar from "../components/NavBar";
import HeaderRow from "../components/HeaderRow";

export default function MysteryPage() {
    return (
        <div className="test">
            <header>
                <HeaderRow header={<>Congrats you found me</>} />
                <NavBar />

            </header>
            <main className="main">
                <p>I don't have much to give you right now, but check back later? 
                    If you know me then text me the phrase "I found it, cool" and I will consider a reward. Thanks</p>
            </main>

        </div>
    )
}