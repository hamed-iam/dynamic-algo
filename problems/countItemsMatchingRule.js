// https://leetcode.com/problems/count-items-matching-a-rule/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

// [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
//  ruleKey = "type", ruleValue = "phone"

export const countMatches = (items, ruleKey, ruleValue) => {
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case 'type':
        if (items[i][0] === ruleValue) ans++;
        break;
      case 'color':
        if (items[i][1] === ruleValue) ans++;
        break;
      case 'name':
        if (items[i][2] === ruleValue) ans++;
        break;
    }
  }
  return ans;
};
