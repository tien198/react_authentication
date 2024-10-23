import React from 'react';
import EventForm from '../components/EventForm';

function NewEvent(props) {
    return (
        <EventForm />
    );
}

export default NewEvent;

export async function action({ request, params }) {
    const data = request.formData


}