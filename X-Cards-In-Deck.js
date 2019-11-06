//https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

//     Each group has exactly X cards.
//     All the cards in each group have the same integer.

var hasGroupsSizeX = function(deck) {
  if (deck.length === 0) return true;
  let deckObj = {};

  for (let i = 0; i < deck.length; i++) {
    let num = deck[i];
    if (!deckObj[num]) deckObj[num] = 0;
    deckObj[num]++;
  }

  let min = Infinity;
  for (let key in deckObj) {
    min = Math.min(deckObj[key], min);
  }
  if (min < 2) return false;
  let i = 2;
  while (i <= min) {
    let keys = Object.keys(deckObj);
    if (keys.every(key => deckObj[key] % i === 0)) return true;
    i++;
  }
  return false;
};
