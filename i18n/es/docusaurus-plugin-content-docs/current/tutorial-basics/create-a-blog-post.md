---
sidebar_position: 3
---

# Crear una publicación en el blog

Docusaurus crea una **página para cada entrada del blog**, pero también una **página de índice del blog**, un **sistema de etiquetas**, un feed **RSS**...

## Cree su primera publicación

Crea un archivo en `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: saludos
title: ¡Saludos!
autores:
  - name: Joel Marcey
    title: Co-creador de Docusaurus 1
    url: https://github. om/JoelMarcey
    image_url: https://github.com/JoelMarcey. ng
  - name: Sébastien Lorber
    title: Mantenedor Docusaurus
    url: https://sebastienlorber. om
    image_url: https://github.com/slorber.png
etiquetas: [greetings]
---

¡Enhorabuena, has hecho tu primera publicación!

Siéntete libre de jugar y editar este post todo lo que quieras.
```

Ya está disponible una nueva entrada del blog en `http://localhost:3000/blog/greetings`.
