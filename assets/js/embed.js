/*
"use strict";

const embedDirectly = ["https://now.gg.zkit.above.gay", "https://now.gg.zkit.above.gay/", "http://now.gg.zkit.above.gay", "http://now.gg.zkit.above.gay/"];
const embedAlternative = { 
  "https://now.gg": "https://now.gg.zkit.above.gay/hub",
  "https://now.gg/": "https://now.gg.zkit.above.gay/hub",
  "http://now.gg": "https://now.gg.zkit.above.gay/hub",
  "http://now.gg/": "https://now.gg.zkit.above.gay/hub"
};

let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad # string or bad URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    if (embedDirectly.includes(destination)) {
      // If in embedDirectly, open destination directly
      window.open(destination, "_self");
    } else if (embedAlternative[destination]) {
      // If in embedAlternative, open the alternative destination
      window.open(embedAlternative[destination], "_self");
    } else {
      window.open(__uv$config.prefix + __uv$config.encodeUrl(destination), "_self");
    }
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
*/

"use strict";

const embedDirectly = [
  "now.gg.zkit.above.gay",
  "extprint3r.github.io",
  "ext-remover.net",
  "e.widgetbot.io",
  "vm.frogiee1.com"
];

const embedAlternative = {
  "now.gg": "https://now.gg.zkit.above.gay/hub"
};

let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad # string or bad URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    const urlObj = new URL(destination);
    const baseDomain = urlObj.hostname; // Extracts the base domain

    if (embedDirectly.some(domain => baseDomain.endsWith(domain))) {
      // If the base domain matches, embed it directly
      window.open(destination, "_self");
    } else if (embedAlternative[baseDomain]) {
      // If an alternative exists, redirect to it
      window.open(embedAlternative[baseDomain], "_self");
    } else {
      // Otherwise, encode and embed using the configured proxy
      window.open(__uv$config.prefix + __uv$config.encodeUrl(destination), "_self");
    }
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });