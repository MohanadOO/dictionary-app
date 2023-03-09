import { useSearch } from '../hooks/useSearch'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
  const { search, setSearch, handleSubmit } = useSearch()
  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <input
          name='word'
          id='word'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-gray-200 dark:text-black rounded-lg py-2 px-8 w-full focus:outline-purple-400 placeholder:font-bold placeholder:text-black/40 placeholder:text-sm'
          placeholder='Enter Word'
        />
        <button>
          <BiSearch className='w-6 h-6 absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer fill-purple-400' />
        </button>
      </form>
    </div>
  )
}
