import React from "react";
import {
  Container,
  Item,
  ImgContainer,
  InfoContainer,
  ZoneContainer,
  HiddenMsg,
} from "./ListItems.styled";
import { Items } from "../utils/items";
import Link from "next/link";
import _ from "lodash";

type ListItemsProps = {
  item: Items[];
};

const ListItems: React.FC<ListItemsProps> = ({ item }) => {
  const hasItems = !_.isEmpty(item);
  const listItems = item?.map((item: Items) => {
    return (
      <Item key={item.id}>
        <Link
          href={`/item/${item.id}`}
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <ImgContainer>
            <img
              src={item.thumbnail}
              alt="Mercado Libre Argentina - Donde comprar y vender de todo"
              height={100}
              width={100}
            />
          </ImgContainer>
          <InfoContainer>
            <p>{item.price}</p>
            <p>{item.title}</p>
          </InfoContainer>
          <ZoneContainer>{item.address.state_name}</ZoneContainer>
        </Link>
      </Item>
    );
  });

  return (
    <>
      {hasItems && (
        <>
          <HiddenMsg aria-live="polite" role="status">
            <p>hay {listItems.length} resultados para tu busqueda</p>
          </HiddenMsg>
          <Container>
            <ul>{listItems}</ul>
          </Container>
        </>
      )}
    </>
  );
};

export default ListItems;
