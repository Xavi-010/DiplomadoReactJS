const BodyLading =()=>{
    return(
        <div className="bodylading">
            <h3 className="subtitle">Bienvenido</h3>
            <hr />
            <p>
                Este módulo se centra en el uso <strong>React</strong>, incluyendo la creacion de <strong>componentes</strong>
                , el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
            </p>
            <h3 className="subtitle">Temas Cubiertos</h3>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>Componentes funcionales y de clase</td>
                        <td>Uso de <strong>React hooks</strong> como useState y useEffect</td>
                        <td>Creación de <strong>custom hooks</strong> useForm</td>
                        <td>Gestión de variables de estado con <strong>useState</strong></td>
                        <td>Gestión de estado global con <strong>Redux</strong></td>
                        <td>Integración de <strong>Redux</strong> con <strong>React</strong></td>
                        <td>Manejo de <strong>Formularios</strong>en <strong>React</strong></td>
                        <td>Publicando nuestra <strong>Página</strong>con <strong>GitHub Pages</strong></td>
                    </tr>
                </tbody>
            </table>
            <h3 className="subtitle">Recursos Adicionales</h3>
            <hr />
            <p className="text">Para profundiza en los temas cubiertos, consulta los siguientes recursos:</p>
        </div>
    )
}

export default BodyLading;