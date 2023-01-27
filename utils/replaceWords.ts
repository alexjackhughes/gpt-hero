import { removePunctuation, replaceWord } from "./punctuation";
import { stringToWords } from "./stringToArray";

export async function replaceWords(string: string): Promise<string> {
  let words = stringToWords(string);

  const newWords = await Promise.all(
    words.map(async (word) => {
      if (Math.random() < 0.1) {
        const unpunctuatedWord = removePunctuation(word);
        const synonym = await findSynonym(unpunctuatedWord);

        return replaceWord(word, unpunctuatedWord, synonym || unpunctuatedWord);
      }

      return word;
    })
  );

  return newWords.join(" ");
}

const findSynonym = async (word: string): Promise<string> => {
  let response = await fetch(
    `https://api.api-ninjas.com/v1/thesaurus?word=${word}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_API_KEY || "",
      },
    }
  );
  let data = await response.json();

  if (data.synonyms as string[]) {
    const synonym: string =
      data.synonyms[Math.floor(Math.random() * data.synonyms.length)];
    if (synonym) return synonym.split("_").join(" ").toLocaleLowerCase();
  }

  return word;
};
