import React, { useEffect, useState } from "react";
import Product from "../Components/Product.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import PriceFilter from "../Components/PriceFilter.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [price, setPrice] = useState(500);

  const searchHandler = () => {
    const filteredProduct = filteredProducts.filter(
      (product) =>
        String(product.title).toLowerCase().includes(search.toLowerCase()) &&
        product.price <= price
    );
    setProducts(filteredProduct);
    console.log("filteredProducts", filteredProduct);
    console.log("filteredProducts", products);
  };

  const apiCall = async () => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        console.log("type of data:", typeof data, data.products);
      })
      .catch((err) => {
        console.log("err while fetching products", err);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col ">
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchHandler={searchHandler}
        />
        <PriceFilter
          price={price}
          setPrice={setPrice}
          searchHandler={searchHandler}
        />
        <button
          className="bg-gray-800  hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear  border-2 border-green-600 font-semibold hover:text-green-700 w-40 p-1"
          onClick={apiCall}
        >
          Refresh the Feed
        </button>
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {products.map((product) => {
          console.log("product", product);
          return <Product key={product.id} post={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
