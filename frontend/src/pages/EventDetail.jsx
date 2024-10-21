import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetail(props) {
    const { id } = useParams()
    return (
        <h1>
            EventDetail {id}
        </h1>
    );
}

export default EventDetail;