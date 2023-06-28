function solution(name, yearning, photo) {
  const nameToYearningMap = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, {});

  return photo.map(arr =>
    arr.reduce((sum, person) => sum + (nameToYearningMap[person] || 0), 0)
  );
}
