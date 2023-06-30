import React from 'react'
import PropTypes from 'prop-types'
import {Link as RouterLink} from 'react-router-dom'
import {Button} from '@mui/material'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone'
import {useTranslation} from 'react-i18next'
import {ButtonBackProps} from './ButtonTypes'

const ButtonBack = (props: ButtonBackProps) => {
  const {t} = useTranslation()

  return (
    <Button
      color={props.color}
      component={RouterLink}
      size={props.size}
      startIcon={<ArrowBackTwoToneIcon />}
      sx={{display: 'flex', ...props.sx}}
      to={props.to}
      variant={props.variant}
    >
      {t('Go back')}
      {props.page
        ? ` ${t('to the {{ value }} page', {value: t(props.page)})}`
        : ''}
    </Button>
  )
}

ButtonBack.defaultProps = {
  color: 'secondary',
  // component: RouterLink,
  page: null,
  size: 'medium',
  // to: -1,
  variant: 'contained',
}

ButtonBack.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
    PropTypes.string,
  ]),
  // component: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  page: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', PropTypes.string]),
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', PropTypes.string]),
}

export default ButtonBack
