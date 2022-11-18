import React, { useCallback, useEffect, useState, useMemo } from 'react';
import {
  layout,
  position,
  LayoutProps,
  PositionProps,
  BorderProps,
  border,
  ColorProps,
  color,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
} from 'styled-system';
import styled from 'styled-components';

export interface ClickableProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    FlexboxProps {
  children?: React.ReactNode;
}

export const Clickable = styled.a<ClickableProps>(
  {
    boxSizing: 'border-box',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    display: 'flex',
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox
);
