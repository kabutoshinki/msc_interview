function anagramGroups(words) {
  const map = new Map();
  words.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    if (!map[sortedWord]) {
      map[sortedWord] = [];
    }
    map[sortedWord].push(word);
  });
  return Object.values(map);
}

console.log(anagramGroups(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(anagramGroups(["a", "b", "c", "d", "e", "f"]));
console.log(anagramGroups(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]));
