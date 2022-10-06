import React, { useState, useEffect } from 'react';
import { Select, InputNumber, Input } from 'antd';
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

  const renderItems = () => {
    return data.filter(
      (item) => item.title.toLowerCase().search(searchTitle.toLowerCase()) !== -1
    );
  };

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
          <InputNumber id="filter_min" size="large" addonAfter="$" placeholder="Minimum price" />
          <InputNumber id="filter_max" size="large" addonAfter="$" placeholder="Maximum price" />
          <PrimaryButton type="primary">Apply filters</PrimaryButton>
        </FilterWrapper>
        <Search
          id="search_title"
          placeholder="Input title"
          allowClear
          size="large"
          onSearch={(value, event) => {
            setSearchTitle(value);
          }}
          style={{
            width: 200,
          }}
        />
      </Essentials>
      <CardWrapper>
        {
          renderItems().map(({ title, image, brand, price }, idx) => (
            <CardItem
              title={title}
              image={image}
              brand={brand}
              price={price}
              key={idx}
            />
          ))
        }
      </CardWrapper>
    </PageContainer>
  )
};

export default Catalog;
