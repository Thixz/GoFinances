import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./style";
import { categories } from "../../../src/utils/categories";

export interface TransactionCardProps {
  type: "in" | "out";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

// Em amount utilizamos o &&, pois em JavaScript e JSX se uma expressão true seguida de && for encontrada o elemento a seguir será retornado e caso
// a expressão false for seguida de && o elemento a seguir "- " será pulado.

export function TransactionCard({ data }: Props) {
  const category = categories.filter((item) => item.key === data.category)[0];
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "out" && "- "} {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
