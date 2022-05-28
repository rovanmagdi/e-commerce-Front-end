import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {listProducts} from'../redux/actions/productsActions';
import spinner from "../assest/spinner.gif";
import ShowProducts from "./ShowProducts";
const Products = () => {
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);

  const Loading = () => {
    return (
      <>
        <img src={spinner} />
      </>
    );
  };

const disptach=useDispatch();
const productsList=useSelector((state)=>state.productList);
const {loading,products}=productsList;
  useEffect(() => {
 
    disptach(listProducts());

  }, []);

  return (
    <div>
      {!loading ?(
        <ShowProducts
     
          products={products}
          // setProducts={setProducts}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Products;
