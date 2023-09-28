import React, { useEffect, useState } from "react";
import "./Store.css";
import Product from "../Product/Product";

const Store = () => {
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState("name"); 
  
    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
        });
    }, []);
  
    const handleSearchInputChange = (event) => {
      const inputValue = event.target.value;
      setSearchInput(inputValue);

      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
  
      setFilteredProducts(filtered);
    };
  
    const handleSortChange = (event) => {
      const selectedOption = event.target.value;
      setSortOption(selectedOption);
  
     
      const sorted = [...filteredProducts];
      if (selectedOption === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (selectedOption === "price") {
        sorted.sort((a, b) => a.price - b.price);
      }
  
      setFilteredProducts(sorted);
    };
  return (
    <div className="">
      <div className="flex gap-56 ml-[77px] mt-11 text-xl">
        <p className="font-bold">Products</p>
        <p>Photos</p>
      </div>
      <div className="divider ml-7 mr-7"></div>
      <div className="store-container">
        <div>
          <div>
            <div class="max-w-md mx-auto  p-6 rounded-lg ml-[30px]">
              <div class="relative ">
                <input
                  type="text"
                  class="w-full bg-[#F5F5F5] py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:border-blue-500 ml-[10px]"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-5.2-5.2"
                    />
                    <circle cx="10" cy="10" r="7" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-[#0DA8CA] font-bold text-left ml-[60px]">Clear all</p>
          </div>

          <ul className="menu  w-56 ml-11 mt-7">
            <li>
              <details open>
                <summary className="font-bold text-[18px]">Categories</summary>
                <ul>
                  <li>
                    <a>Baked Goods (8)</a>
                  </li>
                  <li>
                    <a>Coffee (2)</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <ul className="menu  w-56 ml-11 mt-7">
            <li>
              <details open>
                <summary className="font-bold text-[18px]">Dietary</summary>
                <ul>
                  <li>
                    <a>Eco Friendly (2)</a>
                  </li>
                  <li>
                    <a>Gluten Free (4)</a>
                  </li>
                  <li>
                    <a>Nut Free (7)</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div>
        <div className="flex  lg:gap-[800px]  ml-12" >
        <p className="ml-5">Show all products {filteredProducts.length}</p>
          <div>
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="ml-3"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        
          <div className="products-container">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Store;
