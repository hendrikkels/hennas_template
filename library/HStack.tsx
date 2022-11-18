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
export interface HStackProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    SpasieProps {
  children?: React.ReactNode;
}

const _HStack = styled.div<HStackProps>`
  gap: ${(props) => {
    if (typeof props.spaceItems == "number") {
      return `${props.spaceItems}px`;
    }
    return props.spaceItems;
  }};
`;

export const HStack = styled(_HStack)<HStackProps>(
  {
    display: "flex",
    flexDirection: "row",
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox
);
