import { Badge, styled, Button, Stack, Typography, Select, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

export const StyledBadgeAvatar = styled(Badge)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    margin: 'auto',
  }
}))

export const ModeEditIconStyled = styled(ModeEditIcon)(({ theme }) => ({
  padding: "5px",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  borderRadius: "50%",
}))

export const StyledButtonPersonal = styled(Button)(({ theme }) => ({
  marginLeft: '10px',
  marginTop: '5px',
  width: '200px',
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  
  
}))

export const InputFile = styled('input')({
  display: 'none',
})

export const StyledStackButton = styled(Stack)({
  width: '350px',
  flexDirection: 'column',
})

export const ProfileConfirmButton = styled(Button)(({ theme }) => ({
  marginTop: '5px',
  marginLeft: '10px',
  width: '300px',
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}))

export const ProfileConfirmBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const StyledTypographyProfile = styled(Typography)({
  paddingLeft: '10px',
})

export const TypographyLinkProfile = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '13px',
  fontWeight: '600',
}))

export const StyledSelectField = styled(Select)({
  margin: '4px 10px 10px 10px',
  borderRadius: '0px',
  maxHeight: '36px',
  width: '93%',
  ' fieldSet': {
    borderRadius: '0px',
  },
  ' select': {
    height: '36px',
  },
})

export const StyledLinkProfile = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: '600',
}))

export const StackProfileWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))

export const BoxAvatar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))

export const BoxPersonalDataForm = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))

export const StackPersonalDataForm = styled(Box)(({ theme }) => ({
  width: '350px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))