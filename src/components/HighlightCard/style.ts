import styled, { css } from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface ColorProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<ColorProps>`
  background-color: ${({ theme, type }) => 
  type === "total" ? theme.colors.secondary : theme.colors.shape};

  ${(props) =>
    props.type === "total" &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `};

  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme,type }) => 
  type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

// Acessando propriedades no styled components \/
export const Icon = styled(Feather)<ColorProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  ${({ type }) =>
    type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};

  ${({ type }) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `};
`;
export const Footer = styled.View``;
export const Amount = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme,type }) => 
  type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;
export const LastTransaction = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme,type }) => 
  type === "total" ? theme.colors.shape : theme.colors.text};
`;
