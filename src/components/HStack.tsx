import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from './elements';

export interface HStackProps extends DivProps {
  space?: string | number;
  wrap?: boolean;
}

export const HStack: React.FC<HStackProps> = (props) => {
  const { space = '0', wrap = false, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div
      style={space && { gap: space }}
      display={'inline-flex'}
      flexDirection={'row'}
      flexWrap={wrap && 'wrap'}
      {...rest}
    >
      {children}
    </Div>
  );
};
