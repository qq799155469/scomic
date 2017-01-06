export function increase(n) {
  return {
    type: INCREASE,
    count: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    count: n
  }
}