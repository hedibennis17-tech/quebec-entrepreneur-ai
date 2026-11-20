// Dashboard étudiant — données mock
const student = {
  name: "Marie Côté",
  cohort: "Cohorte A — Automne 2026",
  season: 1,
  currentModule: "M04",
  completedModules: ["M01", "M02", "M03"],
  totalModules: 24,
};

const recentModules = [
  { id: "M03", title: "Modèle d'affaires (Canvas)", status: "completed", score: 92 },
  { id: "M04", title: "Étude de marché Québec", status: "in_progress", score: null },
  { id: "M05", title: "Client cible & persona", status: "locked", score: null },
];

const studios = [
  { icon: "🎓", name: "Apprentissage", href: "/modules", badge: "M04 en cours" },
  { icon: "💰", name: "Finances", href: "/dashboard/finances", badge: null },
  { icon: "📋", name: "Évaluation", href: "/dashboard/evaluation", badge: "1 devoir" },
  { icon: "📄", name: "Plan d'affaires", href: "/plan", badge: null },
  { icon: "📅", name: "Calendrier", href: "/calendar", badge: null },
  { icon: "💬", name: "Messages", href: "/messages", badge: "2 nouveaux" },
];

export default function DashboardPage() {
  const progress = (student.completedModules.length / student.totalModules) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "var(--qc-off-white)" }}>
      {/* Header */}
      <header
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.5rem", color: "var(--qc-blue)" }}>⚜</span>
          <span style={{ fontWeight: 800, color: "var(--qc-blue)" }}>Québec Entrepreneur AI</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.875rem", color: "var(--qc-slate-500)" }}>{student.cohort}</span>
          <div
            style={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "50%",
              background: "var(--qc-blue)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            {student.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* Welcome */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--qc-slate-900)", marginBottom: "0.25rem" }}>
            Bonjour, {student.name.split(" ")[0]} 👋
          </h1>
          <p style={{ color: "var(--qc-slate-500)" }}>Continuez votre progression — vous êtes sur la bonne voie !</p>
        </div>

        {/* Progress card */}
        <div
          className="gradient-qc"
          style={{
            borderRadius: "1.25rem",
            padding: "2rem",
            color: "white",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <div style={{ fontSize: "0.875rem", opacity: 0.8, marginBottom: "0.25rem" }}>Progression globale</div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>
                {student.completedModules.length} <span style={{ fontSize: "1.25rem", opacity: 0.7 }}>/ {student.totalModules} modules</span>
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "1rem",
                padding: "1rem 1.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Module actuel</div>
              <div style={{ fontWeight: 800, fontSize: "1.25rem" }}>{student.currentModule}</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>Saison {student.season}</div>
            </div>
          </div>
          <div className="progress-bar" style={{ background: "rgba(255,255,255,0.3)" }}>
            <div className="progress-fill" style={{ width: `${progress}%`, background: "var(--qc-gold)" }} />
          </div>
          <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", opacity: 0.8 }}>
            {Math.round(progress)}% complété
          </div>
        </div>

        {/* Studios grid */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--qc-slate-900)", marginBottom: "1rem" }}>
            Vos studios
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {studios.map((studio) => (
              <a
                key={studio.name}
                href={studio.href}
                className="card-premium"
                style={{ padding: "1.25rem", textDecoration: "none", position: "relative", display: "block" }}
              >
                {studio.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      right: "0.75rem",
                      background: "var(--qc-blue)",
                      color: "white",
                      padding: "0.125rem 0.5rem",
                      borderRadius: "999px",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    {studio.badge}
                  </div>
                )}
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{studio.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--qc-blue)", fontSize: "0.9rem" }}>{studio.name}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Modules récents */}
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--qc-slate-900)", marginBottom: "1rem" }}>
            Modules récents
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {recentModules.map((mod) => (
              <div
                key={mod.id}
                className="card-premium"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background:
                      mod.status === "completed"
                        ? "#dcfce7"
                        : mod.status === "in_progress"
                        ? "#dbeafe"
                        : "var(--border)",
                    color:
                      mod.status === "completed"
                        ? "#15803d"
                        : mod.status === "in_progress"
                        ? "var(--qc-blue)"
                        : "var(--qc-slate-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {mod.status === "completed" ? "✓" : mod.status === "in_progress" ? "▶" : "🔒"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "var(--qc-slate-900)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--qc-blue)", marginRight: "0.5rem", fontFamily: "monospace", fontSize: "0.8rem" }}>
                      {mod.id}
                    </span>
                    {mod.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--qc-slate-500)", marginTop: "0.125rem" }}>
                    {mod.status === "completed"
                      ? "Complété"
                      : mod.status === "in_progress"
                      ? "En cours"
                      : "Verrouillé"}
                  </div>
                </div>
                {mod.score !== null && (
                  <div
                    style={{
                      background: mod.score >= 80 ? "#dcfce7" : "#fef3c7",
                      color: mod.score >= 80 ? "#15803d" : "#92400e",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                    }}
                  >
                    {mod.score}%
                  </div>
                )}
                {mod.status === "in_progress" && (
                  <a
                    href={`/modules/${mod.id.toLowerCase()}`}
                    className="btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                  >
                    Continuer →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
