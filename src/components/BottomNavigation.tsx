"use client"

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--dark-bg);
  padding: 12px 0;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  
  &.active {
    color: #8ab4f8;
  }
`

const HomeIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background-color: white;
  border-radius: 100px;
  margin: 8px auto;
`

export function BottomNavigation() {
  return (
    <Container>
      <NavItem className="active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#8ab4f8" />
        </svg>
      </NavItem>
      <NavItem>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
            fill="#9aa0a6"
          />
          <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#9aa0a6" />
        </svg>
      </NavItem>
      <NavItem>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z"
            fill="#9aa0a6"
          />
        </svg>
      </NavItem>
      <NavItem>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#9aa0a6" />
        </svg>
      </NavItem>
      <HomeIndicator />
    </Container>
  )
}
