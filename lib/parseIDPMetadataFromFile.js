const fs = require('fs')
const parseIDPMetadataFromString = require('./parseIDPMetadataFromString')

const parseIDPMetadataFromFile = (filePath) => {
  const xml = fs.readFileSync(filePath).toString()
  return parseIDPMetadataFromString(xml)
}

module.exports = parseIDPMetadataFromFile
