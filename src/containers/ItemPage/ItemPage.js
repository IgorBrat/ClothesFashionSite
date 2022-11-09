import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Select, InputNumber, Image } from 'antd';
import {ItemPageContainer, ItemWrapper, ItemFooter, DescriptionWrapper, InputWrapper, ButtonWrapper} from "./ItemPage.styled";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled";
import {getItemById} from "../../api/items_api";
import Loader from "../../components/Loader/Loader.styled";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const { Option } = Select;

const ItemPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [goBack, setGoBack] = useState(false);
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getItemById(id).then((response) => {
      setItem(response);
      setIsLoading(false);
    });
  }, [id]);

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
      <ItemWrapper>
        <Image src={item.image} width={600}/>
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
              value={count}
              onChange={(value, event) => setCount(value)}
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
          <PrimaryButton
          onClick={() => {
            if (count < 1) {
              alert("Can`t set count less than 1");
            }
            else {
              dispatch(addItem({content: item, count: count}));
            };
          }}>
            Add to cart
          </PrimaryButton>
        </ButtonWrapper>
      </ItemFooter>
    </ItemPageContainer>
    );
};

export default ItemPage;
