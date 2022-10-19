import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Select, InputNumber, Image } from 'antd';
import {ItemPageContainer, ItemWrapper, ItemFooter, DescriptionWrapper, InputWrapper, ButtonWrapper} from "./ItemPage.styled";
import data from "../../resources/data";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled";
import {getItemById} from "../../api/items_api";
import Loader from "../../components/Loader/Loader.styled";

const { Option } = Select;

const ItemPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [goBack, setGoBack] = useState(false);
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemById(id).then((response) => {
      setItem(response);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (goBack) {
      navigate(-1);
    };
  });

  if (isLoading) {
    return <Loader />
  }
  return (
    <ItemPageContainer>
      {isLoading && <Loader />}
      <ItemWrapper>
        <DescriptionWrapper>
          <span>Brand: {item.brand}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <InputWrapper>
            <span>Add limited brand stickers</span>
            <Select
              id="filter_brand"
              size="large"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              defaultValue={false}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
            <span>Select count</span>
            <InputNumber size="large" placeholder="Select count"
              defaultValue={1}
            />
          </InputWrapper>
        </DescriptionWrapper>
      </ItemWrapper>
      <ItemFooter>
        <h2>Price: ${item.price}</h2>
        <ButtonWrapper>
          <SecondaryButton onClick={() => {setGoBack(true);}}>
            Go back
          </SecondaryButton>
          <PrimaryButton>
            Add to cart
          </PrimaryButton>
        </ButtonWrapper>
      </ItemFooter>
    </ItemPageContainer>
    );
};

export default ItemPage;
