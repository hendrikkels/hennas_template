import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from '../library';

export interface HStackProps extends DivProps {
  space?: string | number;
}

export const HStack: React.FC<HStackProps> = (props) => {
  const { space, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div
      style={space && { gap: space }}
      display={'inline-flex'}
      flexDirection={'row'}
      {...rest}
    >
      {children}
    </Div>
  );
};
