import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../PageContainer.styled.js";
import { Select, InputNumber } from 'antd';
import data from "../../resources/data";

const { Option } = Select;

const ItemPage = () => {
  const navigation = useNavigate();
  const {id} = useParams();
  const items = [...data];
  const item = items.find((item) => item.id == id);
  return (
    <PageContainer>
      <ImageWrapper src={item.image}></ImageWrapper>
      <DescriptionWrapper>
        <h1></h1>
        <p></p>
        <InputWrapper>
          <Select
            id="filter_brand"
            size="large"
            showSearch
            placeholder="Add limited brand stickers"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
          >
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
          <InputNumber size="large" placeholder="Select count"
            defaultValue={1}
          />
        </InputWrapper>
      </DescriptionWrapper>
    </PageContainer>
    );
};

export default ItemPage;
