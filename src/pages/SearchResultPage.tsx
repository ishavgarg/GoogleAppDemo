"use client"

import styled from 'styled-components'
import { StatusBar } from "../components/StatusBar"
import { ChevronLeft, ChevronRight, Home, Info, X } from 'lucide-react'
import { media } from '../styles/responsive'

interface SearchResultPageProps {
  onBack: () => void
}

const PageContainer = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const SearchHeader = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(32, 33, 36, 0.8);
  border-radius: 24px;
  margin: 10px 16px;
`

const GoogleIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const SearchImageContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${media.md} {
    width: 40px;
    height: 40px;
  }
`

const SearchImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const SearchText = styled.div`
  color: #9aa0a6;
  font-size: 16px;
  flex: 1;
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #7baaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const AvatarText = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
`

const NavTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0 16px;
`

const Tab = styled.div<{ active?: boolean }>`
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 14px;
  padding: 16px 0;
  margin-right: 24px;
  position: relative;
  
  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background-color:rgb(223, 228, 236);
      border-radius: 3px;
    }
  `}
`

const InfoMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  gap: 8px;
`

const InfoIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  gap: 8px;
`

const ResultCard = styled.div<{ large?: boolean; small?: boolean }>`
  flex: ${props => props.large ? '1 0 100%' : props.small ? '1 0 calc(33% - 12px)' : '1 0 calc(50% - 12px)'};
  min-width: ${props => props.large ? '100%' : props.small ? 'calc(33% - 12px)' : 'calc(50% - 12px)'};
  background-color: #1f1f1f;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  
  ${media.md} {
    margin-bottom: 12px;
  }
  
  ${media.lg} {
    margin-bottom: 16px;
  }
`

const ResultImage = styled.img<{ tall?: boolean }>`
  width: 100%;
  height: ${props => props.tall ? '320px' : '250px'};
  object-fit: cover;
  object-position: center center;
  
  ${media.md} {
    height: ${props => props.tall ? '380px' : '280px'};
  }
  
  ${media.lg} {
    height: ${props => props.tall ? '420px' : '320px'};
  }
`

const ResultInfo = styled.div`
  padding: 12px;
`

const MerchantLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const LogoCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: black;
`

const MerchantName = styled.span`
  color: #fff;
  font-size: 14px;
`

const ProductTitle = styled.div`
  color: #fff;
  font-size: 14px;
  margin-bottom: 4px;
  line-height: 1.3;
`

const ProductPrice = styled.div`
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`

const SeeMore = styled.div`
  display: flex;
  align-items: center;
  color: #8ab4f8;
  font-size: 14px;
  margin: 8px 0;
`

const ColorSwatch = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #d9b5d6;
  margin-left: 4px;
`

const FeedbackBar = styled.div`
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(32, 33, 36, 0.9);
  padding: 8px 12px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  max-width: 95%;
  z-index: 100;
`

const FeedbackText = styled.div`
  color: #fff;
  font-size: 14px;
`

const FeedbackButton = styled.button`
  background: none;
  border: none;
  color: #8ab4f8;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 6px;
  white-space: nowrap;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BottomNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TabsButton = styled(NavButton)`
  position: relative;
`

const TabsCount = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid white;
  box-shadow: none;
`

