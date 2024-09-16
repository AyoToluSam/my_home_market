import React from "react";
import { EmptyContainer } from "./EmptyStyles";

const Empty = ({ msg = "There are no items to dispay" }) => {
  return (
    <EmptyContainer>
      <img src={"./empty-cart.png"} alt="empty" />
      <p>{msg}</p>
    </EmptyContainer>
  );
};

export default Empty;
