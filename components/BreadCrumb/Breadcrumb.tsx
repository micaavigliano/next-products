import React from "react";
import _ from "lodash";
import Link from "next/link";
import { Filter } from "../utils/items";
import { Container } from "./Breadcrumb.styled";

type BreadcrumbProps = {
  categories: any
};

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  const hasCategory = !_.isEmpty(categories);

  return (
    <Container aria-label="breadcrumb">
      {hasCategory
        ? categories?.map((value: any, index: number, arr: any) => {
            return (
              <span key={value.id}>
                <Link
                  href="/"
                  aria-current={index === arr.length - 1 ? true : false}
                >
                  {value.name}
                </Link>
                {index !== arr.length - 1 && <span>{" > "}</span>}
              </span>
            );
          })
        : null}
    </Container>
  );
};

export default Breadcrumb;
