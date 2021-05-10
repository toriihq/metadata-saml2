const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Google', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://accounts.google.com/o/saml2?idpid=C02abcdef',
      HTTPPost: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      HTTPRedirect: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      X509Certificate: 'example-cert'
    })
  })
})
