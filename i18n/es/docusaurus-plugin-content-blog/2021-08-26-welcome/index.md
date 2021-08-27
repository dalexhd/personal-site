---
slug: bienvenido
title: Bienvenido
authors:
  - slorber
  - yangshun
tags:
  - facebook
  - hola
  - docusaurus
---

[Las funciones de blogging de Docusaurus](https://docusaurus.io/docs/blog) están potenciadas por el [plugin de blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Basta con añadir archivos (o carpetas) Markdown al directorio `del blog` .

Los autores habituales del blog se pueden añadir a `authors.yml`.

La fecha de la publicación del blog puede extraerse de los nombres de los archivos, como por ejemplo

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

Una carpeta de entradas de blog puede ser conveniente para ubicar las imágenes de las entradas de blog:

![Peluche de Docusaurus](./docusaurus-plushie-banner.jpeg)

El blog también admite etiquetas.

**Y si no quieres un blog**: simplemente borra este directorio, y usa `blog: false` en tu configuración de Docusaurus.
