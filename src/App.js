import logo from './logo.svg';
import axios from "axios";
import {useState,useEffect}  from "react"
 import './App.css';
 import ProductItem from './components/product/ProductItem';

function App() {
  const [products,setProducts]=useState([])

useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(({data})=>{
console.log(data)
setProducts(data)
})
},[])

  return (
    <div className="App">
      <>
      {products.map((item)=>{
        return <ProductItem/>
      })}
      </>
    </div>
  );
}

export default App;
