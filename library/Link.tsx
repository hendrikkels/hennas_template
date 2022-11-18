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
  flexbox,
  SpaceProps,
  space,
  TypographyProps,
  typography,
} from "styled-system";
import styled from "styled-components";

export interface LinkProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    TypographyProps {
  children: string;
}

export const Link = styled.a<LinkProps>(
  {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography
);
