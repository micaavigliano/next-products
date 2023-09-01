import React from "react";
import { isEmpty } from "lodash";
import Link from "next/link";
import { Container } from "./Breadcrumb.styled";

type BreadcrumbProps = {
  categories: any;
};

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  const hasCategory = !isEmpty(categories);

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
