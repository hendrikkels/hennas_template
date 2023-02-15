import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps } from '../elements';

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
    return (
      <Heading1 marginBottom={theme.cardPadding} fontFamily={theme.fontFamily}>
        {title}
      </Heading1>
    );
  }, []);

  const renderFooter: ReactNode = useMemo(() => {
    if (_renderFooter) {
      return _renderFooter;
    }
    return (
      <Heading1 marginTop={theme.cardPadding} fontFamily={theme.fontFamily}>
        {footer}
      </Heading1>
    );
  }, []);

  return (
    <Div
      backgroundColor={theme.colors.secondaryBackground}
      borderRadius={theme.borderRadius}
      padding={theme.cardPadding}
      display={'flex'}
      {...rest}
    >
      {title && renderTitle}
      <Div minHeight={'56px'} display={'flex'} width={'100%'}>
        {children}
      </Div>
      {footer && renderFooter}
    </Div>
  );
};
