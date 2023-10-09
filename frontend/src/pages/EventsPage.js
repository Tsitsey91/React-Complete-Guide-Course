import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {

    // see App.js loader. Fetching data from backend. 
    const data = useLoaderData() // automatically extract the data
    // from the Response obj that we return in the loader below
    const events = data.events

    return (
        <EventsList events={events} />
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // ... 
    } else {
        // const resData = await response.json();
        // return resData.events
        return response
    }
}