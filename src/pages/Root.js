import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import classes from './Root.module.css'

function RootLayout() {
  return (
    <>
    <h1>RootLayout Layout</h1>
    <NavigationBar/>
    <main className={classes.content}>
    <Outlet/>
    </main>
    </>
  )
}

export default RootLayout