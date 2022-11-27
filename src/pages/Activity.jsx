import { useEffect, useState } from 'react';
import { Footer, NavBar, Table } from '../components';
import  { FormPopUpActivity } from '../components/FormPopUpActivity';
import '../css/product-activity.css';
import { getActivities } from '../helpers/getActivities';


export const Activity = () => {

  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [activities, setActivities] = useState([])

  useEffect( () => {
    getActivities()
      .then( res => {
        setActivities(res);
      } )
  }, [] )

  useEffect(() => {  
    if(isUpdate){
      getActivities()
        .then( res => {
          setActivities(res);
        } )
      return setIsUpdate(false)
    }
  }, [isUpdate])

  return (
    <>
        <NavBar form={ setShowForm } component={'activity'} />
        <main className="content">
          <h2 className="h2-title">Mis Actividades</h2>
          <div className="container">
            <Table data={ activities }/>
            {
              showForm && <FormPopUpActivity 
                            form={ setShowForm }
                            onNewActivity= { setIsUpdate }
                          />
            }
          </div>
        </main>
        <Footer/>
    </>
  )
}
