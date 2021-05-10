const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Microsoft', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://sts.windows.net/12345678-1234-1234-1234-123456789012/',
      HTTPPost: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2',
      HTTPRedirect: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2',
      X509Certificate: 'example-cert'
    })
  })
})
