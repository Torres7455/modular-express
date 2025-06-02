import DescripcionProducto from "../../templates/Producto/descripcion-producto/descripcionProducto";
import ViewImage from "../../templates/Producto/viewimage/viewImage";
import products from "../../../../DB/inmuebles_ejemplo.json";
import { useEffect, useState } from "react";
import "./product.css";

export default function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      const prod = products.find(p => p.id === Number(id));
      setProduct(prod || null);
    } else {
      setProduct(products[0]);
    }
  }, []);

  const handleComprar = () => {
    alert(`¡Has comprado el inmueble "${product.tipo}" en ${product.direccion}!`);
  };

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <>
      <section>
        <ViewImage data={product} />
      </section>
      <section className="descripcion-container">
        <DescripcionProducto data={product} />
        <div className="boton-comprar-container">
          <button className="boton-comprar" onClick={handleComprar}>
            Comprar
          </button>
        </div>
      </section>
    </>
  );
}

