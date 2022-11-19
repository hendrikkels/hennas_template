import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import {
  HStack,
  HStackProps,
  Anchor,
  Heading1,
  Div,
  DivProps,
} from '../library';

export interface CardProps extends DivProps {
  title?: string;
  renderTitle?: ReactNode;
  footer?: string;
  renderFooter?: ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    renderTitle: _renderTitle,
    footer,
    renderFooter: _renderFooter,
    children,
    ...rest
  } = props;
  const theme = useTheme();

  const renderTitle: ReactNode = useMemo(() => {
    if (_renderTitle) {
      return _renderTitle;
    }
    return <Heading1 marginBottom={'28px'}>{title}</Heading1>;
  }, []);

  const renderFooter: ReactNode = useMemo(() => {
    if (_renderFooter) {
      return _renderFooter;
    }
    return <Heading1 marginTop={'28px'}>{footer}</Heading1>;
  }, []);

  return (
    <Div
      backgroundColor={theme.colors.secondaryBackground}
      borderRadius={theme.borderRadius}
      padding={'28px'}
      {...rest}
    >
      {renderTitle}
      <Div minHeight={'42px'}>{children}</Div>
      {renderFooter}
    </Div>
  );
};
