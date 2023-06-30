import PropTypes from 'prop-types'
import {
  lighten,
  Box,
  Card,
  Collapse,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone'
import CloseIcon from '@mui/icons-material/Close'
import {AlertProps} from './AlertTypes'

const Alert = (props: AlertProps) => {
  const theme = useTheme()
  const {t} = useTranslation()
  const [open, setOpen] = useState(true)

  return (
    <Collapse in={open}>
      <Card
        variant={props.variant}
        elevation={props.elevation}
        sx={{
          background: props.background
            ? props.background
            : theme.palette.primary.lighter,
          display: 'flex',
          flex: 1,
          alignItems:
            props.icon && !props.title && !props.content
              ? 'center'
              : 'flex-start',
          justifyContent:
            !props.title && !props.content ? 'center' : 'flex-start',
          p: props.padding,
          mt: props.marginTop,
          mb: props.marginBottom,
          position: 'relative',
          ...props.sx,
        }}
      >
        {props.icon || (
          <NotificationImportantTwoToneIcon
            color={!props.iconColor ? 'primary' : 'inherit'}
            sx={{color: props.iconColor}}
          />
        )}
        {props.title || props.content ? (
          <Box display="flex" flex={1} flexDirection="column" pl={1} pr={3}>
            {typeof props.title === 'string' ? (
              <Typography
                align={props.titleAlign}
                color={props.titleColor}
                fontFamily={props.titleFontFamily}
                fontStyle={props.titleFontStyle}
                variant={props.titleVariant}
                gutterBottom={props.titleGutterBottom}
              >
                {t(props.title)}
              </Typography>
            ) : props.title ? (
              props.title
            ) : null}
            {typeof props.content === 'string' ? (
              <Typography
                align={props.contentAlign}
                color={props.contentColor}
                fontFamily={props.contentFontFamily}
                fontStyle={props.contentFontStyle}
                variant={props.contentVariant}
              >
                {t(props.content)}
              </Typography>
            ) : props.content ? (
              props.content
            ) : null}
          </Box>
        ) : null}
        {props.close ? (
          <IconButton
            aria-label="close"
            size="small"
            color={!props.iconColor ? 'primary' : 'inherit'}
            sx={{
              color: props.iconColor,
              position: 'absolute',
              top: 0,
              right: 0,
              m: 0.5,
            }}
            onClick={() => {
              setOpen(false)
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Card>
    </Collapse>
  )
}

Alert.defaultProps = {
  close: true,
  contentAlign: 'justify',
  contentFontStyle: 'italic',
  contentVariant: 'body2',
  marginBottom: 3,
  marginTop: 0,
  padding: 2,
  titleAlign: 'justify',
  titleFontStyle: 'normal',
  titleGutterBottom: true,
  titleVariant: 'h6',
  variant: 'elevation',
}

Alert.propTypes = {
  background: PropTypes.string,
  close: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  contentAlign: PropTypes.oneOf([
    'center',
    'inherit',
    'justify',
    'left',
    'right',
  ]),
  contentColor: PropTypes.string,
  contentFontFamily: PropTypes.string,
  contentFontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),
  contentVariant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
    PropTypes.string,
  ]),
  elevation: PropTypes.number,
  icon: PropTypes.element,
  iconColor: PropTypes.string,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  padding: PropTypes.number,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  titleAlign: PropTypes.oneOf([
    'center',
    'inherit',
    'justify',
    'left',
    'right',
  ]),
  titleColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),
  titleGutterBottom: PropTypes.bool,
  titleVariant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
    PropTypes.string,
  ]),
  variant: PropTypes.oneOf(['elevation', 'outlined']),
}

export default Alert
