const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Okta', () => {
  it('should parse metadata.xml', async () => {
    const filePath = path.join(__dirname, './metadata.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'http://www.okta.com/exkgtqmzpeABC1234567',
      HTTPPost: 'https://acme.okta.com/app/example_saml/exkgtqmzpeABC1234567/sso/saml',
      HTTPRedirect: 'https://acme.okta.com/app/example_saml/exkgtqmzpeABC1234567/sso/saml',
      X509Certificates: ['example-cert']
    })
  })

  it('should parse metadata2.xml', async () => {
    const filePath = path.join(__dirname, './metadata2.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'http://www.okta.com/10203040501020304050',
      HTTPPost: 'https://acme.okta.com/app/example_saml/10203040501020304050/sso/saml',
      HTTPRedirect: 'https://acme.okta.com/app/example_saml/10203040501020304050/sso/saml',
      X509Certificates: ['example-cert']
    })
  })
})
