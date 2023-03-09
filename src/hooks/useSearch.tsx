import { createContext, useContext, useState } from 'react'
import { DictionaryResult } from '../types'

const SearchContext = createContext<any>('')
export function useSearch() {
  return useContext(SearchContext)
}

const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'
export function SearchProvider({ children }: any) {
  const [search, setSearch] = useState<string>('')
  const [result, setResult] = useState<DictionaryResult | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | boolean>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const res = await fetch(`${baseURL}/${search}`)
      setLoading(true)
      if (!res.ok) {
        throw Error('Word Not Found')
      }
      const data: DictionaryResult = await res.json()
      setLoading(false)
      setError(false)
      return setResult(data)
    } catch (err) {
      console.error(err)
      setLoading(false)
      setError(true)
    }
  }

  const value = { search, setSearch, result, loading, error, handleSubmit }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
