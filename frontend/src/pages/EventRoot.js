import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

const EventRoot = () => {
    return <>
        <h1>EventRoot layout</h1>
        <EventsNavigation />
        <Outlet />
        {/* to define where the content of the child routes
            should be rendered (see App.js for the routess) */}
    </>
}

export default EventRoot