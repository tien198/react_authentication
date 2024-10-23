import React from 'react';
import { useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetail() {
    const { id } = useParams()
    return (
        <EventItem event={ } />
    );
}

export default EventDetail;