import React, { useCallback, useState, useEffect } from "react";
import "../app/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import SearchBar from "@/components/Searchbar/SearchBar";
import { Conditions, Shipping, Address } from "../components/utils/items";
import axios from "axios";
import Breadcrumb from "@/components/BreadCrumb/Breadcrumb";
import ListItems from "@/components/ListItems/ListItems";
import { useSearchParams } from "next/navigation";
import { Path } from '../components/utils/items'
import { Nav, ContainerMain } from "@/components/Product/Product.styled";

import Message from "@/components/Message/Message";
import _ from "lodash";
import Loading from "@/app/Loading";

interface Item {
  item: {
    currency_id: string;
    id: string;
    title: string;
    price: number;
    thumbnail: string | string[];
    condition: Conditions;
    free_shipping: boolean;
    order_backend: number;
    shipping: Shipping;
    address: Address;
  };
  category: Path;
}

const Products = () => {
  const [items, setItems] = useState<Item | null>();
  const [loading, setLoading] = useState<Boolean>(true);
  const router = useRouter();
  const param = useSearchParams();
  const value = param?.get("query");

  const hasData = !_.isEmpty(items?.category) && !_.isEmpty(items?.item);

  const getItems = useCallback(async (q: string) => {
    try {
      const res = await axios.get(`api/getproducts?q=${q}`);
      setLoading(false);
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchProduct = async (value: string) => {
    try {
      const response = await axios.get(`api/getproducts?q=${value}`);
      setLoading(false);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProduct(value!);
  }, [value]);

  const searchItems = useCallback(
    (query: string) => {
      if (query === "") {
        router.push(`/`);
      }
      getItems(query);
      router.replace(`/items?query=${query}`);
    },
    [getItems, router]
  );
  
  return (
    <>
      {loading && <Loading />}
      <Layout>
        <>
          <Nav>
            <SearchBar onSubmit={(query: string) => searchItems(query)} />
          </Nav>
          <ContainerMain>
            {hasData ? (
              <>
                <Breadcrumb categories={items?.category} />
                <ListItems item={items?.item}></ListItems>
              </>
              ) : (
                <Message><p>No hay publicaciones que coincidan con tu busqueda</p></Message>
              )}
          </ContainerMain>
        </>
      </Layout>
    </>
  );
};

export default Products;

