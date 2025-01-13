/* A player has various cards in a card game. You are given an array cards, where each element represents the points of a card. Multiple cards can have the same points value.
If a player decides to use a card with a point score of cards[i], they cannot use any card with a point score of cards[i]-2, cards[i] -1, cards[i] + 1, or cards[i] + 2.
Each card can only be used once.
Return the maximum possible points that a player can gain.
Example 1: Input: cards = [3,3,5,6]
Output: 12
Explanation: The maximum possible point score of 12 is produced by using cards with index 0, 1, 3 with points 3, 3, 6.
Example 2: Input: cards = [10,4,9,9]
Output: 22
Explanation: The maximum possible point score of 22 is produced by using cards with index 1, 2, 3 with points 4, 9, 9.
Constraints: 1 <= cards.length <= 10⁵ 1 <= cards[i] <= 10⁹ */
var solution = function (k) {
  // Step 1: Count the frequency of each card value
  const freq = {};

  for (let card of k) {
    freq[card] = (freq[card] || 0) + 1;
  }

  // Step 2: Get the sorted unique card values
  const uniqueCards = Object.keys(freq)
    .map(Number)
    .sort((a, b) => a - b);

  // Step 3: Initialize dp object
  const dp = {};

  // Handle the first card value
  dp[uniqueCards[0]] = uniqueCards[0] * freq[uniqueCards[0]];

  // Step 4: Fill dp table
  for (let i = 1; i < uniqueCards.length; i++) {
    let card = uniqueCards[i];

    // If the current card is adjacent to the previous card, we can't take both
    if (card === uniqueCards[i - 1] + 1) {
      dp[card] = Math.max(
        dp[uniqueCards[i - 1]],
        (dp[uniqueCards[i - 2]] || 0) + card * freq[card]
      );
    } else {
      // If the current card isn't adjacent, we can take it and add its value
      dp[card] = dp[uniqueCards[i - 1]] + card * freq[card];
    }
  }

  // Step 5: The result is in dp for the largest card value
  return dp[uniqueCards[uniqueCards.length - 1]];
};

// Example 1
const cards1 = [3, 3, 5, 6];
console.log(solution(cards1)); // Output: 12

// Example 2
const cards2 = [10, 4, 9, 9];
console.log(solution(cards2)); // Output: 22
