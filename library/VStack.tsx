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

export interface VStackProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    FlexboxProps {
  children?: React.ReactNode;
}

export const VStack = styled.div<VStackProps>(
  {
    display: "flex",
    flexDirection: "column",
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox
);
