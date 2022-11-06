import { NavBar } from "./NavBar";
import '../css/product-activity.css';
import { ProductCard } from "./ProductCard";
import { Footer } from "./Footer";

export const Products = () => {
  return (
    <>
        <NavBar />
        <main className="content">
          <div className="container">
            <h2 className="content-title">Mis Productos</h2>
            <ProductCard type="Tarjeta de Credito" name="Visa Bancolombia" />
          </div>
        </main>
        <Footer />
    </>
  )
}
