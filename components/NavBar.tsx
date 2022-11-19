import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { HStack } from '.';
import {
  Heading2,
  Heading1,
  Div,
  Anchor,
  DivProps,
  Heading3,
  Paragraph,
} from '../library';

export interface NavBarProps extends DivProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme = useTheme();

  return (
    <Div backgroundColor={theme.colors.navbarBackground} {...rest}>
      <HStack
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'20px'}
        paddingX={'28px'}
      >
        <Div>
          <Heading1 fontFamily={'JetBrains Mono'} fontSize={'32px'}>
            {title}
          </Heading1>
        </Div>
        <HStack space={'20px'}>
          <Anchor href={'http://hendrikkels.github.io'} target={'_blank'}>
            <Paragraph>Resume</Paragraph>
          </Anchor>
          <Anchor
            onClick={() => {
              console.log('clicked portfolio');
            }}
          >
            <Paragraph>Portfolio</Paragraph>
          </Anchor>
          <Anchor
            onClick={() => {
              console.log('clicked contact');
            }}
          >
            <Paragraph>Contact</Paragraph>
          </Anchor>
        </HStack>
      </HStack>
    </Div>
  );
};
