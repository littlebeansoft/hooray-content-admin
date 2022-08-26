export const calculateTimeToSecond = (times = [0, 0, 0]): number => {
  const hour = times[0] * 3600
  const minute = times[1] * 60
  const second = times[2]
  return hour + minute + second
}

export const calculateTimeToArray = (time = 0): [number, number, number] => {
  const hour = Math.floor(time / 3600)
  const minute = Math.floor((time % 3600) / 60)
  const second = Math.floor((time % 3600) % 60)
  return [hour, minute, second]
}
