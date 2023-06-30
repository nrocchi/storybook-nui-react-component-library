import {alpha, styled} from '@mui/material'
import Alert from './Alert'

export const AlertStyled = styled(Alert)(({theme}) => ({
  background: alpha(theme.palette.primary.main, 0.2),
}))
