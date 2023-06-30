import React from 'react'
import {Story, ComponentMeta} from '@storybook/react'
import {Box, Theme, Typography, useTheme} from '@mui/material'
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone'
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import Alert from './Alert'
import {AlertProps} from './AlertTypes'
import mdx from './Alert.mdx'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    // layout: 'centered',
    docs: {
      page: mdx,
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
  args: {...Alert.defaultProps},
  argTypes: {
    background: {
      table: {
        category: 'card',
      },
    },
    close: {
      table: {
        category: 'card',
      },
    },
    elevation: {
      table: {
        category: 'card',
      },
    },
    marginBottom: {
      table: {
        category: 'card',
      },
    },
    marginTop: {
      table: {
        category: 'card',
      },
    },
    padding: {
      table: {
        category: 'card',
      },
    },
    sx: {
      table: {
        category: 'card',
      },
    },
    variant: {
      table: {
        category: 'card',
      },
    },
    content: {
      control: 'text',
      table: {
        category: 'content',
      },
    },
    contentAlign: {
      table: {
        category: 'content',
      },
    },
    contentColor: {
      control: 'color',
      table: {
        category: 'content',
      },
    },
    contentFontFamily: {
      control: 'text',
      table: {
        category: 'content',
      },
    },
    contentFontStyle: {
      control: 'radio',
      options: ['normal', 'italic', 'oblique'],
      table: {
        category: 'content',
      },
    },
    contentVariant: {
      table: {
        category: 'content',
      },
    },
    icon: {
      table: {
        category: 'icon',
      },
      control: 'select',
      options: ['error', 'warning', 'success', 'info', 'new'],
      mapping: {
        error: <ErrorTwoToneIcon color="primary" />,
        warning: <WarningTwoToneIcon color="primary" />,
        success: <CheckCircleTwoToneIcon color="primary" />,
        info: <InfoTwoToneIcon color="primary" />,
        new: <NewReleasesTwoToneIcon color="primary" />,
      },
    },
    iconColor: {
      table: {
        category: 'icon',
      },
    },
    title: {
      control: 'text',
      table: {
        category: 'title',
      },
    },
    titleAlign: {
      table: {
        category: 'title',
      },
    },
    titleColor: {
      control: 'color',
      table: {
        category: 'title',
      },
    },
    titleFontFamily: {
      control: 'text',
      table: {
        category: 'title',
      },
    },
    titleFontStyle: {
      control: 'radio',
      options: ['normal', 'italic', 'oblique'],
      table: {
        category: 'title',
      },
    },
    titleVariant: {
      table: {
        category: 'title',
      },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: Story<AlertProps> = (args, globals) => {
  return <Alert {...args} />
}

export const Default = Template.bind({})
Default.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  content:
    'Irure eiusmod aute pariatur cupidatat et qui. Labore aliqua exercitation non consectetur aliquip in in nisi. Non et exercitation consequat in adipisicing irure veniam in aliqua anim consequat minim. Ipsum cupidatat fugiat do esse id enim voluptate consequat fugiat esse. Pariatur Lorem nostrud proident incididunt cillum. Ut labore mollit commodo elit ullamco. Nisi consectetur pariatur tempor id sit adipisicing aute laborum amet eu. Tempor exercitation ut laboris in ullamco et excepteur proident eiusmod incididunt exercitation. Id proident labore mollit ullamco qui eiusmod occaecat. Sunt laboris labore eu ex consectetur consequat proident deserunt qui officia pariatur sint. Nisi nostrud amet ea labore. Incididunt voluptate laborum adipisicing eu commodo veniam laborum occaecat quis qui anim. Do nostrud deserunt ex tempor occaecat nostrud anim veniam eu do elit proident aliquip aute. Laboris veniam duis deserunt cillum commodo adipisicing cupidatat aute dolor in laboris. Magna excepteur laboris ullamco dolor qui culpa sunt. Irure aliquip cillum ipsum dolor pariatur nulla proident laboris eu sint deserunt aliqua occaecat. Anim excepteur aliquip exercitation ut veniam cupidatat tempor velit amet minim exercitation. Velit deserunt officia dolor ullamco ullamco ea mollit est exercitation in mollit officia.',
}

export const Element = Template.bind({})
Element.args = {
  title: (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography variant="h4" mr={0.5}>
        This is a title with a ReactElement
      </Typography>
      <ErrorTwoToneIcon />
    </Box>
  ),
  content: (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography variant="body2" fontStyle="italic" mr={0.5}>
        This is a content with a ReactElement
      </Typography>
      <CheckCircleTwoToneIcon color="secondary" />
    </Box>
  ),
}

export const Gradient: Story<AlertProps> = (args) => {
  const theme: Theme = useTheme()

  return theme.palette.gradients?.primary ? (
    <Alert
      {...args}
      title={
        args.title
          ? args.title
          : 'Id officia fugiat labore sunt pariatur voluptate pariatur duis adipisicing reprehenderit eu ex mollit id.'
      }
      titleColor={
        args.titleColor
          ? args.titleColor
          : theme.palette?.getContrastText(theme.palette.primary.main)
      }
      content={
        args.content
          ? args.content
          : 'Labore ad occaecat ex commodo Lorem sint non qui quis laboris sit ad id. Id nulla amet Lorem nostrud cupidatat est deserunt nisi esse. Incididunt duis aute excepteur proident laborum magna Lorem. Sit culpa nisi cillum aliquip elit qui irure cupidatat.'
      }
      contentColor={
        args.contentColor
          ? args.contentColor
          : theme.palette?.getContrastText(theme.palette.primary.main)
      }
      background={
        args.background ? args.background : theme.palette.gradients?.primary
      }
      iconColor={
        args.iconColor
          ? args.iconColor
          : theme.palette.getContrastText(theme.palette.primary.main)
      }
      variant="elevation"
    />
  ) : (
    <Alert
      {...args}
      title={
        args.title
          ? args.title
          : 'Id officia fugiat labore sunt pariatur voluptate pariatur duis adipisicing reprehenderit eu ex mollit id.'
      }
      titleColor={
        args.titleColor ? args.titleColor : theme.palette?.primary?.contrastText
      }
      content={
        args.content
          ? args.content
          : 'Labore ad occaecat ex commodo Lorem sint non qui quis laboris sit ad id. Id nulla amet Lorem nostrud cupidatat est deserunt nisi esse. Incididunt duis aute excepteur proident laborum magna Lorem. Sit culpa nisi cillum aliquip elit qui irure cupidatat.'
      }
      contentColor={
        args.contentColor
          ? args.contentColor
          : theme.palette?.primary?.contrastText
      }
      iconColor={
        args.iconColor ? args.iconColor : theme.palette?.primary?.contrastText
      }
      variant="elevation"
      sx={
        args.background
          ? {background: args.background}
          : // : {background: 'linear-gradient(135deg, #addbff 0%, #1976d2 100%)'}
            {background: theme.palette?.primary?.dark}
      }
    />
  )
}

export const Icon: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      title="Go back"
      icon={<NewReleasesTwoToneIcon color="primary" />}
    />
  )
}

export const Empty = Template.bind({})

export const Close = Template.bind({})
Close.args = {
  close: false,
}

Close.parameters = {
  docs: {
    description: {
      // component: 'Some component _markdown_',
      // component: 'You may add readme.md2 file for Gradient Card here.',
      story: 'Some story2 **markdown**',
    },
  },
}
