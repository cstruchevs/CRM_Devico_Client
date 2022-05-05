import { Box } from '@mui/system'
import BgImage from '../../../assets/imgs/Bitmap.png'
import { RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import {
  ButtonsStack,
  ButtonStyled,
  DatePositionStackStyled,
  DateStyled,
  EventLinkStyled,
  ImageBox,
  ImageStackStyled,
  InfoStackStyled,
  LinkStyled,
  NextEventBoxStyled,
  NextEventLabelStyled,
  PositionStyled,
  SectionWrappperStyled,
  TitleStyled,
  WelcomSubTextStyled,
  WelcomTextStyled,
} from './WelcomeSectionStyles'
import { FC, memo, useCallback } from 'react'

interface IWelcomeSection {}

const WelcomeSection: FC<IWelcomeSection> = () => {
  const dispatch = useDispatch()
  const user = useSelector<RootState, IWelcomeSection | null>(state => state.auth.user)

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const toggleRecoverHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
  }, [dispatch])

  return (
    <SectionWrappperStyled component={'section'} id="welcome">
      <InfoStackStyled>
        <Box>
          <WelcomTextStyled>Welcome</WelcomTextStyled>
          <WelcomTextStyled>to Kharkiv Racing</WelcomTextStyled>
          <WelcomSubTextStyled>We hare exited to see you here. Let's rock.</WelcomSubTextStyled>
          {!user && (
            <ButtonsStack>
              <ButtonStyled variant="contained" onClick={toggleLogHandler} size="medium">
                Sign In
              </ButtonStyled>
              <ButtonStyled variant="outlined" onClick={toggleRegHandler} size="medium">
                Sign Up
              </ButtonStyled>
            </ButtonsStack>
          )}
          {!user && (
            <Box mt={3} onClick={toggleRecoverHandler}>
              <LinkStyled underline='always'>Forgot password?</LinkStyled>
            </Box>
          )}
        </Box>
      </InfoStackStyled>
      <ImageStackStyled>
        <ImageBox
          sx={{
            backgroundImage: `url(${BgImage})`,
          }}
        />
        <NextEventBoxStyled>
          <NextEventLabelStyled>Next Event</NextEventLabelStyled>
          <TitleStyled>AUTO.RIA Race</TitleStyled>
          <DatePositionStackStyled>
            <DateStyled>12.12.2021</DateStyled>
            <PositionStyled>Kharkiv. Maidan constitution</PositionStyled>
          </DatePositionStackStyled>
          <Box mt={3}>
            <EventLinkStyled underline="always" href="/">
              View details
            </EventLinkStyled>
          </Box>
        </NextEventBoxStyled>
      </ImageStackStyled>
    </SectionWrappperStyled>
  )
}

export default memo(WelcomeSection)
