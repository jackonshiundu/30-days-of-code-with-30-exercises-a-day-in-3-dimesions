/* Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first. */
function getHashTags(headline) {
  // Remove punctuation and split the headline into words
  let words = headline.toLowerCase().match(/\b\w+\b/g); // Use regex to match words and ignore punctuation
  console.log(words);
  // Sort words by length (descending), then by their original order (ascending)
  words.sort((a, b) => b.length - a.length);

  // Return the top 3 words as hashtags
  return words.slice(0, 3).map((word) => `#${word}`);
}
console.log(getHashTags("Hey Parents, Surprise, Fruit auice Is Not Fruit"));
