const xml2js = require('xml2js')
const parseIDPMetadata = require('./parseIDPMetadata')

const parseIDPMetadataFromString = async (xml) => {
  const parser = new xml2js.Parser()
  const result = await parser.parseStringPromise(xml)
  return parseIDPMetadata(result)
}

module.exports = parseIDPMetadataFromString
