import { Table, Typography, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const modulesData = [
  {
    key: '1',
    title: 'Casa Moderna',
    category: 'Casa',
    rooms: 3,
    bathrooms: 2,
    area: '120 m²',
    price: 150000,
  },
  {
    key: '2',
    title: 'Casa Compacta',
    category: 'Casa',
    rooms: 2,
    bathrooms: 1,
    area: '85 m²',
    price: 100000,
  },
  {
    key: '3',
    title: 'Edificio Comercial',
    category: 'Edificio',
    rooms: '-',
    bathrooms: '-',
    area: '500 m²',
    price: 500000,
  },
  {
    key: '4',
    title: 'Oficina Premium',
    category: 'Oficina',
    rooms: '-',
    bathrooms: 1,
    area: '60 m²',
    price: 90000,
  },
];

const columns = [
  {
    title: 'Módulo',
    dataIndex: 'title',
    key: 'title',
    render: text => <Text strong>{text}</Text>,
  },
  {
    title: 'Categoría',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Habitaciones',
    dataIndex: 'rooms',
    key: 'rooms',
    align: 'center',
  },
  {
    title: 'Baños',
    dataIndex: 'bathrooms',
    key: 'bathrooms',
    align: 'center',
  },
  {
    title: 'Área',
    dataIndex: 'area',
    key: 'area',
    align: 'center',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    render: (price) => `$${price.toLocaleString()}`,
  },
];

export default function ModulesComparison() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
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
          <Paragraph style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
            En <Text strong>Modular Express</Text> te conectamos con los mejores proveedores de módulos prefabricados para que obtengas soluciones rápidas, eficientes y adaptadas a tus necesidades.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center' }}>
            Al elegir nuestros servicios de intermediación y asesoría, accedes a:
          </Paragraph>
          <ul style={{ maxWidth: 600, margin: '16px auto', fontSize: 16, lineHeight: 1.6, textAlign: 'left' }}>
            <li>✅ Entregas en tiempos récord gracias a nuestra red de proveedores confiables.</li>
            <li>✅ Planos y diseños personalizados para maximizar funcionalidad y confort.</li>
            <li>✅ Asesoría legal y técnica gratuita para facilitar tu proceso.</li>
            <li>✅ Acceso a materiales y estructuras de alta calidad seleccionados por expertos.</li>
            <li>✅ Soporte postventa para asegurar tu satisfacción a largo plazo.</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

