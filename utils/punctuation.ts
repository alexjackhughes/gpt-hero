export function removePunctuation(str: string) {
  return str
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .toLocaleLowerCase();
}

export function replaceWord(str: string, target: string, replacement: string) {
  return str.replace(new RegExp(`\\b${target}\\b`, "gi"), replacement);
}
