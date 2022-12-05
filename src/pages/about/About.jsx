import './styles.css';
import image from './WhatsApp Image 2022-12-04 at 21.00.11.jpeg';

const About = () => (
  <div className="conteiner2">
    <div className="conteiner2__title">
      <h1>Juan Manuel Lorza Mendez</h1>
    </div>
    <div className="conteiner2__img">
      <img src={image} alt="" />
    </div>
    <div className="conteiner2__description">
      <p>Soy tecnólogo en electrónica y técnico en mantenimiento aeronáutico,
        apasionado por la naturaleza y los paisajes. Me gusta mucho salir a trotar
        e iré a caminatas de cerros. También me gusta escuchar música
        (rock, indie rock, pop y otros). Amo compartir tiempo con mis seres queridos,
        ir de viaje, ayudar a las personas que lo necesitan. También amo jugar videojuegos.
        Y ahora, en esta nueva etapa de mi vida, estoy viendo un mundo nuevo y magnífico,
        con todo relacionado a la tecnología y a lo cual me lleva a  comprender un poco más
        a profundidad  el funcionamiento de lo que usamos cotidianamente y muchas de las
        cosas que me gustan y eso me llena de muchas más ganas de seguir en este camino.
      </p>
    </div>
    <div className="conteiner2__lista">
      <h2>cosas que he aprendido</h2>
      <ul>
        <li>He conocido y aprendido mucho más a usar los lenguajes de programación  que vemos
          en el curso (JavaScript, HTML, CSS) y todas las propiedades, funcionalidades y concepto
          que cada una nos ofrece para poder cada día ir teniendo un mejor desarrollo de
          habilidades.
        </li>
        <li>También he conocido más framework con los cuales trabajamos, ampliando así cada
          vez más nuestro
          conocimiento en metodologías más practicas.
        </li>
        <li>He aprendió también a usar muchas herramientas que no vas dirigidas directamente
          a los lenguajes de programación, pero que nos ayuda muchos a que estos sean más
          fáciles de usar y organizar nuestras actividades.
        </li>
      </ul>
    </div>
    <div className="conteiner2__email">
      <h1>Lorza112@hotmial.com</h1>
    </div>
    <div className="conteiner2__linkGithub">
      <a href="https://github.com/lorza12">GituHub</a>
    </div>

  </div>
);
export default About;
