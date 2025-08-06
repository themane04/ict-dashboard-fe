const urls = {
  home: 'dashboard',
  signin: 'sign-in',
  signup: 'sign-up'
}

const endpoints = {
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
  }
}

export const environment = {
  backendUrl: 'http://localhost:5211',
  backendApiUrl: 'http://localhost:5211/api',
  endpoints: endpoints,
  urls: urls
}
