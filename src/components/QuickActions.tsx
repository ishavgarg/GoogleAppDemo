"use client"

import styled from 'styled-components'
import { media } from '../styles/responsive'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 0 16px;

  ${media.maxSm} {
    margin-top: 20px;
    padding: 0 12px;
  }

  ${media.maxXs} {
    margin-top: 16px;
    padding: 0 8px;
  }
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  &.images {
    background-color: #65553E;
  }
  
  &.translate {
    background-color: #394A74;
  }
  
  &.education {
    background-color: #3D5F47;
  }
  
  &.music {
    background-color: #79403C;
  }

  ${media.maxSm} {
    width: 60px;
    height: 60px;
  }

  ${media.maxXs} {
    width: 50px;
    height: 50px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.maxSm} {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${media.maxXs} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export function QuickActions() {
  return (
    <Container>
      <ActionButton className="images">
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
              fill="white"
            />
            <path d="M14.5 11L11 15.5L8.5 12.5L5 17H19L14.5 11Z" fill="white" />
          </svg>
        </Icon>
      </ActionButton>
      <ActionButton className="translate">
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
              fill="white"
            />
          </svg>
        </Icon>
      </ActionButton>
      <ActionButton className="education">
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z"
              fill="white"
            />
          </svg>
        </Icon>
      </ActionButton>
      <ActionButton className="music">
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z"
              fill="white"
            />
          </svg>
        </Icon>
      </ActionButton>
    </Container>
  )
}
