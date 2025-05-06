const apiUrl = import.meta.env.VITE_API_URL

export function signup(body: {
  email: string,
  password: string,
  name: string
}) {
  return fetch(apiUrl + '/users/new', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
}
export function login(body: { email: string, password: string }) {
  return fetch(apiUrl + '/users/initSession', {
    method: "GET",
    body: JSON.stringify(body)
  })
}
