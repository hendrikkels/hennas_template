import React, { useCallback, useEffect, useState, useMemo } from "react";
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
} from "styled-system";
import styled from "styled-components";


interface SpasieProps {
  spaceItems?: string | number;
}
export interface VStackProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    SpasieProps {
  children?: React.ReactNode;
}

const _VStack = styled.div<VStackProps>`
  gap: ${(props) => {
    if (typeof props.spaceItems == 'number') {
      return `${props.spaceItems}px`;
    }
    return props.spaceItems;
  }};
`;

export const VStack = styled(_VStack)<VStackProps>(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox
);
