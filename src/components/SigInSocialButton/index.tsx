import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg';

import { Container,Button,ImageContainer,Text } from './style'

interface Props extends RectButtonProps{
title:string;
svg:React.FC<SvgProps>
}

export function SigInSocialButton({title,svg: Svg,...rest} : Props) {
  return (
    <Container>
        <Button {...rest}>
<ImageContainer>
    <Svg />
</ImageContainer>
<Text>{title}</Text>
        </Button>
    </Container>
  )
}
