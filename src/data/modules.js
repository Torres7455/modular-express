import casa1 from "../images/IMAGEN1.jpeg";
import casa2 from "../images/IMAGEN2.png";
import edificios1 from "../images/edificio1.jpg";
import edificios2 from "../images/images.jpg";
import oficina1 from "../images/oficina1.jpg";
import oficina2 from "../images/oficina2.jpg";

export const modules = {
  casas: [
    { title: "Casa Moderna", desc: "3 habitaciones, 2 baños", img: casa1, price: 150000 },
    { title: "Casa Compacta", desc: "2 habitaciones, 1 baño", img: casa2, price: 100000 },
  ],
  edificios: [
    { title: "Edificio Comercial", desc: "5 pisos, ascensor", img: edificios1, price: 500000 },
    { title: "Edificio Residencial", desc: "10 departamentos", img: edificios2, price: 700000 },
  ],
  oficinas: [
    { title: "Oficina Móvil", desc: "Espacio para 4 personas", img: oficina1, price: 60000 },
    { title: "Oficina Premium", desc: "Espacio equipado con A/C", img: oficina2, price: 90000 },
  ],
};
