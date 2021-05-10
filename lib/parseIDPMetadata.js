const get = require('./utils/get')

const parseIDPMetadata = async (data) => {
  const mdGet = (data, path) => get(data, path) || get(data, 'md:' + path)

  const entityDescriptor = mdGet(data, 'EntityDescriptor')
  const IDPSSODescriptor = mdGet(entityDescriptor, 'IDPSSODescriptor.0')
  const keyDescriptor = mdGet(IDPSSODescriptor, 'KeyDescriptor.0')
  const singleSignOnServices = mdGet(IDPSSODescriptor, 'SingleSignOnService')

  const X509Certificate = (
    get(keyDescriptor, 'KeyInfo.0.X509Data.0.X509Certificate.0') ||
    get(keyDescriptor, 'ds:KeyInfo.0.ds:X509Data.0.ds:X509Certificate.0') ||
    get(keyDescriptor, 'dsig:KeyInfo.0.dsig:X509Data.0.dsig:X509Certificate.0')
  )
  const entityId = get(entityDescriptor, '$.entityID')
  const [HTTPRedirect] = singleSignOnServices
    .map(obj => obj.$)
    .filter(obj => obj.Binding === 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect')
    .map(obj => obj.Location)
  const [HTTPPost] = singleSignOnServices
    .map(obj => obj.$)
    .filter(obj => obj.Binding === 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST')
    .map(obj => obj.Location)

  return {
    entityId,
    X509Certificate,
    HTTPRedirect,
    HTTPPost
  }
}

module.exports = parseIDPMetadata
