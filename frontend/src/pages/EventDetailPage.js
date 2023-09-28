import { useParams } from "react-router-dom"

const EventDetailPage = () => {
    const params = useParams() //to get the params from the url

    return <>
        <h1>EventDetailPage</h1>
        <p>{params.eventId}</p>
    </>
}

export default EventDetailPage