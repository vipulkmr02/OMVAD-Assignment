export const saveKey = (key: string) => {
  localStorage.setItem('key', key)
}

export const getKey = () => {
  return localStorage.getItem('key')
}
