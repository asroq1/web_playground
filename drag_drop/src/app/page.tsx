'use client'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import 'react-resizable/css/styles.css' // 리사이징 기능을 위한 css 추가
// react-grid-layout library 가져오기
import { Responsive, WidthProvider } from 'react-grid-layout'
import { TextField } from '@mui/material'
import { log } from 'console'
// responsive grid 생성
const ResponsiveGridLayout = WidthProvider(Responsive)

export default function App() {
  const [layouts, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 1, h: 1, name: '1' },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
    { i: '4', x: 3, y: 0, w: 1, h: 1 },
    { i: '5', x: 0, y: 1, w: 1, h: 1 },
    { i: '6', x: 1, y: 1, w: 1, h: 1 },
    { i: '7', x: 2, y: 1, w: 1, h: 1, name: '7' },
    { i: '8', x: 3, y: 1, w: 1, h: 1 },
  ])

  const [layouts2, setLayouts2] = useState([])
  const [index, setIndex] = useState(1)
  useEffect(() => {
    console.log('레이아웃2', layouts2)
  }, [layouts])

  const onDrop = (layoutItem: any) => {
    const updatedLayouts1 = layouts.filter(item => item.i !== layoutItem.i)
    setLayout(updatedLayouts1)
    console.log('빠져나가나', layouts)
    setLayouts2([...layouts2, { ...layoutItem }])
    setIndex(index + 1)
  }
  // const rowLength = 4 // 한 행에 들어갈 요소의 갯수를 지정합니다.
  // const modifiedLayouts = layouts.map(item => {
  //   const row = Math.floor(item.i / rowLength) // 요소가 위치할 행번호
  //   const column = item.i % rowLength // 요소가 위치할 열번호
  //   console.log(`x: ${column}, y: ${row}`)
  //   return {
  //     ...item,
  //     x: column,
  //     y: row,
  //   }
  // })
  return (
    <>
      <div style={{ height: '50vh', background: 'black' }}>
        <ResponsiveGridLayout
          className='layout'
          layouts={{ lg: layouts }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
          rows={{ lg: 2, md: 2, sm: 4, xs: 4, xxs: 4 }}
          // maxRows={4}
          // maxCols={4}
          compactType={null}
          onDrop={onDrop}
          preventCollision={true}
        >
          {layouts.map(item => {
            return item.name ? (
              <Box key={item.i}>
                <Image
                  src='https://source.unsplash.com/user/USERNAME'
                  layout='fill'
                  alt='Picture of the author'
                />
              </Box>
            ) : (
              <Box key={item.i} sx={{ background: 'white', height: '100%' }}>
                <TextField
                  sx={{ width: '100%', height: '100%', padding: 0 }}
                  key={item.i}
                  id='outlined-basic'
                  label='Outlined'
                  variant='outlined'
                />
              </Box>
            )
          })}
        </ResponsiveGridLayout>
      </div>
      <div style={{ height: '50vh', backgroundColor: 'skyblue' }}>
        <ResponsiveGridLayout
          className='layout'
          // You can define a separate onDrop function for layouts2 if needed
          layouts={{ lg: layouts2 }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
          rows={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
          style={{ height: '100vh' }}
          maxRows={2}
          malcols={2}
          isDroppable={true}
          preventCollision={true}
        >
          {layouts2.map(item => {
            return item.name ? (
              <Box
                key={item.i}
                // sx={{
                //   display: 'flex',
                //   alignItems: 'center',
                //   justifyContent: 'center',
                //   boxSizing: 'border-box',
                // }}
              >
                <Image
                  src='https://source.unsplash.com/user/USERNAME'
                  layout='fill'
                  alt='Picture of the author'
                />
              </Box>
            ) : (
              <Box
                key={item.i}
                sx={{
                  boxSizing: 'border-box',
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {item.i}
              </Box>
            )
          })}
        </ResponsiveGridLayout>
      </div>
    </>
  )
}
