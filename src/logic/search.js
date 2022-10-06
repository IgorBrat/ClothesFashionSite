import data from "../resources/data";
import {useState} from "react";

export let foundItems = data;

export const searchItems = () => {
  const searchInput = document.getElementById("search_title");

  foundItems = data.filter(
    (item) => item.title.toLowerCase().search(searchInput.value.toLowerCase()) !== -1
  );
  for (const item of foundItems) {
    console.log(item.title);
  };
};
