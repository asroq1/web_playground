'use client'
import React, { useCallback, useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { log } from 'console'
import UploadModal from './UploadModal'
const drawerWidth = 240

const SideBar = () => {
  const [image, setImage] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)

  const uploadHandler = useCallback(() => {
    setImage(!image)
    setOpen(!open)
    console.log(image)
  }, [image])

  return (
    <>
      <UploadModal
        title="이미지 선택"
        content="원하시는 사진을 골라주세요."
        open={open}
        handleClose={handleClose}
      />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            {['Upload'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={uploadHandler}>
                  <ListItemIcon>
                    <UploadIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  )
}

export default SideBar
