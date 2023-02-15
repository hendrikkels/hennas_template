import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from '../elements';

export interface ScrollViewProps extends DivProps {
  vertical?: boolean;
}

export const ScrollView: React.FC<ScrollViewProps> = (props) => {
  const { vertical, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div
      overflowX={vertical ? 'auto' : 'hidden'}
      overflowY={vertical ? 'hidden' : 'auto'}
      textAlign={'justify'}
      {...rest}
    >
      {children}
    </Div>
  );
};
