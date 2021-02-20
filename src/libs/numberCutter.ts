const numberCutter = (num: number) => {
  if (num > 10000000) return `${Math.floor(num/1000000)}M`
  if (num > 10000) return `${Math.floor(num/1000)}K`
  return num
}

export default numberCutter
