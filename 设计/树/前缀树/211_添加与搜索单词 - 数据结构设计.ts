class wordNode {
  public char: string
  public children: Array<wordNode | null> = new Array(26).fill(null)
  public endFlag: boolean = false
  constructor(char?: string) {
    this.char = char === undefined ? '' : char
  }
}

class WordDictionary {
  private root: wordNode
  constructor() {
    this.root = new wordNode()
  }

  addWord(word: string): void {
    let ptr: wordNode = this.root
    const l = word.length
    for (let i = 0; i < l; i++) {
      const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
      const el = ptr.children[index]
      if (el === null) ptr.children[index] = new wordNode(word[i])
      if (i === l - 1) ptr.children[index]!.endFlag = true
      ptr = ptr.children[index]!
    }
  }

  search(word: string): boolean {
    const stack: Array<wordNode | null> = [this.root]
    let i = 0,
      wordLen = word.length
    while (i <= wordLen && stack.length > 0) {
      const l = stack.length
      for (let j = 0; j < l; j++) {
        const el = stack[j]
        if (el === null) continue
        if (i === wordLen && el.endFlag === true) {
          return true
        }
        if (word[i] === '.') {
          el!.children.forEach(node => {
            stack.push(node)
          })
        } else {
          stack.push(el!.children[word.charCodeAt(i) - 'a'.charCodeAt(0)])
        }
      }
      stack.splice(0, l)
      i++
    }
    return false
  }
}
new Array(2).fill(0)
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
