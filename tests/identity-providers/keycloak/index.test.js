const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Keycloak', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://sso.acme.com/auth/realms/ACME-SSO',
      HTTPPost: 'https://sso.acme.com/auth/realms/ACME-SSO/protocol/saml',
      HTTPRedirect: undefined,
      X509Certificate: 'example-cert'
    })
  })
})
