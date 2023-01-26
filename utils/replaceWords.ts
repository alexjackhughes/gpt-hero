import { stringToWords } from "./stringToArray";

export async function replaceWords(string: string): Promise<string> {
  let words = stringToWords(string);

  for (let i = 0; i < words.length; i++) {
    if (Math.random() < 0.3) {
      return await findSynonym(words[i]);
    }
  }

  return words.join(" ");
}

const findSynonym = async (string: string): Promise<string> => {
  let response = await fetch(
    `https://api.api-ninjas.com/v1/thesaurus?word=${string}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
    }
  );
  let data = await response.json();

  if (data.synonyms) {
    return data.synonyms[Math.floor(Math.random() * data.synonyms.length)];
  }

  return "";
};
