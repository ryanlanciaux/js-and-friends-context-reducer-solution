import React, { useContext, useState } from "react";

import ItemCardGroup from "./components/ItemCardGroup";
import Header from "./components/Header";
import "./styles.css";

import Search from "./components/Search";
import useCoffeeData from "./hooks/useCoffeeData";
import { GlobalContext } from "./components/GlobalStateProvider";
import Cart from "./components/Cart";

function App() {
  const { data, isLoading, error, setFilter } = useCoffeeData();
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const { dispatch } = useContext(GlobalContext);

  const onAddToCart = item => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <>
      <Header
        onToggleCart={() => {
          setShouldShowCart(showCart => !showCart);
        }}
        showingCart={shouldShowCart}
      />
      {shouldShowCart ? (
        <Cart />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {error ? (
            <span>Oh no. An error occurred. {error}</span>
          ) : isLoading ? (
            <span>Loading</span>
          ) : (
            <>
              <Search onEnter={filter => setFilter(filter)} />
              <ItemCardGroup data={data} onAddToCart={onAddToCart} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
