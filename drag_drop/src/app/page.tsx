'use client'

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
  const layouts = [
    { i: '1', x: 0, y: 0, w: 1, h: 1, name: '1' },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
    { i: '4', x: 3, y: 0, w: 1, h: 1 },
    { i: '5', x: 0, y: 1, w: 1, h: 1 },
    { i: '6', x: 1, y: 1, w: 1, h: 1 },
    { i: '7', x: 2, y: 1, w: 1, h: 1, name: '7' },
    { i: '8', x: 3, y: 1, w: 1, h: 1 },
    { i: '9', x: 0, y: 2, w: 1, h: 1 },
    { i: '10', x: 1, y: 2, w: 1, h: 1 },
    { i: '11', x: 2, y: 2, w: 1, h: 1 },
    { i: '12', x: 3, y: 2, w: 1, h: 1 },
    { i: '13', x: 0, y: 3, w: 1, h: 1, name: '13' },
    { i: '14', x: 1, y: 3, w: 1, h: 1 },
    { i: '15', x: 2, y: 3, w: 1, h: 1 },
    { i: '16', x: 3, y: 3, w: 1, h: 1 },
  ]
  const rowLength = 4 // 한 행에 들어갈 요소의 갯수를 지정합니다.
  const modifiedLayouts = layouts.map(item => {
    const row = Math.floor(item.i / rowLength) // 요소가 위치할 행번호
    const column = item.i % rowLength // 요소가 위치할 열번호
    console.log(`x: ${column}, y: ${row}`)
    return {
      ...item,
      x: column,
      y: row,
    }
  })
  return (
    <div style={{ height: '100vh' }}>
      <ResponsiveGridLayout
        className='layout'
        layouts={{ lg: modifiedLayouts }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 }}
        // compactType={null}
      >
        {modifiedLayouts.map(item => {
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
              <TextField
                label='Name'
                variant='outlined'
                onChange={event => {}}
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
  )
}
