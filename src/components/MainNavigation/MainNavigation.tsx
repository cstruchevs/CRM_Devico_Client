import { Box, Typography, Stack } from '@mui/material'
import {
  StyledPopover,
  StyledButton,
  StyledMenuBoxNav,
  StyledAppBar,
  StyledInnerWarapperBox,
  StyledPopoverStack,
  StyledAuthStack,
  StyledNotificationDivider,
  StyledAuthStackWrapper,
} from './MainNavigatioStyles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import React, { useState } from 'react'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { IUserInterface } from '../../store/auth'

interface IMainNavigation {}

const MainNavigation = () => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const user = useSelector<RootState, IUserInterface | null>(state => state.auth.user)

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleRegHandler = () => {
    dispatch(uiActions.toggleReg())
  }
  const toggleLogHandler = () => {
    dispatch(uiActions.toggleLog())
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <StyledInnerWarapperBox>
          <StyledMenuBoxNav pr={1} pl={1}>
            {user && (
              <StyledAuthStackWrapper gap={1}>
                <NotificationsNoneOutlinedIcon sx={{ height: '43px' }} />
                <StyledNotificationDivider orientation="vertical" />
                <StyledAuthStack>
                  <Typography sx={{ fontSize: '13px' }}>Welcome! </Typography>
                </StyledAuthStack>
              </StyledAuthStackWrapper>
            )}
            <AccountCircleIcon />
            <KeyboardArrowDownIcon aria-describedby={id} onClick={handleClick} />
            <StyledPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <StyledPopoverStack>
                <StyledButton onClick={toggleLogHandler} size="medium">
                  Sign In
                </StyledButton>
                <StyledButton onClick={toggleRegHandler} size="medium">
                  Sign Up
                </StyledButton>
              </StyledPopoverStack>
            </StyledPopover>
          </StyledMenuBoxNav>
        </StyledInnerWarapperBox>
      </StyledAppBar>
    </Box>
  )
}

export default MainNavigation
