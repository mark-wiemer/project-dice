import MarkdownPage from "../components/MarkdownPage";
import Collapsible from "../components/Collapsible";
import HeaderRow from "../components/HeaderRow";
import NavBar from "../components/NavBar";

const devlogs = import.meta.glob("../content/devlogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});


export default function Devlog() {
    return (
        <>
            {/* <div className="page"> */}

            <header>
                <HeaderRow header={<><span className="highlight">Dev</span>log</>} />
                <NavBar />
            </header>


            <main className="page-content">
                <p>View the latest updates to the website below.</p>

                {Object.entries(devlogs).reverse().map(([path, content]) => {
                    const filename = path.split("/").pop()!;
                    const name = filename.replace(".md", "").replaceAll("-", ".");
                    return (
                        <div className="wrapper">
                            <Collapsible label={name}>
                                <MarkdownPage content={content as string} />
                            </Collapsible>
                        </div>
                    );
                })}
            </main>
            {/* </div> */}
        </>
    );
}
