import React from 'react';
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Error(props) {
    const error = useRouteError()
    let title = 'An error has occurred!'
    let message = 'Something went wrong!'
    console.error(error);


    if (error.status === 500)
        message = error.data.message
    // message = JSON.parse(error.data).message
    if (error.status === 404) {
        title = 'Not Found!'
        message = 'Could not find resoure or page.'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}

export default Error;