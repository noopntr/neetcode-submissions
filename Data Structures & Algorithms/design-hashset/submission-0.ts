class MyHashSet {
  data: number[];
  constructor() {
    this.data = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key: number): void {
    if (!this.data.includes(key)) {
      this.data.push(key);
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key: number): void {
    const index = this.data.indexOf(key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key: number): boolean {
    return this.data.includes(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
