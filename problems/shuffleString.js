/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
export const restoreString = (s, indices) => {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    console.log("s[i]", s[i]);
    ans[indices[i]] = s[i];
  }
  return ans.join("");
};

// export const restoreString = (s, indices) => {
// 	let shuffledArray = Array(s.length);
// 	indices.forEach((curr, index) => (shuffledArray[curr] = s[index]));
// 	return shuffledArray.join("");
//       };
