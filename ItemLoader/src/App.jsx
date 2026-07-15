import { useState, useEffect } from "react";

function App() {
  const[loading, setLoading] = useState(false);
  const[products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products.length === 100){
      setDisableButton(true);
    }
  }, [products])

  async function fetchProducts(){
    try{
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const result = await response.json();
      

      if(result && result.products && result.products.length){
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      }
      console.log(result);
      console.log("Products fetched:", result.products);
    }
    catch(e){
      console.log("Error fetching products:", e);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="prodss">
    {
      products && products.length ?
      products.map((item) => <div className="prod" key = {item.id}>
        <img src = {item.thumbnail} alt = {item.title} />
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Rating: {item.rating}</p>
        <p>Stock: {item.stock}</p>
        <p>Category: {item.category}</p>
      </div>)
      : null
    }
    </div>
    <div className="btnContainer">
      <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More</button>
      {
        disableButton 
        ? <p>You have reached limit 100</p>
        : null
      }
    </div>
      <h4>By: Talha</h4>
    </>
  );
}

export default App;
