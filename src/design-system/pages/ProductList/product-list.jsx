import { Table, Typography, Row, Col } from "antd";
import products from '../../../../DB/inmuebles_ejemplo.json';
import Lista from "../../templates/ProductList/lista/lista";
import './ProductList.css';

const { Title, Paragraph, Text } = Typography;

const modulesData = [
  // ... tu data como está ...
];

const columns = [
  // ... tus columnas como están ...
];

export default function ModulesComparison() {
 return (
  <div className="productlist-container">

    {/* Imagen agregada */}
    <img
      src="/img/img3.jpg"
      alt="Imagen Representativa"
      style={{ width: '300px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
    />

    <Title level={2} className="productlist-title">
      Compare Nuestros Módulos Prefabricados
    </Title>

    <Table
      dataSource={modulesData}
      columns={columns}
      pagination={false}
      bordered
      size="middle"
      style={{ marginBottom: 40 }}
      scroll={{ x: 'max-content' }}
    />

    <Row justify="center">
      <Col xs={24} sm={20} md={18}>
        <Paragraph className="productlist-paragraph">
          En <Text strong>Modular Express</Text> te conectamos con los mejores proveedores de módulos prefabricados para que obtengas soluciones rápidas, eficientes y adaptadas a tus necesidades.
        </Paragraph>
        <Paragraph className="productlist-paragraph">
          Al elegir nuestros servicios de intermediación y asesoría, accedes a:
        </Paragraph>
        <ul className="productlist-ul">
          <li>✅ Entregas en tiempos récord gracias a nuestra red de proveedores confiables.</li>
          <li>✅ Planos y diseños personalizados para maximizar funcionalidad y confort.</li>
          <li>✅ Asesoría legal y técnica gratuita para facilitar tu proceso.</li>
          <li>✅ Acceso a materiales y estructuras de alta calidad seleccionados por expertos.</li>
          <li>✅ Soporte postventa para asegurar tu satisfacción a largo plazo.</li>
        </ul>
      </Col>
    </Row>

    <Lista products={products} />

  </div>
 );
}


