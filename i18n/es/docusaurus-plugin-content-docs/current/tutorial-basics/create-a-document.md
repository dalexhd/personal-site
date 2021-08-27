---
sidebar_position: 2
---

# Crear un documento

Los documentos son **grupos de páginas** conectadas entre sí:

- una barra lateral ****
- **navegación anterior/siguiente**
- **versionado**

## Cree su primer documento

Crea un archivo markdown en `docs/hello.md`:

```md title="docs/hello.md"
# Hola

¡Este es mi **primer documento Docusaurus**!
```

Ya está disponible un nuevo documento en `http://localhost:3000/docs/hello`.

## Configurar la barra lateral

Docusaurus automáticamente **crea una barra lateral** desde la carpeta `docs`.

Añadir metadatos para personalizar la etiqueta y posición de la barra lateral:

```md title="docs/hello.md" {1-4}
---
sidebar_label: '¡Hola!
sidebar_position: 3
---

# Hola

¡Este es mi **primer documento Docusaurus**!
```

También es posible crear explícitamente tu barra lateral en `sidebars.js`:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
- items: [...],
elementos: ['hola'],
    },
  ],
};
```
