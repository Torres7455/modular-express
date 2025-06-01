import DescripcionProducto from "../../templates/Producto/descripcion-producto/descripcionProducto";
import ViewImage from "../../templates/Producto/viewimage/viewImage";
import products from "../../../../DB/inmuebles_ejemplo.json";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      setProduct(products[id]);
    } else {
      setProduct(products[1]);
    }
  }, []);

  return (
    <>
    <img src="public\Logo.jpeg" alt="" />
      <section>
        <ViewImage data={product} />
      </section>
      <section>
        <DescripcionProducto data={product} />
      </section>
      <img src="public\Logo.jpeg" alt="" />
    </>
  );
}
