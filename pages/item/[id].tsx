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
  Button, Nav, ContainerMain
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
  }, [router]);

  useEffect(() => {
    setLoading(true);
    if (id) {
      getProduct(id);
    }
  }, [id, getProduct]);

  return (
    <>
    {loading && <Loading/>}
    <Layout>
      <>
      <Nav>
      <SearchBar onSubmit={(query: string) => searchItems(query)} />
      </Nav>
      <ContainerMain><Breadcrumb categories={categories} />
          <Container>
            <InfoContainer>
              <ImgContainer>
                <Img src={product.item?.thumbnail} alt=""/>
              </ImgContainer>
              <Info>
                <div style={{ display: 'flex', flexDirection: 'row', fontSize: '0.8rem', color: 'rgba(0,0,0,.55)', fontWeight: '400' }}>
                  <span>{product.item?.available_quantity}</span>
                  <span style={{ margin: '0 2% 0 2%' }}>-</span>
                  <p><span>{product.item?.sold_quantity}</span> vendidos</p>
                </div>
                <h2 style={{fontWeight: '600', wordBreak: 'break-word', fontSize: '1.4rem', marginTop: '2%'}}>{product.item?.title}</h2>
                <p style={{fontSize: '1.6rem', fontWeight: '500', marginBottom: '7%'}}>{product.item?.price}</p>
                <Button aria-label={`Comprar ${product.item?.title}`}>Comprar</Button>
              </Info>
            </InfoContainer>
            <h3 style={{ fontWeight: '400', fontSize: '1rem', paddingBottom: '3%'}}>Descripcion</h3>
            <DescContainer>
              <p>{product.desc}</p>
            </DescContainer>
          </Container></ContainerMain>
          </>
    </Layout>

    </>
   
  );
};

export default ItemDetails;
