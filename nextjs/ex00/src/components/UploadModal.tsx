import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/system'
import Image from 'next/image'
const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface UploadModalTypes {
  title: string
  content: string
  open: boolean
  handleClose: () => void
}

const UploadModal = ({
  title,
  content,
  open,
  handleClose,
}: UploadModalTypes) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      // 여기서 이미지를 처리하거나 상태로 저장할 수 있습니다.
      const selectedFile = files[0]
      const reader = new FileReader()

      reader.onload = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)

      setSelectedImage(selectedFile)
    }
  }

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {content}
            </Typography>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              href="#file-upload"
            >
              이미지 선택
              <VisuallyHiddenInput
                type="file"
                id="image-upload"
                onChange={handleImageChange}
              />
            </Button>
            {previewImage && (
              <img
                src={previewImage}
                alt="Selected"
                style={{ maxWidth: '100%' }}
              />
            )}
            <Button variant="contained">업로드</Button>
          </Box>
        </Modal>
      )}
    </>
  )
}

export default UploadModal
