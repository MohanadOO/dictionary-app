export interface DictionaryResult {
  word: string
  phonetic: string
  phonetics?: PhoneticsEntity[]
  meanings?: MeaningsEntity[]
  license: License
  sourceUrls?: string[]
}
export interface PhoneticsEntity {
  text: string
  audio: string
  sourceUrl?: string
  license?: License1
}
export interface License1 {
  name: string
  url: string
}
export interface MeaningsEntity {
  partOfSpeech: string
  definitions?: DefinitionsEntity[]
  synonyms?: string[]
  antonyms?: string[]
}
export interface DefinitionsEntity {
  definition: string
  synonyms?: string[] | null
  antonyms?: string[] | null
  example?: string | null
}
export interface License {
  name: string
  url: string
}
