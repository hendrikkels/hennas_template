import React from 'react';
import { useTheme } from 'styled-components';
import { ParagraphProps, Paragraph } from './elements';

export interface TextProps extends ParagraphProps {}

export const Text: React.FC<TextProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <Paragraph
      fontSize={theme.fontSize}
      fontFamily={theme.fontFamily}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};
