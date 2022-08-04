import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const Container = styled.View`
  flex:1;
`;

export const Header = styled.View`
width: 100%;
height: 70%;
background-color: ${({theme}) => theme.colors.primary};
justify-content: flex-end;
align-items: center;
`
export const TitleWrapper = styled.View`
align-items: center;
`
export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.medium};
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(30)}px;
text-align: center;

margin-top: ${hp('7.5%')}px;
`
export const SiginTitle = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.shape};
font-size: ${RFValue(16)}px;
text-align: center;

margin-top: ${hp('8.5%')}px;
margin-bottom: ${hp('8.5%')}px;
`
export const Footer = styled.View`
background-color: ${({theme}) => theme.colors.secondary};
width: 100%;
height: 30%;
`

export const FooterWrapper = styled.View`
margin-top: ${hp('-4%')}px;
padding: 0 32px;
justify-content: space-between;
`
