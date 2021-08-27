---
sidebar_position: 5
---

# Despliegue su sitio

Docusaurus es un **generador de sitios estáticos** (también llamado **[Jamstack](https://jamstack.org/)**).

Construye tu sitio como simples archivos **estáticos de HTML, JavaScript y CSS**.

## Construya su sitio

Construya su sitio **para producción**:

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `build` .

## Despliegue su sitio

Pruebe su construcción de producción localmente:

```bash
npm run serve
```

La carpeta `build` se sirve ahora en `http://localhost:3000/`.

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
