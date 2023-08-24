"use client";

import React, { ChangeEvent, useState, useCallback } from "react";
import {
  LinkContainer,
  Form,
  Input,
  Container,
  Button,
  Separator,
  HiddenH1,
  HiddenLabel,
} from "./SearchBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../public/logo-meli.png";
import Image from "next/image";
import _ from "lodash";

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState<string>("");
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(value);
    },
    [onSubmit, value]
  );

  return (
    <Container>
      <HiddenH1>Mercado Libre</HiddenH1>
      <LinkContainer>
        <Link href="/">
          <Image src={Logo} alt="" />{" "}
        </Link>
      </LinkContainer>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <HiddenLabel htmlFor="nav-search-input">
          Ingresá lo que quieras encontrar
        </HiddenLabel>
        <Input
          id="nav-search-input"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
          }}
          value={value}
          placeholder="Buscar productos, marcas y mas"
        />
        <Separator>|</Separator>
        <Button
          aria-label="click enter para buscar"
          onClick={() => {
            onSubmit(value);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
