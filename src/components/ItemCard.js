import React from "react";
import Card from "./Card";
import Button from "./Button";
import Heading from "./Heading";
import "./ItemCard.css";

function ItemCard({
  title,
  onAddToCart,
  price,
  description,
  imageUrl,
  selected,
  ...rest
}) {
  return (
    <Card {...rest} className="ItemCard" selected={selected}>
      <div>
        <Heading>{title}</Heading>
        <div>${price}</div>
      </div>
      <img src={imageUrl} alt="" style={{ width: 200, height: 200 }} />
      {description && <span>{description}</span>}
      <Button onClick={onAddToCart}>Add to cart</Button>
    </Card>
  );
}

export default ItemCard;
