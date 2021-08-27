---
sidebar_position: 1
---

# Crear una página

Añade **archivos Markdown o React** a `src/pages` para crear una **página independiente**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Crea tu primera página React

Crea un archivo en `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My Página React</h1>
      <p>Esta es una página React</p>
    </Layout>
  );
}
```

Una nueva página está disponible en `http://localhost:3000/my-react-page`.

## Cree su primera página Markdown

Crea un archivo en `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# Mi página Markdown

Esta es una página Markdown
```

Una nueva página está disponible en `http://localhost:3000/my-markdown-page`.
