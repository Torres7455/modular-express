import {
  Tabs, Card, Row, Col, Button, List, Typography, Input,
} from "antd";
import { useState } from "react";
import Hero from "../../templates/home/hero/hero";
import Searcher from "../../templates/home/searcher/searcher";
import useHomeController from "../../../controllers/useHomeController";
import "./home.css";

const { Meta } = Card;
const { Title, Text } = Typography;

export default function Home() {
  const {
    cart,
    modules,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
    filterByPrice,
    setFilters,
    clearFilters,
  } = useHomeController();

  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");

  const onSearchClick = () => {
    const min = parseFloat(minPriceInput);
    const max = parseFloat(maxPriceInput);
    setFilters(!isNaN(min) ? min : null, !isNaN(max) ? max : null);
  };

  const onClearFilters = () => {
    setMinPriceInput("");
    setMaxPriceInput("");
    clearFilters();
  };

  const renderCards = (items) => {
    const filtered = filterByPrice(items);
    if (filtered.length === 0) return <Text>No hay resultados para el filtro actual.</Text>;

    return (
      <Row gutter={[16, 16]}>
        {filtered.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.img} style={{ objectFit: "cover", height: 200, width: "100%" }} />}
              actions={[<Button type="primary" onClick={() => handleAddToCart(item)}>Agregar al carrito</Button>]}
            >
              <Meta title={item.title} description={`${item.desc} — $${item.price.toLocaleString()}`} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const items = [
    { key: "casas", label: "Casas", children: renderCards(modules.casas) },
    { key: "edificios", label: "Edificios", children: renderCards(modules.edificios) },
    { key: "oficinas", label: "Oficinas", children: renderCards(modules.oficinas) },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="home-container">
      {/* Encabezado */}
      <section className="home-hero">
        <Title level={2}>MODULAR EXPRESS</Title>
        <p>
          Ayudamos a los propietarios a transformar viviendas evitando los problemas de la construcción tradicional.
          Gracias al uso del sistema modular, hemos seleccionado las mejores soluciones para nuestros clientes...
        </p>
        <Button type="primary" size="large">Conozca más</Button>
      </section>

      {/* Buscador */}
      <section className="home-search">
        <Title level={4}>Encuentre su Módulo</Title>
        <Row gutter={16}>
          <Col span={6}>
            <Input
              placeholder="Precio mínimo"
              value={minPriceInput}
              onChange={e => setMinPriceInput(e.target.value)}
              type="number"
              min={0}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Precio máximo"
              value={maxPriceInput}
              onChange={e => setMaxPriceInput(e.target.value)}
              type="number"
              min={0}
            />
          </Col>
          <Col span={6}>
            <Button type="primary" block onClick={onSearchClick}>Buscar</Button>
          </Col>
          <Col span={6}>
            <Button block onClick={onClearFilters}>Limpiar filtros</Button>
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
                <List.Item actions={[<Button danger size="small" onClick={() => handleRemoveFromCart(index)}>❌ Eliminar</Button>]}>
                  <Text strong>{item.title}</Text> — {item.desc} — <Text type="success">${item.price.toLocaleString()}</Text>
                </List.Item>
              )}
            />
            <div className="home-cart-total">
              <Text strong>Total: ${total.toLocaleString()}</Text>
              <Button type="primary" onClick={handleCheckout}>Finalizar compra</Button>
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
      <section><Hero /></section>
      <section><Searcher /></section>
    </div>
  );
}
