# Changelog

## v2.1.1

- Remove jest and standard from devDependencies, use npx instead

---

## v2.1.0

- Fix: Strip whitespace from X509Certificate values parsed from XML metadata. Certificates in indented XML (e.g. PingOne/PingFederate) included newlines and spaces that corrupted downstream PEM encoding and caused SAML signature validation failures.
- Add PingOne test coverage with multi-line indented certificate
- Upgrade dependencies: xml2js 0.4→0.6, jest 26→30, standard 16→17

---

## v2.0.1

- Update version

---

## v2.0.0

#### Breaking Changes:

- Support multiple certificates: Removed `X509Certificate` string in favor of `X509Certificates` array 

---

## v1.0.0

_No changelog for this release._