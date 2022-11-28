import { useState } from 'react';
import '../css/table.css'

export const Table = ({ data, heads, name }) => {

    let ingreso = 0;
    let egreso = 0;
    const [ingresoEgreso, setIngresoEgreso] = useState([])

    data.map( ({ cantidad, ingreso_egreso }) => {
        if(ingreso_egreso == 'Ingreso'){
            ingreso += cantidad;
        }else if(ingreso_egreso == 'Egreso'){
            egreso += cantidad;
        }
    } )

    return (
        <div className='container table-container'>
            <table>
            <thead>
                <tr>
                    {
                        heads.map( name => <th key={name}>{name}</th> )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    name  == 'activities' ? 
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
                    : name == 'totals' ?
                            <tr>
                                <td>{ ingreso }</td>
                                <td>{ egreso }</td>
                            </tr>
                    : ''
                }
            </tbody>
        </table>
        </div>
    );
}