interface Phonetic {
  audio: string;
  sourceURL: string;
  license: {
    name: string;
    url: string;
  };
}

export interface Definition {
  definition: string;
  example: string;
}

export interface Meaning {
  partsOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface DictionaryResponse {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}
