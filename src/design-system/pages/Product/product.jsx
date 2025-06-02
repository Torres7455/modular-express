import DescripcionProducto from "../../templates/Producto/descripcion-producto/descripcionProducto";
import ViewImage from "../../templates/Producto/viewimage/viewImage";
import products from "../../../../DB/inmuebles_ejemplo.json";
import { useEffect, useState } from "react";
import "./product.css"

export default function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      // Buscar producto con id igual al parámetro (convertir a número)
      const prod = products.find(p => p.id === Number(id));
      setProduct(prod || null);
    } else {
      setProduct(products[0]); // primer producto por defecto
    }
  }, []);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <>
      <section>
        <ViewImage data={product} />
      </section>
      <section>
        <DescripcionProducto data={product} />
      </section>
    </>
  );
}
