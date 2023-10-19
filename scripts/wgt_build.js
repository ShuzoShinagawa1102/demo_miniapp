const fs = require("fs");
const AdmZip = require("adm-zip");

const manifest = JSON.parse(fs.readFileSync("./dist/build/app/manifest.json"));
const appId = manifest.id;

if (process.argv[2]) {
  manifest.version.channel = `${process.argv[2].toUpperCase()}`;
} else {
  manifest.version.channel = "PROD";
}
fs.writeFileSync("./dist/build/app/manifest.json", JSON.stringify(manifest));

const zip = new AdmZip();
zip.addLocalFolder("./dist/build/app/");
zip.writeZip(`./dist/${appId}.wgt`);
