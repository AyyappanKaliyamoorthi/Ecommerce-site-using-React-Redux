import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listProductsFn } from "../Action/action";

import {useSelector,useDispatch} from 'react-redux'

function List() {
  //const [lists, setLists] = useState([]);
  const products = useSelector((state)=> state.listProducts.products)

  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        dispatch(listProductsFn(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const ListBox = products.map((list) => (
    // <li key={list.id}><img src={list.image}/></li>

    <div className="col-sm-4 mb-3 d-flex justify-content-between align-center">
      <div className="card">
        <img
          className="card-img-top mt-3 justify-content-center"
          src={list.image}
          alt={list.title}
          style={{ width: "200px",height:"200px",margin:"auto"}}
        />
        <div className="card-body">
          <h5 className="card-title">{list.title}</h5>
          <p className="card-text textEllips">
          {list.description}
          </p>
          <Link to={`selectlist/${list.id}`} className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="wrp">
      <div className="container">
        <div className="row">
        {ListBox}
      </div>
    </div>
    </div>
  );
}

export default List;
