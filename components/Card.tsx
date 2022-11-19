import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { HStack, HStackProps, Link, Title, View, ViewProps } from '../library';

export interface CardProps extends ViewProps {
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
  console.log(theme);

  const renderTitle: ReactNode = useMemo(() => {
    if (_renderTitle) {
      return _renderTitle;
    }
    return <Title marginBottom={'28px'}>{title}</Title>;
  }, []);

  const renderFooter: ReactNode = useMemo(() => {
    if (_renderFooter) {
      return _renderFooter;
    }
    return <Title marginTop={'28px'}>{footer}</Title>;
  }, []);

  return (
    <View
      backgroundColor={theme.colors.secondaryBackground}
      borderRadius={theme.borderRadius}
      padding={'28px'}
      {...rest}
    >
      {renderTitle}
      <View minHeight={'42px'}>{children}</View>
      {renderFooter}
    </View>
  );
};
