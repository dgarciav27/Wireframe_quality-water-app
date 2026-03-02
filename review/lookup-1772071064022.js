(function(window, undefined) {
  var dictionary = {
    "a32d58a5-2737-4445-942a-0497e1f1a758": "My measurements",
    "67fb9edc-b68a-4216-8ec0-7c6061de50ef": "Collage",
    "a355d2c5-6f9d-4f55-92cb-f90d81c87e92": "Home 3",
    "9cf2c5f0-1040-4381-b557-0fa40759d1e3": "Brightversion",
    "022f79e6-32b2-4c25-84c9-f2a631cad33d": "Home 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Biodiversity",
    "efa52c6b-f026-4a09-a86b-f45502db789b": "Home 1",
    "3f9c7862-528d-4f86-a261-fd085d05d694": "Map ",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "d28c0213-f654-4c28-95f4-7c5407ad2684": "Bottom nav menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);