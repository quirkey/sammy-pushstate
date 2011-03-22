/**
 * this file contains the json representation for rewrite rules
**/
[
  { // rewriting / to index.html
    "from":"/",
    "to":"index.html"
  },
  {
    "from": "*/js/:file",
    "to": "js/:file"
  },
  {
    "from": "*/css/:file",
    "to": "css/:file"
  },
  {
    "from": "/push/*",
    "to": "index.html"
  },
  { // keeping relative urls sane
    "from":"/*",
    "to":"/*"
  }
]
