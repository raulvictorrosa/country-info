import {
  Paper as PaperStyled,
  TextField as TextFieldStyled
} from '@material-ui/core';
import styled from 'styled-components';

export const Paper = styled(PaperStyled)`
  @media (max-width: 599px) {
    margin-top: 20px;
  }
`;

export const TextField = styled(TextFieldStyled)`
  width: 100%;

  .MuiFormLabel-root.Mui-focused {
    color: inherit !important;
  }

  .MuiOutlinedInput-root.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: inherit !important;
    }
  }
`;
