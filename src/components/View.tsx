import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from '../library';

export interface ViewProps extends DivProps {}

export const View: React.FC<ViewProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div display={'flex'} {...rest}>
      {children}
    </Div>
  );
};
