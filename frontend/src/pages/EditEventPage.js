import { useParams } from "react-router-dom"

const EditEventPage = () => {

    const params = useParams()

    return <>
        <h1>EditEventPage</h1>
        <h3>Event number: {params.eventId}</h3>
    </>
}

export default EditEventPage