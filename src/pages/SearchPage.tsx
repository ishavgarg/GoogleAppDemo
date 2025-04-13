"use client"

import styled from 'styled-components'
import { media, spacing } from '../styles/responsive'
import { useState } from "react"
import { StatusBar } from "../components/StatusBar"
import { ChevronLeft } from "lucide-react"
import { History } from "lucide-react"

interface SearchPageProps {
  onBack: () => void
  onSearch?: () => void
  onVoice?: () => void
  onLens?: () => void
}

const PageContainer = styled.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;

  ${media.maxSm} {
    padding: 6px 12px;
    gap: 10px;
  }

  ${media.maxXs} {
    padding: 4px 8px;
    gap: 8px;
  }
`

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  ${media.maxSm} {
    padding: 6px;
  }

  ${media.maxXs} {
    padding: 4px;
  }
`

const SearchInputContainer = styled.div`
  flex: 1;
  position: relative;
`

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 16px;
  outline: none;
  padding: 8px 0;
  caret-color: white;
  animation: blink-caret 1s step-end infinite;

  @keyframes blink-caret {
    from, to { caret-color: white; }
    50% { caret-color: transparent; }
  }

  &::placeholder {
    color: var(--secondary-text);
  }

  ${media.maxSm} {
    font-size: 14px;
    padding: 6px 0;
  }

  ${media.maxXs} {
    font-size: 13px;
    padding: 4px 0;
  }
`

const VoiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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

const LensIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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

const SearchContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RecentSearchesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: var(--text-color);

  ${media.maxSm} {
    padding: 12px;
    font-size: 14px;
  }

  ${media.maxXs} {
    padding: 8px;
    font-size: 13px;
  }
`

const ManageHistoryButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;

  ${media.maxSm} {
    font-size: 12px;
  }

  ${media.maxXs} {
    font-size: 11px;
  }
`

const RecentSearchesList = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;

  ${media.maxSm} {
    padding: 10px 12px;
    gap: 12px;
  }

  ${media.maxXs} {
    padding: 8px;
    gap: 8px;
  }
`

const HistoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.maxSm} {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${media.maxXs} {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const SearchText = styled.span`
  color: var(--text-color);
  font-size: 16px;

  ${media.maxSm} {
    font-size: 14px;
  }

  ${media.maxXs} {
    font-size: 13px;
  }
`

const IncognitoToggle = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  margin-top: auto;
  color: var(--text-color);

  ${media.maxSm} {
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }

  ${media.maxXs} {
    padding: 8px;
    gap: 8px;
    font-size: 13px;
  }
`

const ToggleSwitch = styled.div`
  position: relative;
  width: 40px;
  height: 24px;

  ${media.maxSm} {
    width: 36px;
    height: 22px;
  }

  ${media.maxXs} {
    width: 32px;
    height: 20px;
  }
`

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #444;
  border-radius: 34px;
  cursor: pointer;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }

  ${ToggleInput}:checked + & {
    background-color: white;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(16px);
  }

  ${media.maxSm} {
    &:before {
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 4px;
    }

    ${ToggleInput}:checked + &:before {
      transform: translateX(14px);
    }
  }

  ${media.maxXs} {
    &:before {
      height: 12px;
      width: 12px;
      left: 4px;
      bottom: 4px;
    }

    ${ToggleInput}:checked + &:before {
      transform: translateX(12px);
    }
  }
`

const Keyboard = styled.div`
  background-color: #202124;
  padding: 8px 4px;

  ${media.maxSm} {
    padding: 6px 3px;
  }

  ${media.maxXs} {
    padding: 4px 2px;
  }
`

const KeyboardRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  ${media.maxSm} {
    margin-bottom: 6px;
  }

  ${media.maxXs} {
    margin-bottom: 4px;
  }
`

const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 40px;
  background-color: #444;
  border-radius: 4px;
  margin: 0 2px;
  color: white;
  font-size: 18px;

  &.shift, &.backspace {
    width: 40px;
  }

  &.numbers {
    width: 48px;
    font-size: 14px;
  }

  &.emoji {
    width: 40px;
  }

  &.space {
    width: 160px;
    font-size: 14px;
  }

  &.search-key {
    width: 80px;
    background-color: #444;
    color: white;
  }

  ${media.maxSm} {
    width: 28px;
    height: 36px;
    font-size: 16px;
    margin: 0 1px;
    
    &.shift, &.backspace {
      width: 36px;
    }
    
    &.numbers {
      width: 42px;
      font-size: 12px;
    }
    
    &.emoji {
      width: 36px;
    }
    
    &.space {
      width: 140px;
      font-size: 12px;
    }
    
    &.search-key {
      width: 70px;
    }
  }
  
  ${media.maxXs} {
    width: 24px;
    height: 32px;
    font-size: 14px;
    margin: 0 1px;
    border-radius: 3px;
    
    &.shift, &.backspace {
      width: 32px;
    }
    
    &.numbers {
      width: 36px;
      font-size: 10px;
    }
    
    &.emoji {
      width: 32px;
    }
    
    &.space {
      width: 120px;
      font-size: 10px;
    }
    
    &.search-key {
      width: 60px;
    }
  }
`

const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  background-color: #202124;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${media.maxSm} {
    padding: 10px 0;
  }

  ${media.maxXs} {
    padding: 8px 0;
  }
`

const GlobeIcon = styled.div`
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

const MicIcon = styled.div`
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

export function SearchPage({ onBack, onSearch, onVoice, onLens }: SearchPageProps) {
  const [searchValue, setSearchValue] = useState("")
  const recentSearches = [
    "weather today",
    "twitter login",
    "translate hello to spanish",
    "best restaurants near me",
    "how to make chocolate chip cookies"
  ]

  const handleSubmit = () => {
    if (onSearch) {
      onSearch()
    }
  }

  const handleSearchItemClick = () => {
    if (onSearch) {
      onSearch()
    }
  }
  
  return (
    <PageContainer>
      <StatusBar time="18:34" batteryLevel={38} />
      <SearchHeader>
        <BackButton onClick={onBack}>
          <ChevronLeft size={24} color="white" />
        </BackButton>
        <SearchInputContainer>
          <SearchInput
            placeholder="Search or type URL"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchValue.trim() !== '') {
                handleSubmit()
              }
            }}
            autoFocus
          />
        </SearchInputContainer>
        <VoiceIcon onClick={onVoice}>
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
        </VoiceIcon>
        <LensIcon onClick={onLens}>
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
        </LensIcon>
      </SearchHeader>

      <SearchContent>
        <RecentSearchesHeader>
          <span>Recent searches</span>
          <ManageHistoryButton>MANAGE HISTORY</ManageHistoryButton>
        </RecentSearchesHeader>

        <RecentSearchesList>
          {recentSearches.map((search, index) => (
            <SearchItem key={index} onClick={handleSearchItemClick}>
              <HistoryIcon>
                <History size={20} color="white" />
              </HistoryIcon>
              <SearchText>{search}</SearchText>
            </SearchItem>
          ))}
        </RecentSearchesList>

        <IncognitoToggle>
          <ToggleSwitch>
            <ToggleInput type="checkbox" id="incognito-toggle" />
            <ToggleLabel htmlFor="incognito-toggle"></ToggleLabel>
          </ToggleSwitch>
          <span>Incognito mode</span>
        </IncognitoToggle>

        {/* <Keyboard>
          <KeyboardRow>
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
              <Key key={key}>
                {key}
              </Key>
            ))}
          </KeyboardRow>
          <KeyboardRow>
            {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
              <Key key={key}>
                {key}
              </Key>
            ))}
          </KeyboardRow>
          <KeyboardRow>
            <Key className="shift">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="white" />
              </svg>
            </Key>
            {["z", "x", "c", "v", "b", "n", "m"].map((key) => (
              <Key key={key}>
                {key}
              </Key>
            ))}
            <Key className="backspace">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.31 21 7 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3ZM19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12L19 15.59Z"
                  fill="white"
                />
              </svg>
            </Key>
          </KeyboardRow>
          <KeyboardRow>
            <Key className="numbers">123</Key>
            <Key className="emoji">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z"
                  fill="white"
                />
              </svg>
            </Key>
            <Key className="space">space</Key>
            <Key className="search-key">search</Key>
          </KeyboardRow>
        </Keyboard> */}

        {/* <BottomNav>
          <GlobeIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                fill="white"
              />
            </svg>
          </GlobeIcon>
          <MicIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 14C13.66 14 14.99 12.66 14.99 11L15 5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM17.3 11C17.3 14 14.76 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C16.28 17.24 19 14.42 19 11H17.3Z"
                fill="white"
              />
            </svg>
          </MicIcon>
        </BottomNav> */}
      </SearchContent>
    </PageContainer>
  )
}
