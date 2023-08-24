"use client";

import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/Searchbar/SearchBar";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import axios from "axios";
import Message from "@/components/Message/Message";
import Breadcrumb from "@/components/BreadCrumb/Breadcrumb";
import { Conditions, Shipping, Address } from "../components/utils/items";
import Layout from "../components/Layout";
import _ from "lodash";

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
  category: {
    id: string;
    name: string;
  };
}

const Home = () => {
  const [items, setItems] = useState<Item | null>();
  const [loading, setLoading] = useState<Boolean>(true);

  const router = useRouter();
  const hasData = !_.isEmpty(items);

  const getItems = useCallback(async (q: string) => {
    try {
      const res = await axios.get(`api/getproducts?q=${q}`);
      setItems(res.data);
      setLoading(false);
      router.push(`/items?query=${q}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  const searchItems = useCallback(
    (query: string) => {
      if (query === "") {
        setItems(null);
      }

      getItems(query);
    },
    [getItems]
  );

  return (
    <>
      {loading && <Loading />}
      <Layout
        searchbar={
          <SearchBar onSubmit={(query: string) => searchItems(query)} />
        }
        children={
          <>{!hasData && <Message>type to start searching!</Message>}</>
        }
      />
    </>
  );
};

export default Home;
