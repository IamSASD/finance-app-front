import { Footer, NavBar, Table } from '../components';
import { FormPopUp } from '../components/FormPopUp';
import '../css/product-activity.css';


export const Activity = () => {
  return (
    <>
        <NavBar />
        <main className="content">
          <h2 className="content-title">Mis Actividades</h2>
          <div className="container">
            <Table />
            <FormPopUp 
              title='Agregar Actividad'
              fields={[ 'Concepto', 'Cantidad', 'Producto', 'Ingreso/Egreso' ]}
              fieldType={[ '', '', 'select', '']}
              inputType={[ 'text', 'number', '', 'number' ]}
              placeholder={[ 'Pago de factura agua', '50000', '', '50000' ]}
            />
          </div>
        </main>
        <Footer/>
    </>
  )
}
