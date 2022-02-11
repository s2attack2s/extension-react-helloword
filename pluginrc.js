const path = require("path");
const root = __dirname;
const srcFolder = path.join(root, "src");
const destFolder = path.join(root, "dist");
const certPath = path.join(destFolder, "cert.p12");
module.exports = {
  extensionBundleId: "com.react.hello.word",
  extensionBundleName: "demo",
  extensionBundleVersion: "1.0.1",
  cepVersion: "7.0",
  panelName: "react hello word",
  width: "400",
  height: "600",
  root: root,
  sourceFolder: srcFolder,
  destinationFolder: destFolder,
  certificate: {
    customCert: {
      path: "",
      password: "password",
    },
    selfSign: {
      country: "US",
      province: "CA",
      org: "org",
      name: "name",
      password: "password",
      locality: "locality",
      orgUnit: "orgUnit",
      email: "your@email.com",
      output: certPath,
    },
  },
};
