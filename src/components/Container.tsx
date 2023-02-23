import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from './elements';

export interface ContainerProps extends DivProps {}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div
      overflow={'fixed'}
      display={'flex'}
      height={'100%'}
      width={'100%'}
      {...rest}
    >
      {children}
    </Div>
  );
};
