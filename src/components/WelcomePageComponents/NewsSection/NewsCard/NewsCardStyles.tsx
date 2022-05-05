import { styled, Card } from '@mui/material'

export const CardWrappperStyled = styled(Card)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: "flex-start",
  color: theme.palette.common.black,
  minHeight: 200,
}))