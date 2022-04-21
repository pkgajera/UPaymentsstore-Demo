import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductTile from "./tile";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [Selected, setSelected] = useState("All");

  useEffect(() => {
    FilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchText]);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    const products = await getProducts();
    const categories = await getCategories();

    setProducts(products);
    setNewProducts(products);
    setCategories(categories);
  };

  const FilterData = () => {
    let filterList: any = products;
    if (SearchText !== null) {
      let search = SearchText.toLowerCase();
      filterList = products.filter((data: any) => {
        return data.name.toString().toLowerCase().includes(search);
      });
    }
    setNewProducts(filterList);
  };

  const getProducts = () => {
    return fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const getCategories = () => {
    return fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const changeHandler = (value: any) => {
    setSearchText("");
    setSelected(value);
    let newList = products;
    if (value !== "All") {
      newList = products.filter((x: any) => x.category === value);
    }
    setNewProducts(newList);
  };

  const changeHandlerInput = (event: any) => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <div>
      <div></div>
      <div className="grid grid-row-auto">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-5 pt-10">
            <div
              className="fixed bottom-20 p-5 text-center rounded-full right-10 bg-black text-white text-4xl cursor-pointer w-35"
              onClick={() => navigate(`/add-product`)}
              style={{ width: "80px" }}
            >
              +
            </div>
          </div>

          <div className="my-8 rounded-lg pt-12 p-12">
            <div className="grid grid-cols-2 items-center">
              <div className="">
                <input
                  className="py-3 px-6 rounded-xl"
                  type="text"
                  name="search"
                  placeholder="Search Item"
                  value={SearchText}
                  onChange={changeHandlerInput}
                />
              </div>

              <div className="flex justify-end items-center">
                <select
                  className="block
                  w-80
                  px-3
                  py-3
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  rounded-xl
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  value={Selected}
                  onChange={(event: any) => changeHandler(event?.target.value)}
                >
                  <option className="text-left py-2" value="All">
                    All
                  </option>
                  {categories.map((category: any) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {newProducts.length !== 0 ? (
            <div className="grid grid-cols-3 -mt-20">
              {newProducts.map((product: any) => {
                return (
                  <Fragment key={product.id}>
                    <ProductTile product={product} />
                  </Fragment>
                );
              })}
            </div>
          ) : (
            <div className="my-40 text-center text">
              No Data Found Matching This Category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
