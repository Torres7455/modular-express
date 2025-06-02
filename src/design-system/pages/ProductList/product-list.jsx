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
   

    <Title level={2} className="productlist-title">
     LISTA DE PRODUCTOS
    </Title>



    <Row justify="center">
      <Col xs={24} sm={20} md={18}>
        <Paragraph className="productlist-paragraph">
          En <Text strong>Modular Express</Text> te conectamos con los mejores proveedores de módulos prefabricados para que obtengas soluciones rápidas, eficientes y adaptadas a tus necesidades.
        </Paragraph>
        <ul className="productlist-ul">
          
        </ul>
      </Col>
    </Row>

    <Lista products={products} />

  </div>
 );
}


