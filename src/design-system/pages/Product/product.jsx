// importacion
import { Button, Flex } from "antd";
import { Card } from "antd";

//constantes globales

//declaracion de la funcion
export default function Product() {
  return (
    <>
      <section>
        <h1>Hola soy el Product</h1>
        <Button type="primary">Primary Button</Button>
      </section>
      <section>
        <p>lorem impus</p>
      </section>
      <section>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          
        </Card>
      </section>
    </>
  );
}
