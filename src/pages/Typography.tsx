const typeSamples = [
  { tag: "H1", size: "48px / 3rem", weight: "Bold (700)", lineHeight: "1.2", className: "text-5xl font-bold font-display" },
  { tag: "H2", size: "32px / 2rem", weight: "Semibold (600)", lineHeight: "1.3", className: "text-3xl font-semibold font-display" },
  { tag: "H3", size: "24px / 1.5rem", weight: "Semibold (600)", lineHeight: "1.4", className: "text-2xl font-semibold font-display" },
  { tag: "Body", size: "16px / 1rem", weight: "Regular (400)", lineHeight: "1.6", className: "text-base font-body" },
  { tag: "Small", size: "14px / 0.875rem", weight: "Regular (400)", lineHeight: "1.5", className: "text-sm font-body" },
  { tag: "Caption", size: "12px / 0.75rem", weight: "Medium (500)", lineHeight: "1.4", className: "text-xs font-medium font-body uppercase tracking-wider" },
];

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 04</p>
      <h1 className="text-4xl font-display font-bold text-foreground mb-8">Типографика</h1>

      {/* Fonts */}
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        <div className="p-6 rounded-lg border border-border">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Заголовки</p>
          <p className="text-4xl font-display font-bold text-foreground mb-2">Playfair Display</p>
          <p className="text-sm text-muted-foreground">
            Элегантный шрифт с засечками. Используется для заголовков, акцентных надписей и статусных материалов.
          </p>
          <p className="mt-4 text-lg font-display text-foreground">
            АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя 0123456789
          </p>
        </div>
        <div className="p-6 rounded-lg border border-border">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Основной текст</p>
          <p className="text-4xl font-body font-semibold text-foreground mb-2">Source Sans 3</p>
          <p className="text-sm text-muted-foreground">
            Современный гротеск для основного текста. Обеспечивает высокую читаемость на экране и в печати.
          </p>
          <p className="mt-4 text-lg font-body text-foreground">
            АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя 0123456789
          </p>
        </div>
      </div>

      {/* Hierarchy */}
      <h2 className="text-2xl font-display font-semibold mb-6">Иерархия стилей</h2>
      <div className="space-y-6 mb-16">
        {typeSamples.map((s) => (
          <div key={s.tag} className="flex flex-col md:flex-row md:items-baseline gap-4 pb-6 border-b border-border last:border-0">
            <div className="md:w-48 shrink-0">
              <span className="text-xs font-mono text-muted-foreground uppercase">{s.tag}</span>
              <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                <p>{s.size}</p>
                <p>{s.weight}</p>
                <p>Интерлиньяж: {s.lineHeight}</p>
              </div>
            </div>
            <p className={`${s.className} text-foreground`}>
              Группа Смарт — инвестиции в будущее
            </p>
          </div>
        ))}
      </div>

      {/* Usage example */}
      <h2 className="text-2xl font-display font-semibold mb-6">Пример в контексте</h2>
      <div className="p-8 rounded-lg border border-border bg-card">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
          Инвестиции в недвижимость малых форматов
        </h3>
        <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
          Группа Смарт осуществляет инвестиции в производственно-складскую недвижимость, индустриальные парки и земельные участки. Наша стратегия основана на глубоком анализе рынка и долгосрочном видении развития регионов.
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Группа Смарт · 2026
        </p>
      </div>
    </div>
  );
};

export default Typography;
