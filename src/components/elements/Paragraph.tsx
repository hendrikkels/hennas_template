import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import {
  layout,
  position,
  border,
  color,
  flexbox,
  space,
  typography,
  LayoutProps,
  SpaceProps,
  PositionProps,
  BorderProps,
  ColorProps,
  TypographyProps,
  ShadowProps,
} from 'styled-system';
import styled from 'styled-components';

export interface ParagraphProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    TypographyProps,
    ShadowProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}
export const Paragraph = styled.p<ParagraphProps>(
  {
    fontSize: '16px',
    fontWeight: 'normal',
    padding: 0,
    margin: 0,
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography
);
