class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);
    val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]);
    this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top(): number {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
