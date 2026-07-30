class MinStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop(): void {
    this.stack.pop();
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
    const tmp = [];

    let mini = this.top();

    while (this.stack.length > 0) {
      mini = Math.min(mini, this.stack[this.stack.length - 1]);
      tmp.push(this.stack.pop());
    }

    while (tmp.length > 0) {
      this.stack.push(tmp.pop());
    }

    return mini;
  }
}
