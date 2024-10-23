import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Home from './pages/Home';
import EventsRoot from './pages/EventsRoot';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events/',
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: 'edit', element: <EditEvent /> }
            ]
          },
          {
            path: 'new', element: <NewEvent />,
            action: async ({ request, params }) => {
              const formData = await request.formData()
              const data = Object.fromEntries(formData.entries())
              console.log(data);


              await fetch('http://localhost:8080/events', {
                method: 'POST'
              });
            }
          },
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
