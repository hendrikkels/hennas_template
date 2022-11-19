import React, { ReactNode, useMemo } from 'react';
import { render } from 'react-dom';
import { useTheme } from 'styled-components';
import { DivProps, Div } from '../library';
import { HStack } from './HStack';

export const ColorPalette: React.FC<DivProps> = (props) => {
  const { ...rest } = props;
  const theme = useTheme();

  const renderColor = (color: string) => {
    return (
      <Div
        height={'100px'}
        width={'100px'}
        backgroundColor={color}
        {...rest}
      ></Div>
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
        <HStack space={'10px'} justifyContent={'center'}>
          {arr.map((item) => renderColor(item))}
        </HStack>
      );
    }
    return <></>;
  }, [theme]);

  return <Div>{colorsArray}</Div>;
};
