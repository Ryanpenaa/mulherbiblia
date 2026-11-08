import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { images } from "./bible-images";

type Pixel = ((...args: unknown[]) => void) & { queue?: unknown[][]; loaded?: boolean; version?: string; push?: Pixel; callMethod?: (...args: unknown[]) => void };
type PixelWindow = Window & { fbq?: Pixel; _fbq?: Pixel };

function CheckoutLink({ children, className }: { children: ReactNode; className?: string }) {
  return <Button asChild className={className}><a href="https://pay.cakto.com.br/etirixe_1139755" data-checkout-link="true" onClick={() => {
    (window as PixelWindow).fbq?.("trackCustom", "CheckoutClick", { destination: "cakto", product: "mulheres_da_biblia", checkout_url: "https://pay.cakto.com.br/etirixe_1139755" });
  }}>{children}</a></Button>;
}

export function BiblePage() {
  useEffect(() => {
    const carousel = document.querySelector(".women-carousel");
    if (!carousel) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      carousel.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
      observer.disconnect();
    }, { rootMargin: "300px" });
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);
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

<header className="hero"><div className="wrap hero-inner"><span className="eyebrow">GUIA VISUAL • MULHERES DA BÍBLIA</span><h1>Conheça as histórias das <em>Mulheres da Bíblia</em> de forma simples e visual</h1><div className="hero-mockup"><div className="hero-glow"></div><img src={images.mk.src} alt="Mulheres da Bíblia — Guia Visual" loading="eager" srcSet={images.mk.srcSet} width="960" height="720" decoding="async" fetchPriority="high" sizes="(max-width: 760px) 109vw, 760px" /></div><p className="hero-sub">Histórias, ensinamentos e reflexões para fortalecer a sua caminhada.</p><CheckoutLink className="cta hero-cta">QUERO MEU GUIA VISUAL →</CheckoutLink><div className="trust hero-trust">✓ Acesso digital   •   ✓ Material ilustrado   •   ✓ Compra segura</div></div></header>


<main>
<section className="section curiosity curiosity-showcase"><div className="wrap"><div className="ornament-line"><span></span><b>✦</b><span></span></div><h2>Conheça as histórias das <em>Mulheres da Bíblia</em></h2><p className="curiosity-intro">Exemplos reais de fé, coragem e transformação para a sua vida.</p></div><div className="women-carousel" aria-label="Exemplos de mulheres do guia"><div className="women-track"><div className="women-set"><img src={images.ESTER2.src} alt="Card de Ester" srcSet={images.ESTER2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.RUTE2.src} alt="Card de Rute" srcSet={images.RUTE2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.DEBORA2.src} alt="Card de Débora" srcSet={images.DEBORA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.ANA2.src} alt="Card de Ana" srcSet={images.ANA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.MARIA2.src} alt="Card de Maria" srcSet={images.MARIA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.MARIAMADALENA2.src} alt="Card de Maria Madalena" srcSet={images.MARIAMADALENA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /></div><div className="women-set" aria-hidden="true"><img src={images.ESTER2.src} alt="" srcSet={images.ESTER2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.RUTE2.src} alt="" srcSet={images.RUTE2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.DEBORA2.src} alt="" srcSet={images.DEBORA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.ANA2.src} alt="" srcSet={images.ANA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.MARIA2.src} alt="" srcSet={images.MARIA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /><img src={images.MARIAMADALENA2.src} alt="" srcSet={images.MARIAMADALENA2.srcSet} width="640" height="800" decoding="async" loading="lazy" sizes="310px" /></div></div></div></section>
<section className="section inside"><div className="wrap"><span className="eyebrow">AGORA VEJA O QUE VOCÊ RECEBE</span><h2>Um guia visual feito para <em>ler, refletir e guardar</em></h2><p className="sub">Cada página reúne a história, o ensinamento, a aplicação para a sua vida e a referência bíblica em um formato bonito e fácil de consultar.</p><div className="material-showcase"><div className="material-glow"></div><img src={images.todas.src} alt="Exemplos dos cards do Guia Visual Mulheres da Bíblia" className="material-image" loading="lazy" srcSet={images.todas.srcSet} width="960" height="640" decoding="async" sizes="(max-width: 760px) 92vw, 956px" /></div><div className="features"><span>Quem foi</span><span>História</span><span>Momento marcante</span><span>Contexto</span><span>Curiosidades</span><span>Referências bíblicas</span></div></div></section>
<section className="section forwho"><div className="wrap split"><div><span className="eyebrow">APRENDA NO SEU RITMO</span><h2>Uma nova forma de conhecer as <em>histórias da Bíblia</em></h2><p>Um material feito para tornar a leitura mais visual, organizada e fácil de consultar.</p></div><div className="checklist"><p>✓ Conheça personagens além das histórias mais famosas</p><p>✓ Entenda melhor o contexto de cada mulher</p><p>✓ Saiba onde encontrar cada história na Bíblia</p><p>✓ Aprenda de maneira rápida e visual</p><p>✓ Consulte o material quando quiser</p></div></div></section>
<section className="section offer" id="oferta"><div className="wrap offerbox"><div className="offer-mock"><img src={images.mk.src} alt="Mulheres da Bíblia — Guia Visual" srcSet={images.mk.srcSet} width="960" height="720" decoding="async" loading="lazy" sizes="(max-width: 760px) 420px, 230px" /></div><div><span className="eyebrow">ACESSO DIGITAL</span><h2>Comece sua jornada pelas histórias das <em>Mulheres da Bíblia</em></h2><p>Tenha em mãos um guia visual pensado para tornar suas leituras mais envolventes, simples de acompanhar e fáceis de consultar no dia a dia. Você pode acessar pelo celular, tablet ou computador e revisitar cada história sempre que quiser.</p><div className="old">De <span>R$ 37,90</span> por apenas</div><div className="bigprice">R$ 12,90</div><b>Pagamento único</b><br /><div className="fee-note">TAXA JÁ INCLUSA NO VALOR</div><CheckoutLink className="cta">QUERO MEU GUIA VISUAL →</CheckoutLink><div className="trust">🔒 Compra segura   •   Acesso digital</div></div></div></section>
<section className="section faq"><div className="wrap narrow"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Perguntas <em>frequentes</em></h2><details><summary>O material é físico?</summary><p>Não. É um produto digital para acessar pelo celular, tablet ou computador.</p></details><details><summary>Preciso ter conhecimento bíblico?</summary><p>Não. O conteúdo foi organizado para ser simples de acompanhar mesmo para quem está começando.</p></details><details><summary>Posso imprimir?</summary><p>Sim, o material poderá ser consultado digitalmente e impresso para uso pessoal.</p></details><details><summary>Como recebo?</summary><p>Após a confirmação do pagamento, você receberá o guia visual direto no seu email.</p></details></div></section>
<section className="final"><div className="wrap narrow"><h2>Quantas dessas histórias você <em>realmente conhece?</em></h2><p>Descubra as mulheres que atravessaram gerações e deixaram suas histórias registradas nas Escrituras.</p><strong>R$ 12,90</strong><CheckoutLink className="cta">QUERO CONHECER AS MULHERES DA BÍBLIA →</CheckoutLink></div></section>
</main>
<footer>© 2026 Mulheres da Bíblia • Produto digital<br /><small>Este site não possui vínculo oficial com qualquer denominação religiosa.</small></footer></div>;
}
