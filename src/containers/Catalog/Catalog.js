import React, { useState, useEffect } from 'react';
import { Select, InputNumber } from 'antd';
import {FilterWrapper, Essentials} from "./Catalog.styled.js";
import CardItem from "../../components/CardItem/CardItem.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import PageContainer from "../PageContainer.styled.js";
import CardWrapper from "./CardWrapper/CardWrapper";
import data from "../../resources/data";

const { Option } = Select;

const Catalog = () => {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState(data.slice(0, count));

  useEffect(() => {
    setItems((items) => data.slice(0, count));
  }, [count]);

  const showMore = () => {
    if (count >= data.length) {
      alert("No more items in catalog!");
    }
    else {
      setCount(count+4);
    }
  };

  return (
    <PageContainer>
      <Essentials>
        <FilterWrapper>
          <span>Choose filters:</span>
          <Select
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
          <InputNumber size="large" addonAfter="$" placeholder="Minimum price" />
          <InputNumber size="large" addonAfter="$" placeholder="Maximum price" />
        </FilterWrapper>
        <PrimaryButton type="primary">Apply</PrimaryButton>
      </Essentials>
      <CardWrapper>
        {items.map(({ title, image, brand, price }, idx) => (
          <CardItem
            title={title}
            image={image}
            brand={brand}
            price={price}
            key={idx}
          />
        ))}
      </CardWrapper>
      <PrimaryButton type="primary" onClick={() => showMore()}>
        Show more
      </PrimaryButton>
    </PageContainer>
  )
};

export default Catalog;
