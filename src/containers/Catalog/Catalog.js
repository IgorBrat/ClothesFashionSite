import React, { useState, useEffect } from 'react';
import { Select, InputNumber, Input, Button } from 'antd';
import {FilterWrapper, Essentials} from "./Catalog.styled.js";
import CardItem from "../../components/CardItem/CardItem.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import PageContainer from "../PageContainer.styled.js";
import CardWrapper from "./CardWrapper/CardWrapper";
import data from "../../resources/data";

const { Option } = Select;
const { Search } = Input;

const Catalog = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filterBrand, setFilterBrand] = useState(undefined);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [items, setItems] = useState(data);

  const applyFilters = () => {
    console.log("clicked");
    let filtered = [...data];
    if (minPrice >= maxPrice) {
      alert("Minimum price can`t be bigger or equal to maximum price");
    }
    else if (minPrice < 0 || maxPrice < 0) {
      alert("Prices can`t be negative, though it would be a great idea☺");
    }
    else {
      if (filterBrand !== undefined){
        console.log("filterBrand");
        filtered = filtered.filter((item) => item.brand.toLowerCase() === filterBrand.toLowerCase());
      };
      if (minPrice !== undefined){
        console.log("minPrice");
        filtered = filtered.filter((item) => item.price >= minPrice);
      };
      if (maxPrice !== undefined){
        console.log(maxPrice);
        filtered = filtered.filter((item) => item.price <= maxPrice);
      };
      setItems(filtered);
    };
  };

  useEffect(() => {
    applyFilters();
    if (searchTitle !== undefined){
      setItems((items) => items.filter(
        (item) => item.title.toLowerCase().search(searchTitle.toLowerCase()) !== -1
      ));
    };
  }, [searchTitle]);

  return (
    <PageContainer>
      <Essentials>
        <FilterWrapper>
          <span>Choose filters:</span>
          <Select
            id="filter_brand"
            size="large"
            showSearch
            allowClear
            placeholder="Select a brand"
            optionFilterProp="children"
            onChange={(value, event) => {setFilterBrand(value);}}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          >
            <Option value="Reebok">Reebok</Option>
            <Option value="Puma">Puma</Option>
            <Option value="Nike">Nike</Option>
            <Option value="Tommy Hilfiger">Tommy Hilfiger</Option>
            <Option value="Adidas">Adidas</Option>
            <Option value="FILA">FILA</Option>
            <Option value="Vans">Vans</Option>
          </Select>
          <InputNumber id="filter_min" size="large" addonAfter="$" placeholder="Minimum price"
            onChange={(value, event) => {setMinPrice(value);}}
          />
          <InputNumber id="filter_max" size="large" addonAfter="$" placeholder="Maximum price"
            onChange={(value, event) => {setMaxPrice(value);}}
          />
          <PrimaryButton type="primary" onClick={applyFilters}>
            Apply filters
          </PrimaryButton>
          <Button onClick={(event) => {
            setItems(data);
            Input.value = undefined;
          }}>
            Dismantle filters
          </Button>
        </FilterWrapper>
        <Search
          id="search_title"
          placeholder="Input title"
          allowClear
          size="large"
          onSearch={(value, event) => {setSearchTitle(value);}}
          style={{
            width: 200,
          }}
        />
      </Essentials>
      <CardWrapper>
        {
          items.map(({ id, title, image, brand, price }, idx) => (
            <CardItem
              title={title}
              image={image}
              brand={brand}
              price={price}
              key={id}
            />
          ))
        }
      </CardWrapper>
    </PageContainer>
  )
};

export default Catalog;
