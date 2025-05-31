import { Button, Card, Flex, Modal, message } from "antd";
import { useState } from "react";

// datos simulados
const productos = [
  {
    id: 1,
    tipo: "Casa",
    nombre: "Casa Modular 60m²",
    descripcion: "2 habitaciones, acabados modernos.",
    detalles: "Estructura metálica, ventanas de PVC, sistema eléctrico completo.",
    precio: "$35,000 USD",
    imagen: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 2,
    tipo: "Apartamento",
    nombre: "Apartamento Modular 80m²",
    descripcion: "Incluye cocina y baño completamente equipados.",
    detalles: "Cocina integrada, acabados en madera, espacio para lavadora.",
    precio: "$48,000 USD",
    imagen: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 3,
    tipo: "Oficina",
    nombre: "Oficina Modular Compacta",
    descripcion: "Ideal para coworking o pequeñas empresas.",
    detalles: "Incluye escritorio, conexión eléctrica y aire acondicionado.",
    precio: "$20,000 USD",
    imagen: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoActivo, setProductoActivo] = useState(null);

  const mostrarDetalles = (producto) => {
    setProductoActivo(producto);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setProductoActivo(null);
  };

  const comprarProducto = () => {
    message.success(`¡Compra exitosa de ${productoActivo?.nombre}!`);
    cerrarModal();
  };

  return (
    <>
      <section style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem" }}>Productos Modulares</h1>
        <p>Explora nuestras opciones de casas, apartamentos y oficinas prefabricadas.</p>
      </section>

      <section style={{ padding: "1rem" }}>
        <Flex wrap gap="large" justify="center">
          {productos.map((producto) => (
            <Card
              key={producto.id}
              hoverable
              title={producto.nombre}
              style={{ width: 300 }}
              cover={<img alt={producto.nombre} src={producto.imagen} />}
            >
              <p><strong>Tipo:</strong> {producto.tipo}</p>
              <p>{producto.descripcion}</p>
              <p><strong>Precio:</strong> {producto.precio}</p>
              <Button type="primary" onClick={() => mostrarDetalles(producto)}>
                Ver más
              </Button>
            </Card>
          ))}
        </Flex>
      </section>

      {/* Modal de detalles */}
      <Modal
        title={productoActivo?.nombre}
        open={isModalOpen}
        onCancel={cerrarModal}
        footer={[
          <Button key="close" onClick={cerrarModal}>
            Cerrar
          </Button>,
          <Button key="buy" type="primary" onClick={comprarProducto}>
            Comprar
          </Button>,
        ]}
      >
        {productoActivo && (
          <>
            <img
              src={productoActivo.imagen}
              alt={productoActivo.nombre}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <p><strong>Tipo:</strong> {productoActivo.tipo}</p>
            <p><strong>Precio:</strong> {productoActivo.precio}</p>
            <p><strong>Descripción:</strong> {productoActivo.descripcion}</p>
            <p><strong>Detalles:</strong> {productoActivo.detalles}</p>
          </>
        )}
      </Modal>
    </>
  );
}

