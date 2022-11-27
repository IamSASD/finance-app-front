import '../css/table.css'

export const Table = ({ data }) => {

    return (
        <div className='container table-container'>
            <table>
            <thead>
                <tr>
                    <th>Concepto</th>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Ingreso/Egreso</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( ({ _id, 
                                cantidad, 
                                concepto, 
                                ingreso_egreso, 
                                producto,  }) => 
                                        <tr key={ _id } id={_id}>
                                            <td>{concepto}</td>
                                            <td>{cantidad}</td>
                                            <td>{producto}</td>
                                            <td>{ingreso_egreso}</td>
                                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
}