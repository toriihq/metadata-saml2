const fs = require('fs')
const path = require('path')
const { parseCertificate } = require('../../index')

describe('parseCertificate', () => {
  it('should parse certificate', async () => {
    const filePath = path.join(__dirname, './cert.pem')
    const certContent = fs.readFileSync(filePath).toString()
    const cert = await parseCertificate(certContent)
    expect(cert).toMatchObject({
      issuer: {
        C: 'AU',
        O: 'Internet Widgits Pty Ltd',
        ST: 'Some-State'
      },
      subject: {
        C: 'AU',
        O: 'Internet Widgits Pty Ltd',
        ST: 'Some-State'
      },
      valid_from: 'Aug  1 13:44:57 2018 GMT',
      valid_to: 'Aug  1 13:44:57 2019 GMT'
    })
  })
})
