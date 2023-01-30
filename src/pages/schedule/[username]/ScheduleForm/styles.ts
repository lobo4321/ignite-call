import { styled } from '@ignite-ui/react'

export const Container = styled('div', {
  '@media(max-width:768px)': {
    display: 'flex',
    flexDirection: 'column',
  },
})
