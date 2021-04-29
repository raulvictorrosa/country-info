import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export const TextFieldRegion = styled(TextField)`
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
