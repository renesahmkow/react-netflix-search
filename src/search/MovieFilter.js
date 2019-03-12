import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function MovieFilter() {
  const [genres, setGenres] = useState([])

  function getMovieGenres() {
    const urlString =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd2696164ca6e927402920dedc2e294&language=de'

    Axios.get(urlString).then(res => {
      const { results } = res.data
      setGenres(results)
    })
  }

  useEffect(() => {
    getMovieGenres()
  }, [])

  return <div genres={genres} />
}
