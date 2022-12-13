import './App.css'
import ProductList from "./components/productList";

function App(){
  const productItems = [
    {t: 'Стул', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '170$'},
    {t: 'Стол', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '990$'},
    {t: 'Диван', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '2000$'},
    {t: 'Шкаф', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '1990$'},
    {t: 'Зеркало', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '1200$'},
    {t: 'Кровать', d :'Lorem ipsum dolor sit amet consectetur adipisicing elit.', p : '2900$'}
  
]
    return ( 
      <>
        <ProductList items = {productItems}/>
      </>  
    )
  }
 

  export default App;
