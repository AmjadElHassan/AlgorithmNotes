var characterReplacement = function(s, k) {
    let l = 0
    let r = 0
    let maxCharCount = 0
    let charMap = {}
    
    while (r<s.length){
        let char = s[r]
        charMap[char] = charMap[char] ? charMap[r] + 1: 1;
        
        if (charMap[char] > maxCharCount) maxCharCount = charMap[char];
        
        if (r-l+1-maxCharCount > k) {
            charMap[s[l]]--
            l++
        }
        r++
    }
    return r-l
};

const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};
  
    while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;
  
      if (visited[char] > maxCharCount) maxCharCount = visited[char];
  
      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }
  
      right++;
    }
  
    return right - left;
  };