function generateParenthesis(n: number): string[] {
  const res: string[] = []
  backTracing(n, n, res, '')
  return res
}

function backTracing(left: number, right: number, res: string[], conbination: string) {
  if (left === 0 && right === 0) {
    res.push(conbination)
    return
  }
  const l = left - 1,
    r = right - 1
  if (constraint(l, right)) backTracing(l, right, res, conbination + '(')
  if (constraint(left, r)) backTracing(left, r, res, conbination + ')')
}

function constraint(left: number, right: number): boolean {
  if (left < 0 || right < 0) return false
  return left <= right
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
