import React, { useState, useEffect } from 'react';
import { Select, InputNumber, Input} from 'antd';
import {FilterWrapper, Essentials} from "./Catalog.styled.js";
import CardItem from "../../components/CardItem/CardItem.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import PageContainer from "../PageContainer.styled.js";
import CardWrapper from "./CardWrapper/CardWrapper";
import Loader from "../../components/Loader/Loader.styled";
import {getAllItems, getItemsFiltered} from "../../api/items_api";

const { Option } = Select;
const { Search } = Input;

const Catalog = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filterBrand, setFilterBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllItems().then((response) => {
      setItemsData(response);
      setItems(response);
      setIsLoading(false);
    });
  }, []);

  const applyFilters = () => {
    setIsLoading(true);
    let filtered = [...itemsData];
    const filters = {};
    if (minPrice > maxPrice && maxPrice !== null) {
      alert("Minimum price can`t be bigger than maximum price");
    }
    else if (minPrice < 0 || maxPrice < 0) {
      alert("Prices can`t be negative, though it would be a great idea☺");
    }
    else {
      if (filterBrand !== null){
        filters.filterBrand = filterBrand;
      };
      if (minPrice !== null){
        filters.minPrice = minPrice;
      };
      if (maxPrice !== null){
        filters.maxPrice = maxPrice;
      };
      getItemsFiltered(filters).then((response) => {
        setItems(response);
        setIsLoading(false);
      });
    };
  };

  useEffect(() => {
    setItems(itemsData);
    clearInputs();
    if (searchTitle !== undefined){
      setItems((items) => items.filter(
        (item) => item.title.toLowerCase().search(searchTitle.toLowerCase()) !== -1
      ));
    };
  }, [searchTitle]);

  const clearInputs = () => {
    setItems(itemsData);
    setFilterBrand(null);
    setMaxPrice(null);
    setMinPrice(null);
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
            onChange={(value, event) => {setFilterBrand(value);}}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            value={filterBrand}
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
            value={minPrice}
            onChange={(value, event) => {setMinPrice(value);}}
          />
          <InputNumber id="filter_max" size="large" addonAfter="$" placeholder="Maximum price"
            value={maxPrice}
            onChange={(value, event) => {setMaxPrice(value);}}
          />
          <PrimaryButton onClick={applyFilters}>
            Apply filters
          </PrimaryButton>
          <SecondaryButton onClick={clearInputs}>
            Dismantle filters
          </SecondaryButton>
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
      {isLoading && <Loader />}
      <CardWrapper>
        {
          items.map(({ id, title, image, brand, price }, idx) => (
            <CardItem
              id={id}
              title={title}
              image={image}
              brand={brand}
              price={price}
              image={image}
              key={id}
            />
          ))
        }
      </CardWrapper>
    </PageContainer>
  )
};

export default Catalog;
