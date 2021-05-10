const parseCertificate = (cert) => {
  const tls = require('tls')
  const net = require('net')

  cert = '-----BEGIN CERTIFICATE-----\n' + cert + '\n-----END CERTIFICATE-----'

  const secureContext = tls.createSecureContext({ cert })
  const secureSocket = new tls.TLSSocket(new net.Socket(), { secureContext })
  const parsedCert = secureSocket.getCertificate()
  secureSocket.destroy()

  return parsedCert
}

module.exports = parseCertificate
