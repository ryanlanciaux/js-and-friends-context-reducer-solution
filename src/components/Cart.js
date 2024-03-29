import React, { useContext } from "react";
import { GlobalContext } from "./GlobalStateProvider";

function getItemTotals(items) {
  return items.reduce((acc, next) => {
    return acc + next.item.price * next.quantity;
  }, 0);
}

function Cart({ items, onRemove }) {
  return items && items.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th colSpan={2} />
        </tr>
      </thead>
      <tbody>
        {items.map(({ item, quantity }, index) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * quantity}</td>
            <td colSpan={2}>
              <button onClick={() => onRemove(index)}>remove</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td colSpan={3} style={{ textAlign: "right" }}>
            <strong>{getItemTotals(items)}</strong>
          </td>
          <td colSpan={2} />
        </tr>
      </tbody>
    </table>
  ) : (
    <strong>No items in cart</strong>
  );
}

function CartContainer(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const removeItem = itemIndex =>
    dispatch({ type: "REMOVE_ITEM", index: itemIndex });

  return (
    <Cart
      {...props}
      items={state && state.items ? state.items : props.items}
      onRemove={removeItem}
    />
  );
}

export default CartContainer;
