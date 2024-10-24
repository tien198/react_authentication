import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

function NewEvent(props) {
    return (
        <EventForm method='POST' />
    );
}

export default NewEvent;
