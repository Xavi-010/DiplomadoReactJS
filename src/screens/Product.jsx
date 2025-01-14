

import InventarioProducto from "../Components/Product/InventarioProducto";

const PRODUCTOS = [
  { categoria: "Frutas", precio: "$1", stocked: true, nombre: "Manzana" },
  { categoria: "Frutas", precio: "$1", stocked: true, nombre: "Frutilla" },
  { categoria: "Frutas", precio: "$2", stocked: false, nombre: "Banana" },
  { categoria: "Vegetales", precio: "$2", stocked: true, nombre: "Cebolla" },
  { categoria: "Vegetales", precio: "$4", stocked: false, nombre: "Lechuga" },
  { categoria: "Vegetales", precio: "$1", stocked: true, nombre: "Tomate" },
];

const Product = () => {
  return (
    <div>
      <h1>Productos</h1>
      <InventarioProducto productos={PRODUCTOS} />
    </div>
  );
};

export default Product;
