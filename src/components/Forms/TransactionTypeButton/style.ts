import styled,{css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import {RectButton} from 'react-native-gesture-handler'

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type:"up" | "down";
}

export const Container = styled.View<ContainerProps>`
  width: 48%;


  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;


  ${({isActive,type}) => isActive && type === 'up' && css`
  background-color: ${({theme}) => theme.colors.success_light};
  border: 0;
  `}

  ${({isActive,type}) => isActive && type === 'down' && css`
  background-color: ${({theme}) => theme.colors.attention_light};
  border: 0;
  `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
