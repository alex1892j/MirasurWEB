import Footer from "../components/Footer";
import NavComponent from "../components/Nav-component";

function Home(){
    return(
        <>
            <article>
                <img className="logo-oficial" src="" alt="" />
                <img className="logo-pett" src="" alt="" />
            </article>
            <article>
                <p>nombre</p>
            </article>
            <article>
                <h1>Mirasur</h1>
            </article>
            <NavComponent/>
            <Footer/>
        </>
    )
}

export default Home;