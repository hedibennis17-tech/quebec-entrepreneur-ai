import Link from "next/link";

const seasons = [
  {
    num: 1,
    title: "Saison 1 — Fondations",
    subtitle: "Modules M01 à M12",
    color: "#003DA5",
    modules: [
      { id: "M01", title: "Vision entrepreneuriale" },
      { id: "M02", title: "Idée & opportunité de marché" },
      { id: "M03", title: "Modèle d'affaires (Canvas)" },
      { id: "M04", title: "Étude de marché Québec" },
      { id: "M05", title: "Client cible & persona" },
      { id: "M06", title: "Proposition de valeur unique" },
      { id: "M07", title: "Stratégie marketing & réseaux" },
      { id: "M08", title: "Bases comptables & finances" },
      { id: "M09", title: "Structure légale & enregistrement" },
      { id: "M10", title: "Ressources humaines & équipe" },
      { id: "M11", title: "Opérations & chaîne de valeur" },
      { id: "M12", title: "Synthèse Saison 1 + évaluation" },
    ],
  },
  {
    num: 2,
    title: "Saison 2 — Lancement",
    subtitle: "Modules M13 à M24",
    color: "#C9A84C",
    modules: [
      { id: "M13", title: "Pitching & communication" },
      { id: "M14", title: "Financement & subventions QC" },
      { id: "M15", title: "Projections financières 3 ans" },
      { id: "M16", title: "Plan de vente & CRM" },
      { id: "M17", title: "Présence numérique & SEO" },
      { id: "M18", title: "Gestion de projet & agilité" },
      { id: "M19", title: "Innovation & propriété intellectuelle" },
      { id: "M20", title: "Développement durable & RSE" },
      { id: "M21", title: "Exportation & marchés internationaux" },
      { id: "M22", title: "Scaling & croissance" },
      { id: "M23", title: "Préparation au lancement officiel" },
      { id: "M24", title: "Plan d'affaires complet (projet final)" },
    ],
  },
];

