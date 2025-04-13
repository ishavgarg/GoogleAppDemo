"use client"

import styled from 'styled-components'
import { media, spacing } from '../styles/responsive'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearchBarClick: () => void
  onVoiceClick: () => void
  onLensClick: () => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 0 16px;
  height: 56px;
  margin: 0 auto;
  width: 100%;
  max-width: 584px;
  cursor: pointer;

  ${media.maxSm} {
    height: 48px;
    padding: 0 12px;
    border-radius: 20px;
  }

  ${media.maxXs} {
    height: 42px;
    padding: 0 10px;
    border-radius: 18px;
  }
`

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  ${media.maxSm} {
    margin-right: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  ${media.maxXs} {
    margin-right: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 16px;
  outline: none;
  cursor: pointer;
  
  &::placeholder {
    color: var(--secondary-text);
  }

  ${media.maxSm} {
    font-size: 14px;
  }

  ${media.maxXs} {
    font-size: 13px;
  }
`

const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  cursor: pointer;

  ${media.maxSm} {
    margin-left: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  ${media.maxXs} {
    margin-left: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export function SearchBar({ value, onChange, onSearchBarClick, onVoiceClick, onLensClick }: SearchBarProps) {
  return (
    <Container onClick={onSearchBarClick}>
      <SearchIcon>
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="#9aa0a6"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          ></path>
        </svg>
      </SearchIcon>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => {
          e.stopPropagation()
          onSearchBarClick()
        }}
        readOnly
      />
      <ActionIcon
        onClick={(e) => {
          e.stopPropagation()
          onVoiceClick()
        }}
      >
        <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="white"
            d="M12 15c1.66 0 3-1.31 3-2.97V5.97C15 4.31 13.66 3 12 3S9 4.31 9 5.97v6.06c0 1.66 1.34 2.97 3 2.97z"
          ></path>
          <path fill="white" d="M11 18.08h2V22h-2z"></path>
          <path
            fill="white"
            d="M7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          ></path>
          <path
            fill="white"
            d="M12 16.93a4.97 5.25 0 0 1-3.54-1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          ></path>
        </svg>
      </ActionIcon>
      <ActionIcon 
        onClick={(e) => {
          e.stopPropagation()
          onLensClick()
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z"
            fill="white"
          />
          <path
            d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"
            fill="white"
          />
        </svg>
      </ActionIcon>
    </Container>
  )
}
