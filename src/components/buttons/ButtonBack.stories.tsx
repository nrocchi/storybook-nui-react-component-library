import React from 'react'
import {Story, ComponentMeta} from '@storybook/react'
import {Box, Theme, Typography, useTheme} from '@mui/material'
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone'
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import ButtonBack from './ButtonBack'
import {ButtonBackProps} from './ButtonTypes'
import {BrowserRouter, Link as RouterLink} from 'react-router-dom'
// import mdx from './Alert.mdx'

export default {
  title: 'Components/Buttons/ButtonBack',
  component: ButtonBack,
  parameters: {
    // layout: 'centered',
    docs: {
      // page: mdx,
      description: {
        // component: mdx,
        // component: readme,
        component: 'Some component _markdown_',
        // component: 'You may add readme.md file for Card here.',
        // story: 'Some story **markdown**',
      },
    },
    controls: {sort: 'alpha'},
    // jsx: {
    //   showDefaultProps: false,
    // },
  },
  args: {...ButtonBack.defaultProps},
  argTypes: {
    argTypes: {onClick: {action: 'clicked'}},
    // background: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // close: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // elevation: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // marginBottom: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // marginTop: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // padding: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // sx: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // variant: {
    //   table: {
    //     category: 'card',
    //   },
    // },
    // content: {
    //   control: 'text',
    //   table: {
    //     category: 'content',
    //   },
    // },
    // contentAlign: {
    //   table: {
    //     category: 'content',
    //   },
    // },
    // contentColor: {
    //   control: 'color',
    //   table: {
    //     category: 'content',
    //   },
    // },
    // contentFontFamily: {
    //   control: 'text',
    //   table: {
    //     category: 'content',
    //   },
    // },
    // contentFontStyle: {
    //   control: 'radio',
    //   options: ['normal', 'italic', 'oblique'],
    //   table: {
    //     category: 'content',
    //   },
    // },
    // contentVariant: {
    //   table: {
    //     category: 'content',
    //   },
    // },
    // icon: {
    //   table: {
    //     category: 'icon',
    //   },
    //   control: 'select',
    //   options: ['error', 'warning', 'success', 'info', 'new'],
    //   mapping: {
    //     error: <ErrorTwoToneIcon color="primary" />,
    //     warning: <WarningTwoToneIcon color="primary" />,
    //     success: <CheckCircleTwoToneIcon color="primary" />,
    //     info: <InfoTwoToneIcon color="primary" />,
    //     new: <NewReleasesTwoToneIcon color="primary" />,
    //   },
    // },
    // iconColor: {
    //   table: {
    //     category: 'icon',
    //   },
    // },
    // title: {
    //   control: 'text',
    //   table: {
    //     category: 'title',
    //   },
    // },
    // titleAlign: {
    //   table: {
    //     category: 'title',
    //   },
    // },
    // titleColor: {
    //   control: 'color',
    //   table: {
    //     category: 'title',
    //   },
    // },
    // titleFontFamily: {
    //   control: 'text',
    //   table: {
    //     category: 'title',
    //   },
    // },
    // titleFontStyle: {
    //   control: 'radio',
    //   options: ['normal', 'italic', 'oblique'],
    //   table: {
    //     category: 'title',
    //   },
    // },
    // titleVariant: {
    //   table: {
    //     category: 'title',
    //   },
    // },
  },
} as ComponentMeta<typeof ButtonBack>

const Template: Story<ButtonBackProps> = (args, globals) => {
  return (
    <BrowserRouter>
      <ButtonBack {...args} />
    </BrowserRouter>
  )
}

export const Default = Template.bind({})
Default.args = {}
