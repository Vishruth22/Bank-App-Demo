import React from 'react'
import MyNavbar from './MyNavbar'
import HeaderBar from './HeaderBar'
import Content from './Content'
import FooterBar from './FooterBar'


export default function Home() {
  return (
    <div>
        <MyNavbar />
      <HeaderBar />
      <Content />
      <FooterBar />
    </div>
  )
}
