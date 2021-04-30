import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const MainContainer: any = styled(Container)`
  margin-top: 80px;
`;

export const GridCustom: any = styled(Grid)`
  margin-top: 80px;
`;

export const ListInfo: any = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const ListItemInfo: any = styled(ListItem)`
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
`;

export const TextBorderCountries: any = styled(Typography)`
  margin-right: 20px;
  vertical-align: top;
  top: 5px;
  position: relative;
`;

export const Img: any = styled.img`
  width: 100%;
`;

export const ButtonBorders: any = styled(Button)`
  color: inherit;
  border: 1px solid;
  margin-right: 10px;
  margin-bottom: 15px;
  &:last-of-type {
    margin-right: 0;
  }
`;
