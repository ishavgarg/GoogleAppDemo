"use client"

import styled from 'styled-components'
import { media } from '../styles/responsive'

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding: 0 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  ${media.maxSm} {
    gap: 6px;
    padding: 0 12px;
    margin-top: 8px;
  }

  ${media.maxXs} {
    gap: 4px;
    padding: 0 8px;
    margin-top: 6px;
  }
`

const Card = styled.div`
  min-width: 150px;
  flex: 0 0 auto;
  background-color: #303134;
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
  scroll-snap-align: start;

  ${media.maxSm} {
    min-width: 130px;
    padding: 14px;
    border-radius: 14px;
  }

  ${media.maxXs} {
    min-width: 110px;
    padding: 12px;
    border-radius: 12px;
  }
`

const CardTitle = styled.div`
  font-size: 14px;
  color: var(--text-color);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  ${media.maxSm} {
    font-size: 13px;
    margin-bottom: 3px;
  }

  ${media.maxXs} {
    font-size: 12px;
    margin-bottom: 2px;
  }
`

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardValue = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: white;

  ${media.maxSm} {
    font-size: 28px;
  }

  ${media.maxXs} {
    font-size: 24px;
  }
`

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;

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

const SettingsCard = styled(Card)`
  min-width: 80px;
  flex: 0 0 80px;

  ${media.maxSm} {
    min-width: 70px;
    flex: 0 0 70px;
  }

  ${media.maxXs} {
    min-width: 60px;
    flex: 0 0 60px;
  }
`

const SettingsIcon = styled(CardIcon)`
  margin-top: 4px;
`

export function InfoCards() {
  return (
    <Container>
      <Card>
        <CardTitle>Gurugram</CardTitle>
        <CardInfo>
          <CardValue>30°</CardValue>
          <CardIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 110-14 7 7 0 010 14z"
                fill="white"
                opacity="0.5"
              />
              <path
                d="M12 6a6 6 0 000 12 6 6 0 000-12z"
                fill="white"
                opacity="0.5"
              />
              <path
                d="M10 12a2 2 0 114 0 2 2 0 01-4 0z"
                fill="white"
              />
            </svg>
          </CardIcon>
        </CardInfo>
      </Card>
      <Card>
        <CardTitle>Air quality · 170</CardTitle>
        <CardInfo>
          <CardValue>Moderate</CardValue>
          <CardIcon>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#FFEB3B" />
              <path
                d="M7.5 12C7.5 12.83 8.17 13.5 9 13.5C9.83 13.5 10.5 12.83 10.5 12C10.5 11.17 9.83 10.5 9 10.5C8.17 10.5 7.5 11.17 7.5 12Z"
                fill="#000000"
              />
              <path
                d="M13.5 12C13.5 12.83 14.17 13.5 15 13.5C15.83 13.5 16.5 12.83 16.5 12C16.5 11.17 15.83 10.5 15 10.5C14.17 10.5 13.5 11.17 13.5 12Z"
                fill="#000000"
              />
              <path d="M9 15H15C15 16.1 13.66 17 12 17C10.34 17 9 16.1 9 15Z" fill="#000000" />
            </svg>
          </CardIcon>
        </CardInfo>
      </Card>
      <Card>
        <CardTitle>Stocks</CardTitle>
        <CardInfo>
          <CardValue>↑2.4%</CardValue>
          <CardIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
                fill="#34a853"
              />
            </svg>
          </CardIcon>
        </CardInfo>
      </Card>
      <Card>
        <CardTitle>News</CardTitle>
        <CardInfo>
          <CardValue>12</CardValue>
          <CardIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 3H2C0.9 3 0 3.9 0 5v14c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H2V5h20v14zM10 7h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h6v2h-6v-2zM4 7h4v10H4V7z"
                fill="#4285f4"
              />
            </svg>
          </CardIcon>
        </CardInfo>
      </Card>
      <SettingsCard>
        <SettingsIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
              fill="white"
            />
          </svg>
        </SettingsIcon>
      </SettingsCard>
    </Container>
  )
}
