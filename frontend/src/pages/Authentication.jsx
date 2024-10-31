import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { SERVER_BASE_URL } from '../ulties/http';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') || 'login'

  if (mode !== 'login' && mode !== 'signup')
    throw json({ message: 'Unsupported mode!' }, { status: 422 })

  const fd = await request.formData()

  const data = Object.fromEntries(fd.entries())

  const response = await fetch(`${SERVER_BASE_URL}/${mode}`, {
    method: request.method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.status === 422 || response.status === 401)
    return response

  else if (!response.ok)
    throw json({ message: `Couldn't to create user ${data.email}!` }, { status: 500 })

  // soon: manage that token
  return redirect('/')
}