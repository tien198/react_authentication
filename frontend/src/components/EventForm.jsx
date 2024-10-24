import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const resData = useActionData()
  const navigate = useNavigate();
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting' ? true : false

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <ul>
        {
          resData && resData.errors &&
          <ul>
            {Object.values(resData.errors).map(err => { return <li key={err}>{err}</li> })}
          </ul>
        }
      </ul>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event && event.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event && event.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event && event.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event && event.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? '... submitting' : 'save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;



export async function action({ request, params }) {
  const { method } = request

  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())

  let actionUrl = 'http://localhost:8080/events'

  if (method === 'PATCH') {
    const { id = '' } = params
    actionUrl = 'http://localhost:8080/events/' + id
  }

  const response = await fetch(actionUrl, {
    method: method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.status === 422) {
    return response
  }

  if (!response.ok)
    return json({ message: 'could not post event' }, { status: 500 })

  return redirect('/events')
}