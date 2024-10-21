import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENT = [
    { id: '1', title: 'event 1' },
    { id: '2', title: 'event 2' }
]

function Events(props) {
    return (
        <>
            <h1>Events</h1>
            <ul>
                {
                    DUMMY_EVENT.map(i => (
                        <li key={i.id}>
                            <Link to={i.id}>{i.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Events;