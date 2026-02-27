# Deploy — Portfolio Hzd4m

## GitHub Pages (Configurado)

O projeto esta configurado para deploy automatico via GitHub Actions.

### Configuracao Necessaria

1. **No GitHub, vá para:** `Settings` > `Pages`

2. **Configure:**
   - Source: `GitHub Actions`

3. **Faça push para main:**
   ```bash
   git add .
   git commit -m "feat: initial portfolio"
   git push origin main
   ```

4. **Acompanhe o deploy:**
   - Vá para `Actions` >workflow em execucao
   - Aguarde ~2-3 minutos
   - URL será: `https://hzd4m.github.io/portfolio`

### Deploy Manual (Alternative)

```bash
# Instale dependencias
npm install

# Build
npm run build

# A saida estara em ./out
# Faça upload do conteudo de 'out' para seu repositorio GitHub Pages
```

---

## Estrutura de Arquivos Gerados

```
out/
├── _next/
│   └── static/
├── blog/
│   └── index.html
├── index.html
└── ...
```

---

## Custom Domain (Opcional)

Se quiser usar dominio proprio:

1. Adicione arquivo `public/CNAME` com seu dominio:
   ```
   portfolio.hzd4m.dev
   ```

2. Configure CNAME no seu provedor DNS

---

## Problemas Comuns

| Problema | Solucao |
|----------|---------|
| 404 em subpaginas | O `next.config.js` ja tem `trailingSlash: true` e `output: "export"` |
| Imagens nao carregam | Configurado `unoptimized: true` para GitHub Pages |
| Fonts nao aparecem | Verifique que Google Fonts estao sendo carregadas |

---

## Stack Utilizada

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GitHub Pages + Actions
