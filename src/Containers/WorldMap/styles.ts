import styled from 'styled-components';

import palette from 'palette';
import { FRAGMENT_SIZE } from 'Containers/WorldMap/index';

const MAP_HEIGHT = 574;
const MAP_WIDTH = 784;

interface MapImageProps {
  cordX: number;
  cordY: number;
}

export const MapBackground = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;

  z-index: 2;
  position: relative;
  overflow: hidden;
  width: ${MAP_WIDTH}px;
  height: ${MAP_HEIGHT}px;
`;

export const MapImage = styled('img')<MapImageProps>`
  position: absolute;
  z-index: 2;
  left: ${({ cordX }) => cordX * MAP_WIDTH / FRAGMENT_SIZE}px;
  top: ${({ cordY }) => cordY * MAP_HEIGHT / FRAGMENT_SIZE}px
`;

export const MapSquare = styled('div')`
  position: relative;

  flex: 1 1 calc(100% / 7);
  width: calc(100% / 7);
  height: calc(100% / 7);
  z-index: 3;

  text-align: center;
  font-family: Old English Text MT, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${palette.black};

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    border-color: black;
    border-width: 0.18px;
    border-style: solid;
    box-sizing: border-box;
  }
`;