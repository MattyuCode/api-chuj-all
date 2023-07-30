# NOta cuando se publica en RENDER se tiene que cambiar la version del mongoose

Deploy NODEJS and MONGODB en RENDER
-- https://www.youtube.com/watch?v=A4gM8DqZNto

* Version actual: "mongoose": "^7.4.0",
* Version que tiene que  ir con render  "mongoose": "^6.10.1",


# para agregar en RENDER se necesita estos cambios en package.json
```json
{
  "name": "backend_nube",
  "version": "1.0.0",
  "engines": {
    "node": "18.x",
    "npm": "9.x"
  },
  "description": "",
  "main": "src/app.js",
  "scripts": {
    "start": "nodemon src/app.js",
    "start:dev": "nodemon src/app.js"
  },

```

## Tambien esto en .gitignore

```
package-lock.json

node_modules/

```
  
