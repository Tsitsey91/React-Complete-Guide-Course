import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {

    // see App.js loader
    const events = useLoaderData()
    return (
        <EventsList events={events} />
    );
}

export default EventsPage;