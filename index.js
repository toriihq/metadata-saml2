const parseIDPMetadataFromString = require('./lib/parseIDPMetadataFromString')
const parseIDPMetadataFromFile = require('./lib/parseIDPMetadataFromFile')
const parseCertificate = require('./lib/parseCertificate')

module.exports = {
  parseIDPMetadataFromString,
  parseIDPMetadataFromFile,
  parseCertificate
}
