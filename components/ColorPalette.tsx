import React, { ReactNode, useMemo } from 'react';
import { render } from 'react-dom';
import { useTheme } from 'styled-components';
import { HStack, HStackProps, Link, Title, View, ViewProps } from '../library';

export const ColorPalette: React.FC<ViewProps> = (props) => {
  const { ...rest } = props;
  const theme = useTheme();

  const renderColor = (color: string) => {
    return (
      <View
        height={'100px'}
        width={'100px'}
        backgroundColor={color}
        {...rest}
      ></View>
    );
  };

  const colorsArray = useMemo(() => {
    let { colors } = theme;
    if (colors) {
      const arr = [
        colors.red,
        colors.orange,
        colors.yellow,
        colors.green,
        colors.blue,
        colors.purple,
        colors.pink,
        colors.gray,
      ];
      return (
        <HStack spaceItems={'10px'}>
          {arr.map((item) => renderColor(item))}
        </HStack>
      );
    }
    return <></>;
  }, [theme]);

  return <View>{colorsArray}</View>;
};
