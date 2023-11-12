import { ChangeEventHandler, useContext, useRef } from 'react'
import Box from '@mui/material/Box'
import Folder from '@mui/icons-material/Folder'
import FolderOff from '@mui/icons-material/FolderOff'
import Tooltip from '@mui/material/Tooltip'
import CircularProgress from '@mui/material/CircularProgress'

import { RoomContext } from 'contexts/RoomContext'
import { PeerRoom } from 'services/PeerRoom/PeerRoom'

import { useRoomFileShare } from './useRoomFileShare'
import { MediaButton } from './MediaButton'

export interface RoomFileUploadControlsProps {
  onInlineMediaUpload: (files: File[]) => void
  peerRoom: PeerRoom
}

export function RoomFileUploadControls({
  peerRoom,
  onInlineMediaUpload,
}: RoomFileUploadControlsProps) {
  const roomContext = useContext(RoomContext)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { isMessageSending } = roomContext

  const {
    isFileSharingEnabled,
    isSharingFile,
    handleFileShareStart,
    handleFileShareStop,
    sharedFiles,
  } = useRoomFileShare({
    peerRoom,
    onInlineMediaUpload,
  })

  const handleToggleScreenShareButtonClick = () => {
    const { current: fileInput } = fileInputRef

    if (isSharingFile) {
      handleFileShareStop()
    } else {
      if (!fileInput) return

      fileInput.click()
    }
  }

  const handleFileSelect: ChangeEventHandler<HTMLInputElement> = e => {
    const { files } = e.target

    if (!files || files.length < 1) return

    handleFileShareStart(files)
  }

  const shareFileLabel =
    (sharedFiles && sharedFiles.length === 1 && sharedFiles[0].name) || 'files'

  const disableFileUpload = !isFileSharingEnabled || isMessageSending

  const buttonIcon = isSharingFile ? <Folder /> : <FolderOff />

 
}
