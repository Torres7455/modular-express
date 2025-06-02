import "./viewimage.css"; // Asegúrate de importar el CSS

export default function ViewImage({ data }) {
  return (
    <div className="view-image-container">
      <img className="view-image" src={data.imagen_default} alt={data.tipo} />
    </div>
  );
}
