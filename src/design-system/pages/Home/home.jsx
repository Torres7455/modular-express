// importaciones
import { Tabs, Card, Row, Col } from "antd";

const { Meta } = Card;

export default function Home() {
  const onChange = (key) => {
    console.log(`Pestaña seleccionada: ${key}`);
  };

  // Datos simulados de módulos
  const modules = {
    casas: [
      { title: "Casa Moderna", desc: "3 habitaciones, 2 baños", img: "https://via.placeholder.com/300x200?text=Casa+1" },
      { title: "Casa Compacta", desc: "2 habitaciones, 1 baño", img: "https://via.placeholder.com/300x200?text=Casa+2" },
    ],
    edificios: [
      { title: "Edificio Comercial", desc: "5 pisos, ascensor", img: "https://via.placeholder.com/300x200?text=Edificio+1" },
      { title: "Edificio Residencial", desc: "10 departamentos", img: "https://via.placeholder.com/300x200?text=Edificio+2" },
    ],
    oficinas: [
      { title: "Oficina Móvil", desc: "Espacio para 4 personas", img: "https://via.placeholder.com/300x200?text=Oficina+1" },
      { title: "Oficina Premium", desc: "Espacio equipado con A/C", img: "https://via.placeholder.com/300x200?text=Oficina+2" },
    ],
  };

  // Función para renderizar tarjetas por categoría
  const renderCards = (items) => (
    <Row gutter={[16, 16]}>
      {items.map((item, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card hoverable cover={<img alt={item.title} src={item.img} />}>
            <Meta title={item.title} description={item.desc} />
          </Card>
        </Col>
      ))}
    </Row>
  );

  const items = [
    {
      key: "casas",
      label: "Casas",
      children: renderCards(modules.casas),
    },
    {
      key: "edificios",
      label: "Edificios",
      children: renderCards(modules.edificios),
    },
    {
      key: "oficinas",
      label: "Oficinas",
      children: renderCards(modules.oficinas),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="casas" items={items} onChange={onChange} />
      <div style={{ marginTop: 24, fontStyle: "italic" }}>
        Explora y encuentra tu módulo ideal.
      </div>
    </>
  );
}

