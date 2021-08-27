---
sidebar_position: 1
---

# Gestionar las versiones de los documentos

Docusaurus puede gestionar múltiples versiones de tus documentos.

## Crear una versión docs

Libere una versión 1.0 de su proyecto:

```bash
npm run docusaurus docs:version 1.0
```

La carpeta `docs` se copia en `versioned_docs/version-1.0` y se crea `versions.json` .

Sus documentos tienen ahora 2 versiones:

- `1.0` en `http://localhost:3000/docs/` para los documentos de la versión 1.0
- `actual` en `http://localhost:3000/docs/next/` para los **próximos, docs**.

## Añadir un desplegable de versiones

Para navegar sin problemas entre versiones, añada un desplegable de versiones.

Modifica el archivo `docusaurus.config.js` :

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

El menú desplegable de la versión de los documentos aparece en la barra de navegación:

![Despliegue de la versión de los documentos](/img/tutorial/docsVersionDropdown.png)

## Actualizar una versión existente

Es posible editar los documentos versionados en su respectiva carpeta:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` actualizaciones `http://localhost:3000/docs/next/hello`
