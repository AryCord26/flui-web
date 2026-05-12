# Flui Platform — Painel Web

## Sobre o projeto

O **Flui Platform** é o painel administrativo web desenvolvido para o *Charge Platform Challenge*.  
A plataforma foi criada com foco em mobilidade elétrica, sustentabilidade e gerenciamento inteligente de pontos de recarga para veículos elétricos.

O sistema permite que a equipe da Flui acompanhe:
- pontos de recarga;
- avaliações dos usuários;
- métricas da plataforma;
- status das estações;
- relatórios e indicadores.

---

# Tecnologias utilizadas

- Next.js
- React
- Tailwind CSS
- TypeScript
- Lucide Icons

---

# Funcionalidades

## Dashboard
- KPIs principais;
- métricas gerais;
- gráficos;
- atividades recentes;
- status das estações.

## Pontos de recarga
- listagem completa;
- filtros;
- busca;
- disponibilidade;
- gerenciamento de estações.

## Avaliações
- visualização de comentários;
- notas dos usuários;
- filtros;
- exportação;
- ações administrativas.

---

# Estrutura do projeto

```bash
src/
│
├── app/
│   ├── dashboard/
│   ├── pontos/
│   ├── avaliacoes/
│   └── layout.tsx
│
├── components/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── Card.tsx
│   └── Table.tsx
│
├── data/
│   └── mock.ts
│
└── styles/
    └── globals.css
```

---

# Instalação

## Clone o repositório

```bash
git clone https://github.com/seuusuario/flui-platform.git
```

## Entre na pasta

```bash
cd flui-platform
```

## Instale as dependências

```bash
npm install
```

---

# Executando o projeto

```bash
npm run dev
```

O projeto estará disponível em:

```bash
http://localhost:3000
```

---

# Identidade visual

## Paleta principal

| Cor | Hex |
|---|---|
| Verde principal | `#22C55E` |
| Verde escuro | `#16A34A` |
| Azul escuro | `#0F172A` |
| Branco gelo | `#F8FAFC` |
| Cinza claro | `#CBD5E1` |

---

# Objetivo do projeto

A proposta da Flui é oferecer uma experiência moderna e intuitiva para gestão de mobilidade elétrica, conectando:
- tecnologia;
- sustentabilidade;
- experiência do usuário;
- eficiência operacional.

---

# Protótipos desenvolvidos

## Aplicativo mobile
- mapa de pontos;
- busca com filtros;
- detalhes da estação;
- avaliações.

## Plataforma web
- dashboard administrativo;
- gestão de estações;
- gestão de avaliações.

---

# Melhorias futuras

- integração com backend;
- autenticação;
- banco de dados;
- mapa em tempo real;
- monitoramento IoT;
- dark mode;
- relatórios avançados;
- analytics em tempo real.

---

# Desenvolvido para

## Charge Platform Challenge — Flui

Projeto acadêmico voltado para inovação em mobilidade elétrica e plataformas digitais sustentáveis.
