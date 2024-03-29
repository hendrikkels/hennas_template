import React from 'react';
import { useTheme } from 'styled-components';
import { Anchor, Paragraph, AnchorProps } from './elements';

export interface NavItemProps extends AnchorProps {
  label?: string;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, active = false, ...rest } = props;
  const theme = useTheme();

  return (
    <Anchor {...rest}>
      <Paragraph
        fontSize={theme.navbarItemFontSize}
        fontFamily={theme.navbarItemFontFamily}
        color={
          active
            ? theme.colors.navbarItemActive
            : theme.colors.navbarItemInactive
        }
      >
        {label}
      </Paragraph>
    </Anchor>
  );
};
