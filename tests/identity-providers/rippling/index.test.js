const { parseIDPMetadataFromFile } = require('../../../index')
const path = require('path')

describe('Rippling', () => {
  const filePath = path.join(__dirname, './metadata.xml')

  it('should parse metadata.xml', async () => {
    const result = await parseIDPMetadataFromFile(filePath)
    expect(result).toEqual({
      entityId: 'https://app.rippling.com/A123/idp.xml',
      HTTPPost: 'https://app.rippling.com/api/platform/sso/sp-initiated/A123',
      HTTPRedirect: 'https://app.rippling.com/api/platform/sso/sp-initiated/A123',
      X509Certificates: ['example-cert']
    })
  })
})
