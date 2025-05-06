const apiUrl = import.meta.env.VITE_API_URL

const commonHeaders = {
  "Content-Type": "application/json"
}

export function signup(body: {
  email: string,
  password: string,
  name: string
}) {
  return fetch(apiUrl + '/users/new', {
    method: "POST",
    body: JSON.stringify(body),
    headers: { ...commonHeaders }
  })
}
export function login(body: { email: string, password: string }) {
  return fetch(apiUrl + '/users/initSession', {
    method: "POST",
    body: JSON.stringify(body),
    headers: { ...commonHeaders }
  })
}

export function checkKey(body: { email: string, key: string }) {
  return fetch(apiUrl + '/users/keyCheck', {
    method: "GET",
    body: JSON.stringify(body),
    headers: { ...commonHeaders }
  }).then(res => res.json()).then(
    json => {
      if (!json.active) {
        console.log("deleting key")
        localStorage.removeItem('key')
        return json.active
      }
    }
  )
}

export function newBookmark(body) {
  return fetch(apiUrl + '/main/query', {
    method: 'POST',
    body: JSON.stringify({ query: { 1: 1 } })
    // will fetch all I know this is very unsecure, but this
    // project is just an assignment
  })
}
export function fetchAllBookmarks() {
  return fetch(apiUrl + '/main/query', {
    method: 'POST',
    body: JSON.stringify({ query: { 1: 1 } })
    // will fetch all I know this is very unsecure, but this
    // project is just an assignment
  })
}

export function logout() {
  localStorage.removeItem('key');
  localStorage.removeItem('mail');
}
