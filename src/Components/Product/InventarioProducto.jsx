import { useState } from "react";
import Busqueda from "./Busqueda";
import TablaProducto from "./TablaProducto";

const InventarioProducto = ({ productos }) => {
  const [filtrar, setFiltrar] = useState("");
  const [enStock, setEnStock] = useState(false);

  return (
    <div>
      <Busqueda
        filtrar={filtrar}
        enStock={enStock}
        cambiarFiltrar={setFiltrar}
        cambiarEnStock={setEnStock}
      />
      <TablaProducto
        productos={productos}
        filtrar={filtrar}
        enStock={enStock}
      />
    </div>
  );
};

export default InventarioProducto;
