/**
 * 1. 가능한 발음 단어를 배열로 생성.
 * 2. 'babbling' 배열을 순회하면서 각 단어가 조카가 발음할 수 있는지 확인.
 *    - 현재 단어가 시작되는 위치(index)를 0으로 초기화.
 *    - 이전에 발음한 단어(prevWord)를 ""로 초기화.
 * 3. 각 단어를 순회하면서 가능한 발음을 찾고 index를 업데이트.
 * 4. 가능한 발음을 찾지 못하면, 그 단어는 조카가 발음할 수 없음.
 * 5. 모든 단어를 검사한 후, 발음할 수 있는 단어의 개수를 반환.
 * 
 * @param {string[]} babbling - 검사할 단어들의 배열
 * @return {number} 발음할 수 있는 단어의 개수
 */
function solution(babbling) {
  const possibleWords = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let index = 0;
    let prevWord = "";
    let canSpeak = true;

    while (index < word.length) {
      let found = false;

      for (let pw of possibleWords) {
        if (prevWord === pw) continue;

        if (word.startsWith(pw, index)) {
          found = true;
          index += pw.length;
          prevWord = pw;
          break;
        }
      }

      if (!found) {
        canSpeak = false;
        break;
      }
    }

    if (canSpeak) {
      count++;
    }
  }

  return count;
}
