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

export interface HStackProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    FlexboxProps {
  space?: string;
  children?: React.ReactNode;
}

export const HStack = styled.div<HStackProps>(
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
