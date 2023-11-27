function hIndex(citations: number[]): number {
  const l = citations.length
  citations.sort((a, b) => b - a)
  for (let i = 0; i < l; i++) {
    if (citations[i] < i + 1) {
      return i
    }
  }
  return l
}
