---
sidebar_position: 2
---

# Traduzca su sitio web

Vamos a traducir `docs/intro.md` al francés.

## Configurar i18n

Modificar `docusaurus.config.js` para añadir soporte para la localización `fr` :

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traducir un documento

Copie el archivo `docs/intro.md` a la carpeta `i18n/fr` :

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traducir `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en francés.

## Inicie su sitio localizado

Inicie su sitio en la localidad francesa:

```bash
npm run start -- --locale fr
```

Su sitio localizado es accesible en `http://localhost:3000/fr/` y la página `Getting Started` está traducida.

:::precaución

En el desarrollo, sólo se puede utilizar una configuración regional al mismo tiempo.

:::

## Añadir un menú desplegable de localización

Para navegar sin problemas por los distintos idiomas, añada un menú desplegable de configuración regional.

Modifica el archivo `docusaurus.config.js` :

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

El menú desplegable de la configuración regional aparece ahora en la barra de navegación:

![Despliegue de localidades](/img/tutorial/localeDropdown.png)

## Construya su sitio localizado

Construya su sitio para un lugar específico:

```bash
npm run build -- --locale fr
```

O construya su sitio para incluir todos los locales a la vez:

```bash
npm run build
```
