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
  LayoutProps,
  PositionProps,
  BorderProps,
  border,
  ColorProps,
  color,
  flexbox,
  SpaceProps,
  space,
  TypographyProps,
  typography,
} from 'styled-system';
import styled from 'styled-components';

export interface AnchorProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    TypographyProps {
  children: string | ReactNode;
}

export const Anchor = styled.a<AnchorProps>(
  {
    cursor: 'pointer',
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography
);
