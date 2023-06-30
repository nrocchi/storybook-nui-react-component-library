import {CardProps, SxProps, Theme, TypographyProps} from '@mui/material'
import {ReactElement} from 'react'

export interface AlertProps {
  /** Provide the card background color.  */
  background?: string
  /** Display the close button to hide the alert. */
  close?: boolean
  /** Provide the content value.
   * You can also pass a ReactElement. */
  content?: ReactElement | string
  contentAlign?: TypographyProps['align']
  contentColor?: TypographyProps['color']
  contentFontFamily?: string
  contentFontStyle?: TypographyProps['fontStyle']
  contentVariant?: TypographyProps['variant']
  elevation?: number
  icon?: ReactElement
  iconColor?: string
  marginBottom?: number
  marginTop?: number
  padding?: number
  sx?: SxProps<Theme>
  title?: ReactElement | string
  titleAlign?: TypographyProps['align']
  titleColor?: TypographyProps['color']
  titleFontFamily?: string
  titleFontStyle?: TypographyProps['fontStyle']
  titleGutterBottom?: boolean
  titleVariant?: TypographyProps['variant']
  variant?: CardProps['variant']
}
