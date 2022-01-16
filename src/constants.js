export const GREEN = 'green'
export const YELLOW = 'yellow'
export const NEUTRAL = 'neutral'
export const GREY = 'grey'

export const KEYS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'z',
  'u',
  'i',
  'o',
  'p',
  'ü',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'ö',
  'ä',
  'y',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'ß'
]

export const ENTER = '⏎'
export const BACKSPACE = '⌫'
export const ALL_KEYS = KEYS.concat([ BACKSPACE, ENTER ])
export const ALL_KEYS_NEUTRAL_STATE = Object.fromEntries(ALL_KEYS.map(k => [k, NEUTRAL]))