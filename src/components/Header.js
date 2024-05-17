import React from 'react'
import Title from './Title'
import Description from './Description'
import UserProfile from './UserProfile'

const Header = () => {
  return (
    <div>
        <Title appTitle="Koding Akademi"/>
        <Description description="Pusat Belajar Coding dan Robotic" category="Technology"/>
        <UserProfile/>
    </div>
  )
}

export default Header