import { NavBar } from "./NavBar"
import '../css/product-activity.css';
import { Footer } from "./Footer";
import { Table } from "./Table";


export const Activity = () => {
  return (
    <>
        <NavBar />
        <main className="content">
          <h2 className="content-title">Mis Actividades</h2>
          <div className="container">
            <Table />
          </div>
        </main>
        <Footer/>
    </>
  )
}
