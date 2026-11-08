import mk640 from "@/assets/mk-640.asset.json";
import mk960 from "@/assets/mk-960.asset.json";
import todas640 from "@/assets/todas-640.asset.json";
import todas960 from "@/assets/todas-960.asset.json";
import ester2320 from "@/assets/ester2-320.asset.json";
import ester2640 from "@/assets/ester2-640.asset.json";
import rute2320 from "@/assets/rute2-320.asset.json";
import rute2640 from "@/assets/rute2-640.asset.json";
import debora2320 from "@/assets/debora2-320.asset.json";
import debora2640 from "@/assets/debora2-640.asset.json";
import ana2320 from "@/assets/ana2-320.asset.json";
import ana2640 from "@/assets/ana2-640.asset.json";
import maria2320 from "@/assets/maria2-320.asset.json";
import maria2640 from "@/assets/maria2-640.asset.json";
import mariamadalena2320 from "@/assets/mariamadalena2-320.asset.json";
import mariamadalena2640 from "@/assets/mariamadalena2-640.asset.json";

export const images = {
  mk: { src: mk960.url, srcSet: `${mk640.url} 640w, ${mk960.url} 960w`, width: 960, height: 720 },
  todas: { src: todas960.url, srcSet: `${todas640.url} 640w, ${todas960.url} 960w`, width: 960, height: 640 },
  ESTER2: { src: ester2640.url, srcSet: `${ester2320.url} 320w, ${ester2640.url} 640w`, width: 640, height: 800 },
  RUTE2: { src: rute2640.url, srcSet: `${rute2320.url} 320w, ${rute2640.url} 640w`, width: 640, height: 800 },
  DEBORA2: { src: debora2640.url, srcSet: `${debora2320.url} 320w, ${debora2640.url} 640w`, width: 640, height: 800 },
  ANA2: { src: ana2640.url, srcSet: `${ana2320.url} 320w, ${ana2640.url} 640w`, width: 640, height: 800 },
  MARIA2: { src: maria2640.url, srcSet: `${maria2320.url} 320w, ${maria2640.url} 640w`, width: 640, height: 800 },
  MARIAMADALENA2: { src: mariamadalena2640.url, srcSet: `${mariamadalena2320.url} 320w, ${mariamadalena2640.url} 640w`, width: 640, height: 800 },
};
