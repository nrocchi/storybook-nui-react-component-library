import {ButtonProps, SxProps, Theme} from '@mui/material'
import {ElementType, MouseEventHandler, ReactElement} from 'react'

export interface ButtonBackProps extends ButtonProps {
  color?: ButtonProps['color']
  component?: ElementType
  size?: ButtonProps['size']
  page?: string | null
  to?: any
  variant?: ButtonProps['variant']
  sx?: SxProps<Theme>
}
