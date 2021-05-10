const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Onelogin', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://app.onelogin.com/saml/metadata/12345678-1234-1234-1234-123456789012',
      HTTPPost: 'https://acme.onelogin.com/trust/saml2/http-post/sso/12345678-1234-1234-1234-123456789012',
      HTTPRedirect: 'https://acme.onelogin.com/trust/saml2/http-redirect/sso/12345678-1234-1234-1234-123456789012',
      X509Certificate: 'example-cert'
    })
  })
})
