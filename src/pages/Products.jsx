import { useEffect, useState } from 'react';
import { Footer, NavBar, ProductCard } from '../components';
import  { FormPopUpProduct } from '../components/FormPopUpProduct';
import { Loader } from '../components/Loader';
import '../css/product-activity.css';
import { getProducts } from '../helpers/getProducts';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [submitMethod, setSubmitMethod] = useState('post');
  const [cardId, setCardId] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [inputValues, setInputValues] = useState(['']);



  useEffect(() => {  
    getProducts()
    .then( res => {
      setProducts(res);
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {  
    if(isUpdate){
      getProducts()
      .then( res => {
        setProducts(res);
      })
      return setIsUpdate(false)
    }
  }, [isUpdate])

  return (
    <>
        <NavBar 
          onSubmitMethod={ (e) => setSubmitMethod(e) } 
          form={ (e) => setShowForm(e) }
          component={ 'products' }
        />
        <main className="content">
          <div className="container">
            <h2 className="h2-title">Mis Productos</h2>
            {
              isLoading && <Loader />
            }

            <div className='card-container'>
              {     
                  products?.map( prod => <ProductCard 
                                            key={prod._id} { ...prod } 
                                            id={ setCardId }
                                            onSubmitMethod={ (e) => setSubmitMethod(e) }
                                            submitMethod= {submitMethod}
                                            form={ setShowForm }
                                            onProductsChange={ (e) => setIsUpdate(e) }
                                            values={ setInputValues }
                                />  )
              }
            </div>
            <div>
              {
                showForm && <FormPopUpProduct 
                            onProductsChange={ setIsUpdate } 
                            onSubmitMethod={ (e) => setSubmitMethod(e) } 
                            submitMethod={ submitMethod }
                            cardId={ cardId } 
                            form={ setShowForm }
                            values={ inputValues }
                          />
              }
            </div>
          </div>
        </main>
        <Footer />
    </>
  )
}
