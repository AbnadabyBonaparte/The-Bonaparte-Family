/**
 * Foto REAL de um membro/pet da família (mesmo padrão que a Home usa em "Os Bonaparte").
 * Lei da Imagem: foto real é real — nunca gerada, nunca stock. Se a foto faltar (ex.: o
 * Apache ainda não tem apache.jpg) ou der 404, cai no PLACEHOLDER HONESTO — a inicial do
 * nome sobre o verde da casa (nunca um rosto de banco de imagem). Zero hex — tokens.
 */
export function FamilyPhoto({
  src,
  name,
  aspect = "portrait",
}: {
  src?: string;
  name: string;
  aspect?: "portrait" | "square";
}) {
  const ratio = aspect === "portrait" ? "3 / 4" : "1 / 1";
  const hasPhoto = Boolean(src);

  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
      {hasPhoto && (
        <img
          src={src}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          onError={(e) => {
            // 404 / foto ausente → revela o placeholder honesto (a inicial), esconde a img.
            (e.currentTarget as HTMLImageElement).style.display = "none";
            ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement)?.removeAttribute("style");
          }}
        />
      )}
      {/* Placeholder honesto — inicial do nome sobre o verde da casa. */}
      <div
        className="flex h-full w-full items-center justify-center"
        style={hasPhoto ? { display: "none" } : { background: "var(--color-verde)" }}
      >
        <span
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            fontWeight: 400,
            color: "color-mix(in oklab, var(--color-papel) 20%, transparent)",
          }}
        >
          {name.charAt(0)}
        </span>
      </div>
    </div>
  );
}
