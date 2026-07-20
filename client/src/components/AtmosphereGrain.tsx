/**
 * Grão de papel — camada de densidade visual site-wide (Textura, Lei da Imagem).
 * Sobrepõe a textura de papel gerada (arte, não foto real) em opacidade mínima e
 * `mix-blend-multiply`, dando calor e materialidade de página impressa a todo o site.
 * pointer-events: none (nunca bloqueia clique) e degrada em silêncio se o arquivo faltar.
 * Zero hex — só a imagem e opacidade.
 */
export default function AtmosphereGrain() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        pointerEvents: "none",
        backgroundImage: "url('/brand/paper-texture.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "multiply",
        opacity: 0.05,
      }}
    />
  );
}
