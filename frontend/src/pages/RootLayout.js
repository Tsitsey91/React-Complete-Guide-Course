import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const RootLayout = () => {
    return <>
        <h1>RootLayout</h1>
        <MainNavigation />
        <main>
            <Outlet />
            {/* to define where the content of the child routes
            should be rendered (see App.js for the routess) */}
        </main>
    </>
}

export default RootLayout