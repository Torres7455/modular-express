import {
  Tabs,
  Card,
  Row,
  Col,
  Button,
  List,
  Typography,
  message,
  Input,
} from "antd";
import { useState } from "react";
import Searcher from "../../templates/home/searcher/searcher";
import Hero from "../../templates/home/hero/hero";
import "./home.css";
import casa1 from "../../../images/IMAGEN1.jpeg";
import casa2 from "../../../images/IMAGEN2.png";
import edificios1 from "../../../images/edificio1.jpg";
import edificios2 from "../../../images/images.jpg";
import oficina1 from "../../../images/oficina1.jpg";
import oficina2 from "../../../images/oficina2.jpg";


const { Meta } = Card;
const { Title, Text } = Typography;

export default function Home() {
  const [cart, setCart] = useState([]);
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState(null);

  const modules = {
    casas: [
      {
        title: "Casa Moderna",
        desc: "3 habitaciones, 2 baños",
        img: casa1,
        price: 150000,
      },
      {
        title: "Casa Compacta",
        desc: "2 habitaciones, 1 baño",
        img: casa2,
        price: 100000,
      },
    ],
    edificios: [
      {
        title: "Edificio Comercial",
        desc: "5 pisos, ascensor",
        img: edificios1,
        price: 500000,
      },
      {
        title: "Edificio Residencial",
        desc: "10 departamentos",
        img: edificios2,
        price: 700000,
      },
    ],
    oficinas: [
      {
        title: "Oficina Móvil",
        desc: "Espacio para 4 personas",
        img: oficina1,
        price: 60000,
      },
      {
        title: "Oficina Premium",
        desc: "Espacio equipado con A/C",
        img: oficina2,
        price: 90000,
      },
    ],
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    message.success(`${item.title} agregado al carrito`);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    const removed = newCart.splice(index, 1);
    setCart(newCart);
    message.warning(`${removed[0].title} eliminado del carrito`);
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message.success(`✅ Compra finalizada. Total: $${total.toLocaleString()}`);
    setCart([]);
  };

  const filterByPrice = (items) => {
    return items.filter((item) => {
      if (minPriceFilter !== null && item.price < minPriceFilter) return false;
      if (maxPriceFilter !== null && item.price > maxPriceFilter) return false;
      return true;
    });
  };

  const renderCards = (items) => {
    const filtered = filterByPrice(items);
    return filtered.length === 0 ? (
      <Text>No hay resultados para el filtro actual.</Text>
    ) : (
      <Row gutter={[16, 16]}>
        {filtered.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.img} />}
              actions={[
                <Button type="primary" onClick={() => handleAddToCart(item)}>
                  Agregar al carrito
                </Button>,
              ]}
            >
              <Meta
                title={item.title}
                description={`${item.desc} — $${item.price.toLocaleString()}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const items = [
    { key: "casas", label: "Casas", children: renderCards(modules.casas) },
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

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const onSearchClick = () => {
    const min = parseFloat(minPriceInput);
    const max = parseFloat(maxPriceInput);
    setMinPriceFilter(!isNaN(min) ? min : null);
    setMaxPriceFilter(!isNaN(max) ? max : null);
  };

  const onClearFilters = () => {
    setMinPriceInput("");
    setMaxPriceInput("");
    setMinPriceFilter(null);
    setMaxPriceFilter(null);
  };

  return (
    <div className="home-container">
      {/* Encabezado */}
      <section className="home-hero">
        <Title level={2}>MODULAR EXPRESS</Title>
        <p>Ayudamos a los propietarios a transformar viviendas evitando los problemas de la construcción tradicional.
Gracias al uso del sistema modular, hemos seleccionado las mejores soluciones para nuestros clientes, buscamos productos que dispongan de entrega rápida, que signifiquen un ahorro de costes y un tiempo de instalación mínimo para poder darle uso sin necesidad de obras imprevisibles para su instalación.</p>
        <Button type="primary" size="large">
          Conozca más
        </Button>
      </section>

      {/* Buscador */}
      <section className="home-search">
        <Title level={4}>Encuentre su Módulo</Title>
        <Row gutter={16}>
          <Col span={6}>
            <Input
              placeholder="Precio mínimo"
              value={minPriceInput}
              onChange={(e) => setMinPriceInput(e.target.value)}
              type="number"
              min={0}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Precio máximo"
              value={maxPriceInput}
              onChange={(e) => setMaxPriceInput(e.target.value)}
              type="number"
              min={0}
            />
          </Col>
          <Col span={6}>
            <Button type="primary" block onClick={onSearchClick}>
              Buscar
            </Button>
          </Col>
          <Col span={6}>
            <Button block onClick={onClearFilters}>
              Limpiar filtros
            </Button>
          </Col>
        </Row>
      </section>

      {/* Propiedades */}
      <section className="home-tabs">
        <Tabs defaultActiveKey="casas" items={items} />
      </section>

      {/* Carrito */}
      <section className="home-cart">
        <Title level={4}>🛒 Carrito de compras</Title>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <List
              bordered
              dataSource={cart}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <Button
                      danger
                      size="small"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      ❌ Eliminar
                    </Button>,
                  ]}
                >
                  <Text strong>{item.title}</Text> — {item.desc} —{' '}
                  <Text type="success">
                    ${item.price.toLocaleString()}
                  </Text>
                </List.Item>
              )}
            />
            <div className="home-cart-total">
              <Text strong>Total: ${total.toLocaleString()}</Text>
              <div>
                <Button type="primary" onClick={handleCheckout}>
                  Finalizar compra
                </Button>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Servicios */}
      <section className="home-services">
        <Title level={3}>Conozca nuestros servicios</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={6}><div>📌 Asesoría Legal</div></Col>
          <Col xs={24} sm={12} md={6}><div>🧾 Diseños y Planos</div></Col>
          <Col xs={24} sm={12} md={6}><div>🏦 Intermediación Módulos</div></Col>
          <Col xs={24} sm={12} md={6}><div>👨‍💼 Servicios de Topografía</div></Col>
        </Row>
      </section>

      {/* Secciones adicionales */}
      <section>
        <Hero />
      </section>
      <section>
        <Searcher />
      </section>
    </div>
  );
}
