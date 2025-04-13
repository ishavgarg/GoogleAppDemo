"use client"

import styled from 'styled-components'
import { media } from '../styles/responsive'

interface TopBarProps {
  onAvatarClick: () => void
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-top: 15px;
  margin-bottom: 15px;

  ${media.maxSm} {
    padding: 6px 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  ${media.maxXs} {
    padding: 4px 8px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const FlaskIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.maxSm} {
    width: 36px;
    height: 36px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${media.maxXs} {
    width: 32px;
    height: 32px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const SearchPill = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 7px 13px 5px 3px;
  gap: 8px;
  flex: 0 1 auto;
  width: auto;
  margin: 0 16px;

  ${media.maxSm} {
    margin: 0 12px;
    padding: 6px 10px 4px 2px;
    border-radius: 10px;
    gap: 6px;
  }

  ${media.maxXs} {
    margin: 0 8px;
    padding: 5px 8px 3px 2px;
    border-radius: 8px;
    gap: 4px;
  }
`

const SearchPillSmall = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--dark-bg);
  border-radius: 12px;
  padding: 10px 14px;
  gap: 7px;
  flex: 0 1 auto;
  width: auto;
  margin: 0 2px;

  ${media.maxSm} {
    padding: 8px 12px;
    border-radius: 10px;
    gap: 6px;
  }

  ${media.maxXs} {
    padding: 6px 10px;
    border-radius: 8px;
    gap: 5px;
  }
`

const GoogleIcon = styled.div`
  width: 20px;
  height: 20px;

  ${media.maxSm} {
    width: 18px;
    height: 18px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${media.maxXs} {
    width: 16px;
    height: 16px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const SearchText = styled.span`
  color: var(--text-color);
  font-size: 16px;
  flex: 1;
  white-space: nowrap;
  margin-right: 4px;

  ${media.maxSm} {
    font-size: 14px;
  }

  ${media.maxXs} {
    font-size: 13px;
  }
`

const StarIcon = styled.div`
  width: 24px;
  height: 24px;

  ${media.maxSm} {
    width: 22px;
    height: 22px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${media.maxXs} {
    width: 20px;
    height: 20px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${media.maxSm} {
    width: 32px;
    height: 32px;
  }

  ${media.maxXs} {
    width: 28px;
    height: 28px;
  }
`

const AvatarInner = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;

  ${media.maxSm} {
    font-size: 16px;
  }

  ${media.maxXs} {
    font-size: 14px;
  }
`

export function TopBar({ onAvatarClick }: TopBarProps) {
  return (
    <Container>
      <FlaskIcon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3L9 8.5L4 18H20L15 8.5V3H9Z" stroke="#8ab4f8" strokeWidth="2" fill="none" />
          <path d="M9 3H15" stroke="#8ab4f8" strokeWidth="2" />
        </svg>
      </FlaskIcon>
      <SearchPill>
        <SearchPillSmall>
          <GoogleIcon>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </GoogleIcon>
          <SearchText>Search</SearchText>
        </SearchPillSmall>
        
        <StarIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#4285F4"
            />
          </svg>
        </StarIcon>
      </SearchPill>
      <Avatar onClick={onAvatarClick}>
        <AvatarInner>A</AvatarInner>
      </Avatar>
    </Container>
  )
}
