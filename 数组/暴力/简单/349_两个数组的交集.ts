function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  const s: Set<number> = new Set()
  for (const value of s1) {
    if (s2.has(value)) {
      s.add(value)
    }
  }
  return Array.from(s)
}
