const FilaProducto = ({producto})=>{
  const nombre = producto.stocked ? (producto.nombre):(<span style={{color:'red'}}>{producto.nombre}</span>);
  return (
    <tr>
      <td>{nombre}</td>
      <td>{producto.precio}</td>
    </tr>
  );
};

export default FilaProducto;
  