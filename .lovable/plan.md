# GCM Porto Velho 2026 — Landing page de vendas

Landing page única (rota `/`), em português, focada em conversão para o material digital de preparação. Sem plataforma, login, aulas ou área de membros.

## Identidade visual

Design system em `src/styles.css` com tokens semânticos (sem cores fixas nos componentes):

- Azul escuro `#062B5C` (dominante), azul institucional `#0B4F91`, azul claro `#EAF2FA`
- Dourado `#E7B52D` (destaque/CTA), branco base, cinza texto `#475569`, cinza claro `#F5F7FA`
- Tipografia institucional forte (títulos condensados/pesados, corpo neutro legível), cantos moderados, sombras suaves, muito espaço em branco
- Animações discretas: fade-in ao entrar na viewport e leve elevação em hover

## Estrutura da página (nesta ordem)

1. **Header fixo** — logo textual GCM PORTO VELHO 2026, links Material / Bônus / Oferta / FAQ, botão dourado QUERO ME PREPARAR (`#planos`). No mobile vira menu compacto.
2. **Hero** — eyebrow, H1 "800 QUESTÕES PARA A RETA FINAL DA GCM PORTO VELHO", subheadline, linha de conteúdo, CTA principal + secundário, selos (acesso imediato / material digital / celular, tablet ou computador), selo PROVA 20/09/2026 e composição visual do material à direita.
3. **Problema × Solução** — dois cards: problema (branco, borda cinza) e solução (azul escuro, destaque) com o fluxo ESTUDE → RESOLVA → CORRIJA → REVISE. Sem vermelho.
4. **Conheça o material por dentro** — galeria de 5 mockups numerados (Questões, Gabarito comentado, Mapas mentais, Cronograma, Kit completo).
5. **Questões** — blocos de 80 questões, múltipla escolha, gabarito comentado, revisão, com os temas já definidos (Porto Velho, legislação da GM, administrativo, constitucional, direitos humanos, penal/processo penal, trânsito). Sem citar banca oficial.
6. **Gabarito comentado** — exemplo visual de questão → alternativas → GABARITO: C ✓ → POR QUÊ? → MINI REVISÃO.
7. **Bônus** — 10 mapas mentais e cronograma de 27 dias, com destaque 20/09/2026.
8. **Data da prova** — faixa azul escuro com CTA.
9. **Tudo o que você recebe** — lista visual dos itens listados.
10. **Oferta (`#planos`)** — card básico R$ 9,90 (secundário) e card completo R$ 18,90 com badge MAIS COMPLETO (dominante). Sem preço riscado ou desconto falso. No mobile o completo aparece primeiro.
11. **Garantia de 7 dias**.
12. **FAQ** — acordeão com as 9 perguntas.
13. **CTA final** e **rodapé** com aviso legal, Política de Privacidade, Termos de Uso e copyright.

## Mockups do material

Feitos em código (HTML/CSS com os tokens do design system): capa, página de questões, gabarito comentado, mapa mental e cronograma. Leves, nítidos em qualquer tela e fáceis de editar depois.

## Botões e checkout

Todos os CTAs levam à âncora `#planos` com rolagem suave. Como ainda não há links de checkout, os botões dos planos ficam preparados em um único ponto de configuração — assim que você enviar as URLs, basta trocar em um lugar para os botões apontarem direto para o pagamento.

## Detalhes técnicos

- Rota única em `src/routes/index.tsx`, seções em componentes separados dentro de `src/components/landing/`
- Conteúdo (preços, datas, número de questões, listas, FAQ) centralizado em `src/content/gcm.ts` para edição fácil; `TOTAL_QUESTOES = 800`
- FAQ com o acordeão shadcn existente
- `head()` da rota com title, meta description, og/twitter e JSON-LD de Product + FAQPage
- HTML semântico, um único H1, `aria-label` nos ícones decorativos, foco visível, contraste AA
- Sem imagens pesadas; animações via CSS/IntersectionObserver
