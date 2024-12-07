import React from "react";
import "./ListProducts.css";
import data_product from "../assets/data";
const ListProducts = (props) => {

  const product = data_product.find((item) => item.id === props.id);
  const totalPrice = product.newPrice * (props.quantity || 1);
  return (
    <div className="item">
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{props.id}</p>
      <p>{product.Name}</p>
      <p>{product.newPrice}</p>
      <p>{props.quantity}x</p>
      <p>{totalPrice}</p>
    </div>
  );
};

export default ListProducts;

// detail view of each product