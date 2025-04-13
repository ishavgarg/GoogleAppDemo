"use client"

import styled from 'styled-components'

interface StatusBarProps {
  time: string
  batteryLevel: number
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px 10px;
  color: white;
  font-weight: 600;
`

const Time = styled.div`
  font-size: 16px;
`

const StatusIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const SignalIcon = styled.div`
  display: flex;
  align-items: flex-end;
  height: 12px;
  gap: 1px;
`

const SignalBar = styled.div`
  width: 3px;
  background-color: white;
  border-radius: 1px;
  
  &:nth-child(1) {
    height: 3px;
  }
  
  &:nth-child(2) {
    height: 6px;
  }
  
  &:nth-child(3) {
    height: 9px;
  }
  
  &:nth-child(4) {
    height: 12px;
  }
`

const WifiIcon = styled.div`
  position: relative;
  width: 15px;
  height: 12px;
`

const WifiArc = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1.5px solid white;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  
  &:nth-child(1) {
    height: 3px;
    width: 6px;
    left: 4.5px;
  }
  
  &:nth-child(2) {
    height: 6px;
    width: 10px;
    left: 2.5px;
  }
  
  &:nth-child(3) {
    height: 9px;
    width: 15px;
    left: 0;
  }
`

const BatteryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 14px;
  border: 1px solid white;
  border-radius: 3px;
  padding-right: 2px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: -3px;
    width: 2px;
    height: 6px;
    background-color: white;
    border-radius: 0 2px 2px 0;
  }
`

const BatteryLevel = styled.span`
  font-size: 10px;
`

export function StatusBar({ time, batteryLevel }: StatusBarProps) {
  return (
    <Container>
      {/* <Time></Time>
      <StatusIcons>
        <SignalIcon>
          <SignalBar />
          <SignalBar />
          <SignalBar />
          <SignalBar />
        </SignalIcon>
        <WifiIcon>
          <WifiArc />
          <WifiArc />
          <WifiArc />
        </WifiIcon>
        <BatteryIcon>
          <BatteryLevel></BatteryLevel>
        </BatteryIcon>
      </StatusIcons> */}
    </Container>
  )
}
