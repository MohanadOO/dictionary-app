import NavBar from './components/NavBar'
import Results from './components/Results'

import { SearchProvider, useSearch } from './hooks/useSearch'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='min-h-screen p-5 max-w-5xl mx-auto dark:text-white'>
      <NavBar />
      <SearchProvider>
        <SearchBar />
        <Results />
      </SearchProvider>
    </div>
  )
}

export default App
