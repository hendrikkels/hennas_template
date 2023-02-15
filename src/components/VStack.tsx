import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from '../elements';

export interface VStackProps extends DivProps {
  space?: string | number;
}

export const VStack: React.FC<VStackProps> = (props) => {
  const { space, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Div
      style={space && { gap: space }}
      display={'inline-flex'}
      flexDirection={'column'}
      {...rest}
    >
      {children}
    </Div>
  );
};
