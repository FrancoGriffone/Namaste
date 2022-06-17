import React from "react";
import { Item } from "../Item/Item";
import "./style.css"

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <Item item={item} key={item.id}/>
      ))}
    </div>
  );
};
