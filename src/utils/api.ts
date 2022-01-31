const URI = 'https://dog.ceo/api'

export type Breed = {
  [key: string]: string[]
}
export const api = {
  get(path: string) {
    return fetch(`${URI}${path}`).then((res) => res.json())
  }
}

export function getAllBreeds() {
  return fetch(`${URI}/breeds/list/all`)
    .then((response) => response.json())
    .then((response) => response.message)
}
