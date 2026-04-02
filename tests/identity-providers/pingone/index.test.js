const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('PingOne', () => {
  it('should parse metadata.xml', async () => {
    const filePath = path.join(__dirname, './metadata.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://login.example.com',
      HTTPPost: 'https://login.example.com/saml20/idp/sso',
      HTTPRedirect: 'https://login.example.com/saml20/idp/sso',
      X509Certificates: [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678+/=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678+/=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv'
      ]
    })
  })

  it('should strip whitespace from multi-line certificates', async () => {
    const filePath = path.join(__dirname, './metadata.xml')
    const result = await parseIDPMetadataFromFile(filePath)
    const cert = result.X509Certificates[0]
    expect(cert).not.toMatch(/\s/)
  })
})
