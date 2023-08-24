"use client";
import React, { useEffect, useCallback, useState } from "react";

import "../../app/globals.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import SearchBar from "@/components/Searchbar/SearchBar";
import Breadcrumb from "@/components/BreadCrumb/Breadcrumb";
import {
  Container,
  ImgContainer,
  Img,
  InfoContainer,
  Info,
  DescContainer,
} from "@/components/Product/Product.styled";
import Loading from "@/app/Loading";
import _ from "lodash";

import axios from "axios";

const ItemDetails: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [category, setCategory] = useState<any>({});
  const [loading, setLoading] = useState<Boolean>(true);
  const { id } = router.query;

  const getProduct = useCallback(async (id: any) => {
    try {
      const res = await axios.get(`/api/items/${id}`);
      const data = await res.data;
      const category = await axios.get(
        `https://api.mercadolibre.com/categories/${data.item.category_id}`
      );
      setCategory(category.data);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const categories = !_.isEmpty(category) ? category.path_from_root : [];

  const searchItems = useCallback((query: string) => {
    if (query === "") {
      router.push(`/`);
    }
    router.push(`/items?query=${query}`);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (id) {
      getProduct(id);
    }
  }, [id]);

  return (
    <Layout
      searchbar={<SearchBar onSubmit={(query: string) => searchItems(query)} />}
      children={
        <>
          {loading && <Loading />}
          <Breadcrumb categories={categories} />
          <Container>
            <InfoContainer>
              <ImgContainer>
                <Img src={product.item?.thumbnail} />
              </ImgContainer>
              <Info>
                <p>{product.item?.available_quantity}</p>
                <p>{product.item?.condition.value_name}</p>
                <p>{product.item?.title}</p>
                <p>{product.item?.price}</p>
              </Info>
            </InfoContainer>
            <DescContainer>{product.desc}</DescContainer>
          </Container>
        </>
      }
    />
  );
};

export default ItemDetails;
