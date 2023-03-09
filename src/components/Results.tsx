import { BiPlay } from 'react-icons/bi'
import { DictionaryResult } from '../types'

const result: DictionaryResult[] = [
  {
    word: 'keyboard',
    phonetic: '/ˈkiːbɔːd/',
    phonetics: [
      {
        text: '/ˈkiːbɔːd/',
        audio: '',
      },
      {
        text: '/ˈkiːbɔːd/',
        audio: '',
      },
      {
        text: '/ˈkibɔɹd/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              '(etc.) A set of keys used to operate a typewriter, computer etc.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ['electronic keyboard'],
        antonyms: [],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'To type on a computer keyboard.',
            synonyms: [],
            antonyms: [],
            example: 'Keyboarding is the part of this job I hate the most.',
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
    sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
  },
]

export default function Results() {
  //   const { result, loading, error } = useSearch()

  //   if (loading === true) return <p className='text-white'>Loading...</p>
  //   if (error === true) return <p>Can't Find Word Details</p>
  //   if (result === null) return <p>Waiting For Input</p>

  function handleAudio() {
    const audio = document.getElementById('wordAudio')
    audio?.play()
  }
  console.log(result)
  return (
    <div className='flex flex-col space-y-12 my-12'>
      <div className='flex flex-col sm:flex-row gap-5 items-center justify-between text-center sm:text-start'>
        <div>
          <h1 className='text-4xl font-bold font-serif'>{result[0].word}</h1>
          <p className='mt-4 text-xl text-purple-400 font-bold'>
            {result[0].phonetic}
          </p>
        </div>

        <button
          onClick={handleAudio}
          className='p-3 bg-purple-300 hover:bg-purple-400 rounded-full transition-colors group'
        >
          <BiPlay className='w-10 h-10 fill-purple-800 group-hover:fill-white transition-colors' />
        </button>
        {result[0].phonetics[2].audio && (
          <audio
            src={result[0].phonetics[2].audio || ''}
            id='wordAudio'
          ></audio>
        )}
      </div>

      {result[0].meanings?.map((item) => (
        <div key={item.partOfSpeech}>
          <h2 className='text-3xl block font-bold relative overflow-hidden after:absolute after:w-full after:h-0.5 after:bg-stone-200 after:dark:bg-stone-800 after:top-[50%] after:ml-4 font-serif'>
            {item.partOfSpeech}
          </h2>
          <ul className='list-disc list-inside marker:text-purple-600 w-full max-w-2xl my-5 space-y-2'>
            <span className='opacity-40 text-2xl'>Meaning</span>
            {item.definitions?.map((details) => (
              <li className='text-lg ml-2 sm:ml-4'>{details.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
