"use client"

import styled from 'styled-components'

const Card = styled.div`
  background-color: var(--card-bg);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  margin-top: 16px;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`
const CardWrapper = styled.div`
  margin-bottom: 16px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  color: var(--text-color);
`

export function NewsCard() {
  return (
  <> 
  <Card>
      <ImageContainer>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVH5eh46E66Fapd3s_0GxGwXYla2qKRAnNg&s" alt="News" />
      </ImageContainer>
    <Content>
      <Title>
        This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge...
      </Title>
      </Content>
  </Card>
  <Card>
      <ImageContainer>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvhmtoqouR1pitdZ24W9R2pYzWsttd0JYZw&s" alt="News" />
      </ImageContainer>
    <Content>
      <Title>
        This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge...
      </Title>
      </Content>
  </Card>
  </>
   
  )
}
