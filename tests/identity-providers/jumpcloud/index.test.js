const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('JumpCloud', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://api.acme.com/saml',
      HTTPPost: 'https://sso.jumpcloud.com/saml2/acme',
      HTTPRedirect: undefined,
      X509Certificate: 'example-cert'
    })
  })
})
