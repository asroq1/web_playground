import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: '90%',
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  )
}
