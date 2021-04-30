import { Card as CardStyled, Grid as GridStyled } from '@material-ui/core';
import styled from 'styled-components';

export const Grid = styled(GridStyled)`
  @media (max-width: 1279px) {
    display: flex;
    justify-content: center;
  }
`;

export const Card = styled(CardStyled)`
  @media (max-width: 1279px) {
    max-width: 268px;
    width: 100%;
  }
`;
