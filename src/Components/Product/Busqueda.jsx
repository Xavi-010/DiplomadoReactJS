const Busqueda = ({ filtrar, enStock, cambiarFiltrar, cambiarEnStock }) => (
    <form>
      <input
        type="text"
        placeholder="Buscar..."
        value={filtrar}
        onChange={(e) => cambiarFiltrar(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={enStock}
          onChange={(e) => cambiarEnStock(e.target.checked)}
        />
        {' '}
        Mostrar productos solo en Stock
      </p>
    </form>
  );
  
  export default Busqueda;
  