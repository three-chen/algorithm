// Definition for Node.
// class Node {
//   val: number
//   left: Node | null
//   right: Node | null
//   next: Node | null
//   constructor(val?: number, left?: Node, right?: Node, next?: Node) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//     this.next = next === undefined ? null : next
//   }
// }

function connect(root: Node | null): Node | null {
  if (root === null) return null
  const queue: Node[] = [root]
  while (queue.length > 0) {
    const l = queue.length
    for (let i = 0; i < l; i++) {
      if (queue[i].left) queue.push(queue[i].left)
      if (queue[i].right) queue.push(queue[i].right)
      if (i + 1 === l) {
        queue[i].next = null
      } else {
        queue[i].next = queue[i + 1]
      }
    }
    queue.splice(0, l)
  }
  return root
}
