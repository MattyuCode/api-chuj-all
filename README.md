# Nota cuando se publica en RENDER


## para agregar en RENDER se necesita estos cambios en package.json
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

### Deploy NODEJS and MONGODB en RENDER
-- https://www.youtube.com/watch?v=A4gM8DqZNto

### How to deploy MERN project (NodeJS, React) using render and netlify.
-- https://www.youtube.com/watch?v=AjaGmTVBIfI&list=LLGUtcYm_3o56OwmYb59QZSQ&index=2

  
  
