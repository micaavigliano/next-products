import React from "react";
import {
  Container,
  Item,
  ImgContainer,
  InfoContainer,
  ZoneContainer,
  HiddenMsg,
  Img,
} from "./ListItems.styled";
import { Items } from "../utils/items";
import Link from "next/link";
import { isEmpty } from "lodash";

type ListItemsProps = {
  item: any;
};

const ListItems: React.FC<ListItemsProps> = ({ item }) => {
  const hasItems = !isEmpty(item);
  const listItems = item?.map((item: Items) => {
    return (
      <Item key={item.id}>
        <Link
          href={`/item/${item.id}`}
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
          aria-label={`Clickea aqui para ir a la descripcion del producto ${item.title}`}
        >
          <ImgContainer>
            <Img src={item.thumbnail} alt={item.title} />
          </ImgContainer>
          <InfoContainer>
            <p style={{ color: "black", fontSize: "24px" }}>{item.price}</p>
            <h3>{item.title}</h3>
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
