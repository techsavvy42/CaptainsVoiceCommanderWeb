import { useContext, useEffect } from 'react'
import MuiMarkdown from 'mui-markdown'
import Box from '@mui/material/Box'

import { ShellContext } from 'contexts/ShellContext'
import {
  messageTranscriptSizeLimit,
  messageCharacterSizeLimit,
} from 'config/messaging'

import './index.sass'

const messageTranscriptSizeLimitFormatted = Intl.NumberFormat().format(
  messageTranscriptSizeLimit
)

const messageCharacterSizeLimitFormatted = Intl.NumberFormat().format(
  messageCharacterSizeLimit
)

export const About = () => {
  const { setTitle } = useContext(ShellContext)

  useEffect(() => {
    setTitle('About')
  }, [setTitle])

  return (
    <Box className="About max-w-3xl mx-auto p-4">
      <MuiMarkdown>
        {`
        WILL BE UPDATED SOON
        `}
      </MuiMarkdown>
    </Box>
  )
}
