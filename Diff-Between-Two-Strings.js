//Pramp question
// Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

// For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

// More formally, for each character C in source, we will either write the token C, which does not count as an edit; or write the token -C, which counts as an edit.

// Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

// At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target (when ignoring plus-signs.)

// In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

// If there are multiple answers, use the answer that favors removing from the source first.

//The naive solution would be to answer this recursively. If the first letters are the same, you keep that letter and recursively call on the source and target
//excluding those letters. If they aren't the same, you check which solution is
//shorter, if you subtract the letter or if you add the letter. This solution is
//O(2^n) time complexity and O(2^n) space complexity because you have to check
//every possibility which there is always 2 possibilities for every pair of
//letters.

function diffBetweenTwoStringsN(source, target) {
  /**
	@param source: string
	@param target: string
	@return: string[]
	*/
  if (target.length === 0 && source.length === 0) return [];
  if (target.length === 0) return source.split('').map(char => '-' + char);
  if (source.length === 0) return target.split('').map(char => '+' + char);

  if (source[0] === target[0]) {
    return [source[0]].concat(
      diffBetweenTwoStrings(source.slice(1), target.slice(1))
    );
  }

  let remove = ['-' + source[0]].concat(
    diffBetweenTwoStrings(source.slice(1), target)
  );
  let add = ['+' + target[0]].concat(
    diffBetweenTwoStrings(source, target.slice(1))
  );

  return remove.length > add.length ? add : remove;
}

//This is a slight optimization because we're using pointers to know which
//letters to compare, this way we don't extra space. However, this is still
//very slow as you have to check every possibility multiple times. O(2^n) time
//complexity and O(1) space.
function diffBetweenTwoStringsPointers(
  source,
  target,
  sPointer = 0,
  tPointer = 0
) {
  if (target.length === tPointer && source.length === sPointer) return [];
  if (target.length === tPointer)
    return source
      .slice(sPointer)
      .split('')
      .map(char => '-' + char);
  if (source.length === sPointer)
    return target
      .slice(tPointer)
      .split('')
      .map(char => '+' + char);

  if (source[sPointer] === target[tPointer]) {
    return [source[sPointer]].concat(
      diffBetweenTwoStrings(source, target, sPointer + 1, tPointer + 1)
    );
  }

  let remove = ['-' + source[sPointer]].concat(
    diffBetweenTwoStrings(source, target, sPointer + 1, tPointer)
  );
  let add = ['+' + target[tPointer]].concat(
    diffBetweenTwoStrings(source, target, sPointer, tPointer + 1)
  );
  return remove.length > add.length ? add : remove;
}

//This is the optimized approach for time. The main issue before is that you
//calculate every possibility and multiple times as well. What if we memoized
//the previous answers so that we don't calculate a solution that we have
//done before. We store the solution in an object. If we seen this problem
//before you can just look in the memo to return the answer, otherwise calculate
//just once. This will be O(n * m) time and O(n * m) space.
function diffBetweenTwoStrings(
  source,
  target,
  sPointer = 0,
  tPointer = 0,
  ruby = {}
) {
  let code = `s${sPointer}t${tPointer}`;
  if (ruby[code]) {
    console.log('im fast as fuck boi');
    return ruby[code];
  }
  if (target.length === tPointer && source.length === sPointer) {
    ruby[code] = [];
    return ruby[code];
  }
  if (target.length === tPointer) {
    ruby[code] = source
      .slice(sPointer)
      .split('')
      .map(char => '-' + char);
    return ruby[code];
  }
  if (source.length === sPointer) {
    ruby[code] = target
      .slice(tPointer)
      .split('')
      .map(char => '+' + char);
    return ruby[code];
  }

  if (source[sPointer] === target[tPointer]) {
    ruby[code] = [source[sPointer]].concat(
      diffBetweenTwoStrings(source, target, sPointer + 1, tPointer + 1, ruby)
    );
    return ruby[code];
  }

  let remove = ['-' + source[sPointer]].concat(
    diffBetweenTwoStrings(source, target, sPointer + 1, tPointer, ruby)
  );
  let add = ['+' + target[tPointer]].concat(
    diffBetweenTwoStrings(source, target, sPointer, tPointer + 1, ruby)
  );
  ruby[code] = remove.length > add.length ? add : remove;
  return ruby[code];
}
