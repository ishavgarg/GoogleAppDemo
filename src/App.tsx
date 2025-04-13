"use client"

import React from 'react'
import { useState } from "react"
import { StatusBar } from "./components/StatusBar"
import { TopBar } from "./components/TopBar"
import { GoogleLogo } from "./components/GoogleLogo"
import { SearchBar } from "./components/SearchBar"
import { QuickActions } from "./components/QuickActions"
import { InfoCards } from "./components/InformCards"
import { NewsCard } from "./components/NewsCard"
import { BottomNavigation } from "./components/BottomNavigation"
import { SearchPage } from "./pages/SearchPage"
import { AccountPage } from "./pages/AccountPage"
import { VoicePage } from "./pages/VoicePage"
import { LensPage } from "./pages/LensPage"
import { SearchResultPage } from "./pages/SearchResultPage"
import "./App.css"

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState<"home" | "search" | "account" | "voice" | "lens" | "searchResult">("home")

  const handleSearchBarClick = () => {
    setCurrentPage("search")
  }

  const handleAvatarClick = () => {
    setCurrentPage("account")
  }

  const handleVoiceClick = () => {
    setCurrentPage("voice")
  }

  const handleLensClick = () => {
    setCurrentPage("lens")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
  }

  const handleShowSearchResult = () => {
    setCurrentPage("searchResult")
  }

  if (currentPage === "search") {
    return <SearchPage onBack={handleBackToHome} onSearch={handleShowSearchResult} onVoice={handleVoiceClick} onLens={handleLensClick}/>
  }

  if (currentPage === "account") {
    return <AccountPage onClose={handleBackToHome} />
  }

  if (currentPage === "voice") {
    return <VoicePage onBack={handleBackToHome} onSearch={handleShowSearchResult} />
  }

  if (currentPage === "lens") {
    return <LensPage onBack={handleBackToHome} onResultFound={handleShowSearchResult} />
  }

  if (currentPage === "searchResult") {
    return <SearchResultPage onBack={handleBackToHome} />
  }

  return (
    <div className="app">
      <StatusBar time="18:23" batteryLevel={41} />
      <TopBar onAvatarClick={handleAvatarClick} />
      <main className="main-content">
        <GoogleLogo />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearchBarClick={handleSearchBarClick}
          onVoiceClick={handleVoiceClick}
          onLensClick={handleLensClick}
        />
        <QuickActions />
        <InfoCards />
        <NewsCard />
      </main>
      <BottomNavigation />
    </div>
  )
}

export default App
