import { Footer, NavBar, Table } from '../components';
import  { FormPopUpActivity } from '../components/FormPopUpActivity';
import '../css/product-activity.css';


export const Activity = () => {
  return (
    <>
        <NavBar />
        <main className="content">
          <h2 className="h2-title">Mis Actividades</h2>
          <div className="container">
            <Table />
            <FormPopUpActivity />
          </div>
        </main>
        <Footer/>
    </>
  )
}
