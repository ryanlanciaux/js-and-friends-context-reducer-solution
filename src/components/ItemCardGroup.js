import React from "react";
import ItemCard from "./ItemCard";

function ItemCardGroup(props) {
  return props.data.map(item => (
    <ItemCard
      key={item.title}
      title={item.title}
      price={item.price}
      description={item.description}
      imageUrl={item.imageUrl}
      onAddToCart={() => props.onAddToCart(item)}
    />
  ));
}

export default ItemCardGroup;
