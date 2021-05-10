const get = (data, path) => {
  if (!data) {
    return undefined
  }

  const splits = path.split('.')

  let value = data
  for (let i = 0; i < splits.length; i++) {
    value = value[splits[i]]
    if (!value) {
      break
    }
  }

  return value
}

module.exports = get
