import { useEffect, useState } from 'react'
import axios from 'axios'

function useRequestAxios(options) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!options) return
    setLoading(true)
    axios
      .request(options)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [options])

  const refetch = (newOptions) => {
    setLoading(true)
    axios
      .request(newOptions)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { data, loading, error, refetch }
}

export default useRequestAxios