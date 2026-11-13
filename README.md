# Chapa Spartha

Site da chapa do grêmio estudantil, feito com React e Vite.

## Executar

Instale o Node.js 24 e, na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Abra o endereço informado no terminal. Para gerar a versão de produção, execute `npm run build`; para conferi-la, execute `npm run preview`.

Na Vercel, selecione a raiz deste projeto como Root Directory. O arquivo `vercel.json` configura a instalação com `npm ci`, o build com `npm run build` e a saída em `dist`. Envie `package.json`, `package-lock.json` e `vercel.json` junto com o código. Se o erro persistir, confira os comandos personalizados e o log de instalação nas configurações da Vercel.

## Personalizar

Edite `src/data/siteContent.js` para alterar textos, propostas, integrantes e contatos. Os comentários no arquivo mostram o formato dos dados. Os ícones das propostas são associados em `src/App.jsx`. Coloque as imagens em `public/images/` e informe seus caminhos no mesmo arquivo de dados. Use o logo em `images.logo` e uma arte do Dório em `images.mascot`; as imagens devem ser arquivos fornecidos pela chapa. As cores principais estão nas variáveis no começo de `src/style.css`.

Ainda faltam os nomes, funções, fotos e descrições dos integrantes, os endereços dos canais de contato e os arquivos das imagens para uso direto no projeto. Revise também os textos antes da divulgação.
