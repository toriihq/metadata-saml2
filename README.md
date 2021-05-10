# metadata-saml2

Parse SAML metadata.xml files with minimal dependencies

## Installation

```bash
npm install --save metadata-saml2
```

Or 
```bash
yarn add metadata-saml2
```

## Usage

### Parsing from an XML file:

```javascript
const { parseIDPMetadataFromFile } = require('metadata-saml2')

const metadata = await parseIDPMetadataFromFile('metadata.xml')
console.log(metadata)
/*
  Output:
  {
    entityId: 'https://sts.windows.net/12345678-1234-1234-1234-123456789012/',
    X509Certificate: 'example-cert',
    HTTPRedirect: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2',
    HTTPPost: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2'
  }
 */
```

### Parsing from an XML string:
```javascript
const { parseIDPMetadataFromString } = require('metadata-saml2')

const xmlString = 'read the xml from a file or stream'  
const metadata = await parseIDPMetadataFromString(xmlString)
console.log(metadata)
/*
  Output:
  {
    entityId: 'https://sts.windows.net/12345678-1234-1234-1234-123456789012/',
    X509Certificate: 'example-cert',
    HTTPRedirect: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2',
    HTTPPost: 'https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/saml2'
  }
 */
```

### Parsing the certificate:
```javascript
const { parseCertificate } = require('metadata-saml2')

const certString = 'read the xml from a file or stream'  
const cert = parseCertificate(certString)
console.log(cert)
/*
  Output:
  {
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
  }
*/
```