import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

function RootLayout() {
  return (
    <>
      <h1>RootLayout Layout</h1>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout