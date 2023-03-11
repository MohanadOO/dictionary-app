import { BiLink, BiPlay } from 'react-icons/bi'
import { DictionaryResult } from '../types'
import { useSearch } from '../hooks/useSearch'

export default function Results() {
  const { result, loading, error } = useSearch()
  console.log(loading)
  if (loading === true)
    return (
      <div className='flex justify-center items-center mt-24'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-900'></div>
      </div>
    )
  if (error === true)
    return (
      <p className='text-center my-10 text-2xl font-bold animate-shake'>
        Can't Find Word
      </p>
    )
  if (result === null)
    return (
      <p className='text-center my-10 text-2xl font-bold'>
        Enter a word to search
      </p>
    )

  function findAudio(result: DictionaryResult) {
    const audio: string | undefined = result.phonetics?.find(
      (item) => item.audio !== ''
    )?.audio
    return audio
  }

  function handleAudio() {
    const audio = document.getElementById('wordAudio') as HTMLAudioElement
    audio?.play()
  }

  return (
    <>
      {result.map((result: DictionaryResult) => (
        <div key={result.word} className='flex flex-col space-y-12 my-12'>
          <div className='flex flex-col sm:flex-row gap-5 items-center justify-between text-center sm:text-start'>
            <div>
              <h1 className='text-4xl font-bold font-serif'>{result.word}</h1>
              <p className='mt-4 text-xl text-cyan-400 font-bold'>
                {result.phonetic}
              </p>
            </div>

            {findAudio(result) !== undefined && (
              <button
                onClick={handleAudio}
                className='p-3 bg-cyan-300 hover:bg-cyan-400 rounded-full transition-colors group'
              >
                <BiPlay className='w-10 h-10 fill-cyan-800 group-hover:fill-white transition-colors' />
                <audio src={findAudio(result)} id='wordAudio'></audio>
              </button>
            )}
          </div>

          {result.meanings?.map((item) => (
            <div key={item.partOfSpeech}>
              <h2 className='text-3xl block font-bold relative overflow-hidden after:absolute after:w-full after:h-0.5 after:bg-stone-200 after:dark:bg-stone-800 after:top-[50%] after:ml-4 font-serif'>
                {item.partOfSpeech}
              </h2>
              <ul className='list-disc list-inside marker:text-cyan-600 w-full max-w-2xl my-5 space-y-2'>
                <span className='opacity-40 text-xl'>Meaning</span>
                {item.definitions?.map((details) => (
                  <li key={details.definition} className='text-lg ml-2 sm:ml-4'>
                    {details.definition}
                    {details.example && (
                      <p className='ml-6 mt-3 opacity-40'>
                        "{details.example}"
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {item.synonyms && item.synonyms.length > 0 && (
                <div className='flex flex-wrap items-center text-lg gap-x-4 gap-y-2'>
                  <span className='opacity-40'>Synonyms</span>
                  {item.synonyms.map((synonym) => (
                    <span key={synonym} className='text-cyan-600 font-bold'>
                      {synonym}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <hr className='border border-stone-200 dark:border-stone-800' />
          {result.sourceUrls !== undefined && (
            <div>
              <span className='opacity-40 text-xl'>Source</span>
              <ul className='list-disc list-inside mt-5 flex flex-col gap-5 marker:text-cyan-600'>
                {result.sourceUrls.map((source) => (
                  <li key={source}>
                    <a href={source} className='underline hover:text-cyan-600'>
                      <span>{source}</span>
                      <BiLink className='w-5 h-5 inline ml-1' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr className='border border-stone-200 dark:border-stone-800' />
        </div>
      ))}
    </>
  )
}
