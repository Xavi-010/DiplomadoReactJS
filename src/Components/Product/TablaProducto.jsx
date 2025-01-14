import CategoriaProducto from "./CategoriaProducto";
import FilaProducto from "./FilaProducto";

const TablaProducto = ({ productos, filtrar, enStock }) => {
  const filas = [];
  let categoria = null;

  productos.forEach((producto) => {
    if (producto.nombre.toLowerCase().indexOf(filtrar.toLowerCase()) === -1 ) {
      return;
    }
    if ( enStock && !producto.stocked){
      return;
    }
    if (producto.categoria !== categoria) {
      filas.push(
        <CategoriaProducto categoria={producto.categoria} key={producto.categoria} />
      );
    }
    filas.push(<FilaProducto producto={producto} key={producto.nombre} />);
    categoria = producto.categoria;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
  );
};

export default TablaProducto;
