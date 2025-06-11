import HeadComponent from "../components/Head-component";
import NavComponent from "../components/Nav-component";

function QuienesSomosPage(){
    return (
        <>
            <HeadComponent/>
            <NavComponent/>
            <p>nombre debusuario</p>
            <section className="section-quienes.somos">
                <article className="article-quienes-somos">
                    <h3 className="h3-quienes-somos">Visión</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure deleniti magnam commodi autem officia corrupti! Dolorem aut facilis ab amet quae iusto, consequuntur cum quas optio alias totam nisi ipsam suscipit dolorum aperiam quo! Deleniti accusamus beatae eos aut.</p>
                </article>
                <article className="article-quienes-somos">
                    <h3 className="h3-quienes-somos">Misión</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita nesciunt nihil optio nobis fugit temporibus laudantium voluptates? Itaque quas rerum molestias nobis quae? Iure numquam, impedit vel natus doloremque repellat exercitationem maiores voluptatibus provident obcaecati! Odit minus mollitia maiores?</p>
                </article>
            </section>

            <section className="section-quienes.somos">
                <article>
                    <img className="certificado" src="" alt="" />
                </article>
                <article>
                    <video className="video" src=""></video>
                </article>
            </section>

            <section className="equipo-Mirasur">
                <h2>Equipo MIRASUR</h2>
                <article>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>nombre</figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>nombre</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>nombre</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>nombre</figcaption>
                    </figure>
                </article>
            </section>
            <section>
                <nav>
                    <ul>
                        <li>km88</li>
                        <li>km101</li>
                        <li>boulevard</li>
                        <li>marketing</li>
                        <li>logistica</li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
export default QuienesSomosPage;