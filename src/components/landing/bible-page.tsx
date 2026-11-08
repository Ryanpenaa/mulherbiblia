import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { images } from "./bible-images";

type Pixel = ((...args: unknown[]) => void) & { queue?: unknown[][]; loaded?: boolean; version?: string; push?: Pixel; callMethod?: (...args: unknown[]) => void };
type PixelWindow = Window & { fbq?: Pixel; _fbq?: Pixel };

function CheckoutLink({ children, className, plan = "basico" }: { children: ReactNode; className?: string; plan?: "basico" | "completo" }) {
  const url = plan === "completo" ? "https://pay.cakto.com.br/38xam4s" : "https://pay.cakto.com.br/etirixe_1139755";
  return <Button asChild className={className}><a href={url} data-checkout-link="true" onClick={() => {
    (window as PixelWindow).fbq?.("trackCustom", "CheckoutClick", { destination: "cakto", product: "mulheres_da_biblia", plan, checkout_url: url });
  }}>{children}</a></Button>;
}

export function BiblePage() {
  const [expandedCard, setExpandedCard] = useState<{src: string; name: string} | null>(null);
  const [todayLabel, setTodayLabel] = useState("");
  useEffect(() => {
    setTodayLabel(new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "America/Sao_Paulo" }).format(new Date()));
  }, []);
  const cards = [
    { name: "Ester", image: images.ESTER2 },
    { name: "Rute", image: images.RUTE2 },
    { name: "Débora", image: images.DEBORA2 },
    { name: "Ana", image: images.ANA2 },
    { name: "Maria", image: images.MARIA2 },
    { name: "Maria Madalena", image: images.MARIAMADALENA2 },
  ];
  const newCards = [
    { name: "Ana", src: "/ana.webp" },
    { name: "Eva", src: "/eva.webp" },
    { name: "Marta", src: "/marta.webp" },
    { name: "Card bíblico", src: "/n1.webp" },
    { name: "Raquel", src: "/raquel.webp" },
    { name: "Sara", src: "/sara.webp" },
    { name: "Eva (segunda imagem)", src: "/eva..webp" },
  ];
  useEffect(() => {
    if (!expandedCard) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setExpandedCard(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedCard]);
  useEffect(() => {
    const w = window as PixelWindow;
    if (w.fbq) return;
    const pixel: Pixel = (...args) => {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue?.push(args);
    };
    pixel.queue = []; pixel.loaded = true; pixel.version = "2.0"; pixel.push = pixel;
    w.fbq = pixel; w._fbq = pixel;
    pixel("init", "1764154781297929"); pixel("track", "PageView");
    const script = document.createElement("script");
    script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }, []);
  return <div className="bible-landing">

<div className="offer-topbar"><span>CONDIÇÃO ESPECIAL PARA O GUIA VISUAL {todayLabel && <span className="offer-date">• {todayLabel}</span>}</span><strong>Plano Básico por R$ 12,90</strong><a href="#oferta">Ver planos</a></div><header className="hero"><div className="wrap hero-inner"><span className="eyebrow">GUIA VISUAL • MULHERES DA BÍBLIA</span><h1>Descubra as histórias de <em>mulheres que marcaram a Bíblia</em> e os ensinamentos que elas deixaram para nós</h1><div className="hero-mockup"><div className="hero-glow"></div><img src={images.mk.src} alt="Mockup original do Guia Visual Mulheres da Bíblia" loading="eager" srcSet={images.mk.srcSet} width="960" height="720" decoding="async" fetchPriority="high" sizes="(max-width: 760px) 109vw, 760px" /></div><p className="hero-sub">Um guia ilustrado, fácil de acompanhar e com referências bíblicas para aprofundar suas leituras.</p><CheckoutLink className="cta hero-cta">QUERO CONHECER AS MULHERES DA BÍBLIA</CheckoutLink><div className="trust hero-trust">✓ Acesso digital   •   ✓ Pagamento único   •   ✓ Compra segura</div></div></header>

<main>
<section className="section emotional"><div className="wrap emotional-layout"><div className="emotional-heading"><span className="eyebrow">ALÉM DOS NOMES, EXISTEM HISTÓRIAS</span><h2>Mulheres que viveram desafios. <em>Histórias que ainda têm muito a ensinar.</em></h2></div><div className="emotional-detail"><span className="emotional-rule" aria-hidden="true"></span><p>Coragem nas decisões de Ester. Lealdade na jornada de Rute. Perseverança na oração de Ana. Liderança na história de Débora.</p><p className="emotional-conclusion">Conheça essas trajetórias, seus contextos e as passagens bíblicas em um guia ilustrado feito para consultar com tranquilidade.</p><div className="emotional-footnote">Conheça alguns dos cards logo abaixo <span aria-hidden="true">↓</span></div></div></div></section>
<section className="section curiosity curiosity-showcase"><div className="wrap"><div className="ornament-line"><span></span><b>✦</b><span></span></div><h2>Veja por dentro do <em>Guia Visual Mulheres da Bíblia</em></h2><p className="curiosity-intro">Conheça alguns dos cards ilustrados e veja como cada história é apresentada de forma organizada.</p><p className="swipe-hint">Deslize para ver os cards • Toque para ampliar</p></div><div className="women-carousel women-carousel--forward" role="region" aria-label="Cards originais do guia em movimento para a esquerda" tabIndex={0}><div className="women-track">{[0, 1].map((copy) => <div className="women-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>{cards.map(({name,image}) => <button className="women-card-button" type="button" tabIndex={copy === 1 ? -1 : 0} key={name} aria-label={`Ampliar card de ${name}`} onClick={() => setExpandedCard({src: image.src, name})}><img src={image.src} alt={copy === 1 ? "" : `Card de ${name}`} srcSet={image.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="(max-width: 760px) 78vw, 310px" /></button>)}</div>)}</div></div><div className="women-carousel women-carousel--reverse" role="region" aria-label="Novos cards bíblicos em movimento para a direita" tabIndex={0}><div className="women-track">{[0, 1].map((copy) => <div className="women-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>{newCards.map(({name,src}) => <button className="women-card-button" type="button" tabIndex={copy === 1 ? -1 : 0} key={src} aria-label={`Ampliar card de ${name}`} onClick={() => setExpandedCard({src, name})}><img src={src} alt={copy === 1 ? "" : `Card de ${name}`} width="640" height="800" decoding="async" loading="lazy" sizes="(max-width: 760px) 78vw, 310px" /></button>)}</div>)}</div></div></section>
<section className="section bonuses" id="bonus"><div className="wrap"><span className="eyebrow">EXCLUSIVOS DO PLANO COMPLETO</span><h2>Além dos cards, você pode levar <em>3 materiais complementares</em></h2><p className="bonuses-intro">Um kit pensado para organizar o estudo, entender o contexto e registrar o que você aprende.</p><div className="bonus-grid"><article className="bonus-item"><img src="/reflexa.png" alt="Capa ilustrada do Diário de Reflexões" width="420" height="540" loading="lazy"/><div className="bonus-content"><span className="bonus-order">BÔNUS 01</span><h3>Diário de Reflexões</h3><p>Espaço para anotar versículos, orações e aprendizados durante o estudo das mulheres da Bíblia.</p><div className="bonus-reference">Valor avulso sugerido: <s>R$ 19,90</s></div></div></article><article className="bonus-item"><img src="/linha.png" alt="Capa ilustrada da Linha do Tempo Bíblica" width="420" height="540" loading="lazy"/><div className="bonus-content"><span className="bonus-order">BÔNUS 02</span><h3>Linha do Tempo Bíblica</h3><p>Uma visão organizada de épocas, personagens e acontecimentos para compreender melhor cada história.</p><div className="bonus-reference">Valor avulso sugerido: <s>R$ 24,90</s></div></div></article><article className="bonus-item"><img src="/plano.png" alt="Capa ilustrada do Plano de Estudo de 30 Dias" width="420" height="540" loading="lazy"/><div className="bonus-content"><span className="bonus-order">BÔNUS 03</span><h3>Plano de Estudo de 30 Dias</h3><p>Roteiro diário de leitura e reflexão, com um espaço para acompanhar a evolução nos estudos.</p><div className="bonus-reference">Valor avulso sugerido: <s>R$ 17,90</s></div></div></article></div><div className="bonus-total"><span>Valor avulso sugerido dos três materiais: <s>R$ 62,70</s></span><strong>GRÁTIS <small>no Plano Completo</small></strong></div><p className="bonus-disclosure">Valores avulsos apenas sugeridos para comparação; não representam preços anteriores praticados. Materiais em preparação.</p></div></section>
<section className="section forwho"><div className="wrap split"><div><span className="eyebrow">PARA QUEM É ESTE GUIA?</span><h2>Um jeito mais simples de conhecer as <em>histórias das Mulheres da Bíblia</em></h2><p>Um material de consulta para acompanhar seu ritmo de leitura e estudo.</p></div><div className="checklist"><p>✓ Para quem quer conhecer melhor as personagens bíblicas</p><p>✓ Para quem gosta de aprender com conteúdos ilustrados</p><p>✓ Para quem procura referências durante os estudos</p><p>✓ Para quem deseja reservar momentos de reflexão pessoal</p><p>✓ Para quem está começando a estudar as Escrituras</p></div></div></section>
<section className="section offer offer-plans" id="oferta"><div className="wrap"><div className="plans-heading"><span className="eyebrow">ESCOLHA SEU ACESSO</span><h2>Escolha como deseja conhecer as <em>Mulheres da Bíblia</em></h2><p>O guia essencial para começar ou uma experiência mais completa com três materiais extras.</p></div><div className="plans-grid"><article className="plan-card"><span className="plan-kicker">ACESSO ESSENCIAL</span><h3>Plano Básico</h3><p>Para consultar as histórias e referências bíblicas.</p><div className="plan-old">Valor de referência informado: <s>R$ 67,90</s></div><div className="plan-price">R$ 12,90</div><div className="plan-payment">Pagamento único</div><ul><li>30 cards ilustrados das Mulheres da Bíblia</li><li>Histórias, contextos e ensinamentos</li><li>Referências bíblicas para aprofundar a leitura</li><li>Acesso digital</li></ul><div className="fee-note">TAXA JÁ INCLUSA NO VALOR</div><CheckoutLink className="cta plan-cta">QUERO O PLANO BÁSICO</CheckoutLink></article><article className="plan-card plan-card--complete"><div className="plan-highlight">⭐ MELHOR ESCOLHA • MAIS COMPLETO</div><span className="plan-kicker">KIT COM 3 BÔNUS</span><h3>Plano Completo</h3><p>Para quem deseja consultar, organizar e aprofundar os estudos.</p><div className="plan-old">Valor de referência informado: <s>R$ 127,90</s></div><div className="plan-price">R$ 26,90</div><div className="plan-payment">Pagamento único</div><ul><li>30 cards ilustrados das Mulheres da Bíblia</li><li>Histórias, contextos e ensinamentos</li><li>Referências bíblicas para aprofundar a leitura</li><li>Acesso digital</li><li className="plan-bonus-divider">E MAIS 3 BÔNUS EXCLUSIVOS:</li><li className="plan-bonus-item"><b>+ Bônus 1:</b> Diário de Reflexões</li><li className="plan-bonus-item"><b>+ Bônus 2:</b> Linha do Tempo Bíblica</li><li className="plan-bonus-item"><b>+ Bônus 3:</b> Plano de Estudo de 30 Dias</li></ul><div className="plan-bonus-label">3 BÔNUS INCLUSOS SEM CUSTO EXTRA</div><CheckoutLink plan="completo" className="cta plan-cta">QUERO O PLANO COMPLETO</CheckoutLink><div className="plan-note">Confira a disponibilidade dos três bônus no checkout antes de finalizar a compra.</div></article></div><p className="plan-disclosure">Os valores riscados são referências informadas para esta apresentação; não indicam necessariamente preços anteriormente praticados.</p></div></section>
<section className="section confidence"><div className="wrap narrow"><span className="eyebrow">COMPRA COM TRANQUILIDADE</span><h2>Seu guia, <em>em formato digital</em></h2><p>Após a confirmação do pagamento, você receberá as instruções de acesso pela plataforma de pagamento. O material adquirido deve estar disponível conforme o plano selecionado.</p></div></section>
<section className="section faq"><div className="wrap narrow"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Perguntas <em>frequentes</em></h2><details><summary>O material é físico?</summary><p>Não. O Guia Visual Mulheres da Bíblia é um material digital.</p></details><details><summary>Preciso ter conhecimento bíblico?</summary><p>Não. O guia utiliza linguagem acessível, inclusive para quem está começando a estudar.</p></details><details><summary>Posso imprimir?</summary><p>O produto é oferecido em formato digital. Consulte as orientações de acesso e uso do material para verificar as possibilidades de impressão.</p></details><details><summary>Como recebo o material?</summary><p>Após a confirmação do pagamento, você recebe as instruções para acessar o guia pela plataforma de pagamento.</p></details><details><summary>Posso acessar pelo celular?</summary><p>Sim. O material digital pode ser consultado pelo celular, tablet ou computador.</p></details></div></section>
<section className="final"><div className="wrap narrow"><h2>Quantas dessas histórias você <em>realmente conhece?</em></h2><p>Descubra as mulheres que marcaram as Escrituras e tenha suas histórias reunidas em um guia para consultar sempre que desejar.</p><strong>A partir de R$ 12,90</strong><a className="cta" href="#oferta">VER OS DOIS PLANOS</a></div></section>
</main>
{expandedCard && <div className="card-lightbox" role="presentation" onClick={() => setExpandedCard(null)}><div className="card-lightbox-inner" role="dialog" aria-modal="true" aria-label={`Card ampliado de ${expandedCard.name}`} onClick={(event) => event.stopPropagation()}><button type="button" className="lightbox-close" onClick={() => setExpandedCard(null)} aria-label="Fechar imagem ampliada">×</button><img src={expandedCard.src} alt={`Card ampliado de ${expandedCard.name}`} width="640" height="800" /></div></div>}
<footer>© 2026 Mulheres da Bíblia • Produto digital<br /><small>Este site não possui vínculo oficial com qualquer denominação religiosa.</small></footer></div>;
}
