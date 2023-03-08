import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Heading1, Div, DivProps, Paragraph } from './elements';

export interface CardProps extends DivProps {
  header?: string;
  renderHeader?: ReactNode;
  footer?: string;
  renderFooter?: ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    header,
    renderHeader: _renderHeader,
    footer,
    renderFooter: _renderFooter,
    children,
    ...rest
  } = props;
  const theme = useTheme();

  const renderHeader: ReactNode = useMemo(() => {
    if (_renderHeader) return _renderHeader;
    return (
      <Paragraph
        marginBottom={theme.cardHeaderMargin}
        fontSize={theme.cardHeaderFontSize}
        fontWeight={600}
        fontFamily={theme.fontFamily}
      >
        {header}
      </Paragraph>
    );
  }, [header, _renderHeader, theme]);

  const renderFooter: ReactNode = useMemo(() => {
    if (_renderFooter) {
      return _renderFooter;
    }
    return (
      <Paragraph
        marginTop={theme.cardFooterMargin}
        fontSize={theme.cardFooterFontSize}
        fontWeight={600}
        fontFamily={theme.fontFamily}
      >
        {footer}
      </Paragraph>
    );
  }, [footer, _renderFooter, theme]);

  return (
    <Div
      backgroundColor={theme.colors.secondaryBackground}
      borderRadius={theme.borderRadius}
      padding={theme.cardPadding}
      display={'flex'}
      {...rest}
    >
      {renderHeader}
      <Div minHeight={'56px'} display={'flex'} width={'100%'}>
        {children}
      </Div>
      {renderFooter}
    </Div>
  );
};
