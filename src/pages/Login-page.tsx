import HeadComponent from "../components/Head-component";
import video from '../assets/video-fondo.mp4';
import Footer from "../components/Footer";

function LoginPage(){
    return (
      <>
        <section className="login-page">
          <video autoPlay loop muted playsInline className="video-contenedor">
            <source className="video-fondo" src={video} type="video/mp4" />
          </video>
          <article className="content-login">
             <HeadComponent />
            <form className="formulario" action="">
              <label className="label-user">Ingresa tu nombre aquí</label>
              <input className="input-user" type="text" placeholder="Carlos"/>
              <button className="btn-ingresar">Ingresar</button>
            </form>
            <Footer/>
          </article>
          <article className="sombreado">

          </article>
         
        </section>
      </>
    );
}

export default LoginPage;