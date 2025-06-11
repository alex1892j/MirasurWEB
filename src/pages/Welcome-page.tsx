import HeadComponent from "../components/Head-component";

function WelcomePage(){
    return(
        <>
            <HeadComponent/>
            <article className="welcome-section">
                <p className="welcome-p">Bienvenido Carlos</p>
            </article>
        </>
    )
}

export default WelcomePage;