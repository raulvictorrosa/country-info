import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const MainContainer = styled(Container)`
  margin-top: 80px;
`;

export const GridCustom = styled(Grid)`
  margin-top: 80px;
`;

export const ListInfo = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const ListItemInfo = styled(({ ...props }) => <ListItem {...props} />)`
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
`;

export const TextBorderCountries = styled(({ ...props }) => (
  <Typography {...props} />
))`
  margin-right: 20px;
  vertical-align: top;
  top: 5px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 512px;
`;

export const ButtonBorders = styled(({ ...props }) => <Button {...props} />)`
  color: inherit;
  border: 1px solid;
  margin-right: 10px;
  margin-bottom: 15px;
  &:last-of-type {
    margin-right: 0;
  }
`;
