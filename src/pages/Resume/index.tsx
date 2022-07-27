import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { HistoryCard } from "../../components/HistoryCard";

import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month
} from "./style";
import { categories } from "../../utils/categories";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionData {
  type: "in" | "out";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  async function loadData() {
    const dataKey = "@gofinances:transactions";

    const response = await AsyncStorage.getItem(dataKey);

    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted.filter(
      (expense: TransactionData) => expense.type === "out"
    );

    const expensesTotal = expenses.reduce(
      (acumullator: number, expense: TransactionData) => {
        return acumullator + Number(expense.amount);
      },
      0
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expenses?.forEach((expense: TransactionData) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      });

      const percent = `${((categorySum / expensesTotal) * 100).toFixed(0)}%`;

      categorySum > 0
        ? totalByCategory.push({
            name: category.name,
            totalFormatted: categorySum.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
            total: categorySum,
            color: category.color,
            key: category.key,
            percent,
          })
        : categorySum;
    });

    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <Content
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
        showsVerticalScrollIndicator={false}
      >
        <MonthSelect>
          <MonthSelectButton onPress={() => console.log('Apertado')}>
            <MonthSelectIcon name='chevron-left'/>
          </MonthSelectButton>
          <Month>Maio</Month>
          <MonthSelectButton>
            <MonthSelectIcon name='chevron-right'/>
          </MonthSelectButton>
        </MonthSelect>
        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            x="percent"
            y="total"
            height={280}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: "#ffffff",
              },
            }}
            labelRadius={35}
            colorScale={totalByCategories.map((category) => category.color)}
          />
        </ChartContainer>
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.totalFormatted}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
}
