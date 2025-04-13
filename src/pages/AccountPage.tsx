"use client"

import styled from 'styled-components'
import { StatusBar } from "../components/StatusBar"
import { X, ChevronDown, Camera, Clock, Shield, Grid, Key, User, Sliders, HelpCircle } from "lucide-react"

interface AccountPageProps {
  onClose: () => void
}

const PageContainer = styled.div`
  background-color: var(--dark-bg);
  min-height: 100vh;
  position: relative;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`

const FlaskIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchPill = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: 24px;
  padding: 8px 16px;
  gap: 8px;
  flex: 1;
  max-width: 320px;
  margin: 0 16px;
`

const GoogleIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchText = styled.span`
  color: var(--text-color);
  font-size: 16px;
  flex: 1;
`

const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AvatarInner = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
`

const AccountModal = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2a2b2e;
  border-radius: 28px 28px 0 0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const GoogleLogo = styled.div`
  display: inline-block;
`

const AccountHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 24px;
`

const AccountAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 16px;
`

const AccountAvatarInner = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 500;
`

const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #3c4043;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AccountInfo = styled.div`
  flex: 1;
`

const AccountName = styled.div`
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`

const AccountEmail = styled.div`
  color: var(--secondary-text);
  font-size: 14px;
`

const DropdownButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
`

const ManageAccountButton = styled.button`
  display: block;
  width: calc(100% - 48px);
  margin: 0 24px 24px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 24px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
`

const AccountOptions = styled.div`
  margin-bottom: 24px;
`

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  color: var(--text-color);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &.sub-option {
    padding-left: 60px;
    color: white;
    background-color: #232427;
    border-top: none;
  }
`

const OptionIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const OptionStatus = styled.span`
  margin-left: auto;
  color: var(--secondary-text);
  font-size: 14px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  color: var(--secondary-text);
  font-size: 14px;
  margin-top: auto;
`

const Dot = styled.span`
  font-weight: bold;
`

export function AccountPage({ onClose }: AccountPageProps) {
  return (
    <PageContainer>
      <StatusBar time="18:24" batteryLevel={41} />
      <TopBar>
        <FlaskIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3L9 8.5L4 18H20L15 8.5V3H9Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M9 3H15" stroke="white" strokeWidth="2" />
          </svg>
        </FlaskIcon>
        <SearchPill>
          <GoogleIcon>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M3.064 7.51A9.996 9.996 0 0112 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 001.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 012 12c0-1.614.386-3.14 1.064-4.49z"/>
              <path fill="#EA4335" d="M3.064 7.51A9.996 9.996 0 012 12c0 1.614.386 3.14 1.064 4.49l4.073-3.514A5.968 5.968 0 016.823 12c0-.66.114-1.3.314-1.9L3.064 7.51z"/>
              <path fill="#FBBC04" d="M12 17.023c-2.605 0-4.81-1.76-5.595-4.123-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9L3.064 7.51A9.996 9.996 0 002 12c0 5.522 4.477 10 10 10 2.7 0 4.964-.895 6.618-2.41l-3.902-3.18c-.896.6-2.04.955-3.386.955-.002 0-.003 0-.005 0h.005z"/>
              <path fill="#34A853" d="M12 5.977c2.481 0 4.145 1.15 5.095 2.137l2.867-2.868C17.859 2.99 15.595 2 12 2 6.512 2 2.055 6.412 2.055 11.9c0 .59 0 .618.003.627l4.074 3.515c.775-2.364 2.98-4.119 5.585-4.119h.018-.014z"/>
            </svg>
          </GoogleIcon>
          <SearchText>Search</SearchText>
          <StarIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="white"
              />
            </svg>
          </StarIcon>
        </SearchPill>
        <Avatar>
          <AvatarInner>A</AvatarInner>
        </Avatar>
      </TopBar>

      <AccountModal>
        <CloseButton onClick={onClose}>
          <X size={24} color="white" />
        </CloseButton>
        
        <ModalHeader>
        <svg viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg" width="80"><path fill="white" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path><path fill="white" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path><path fill="white" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"></path><path fill="white" d="M225 3v65h-9.5V3h9.5z"></path><path fill="white" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"></path><path fill="white" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"></path></svg>


        </ModalHeader>

        <AccountHeader>
          <AccountAvatar>
            <AccountAvatarInner>A</AccountAvatarInner>
            <CameraIcon>
              <Camera size={16} color="white" />
            </CameraIcon>
          </AccountAvatar>
          <AccountInfo>
            <AccountName>A Demo</AccountName>
            <AccountEmail>legend@gmail.com</AccountEmail>
          </AccountInfo>
          <DropdownButton>
            <ChevronDown size={24} color="white" />
          </DropdownButton>
        </AccountHeader>

        <ManageAccountButton>Manage your Google Account</ManageAccountButton>

        <AccountOptions>
          <OptionItem>
            <OptionIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                <path d="M9 16h6c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1h-1V7c0-1.1-.9-2-2-2s-2 .9-2 2v2H9c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1zm4-10c0-.55.45-1 1-1s1 .45 1 1v2h-2V6z" fill="white"/>
              </svg>
            </OptionIcon>
            <span>Turn on Incognito</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <Clock size={24} color="white" />
            </OptionIcon>
            <span>Search history</span>
            <OptionStatus>Saving</OptionStatus>
          </OptionItem>

          <OptionItem className="sub-option"  color="white" >
            <span>Delete last 15 mins</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <Shield size={24} color="white" />
            </OptionIcon>
            <span>SafeSearch</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3,4h18v12H3V4z M21,2H3C1.9,2,1,2.9,1,4v12c0,1.1,0.9,2,2,2h7v2H8v2h8v-2h-2v-2h7c1.1,0,2-0.9,2-2V4C23,2.9,22.1,2,21,2z" fill="white"/>
                <path d="M15,5H9v2h6V5z M15,9H9v2h6V9z M15,13H9v2h6V13z" fill="white"/>
              </svg>
            </OptionIcon>
            <span>Interests</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <Key size={24} color="white" />
            </OptionIcon>
            <span>Passwords</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <User size={24} color="white" />
            </OptionIcon>
            <span>Your profile</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6L9 15H15L12 6ZM12 2L17 17H7L12 2Z" fill="white"/>
                <path d="M20 18H18V20H20V18Z" fill="white"/>
                <path d="M16 16H8V18H6V20H8V22H16V20H18V18H16V16ZM16 20H8V18H16V20Z" fill="white"/>
              </svg>
            </OptionIcon>
            <span>Search personalisation</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <Sliders size={24} color="white" />
            </OptionIcon>
            <span>Settings</span>
          </OptionItem>

          <OptionItem>
            <OptionIcon>
              <HelpCircle size={24} color="white" />
            </OptionIcon>
            <span>Help and feedback</span>
          </OptionItem>
        </AccountOptions>

        <Footer>
          <span>Privacy Policy</span>
          <Dot>•</Dot>
          <span>Terms of Service</span>
        </Footer>
      </AccountModal>
    </PageContainer>
  )
}
