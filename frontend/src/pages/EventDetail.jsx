import React from 'react';
import { useLoaderData, json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetail() {
    const data = useRouteLoaderData('event-detail')
    const { event } = data
    console.log(data);

    return (
        <EventItem event={event} />
    );
}

export default EventDetail;

export async function loader({ request, params }) {
    const { id } = params
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok)
        throw json({ message: `Fail to fetch event with id "${id}"` }, { status: 500 })
    return response
}