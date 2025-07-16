/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null
  const newNode = new Node(node.val)
  const map: Map<Node, Node> = new Map()
  map.set(node, newNode)
  dfs(node, newNode, map)
  return newNode
}

function dfs(oldNode: Node | null, newNode: Node | null, map: Map<Node, Node>) {
  const l = oldNode.neighbors.length
  for (let i = 0; i < l; i++) {
    if (!map.has(oldNode.neighbors[i])) {
      const nn = new Node(oldNode.neighbors[i].val)
      newNode.neighbors.push(nn)
      map.set(oldNode.neighbors[i], nn)
      dfs(oldNode.neighbors[i], nn, map)
    } else {
      newNode.neighbors.push(map.get(oldNode.neighbors[i]))
    }
  }
}
