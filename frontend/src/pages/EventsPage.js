import { Link } from "react-router-dom"


const DUMMY_EVENTS = [
    {
        id: '1',
        title: 'Burger Contest'
    },
    {
        id: '2',
        title: 'Skate cruising'
    }
]

const EventsPage = () => {
    return <>
        <h1>EventsPage</h1>
        <ul>
            {DUMMY_EVENTS.map(event =>
                <li key={event.id}>{event.id} ||
                    <Link to={event.id}>{event.title}</Link>
                </li>)}
        </ul>
    </>
}

export default EventsPage