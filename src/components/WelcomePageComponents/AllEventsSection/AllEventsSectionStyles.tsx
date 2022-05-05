import { styled, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: "center",
  width: "100%",
  color: theme.palette.common.black,
  marginBlock: "30px",
}))

export const SectionHeaderStyled= styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.8rem, 2.5vw, 2.75rem)',
}))

export const TableBoxStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "400px",
  marginTop: "20px",
}))