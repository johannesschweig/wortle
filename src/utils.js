export function randomElementPerDay(ar) {
  // seed based on current day
  let seed = Math.floor(new Date()/8.64e7)
  // random number based on day
  let rand = Math.sin(seed++) * 10000
  rand = rand - Math.floor(rand)
  let el = ar[Math.floor(rand * ar.length)]
  return el
}

// returns current day as a string yyyy-mm-dd
export function getToday() {
  return new Date().toISOString().split('T')[0]
}