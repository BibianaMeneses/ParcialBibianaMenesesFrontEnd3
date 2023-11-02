//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import "./index.css";

function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <p>
        Escoge tu doctor segun tu preferencia:{" "}
        <b>
          {item?.name} {item?.lastname}
        </b>{" "}
      </p>
      <img
        src={'https://static.vecteezy.com/system/resources/previews/024/585/363/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png'}
        alt={item?.name}
        className="image"
      />
    </div>
  );
}

export default Card;
