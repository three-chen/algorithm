/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  private itr: Iterator
  private nextElement: number | null
  constructor(iterator: Iterator) {
    this.itr = iterator
    this.nextElement = iterator.next()
  }

  peek(): number {
    return this.nextElement!
  }

  next(): number {
    const ret = this.nextElement
    this.nextElement = this.itr.hasNext() ? this.itr.next() : null
    return ret!
  }

  hasNext(): boolean {
    return this.nextElement !== null
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