export function SearchResultPage({ onBack }: SearchResultPageProps) {
  return (
    <PageContainer>
      <StatusBar time="18:25" batteryLevel={40} />
      
      <SearchHeader>
        <GoogleIcon>
          <svg viewBox="0 0 24 24" width="24" height="24">
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
        <SearchImageContainer>
          <SearchImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4KS-qZlJ83mq2YjqursipUoIshhQmUR0B-9KjVdfww&s" alt="Product image" />
        </SearchImageContainer>
        <SearchText>Add to search</SearchText>
        <Avatar>
          <AvatarText>A</AvatarText>
        </Avatar>
      </SearchHeader>
      
      <NavTabs>
        <Tab active>All</Tab>
        <Tab>Products</Tab>
        <Tab>Visual matches</Tab>
        <Tab>About this image</Tab>
      </NavTabs>
      
      <InfoMessage>
        <InfoIcon>i</InfoIcon>
        Results for people are limited
      </InfoMessage>
      
      <ResultsContainer>
        <ResultCard large>
          <ResultImage tall src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g2DG5S83QmfBPJ1JgIccK0g9c8J37WkdhxeR6nMN-blUUtsJ_5BZqMU&s=10" alt="Purple kurti"/>
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>a</LogoCircle>
              <MerchantName>Amazon.com</MerchantName>
            </MerchantLogo>
            <ProductTitle>Amazon.com: GuliriFei Women's Two Piece Outfit</ProductTitle>
            <SeeMore>
              See exact matches <ColorSwatch />
            </SeeMore>
          </ResultInfo>
        </ResultCard>
        
        <ResultCard>
          <ResultImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXPTejPFtRRjoY4t1DDwHf2VXk4rEAD157uGPXYIZnOkpd2j-XNwIn_RW&s=10" alt="Blue knit top" />
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>M</LogoCircle>
              <MerchantName>Myntra</MerchantName>
            </MerchantLogo>
            <ProductTitle>Buy Trendyol Striped Cotton Top - Tops for Women</ProductTitle>
            <ProductPrice>₹659*</ProductPrice>
          </ResultInfo>
        </ResultCard>

        <ResultCard>
          <ResultImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6ZqP0gBza1nanALcOBx1Umt4pA6DvYS9UjSWbJCbig&s" alt="Purple cardigan" />
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>H</LogoCircle>
              <MerchantName>H&M</MerchantName>
            </MerchantLogo>
            <ProductTitle>Fine-knit Cardigan - Light purple</ProductTitle>
            <ProductPrice>₹1,299</ProductPrice>
          </ResultInfo>
        </ResultCard>

        <ResultCard small>
          <ResultImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05XkMFgDKF-SMDJfuoFruUO0BhIl6dPqOc4pVJPaceA&s" alt="Black top" />
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>Z</LogoCircle>
              <MerchantName>Zara</MerchantName>
            </MerchantLogo>
            <ProductTitle>TEXTURED KNIT TOP</ProductTitle>
            <ProductPrice>₹2,190</ProductPrice>
          </ResultInfo>
        </ResultCard>

        <ResultCard small>
          <ResultImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67kSCuiTA46_e8WjuKP-dbppfepCvB1Q0M-yqqNPL4g&s" alt="Lilac sweater" />
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>A</LogoCircle>
              <MerchantName>ASOS</MerchantName>
            </MerchantLogo>
            <ProductTitle>ASOS DESIGN fluffy crew neck sweater</ProductTitle>
            <ProductPrice>₹3,450</ProductPrice>
          </ResultInfo>
        </ResultCard>

        <ResultCard small>
          <ResultImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwq3PAq6JSjRHd-nFBckDWeZn-ThI_YiuaucAP1_xxDWbSc9V0yjWjUfAr&s=10" alt="Lavender dress" />
          <ResultInfo>
            <MerchantLogo>
              <LogoCircle>F</LogoCircle>
              <MerchantName>Forever 21</MerchantName>
            </MerchantLogo>
            <ProductTitle>Women's Lavender Knit Mini Dress</ProductTitle>
            <SeeMore>
              See more options
            </SeeMore>
          </ResultInfo>
        </ResultCard>
      </ResultsContainer>
      
      <FeedbackBar>
        <FeedbackText>Are these results useful?</FeedbackText>
        <FeedbackButton>Yes</FeedbackButton>
        <FeedbackButton>No</FeedbackButton>
        <CloseButton>
          <X size={20} />
        </CloseButton>
      </FeedbackBar>
      
      <BottomNavigation>
        <NavButton onClick={onBack}>
          <ChevronLeft size={24} />
        </NavButton>
        <NavButton>
          <ChevronRight size={24} />
        </NavButton>
        <NavButton>
          <Home size={24} />
        </NavButton>
        <TabsButton>
          <TabsCount>1</TabsCount>
        </TabsButton>
      </BottomNavigation>
    </PageContainer>
  );
} 