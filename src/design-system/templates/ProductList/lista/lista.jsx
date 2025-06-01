import './lista.css'
export default function Lista({ products }) {

  return (
    <div className="listWrapper">
      {products && products.length > 0 
        ? products.map((product) => {
            return (
              <a key={product.id} href={`/product?id=${product.id}`}>
                {product.tipo}
              </a>
            );
          })
        : ""}
    </div>
  );
}