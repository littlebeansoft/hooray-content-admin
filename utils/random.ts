import Randomstring from 'randomstring'

export const randomString = (
  length: number = 12,
  charset: string = 'alphabetic',
  capitalization: Randomstring.Capitalization = 'uppercase'
) => {
  const res = Randomstring.generate({
    length: length,
    charset: charset,
    capitalization: capitalization,
  })
  return res
}
