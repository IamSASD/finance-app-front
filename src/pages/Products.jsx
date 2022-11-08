import { Footer, NavBar, ProductCard } from '../components';
import { FormPopUp } from '../components/FormPopUp';
import '../css/product-activity.css';

export const Products = () => {
  return (
    <>
        <NavBar />
        <main className="content">
          <div className="container">
            <h2 className="h2-title">Mis Productos</h2>
            <ProductCard type="Tarjeta de Credito" name="Visa Bancolombia" />
            <FormPopUp 
              title='Agregar Producto' 
              fields={[ 'Tipo', 'Nombre' ]}
              fieldType={[ 'select', 'input' ]}
              inputType={[ '', 'text' ]}
              placeholder={[ '', 'Andres' ]}
            />
          </div>
        </main>
        <Footer />
    </>
  )
}
