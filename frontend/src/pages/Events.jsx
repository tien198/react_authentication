import React from 'react';
import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()
    const { events } = data
    if (events.isError)
        return <p>{events.message}</p>

    return <EventsList events={events} />
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json({ message: 'Fail to fetch events!' }, { status: 500 })
        // throw new Response(JSON.stringify({ message: 'Fail to fetch events!' }), { status: 500 })
    } else {
        return response;
    }
}