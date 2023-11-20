const get = require('./utils/get')

const parseIDPMetadata = async (data) => {
  const mdGet = (data, path) => get(data, path) || get(data, 'md:' + path) || get(data, 'ns0:' + path)

  const entityDescriptor = mdGet(data, 'EntityDescriptor')
  const IDPSSODescriptor = mdGet(entityDescriptor, 'IDPSSODescriptor.0')
  const keyDescriptors = mdGet(IDPSSODescriptor, 'KeyDescriptor')
  const singleSignOnServices = mdGet(IDPSSODescriptor, 'SingleSignOnService')

  const X509Certificates = keyDescriptors.map(keyDescriptor => (
    get(keyDescriptor, 'KeyInfo.0.X509Data.0.X509Certificate.0') ||
    get(keyDescriptor, 'ds:KeyInfo.0.ds:X509Data.0.ds:X509Certificate.0') ||
    get(keyDescriptor, 'dsig:KeyInfo.0.dsig:X509Data.0.dsig:X509Certificate.0') ||
    get(keyDescriptor, 'ns2:KeyInfo.0.ns2:X509Data.0.ns2:X509Certificate.0')
  ))
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
    X509Certificates,
    HTTPRedirect,
    HTTPPost
  }
}

module.exports = parseIDPMetadata