const studios = [
  { icon: "🎓", name: "Studio Apprentissage", desc: "Vidéos, exercices interactifs, brouillons guidés" },
  { icon: "💰", name: "Studio Finances", desc: "Projections, budget, tableaux de bord financiers" },
  { icon: "📋", name: "Studio Évaluation", desc: "Quiz, devoirs, validation par l'IA Mentor" },
  { icon: "📄", name: "Studio Plan d'affaires", desc: "Générateur IA — norme BDC/SBA Canada" },
  { icon: "📅", name: "Studio Calendrier", desc: "Planificateur de modules, alertes de progrès" },
  { icon: "💬", name: "Studio Messages", desc: "Messagerie asynchrone, support IA en continu" },
  { icon: "📊", name: "Studio Données", desc: "Tableau de bord personnel — progression & badges" },
  { icon: "🏛️", name: "Console Gouvernement", desc: "Suivi institutionnel lecture seule — données agrégées" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "white",
          borderBottom: "1px solid var(--border)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.5rem", color: "var(--qc-blue)" }}>⚜</span>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--qc-blue)" }}>
            Québec Entrepreneur AI
          </span>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/auth/login" style={{ color: "var(--qc-slate-700)", fontWeight: 600, textDecoration: "none" }}>
            Connexion
          </Link>
          <Link href="/auth/register" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.925rem" }}>
            Commencer gratuitement →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="gradient-qc"
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            <span>🏛️</span> Projet pilote gouvernemental Québec
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Lancez votre entreprise<br />
            <span style={{ color: "var(--qc-gold-light, #e8c96b)" }}>avec l&apos;IA comme mentor</span>
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "2.5rem", lineHeight: 1.6 }}>
            24 modules interactifs · 2 saisons complètes · Sans classe ni caméra<br />
            Votre rythme, votre parcours, votre entreprise.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/auth/register" className="btn-gold" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
              Débuter la formation →
            </Link>
            <Link
              href="/modules"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                padding: "1rem 2.5rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                fontSize: "1.1rem",
                textDecoration: "none",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Voir les modules
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          background: "var(--qc-blue-dark)",
          color: "white",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        {[
          { val: "24", label: "Modules interactifs" },
          { val: "2", label: "Saisons complètes" },
          { val: "8", label: "Studios spécialisés" },
          { val: "IA", label: "Mentor disponible 24/7" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--qc-gold)" }}>{s.val}</div>
            <div style={{ fontSize: "0.875rem", opacity: 0.8, marginTop: "0.25rem" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* SAISONS */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="qc-accent-line" style={{ fontSize: "2rem", fontWeight: 800, color: "var(--qc-blue)", marginBottom: "0.75rem" }}>
            Curriculum en 2 saisons
          </h2>
          <p style={{ color: "var(--qc-slate-500)", fontSize: "1.1rem" }}>
            24 modules progressifs pour maîtriser chaque aspect du lancement d&apos;entreprise au Québec
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))", gap: "2rem" }}>
          {seasons.map((season) => (
            <div
              key={season.num}
              className="card-premium"
              style={{ padding: "2rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "2px solid",
                  borderColor: season.color,
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: season.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  S{season.num}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: season.color }}>{season.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--qc-slate-500)" }}>{season.subtitle}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {season.modules.map((mod) => (
                  <div
                    key={mod.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.375rem",
                      background: "var(--qc-off-white)",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "0.75rem",
                        color: season.color,
                        minWidth: "2.5rem",
                        fontFamily: "monospace",
                      }}
                    >
                      {mod.id}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--qc-slate-700)" }}>{mod.title}</span>
                    {mod.id === "M24" && (
                      <span
                        style={{
                          marginLeft: "auto",
                          background: "var(--qc-gold)",
                          color: "var(--qc-blue-dark)",
                          padding: "0.125rem 0.5rem",
                          borderRadius: "999px",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                        }}
                      >
                        Projet final ⚜
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIOS */}
      <section style={{ background: "var(--qc-off-white)", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--qc-blue)", marginBottom: "0.75rem" }}>
              8 Studios spécialisés
            </h2>
            <p style={{ color: "var(--qc-slate-500)", fontSize: "1.1rem" }}>
              Chaque studio est un outil conçu pour un aspect précis de votre parcours
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {studios.map((studio) => (
              <div key={studio.name} className="card-premium" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{studio.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--qc-blue)", marginBottom: "0.5rem" }}>
                  {studio.name}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--qc-slate-500)", lineHeight: 1.5 }}>
                  {studio.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI MENTOR */}
      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, var(--qc-blue) 0%, #1a56cc 100%)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            color: "white",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🤖</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
            Votre Mentor IA — disponible 24/7
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "2rem" }}>
            Pas de professeur. Pas de caméra. Pas d&apos;horaire fixe.<br />
            Votre mentor IA répond à vos questions, corrige vos devoirs,<br />
            et vous guide à chaque étape de la formation.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              "✅ Correction de devoirs",
              "✅ Rétroaction personnalisée",
              "✅ Conseils sectoriels",
              "✅ Génération de brouillons",
              "✅ Analyse financière",
              "✅ Plan d'affaires M24",
            ].map((f) => (
              <div
                key={f}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "0.5rem",
                  padding: "0.75rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="gradient-qc-gold"
        style={{ padding: "4rem 2rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--qc-blue-dark)", marginBottom: "1rem" }}>
          ⚜ Prêt à lancer votre entreprise ?
        </h2>
        <p style={{ color: "var(--qc-blue-dark)", opacity: 0.8, marginBottom: "2rem", fontSize: "1.1rem" }}>
          Formation complète · Mentor IA · Certifié Québec
        </p>
        <Link href="/auth/register" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 3rem" }}>
          Commencer maintenant →
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "var(--qc-blue-dark)",
          color: "rgba(255,255,255,0.7)",
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.875rem",
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: "var(--qc-gold)", fontWeight: 700 }}>⚜ Québec Entrepreneur AI</span>
          {" "}— Projet pilote gouvernemental Québec
        </div>
        <div>
          Développé avec l&apos;IA · Formation 100% numérique · Sans classe ni caméra
        </div>
      </footer>
    </div>
  );
}
