const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Google', () => {
  it('should parse metadata.xml', async () => {
    const filePath = path.join(__dirname, './metadata.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://accounts.google.com/o/saml2?idpid=C02abcdef',
      HTTPPost: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      HTTPRedirect: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      X509Certificates: ['example-cert']
    })
  })

  it('should parse metadata-multi-cert.xml and return two certificates', async () => {
    const filePath = path.join(__dirname, './metadata-multi-cert.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://accounts.google.com/o/saml2?idpid=C02abcdef',
      HTTPPost: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      HTTPRedirect: 'https://accounts.google.com/o/saml2/idp?idpid=C02abcdef',
      X509Certificates: [
        'example-cert-1',
        'example-cert-2'
      ]
    })
  })
})
