export const dateStringToDate = (dateString: string): Date => {
  const dateElements = dateString.split('/').map((value: string): number => {
    return parseInt(value)
  })

  return new Date(dateElements[2], dateElements[1] - 1, dateElements[0])
}
