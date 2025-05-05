const apiUrl = import.meta.env.API_URL

export function signup(body: FormData) {
  return fetch(apiUrl + '/signup', {
    method: "POST",
    body: body
  })
}
export function login(body: FormData) {
  return fetch(apiUrl + '/login', {
    method: "POST",
    body: body
  })
}
