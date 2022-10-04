import React from 'react';
import { Select } from 'antd';
import {CatalogWrapper} from "./Catalog.styled.js";

const { Option } = Select;

const Catalog = () => {
  return (
    <CatalogWrapper>
      <Select
        showSearch
        allowClear
        placeholder="Select a brand"
        optionFilterProp="children"
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="Reebok">Reebok</Option>
        <Option value="Puma">Puma</Option>
        <Option value="Nike">Nike</Option>
        <Option value="Tommy Heilfiger">Tommy Heilfiger</Option>
        <Option value="Adidas">Adidas</Option>
        <Option value="FILA">FILA</Option>
        <Option value="Vans">Vans</Option>
      </Select>
    </CatalogWrapper>
  )
};

export default Catalog;
