export function getMoviesFromStorage() {
  return getFromStorage('movies') || []
}

export function saveMoviesToStorage(movies) {
  saveToStorage('favoriteMovies', movies)
}

export function getFavoriteMoviesFromStorage() {
  return getFromStorage('favoriteMovies') || []
}

export function saveCardsToStorage(favoriteMovies) {
  saveToStorage('favoriteMovies', favoriteMovies)
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}
