import { createFileRoute } from "@tanstack/react-router";
import { BiblePage } from "@/components/landing/bible-page";
import { images } from "@/components/landing/bible-images";
import bibleCss from "@/components/landing/bible.css?url";
import interFont from "@/assets/inter-latin.woff2?url";
import titleFont from "@/assets/cormorant-latin.woff2?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mulheres da Bíblia | Guia Visual" },
      { name: "description", content: "Conheça histórias, ensinamentos e referências das Mulheres da Bíblia em um guia visual ilustrado. Material digital por R$ 12,90." },
      { property: "og:title", content: "Mulheres da Bíblia — Guia Visual" },
      { property: "og:description", content: "Histórias, ensinamentos e reflexões para fortalecer sua caminhada. Conheça o guia visual ilustrado das Mulheres da Bíblia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: bibleCss },
      { rel: "preload", as: "image", href: images.mk.src, imageSrcSet: images.mk.srcSet, imageSizes: "(max-width: 760px) 109vw, 760px", fetchPriority: "high" },
      { rel: "preload", as: "font", type: "font/woff2", href: titleFont, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: interFont, crossOrigin: "anonymous" },
    ],
  }),
  component: BiblePage,
});
