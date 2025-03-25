"use strict";

const embedDirectly = [
  "extprint3r.github.io",
  "ext-remover.net",
  "e.widgetbot.io",
  "vm.frogiee1.com",
  "yewtu.be"
];

const embedAlternative = {
  "example.com": "https://example.org" // now that nowgg.lol is dead, ill just leave this here so i dont forget how to add an alternative
};

let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad embed string or bad URL. Got error:\n${err}\nPlease report this in the Discord!`);
  throw err;
}

registerSW()
  .then(() => {
    const urlObj = new URL(destination);
    const baseDomain = urlObj.hostname;

    if (embedDirectly.some(domain => baseDomain.endsWith(domain))) {
      window.open(destination, "_self");
    } else if (embedAlternative[baseDomain]) {
      window.open(embedAlternative[baseDomain], "_self");
    } else {
      window.open(__uv$config.prefix + __uv$config.encodeUrl(destination), "_self");
    }
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });