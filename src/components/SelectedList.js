import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../Action/action";

function SelectedList() {
  const { listId } = useParams();
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${listId}`)
      .then((res) => {
        console.log(res.data);
        dispatch(selectedProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      dispatch(removeSelectedProducts());
    };
  }, []);
  return (
    <div className="t mt-4 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 p-5 border ">
            <img
              className="card-img-top"
              src={product.image}
              alt=""
              style={{ width: "200px", height: "200px", margin: "auto" }}
            />
          </div>
          <div className="col-sm-5 border">
            <h5>{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default SelectedList;
