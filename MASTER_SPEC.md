# QUÉBEC ENTREPRENEUR AI — Master Specification
> Version: 1.0 | Date: 2026-11-20 | Author: Hedi Bennis
> Projet pilote — Formation numérique en entrepreneuriat

## Vision
Plateforme SaaS de formation entrepreneuriale numérique, 100% autonome, assistée par intelligence artificielle, sans classe, sans professeur, sans caméra. Conçue pour être présentée comme projet pilote aux organismes gouvernementaux québécois (Emploi-Québec, MDEIE, organismes de formation accrédités).

**Note importante :** Le programme de prêts et bourses du MEQ s'applique aux formations postsecondaires accréditées. Ce projet pilote devrait cibler Emploi-Québec / Ministère du Travail ou le MDEIE pour le financement. Validation institutionnelle requise avant présentation officielle.

---

## ARCHITECTURE — Écosystème de Studios

```
QUÉBEC ENTREPRENEUR AI
├── Learning Studio       → Modules, vidéos, parcours, progression
├── AI Mentor Studio      → Robot IA multimédia, tutorat, assistance
├── Business Plan Studio  → Construction progressive du plan d'affaires
├── Finance Studio        → Budgets, simulations, scénarios
├── Student Planner       → Calendrier, tâches, échéances, alertes
├── Assessment Studio     → Devoirs, rubriques, validation, feedback
├── Student Finance Bridge→ Connectivité administrative paiements/statuts
├── Government Admin      → Console institutionnelle, statistiques, conformité
└── MCP & AI Layer        → Agents, outils, connecteurs, orchestration
```

---

## FORMATION EN 2 SAISONS (24 semaines)

### Saison 1 — De l'idée à la validation (12 semaines)

| Module | Sujet | Projet de validation |
|--------|-------|---------------------|
| M01 | Découverte de l'entrepreneuriat | Profil entrepreneurial |
| M02 | Compétences et organisation personnelles | Plan personnel de progression |
| M03 | Identification d'un problème | Définition du problème |
| M04 | Génération et sélection d'idées | Sélection d'une idée |
| M05 | Clientèle et besoins | Persona client |
| M06 | Recherche de marché | Étude de marché préliminaire |
| M07 | Concurrence et positionnement | Matrice de concurrence |
| M08 | Proposition de valeur | Proposition de valeur validée |
| M09 | Modèle d'affaires | Canvas et modèle économique |
| M10 | Validation de l'idée | Tests, preuves, feedback |
| M11 | Éthique, responsabilités, réglementation | Checklist préliminaire |
| M12 | Présentation du projet | Projet de fin de saison 1 |

### Saison 2 — Du plan au lancement (12 semaines)

| Module | Sujet | Projet de validation |
|--------|-------|---------------------|
| M13 | Structure juridique et organisation | Structure envisagée |
| M14 | Produits et services | Catalogue et proposition |
| M15 | Prix et marges | Calcul des prix |
| M16 | Marketing et branding | Identité et positionnement |
| M17 | Stratégie de ventes | Plan commercial |
| M18 | Opérations et fournisseurs | Workflow opérationnel |
| M19 | Technologie et outils | Plan technologique |
| M20 | Ressources humaines | Plan d'équipe |
| M21 | Comptabilité et finances | Budget et hypothèses |
| M22 | Financement et fonds de roulement | Plan de financement |
| M23 | Risques et contingence | Matrice de risques |
| M24 | Plan d'affaires final | Dossier entrepreneurial complet |

**Le Business Plan Studio = projet central évolutif des 2 saisons.**
L'étudiant construit son plan progressivement à travers les modules, pas seulement à M24.

---

## STRUCTURE D'UN MODULE

Chaque module contient :
1. **Introduction** — Objectifs, durée estimée, prérequis
2. **Contenu pédagogique** — Vidéos courtes (5-10 min), textes, exemples
3. **Exercices interactifs** — Quiz, simulations, activités guidées
4. **Brouillon / Draft** — Zone de travail avec l'assistant IA
5. **Devoir** — Livrable évalué selon une rubrique
6. **Validation** — Feedback AI + critères de réussite
7. **Connexion au Plan d'affaires** — Alimentation automatique du Business Plan Studio

---

## EXPÉRIENCE UTILISATEUR (UX)

### Dashboard Étudiant
```
Mon parcours entrepreneurial
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Saison 1 — De l'idée à la validation

38% Progression globale | 4/12 Modules validés
2 Devoirs en attente | Prochaine échéance: Étude de marché

[Mentor AI — Disponible]

Mon prochain module: M05 — Comprendre ses clients
[Vidéo · Exercices · Simulation · Devoir] → [Voir le module]

Mon plan d'affaires: 5 sections alimentées par mes activités
→ [Continuer mon plan d'affaires]
```

### Composants UI
- Thème : Identité québécoise, professionnel, moderne, chaleureux
- Couleurs : Bleu nuit + blanc + accentuation québec bleue/blanche
- Interface : SaaS moderne, clean, mobile-first
- Langue : Français par défaut, bilinguisme prévu

---

## AI MENTOR STUDIO

### Capacités
- **Tutorat contextuel** — Réponses aux questions sur le contenu du module actif
- **Explication des concepts** — Vulgarisation adaptée au niveau de l'étudiant
- **Feedback sur les devoirs** — Analyse et suggestions d'amélioration
- **Guidance sur le plan d'affaires** — Aide à rédiger chaque section
- **Motivation et suivi** — Rappels, encouragements, alertes de progression
- **Mode multimédia** — Réponses texte, tableaux, listes, exemples visuels

### Limites (intentionnelles)
- Ne fait pas les devoirs à la place de l'étudiant
- Ne valide pas automatiquement un devoir — confirmation humaine/rubrique
- Ne partage pas les réponses des autres étudiants

---

## SYSTÈME DE SUIVI ET PREUVES DE PROGRESSION

### Preuves mesurables (sans caméra)
- ✅ Module étudié (temps passé + contenu vu)
- ✅ Quiz terminé (score)
- ✅ Exercice soumis
- ✅ Devoir soumis (fichier + timestamp)
- ✅ Feedback reçu et lu
- ✅ Correction effectuée
- ✅ Validation obtenue
- ✅ Projet de saison terminé

### 4 systèmes distincts
1. **Système pédagogique** — Modules, devoirs, résultats, compétences
2. **Système administratif** — Inscription, cohortes, statuts, rapports
3. **Student Finance Bridge** — Connectivité potentielle selon autorisation institutionnelle
4. **Système d'audit** — Historique des modifications, accès, événements

---

## MODÈLE DE DONNÉES

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String
  phone         String?
  passwordHash  String?
  googleId      String?
  role          Role     @default(STUDENT)
  language      String   @default("fr")
  cohortId      String?
  cohort        Cohort?  @relation(fields: [cohortId], references: [id])
  enrolledAt    DateTime?
  createdAt     DateTime @default(now())
  progress      ModuleProgress[]
  submissions   Submission[]
  businessPlan  BusinessPlan?
  messages      Message[]
  calendarEvents CalendarEvent[]
}

model Cohort {
  id          String   @id @default(cuid())
  name        String
  startDate   DateTime
  endDate     DateTime
  status      String   @default("active")
  students    User[]
  createdAt   DateTime @default(now())
}

model Module {
  id          String   @id @default(cuid())
  number      Int      @unique // 1-24
  season      Int      // 1 ou 2
  title       String
  description String
  duration    Int      // en minutes
  videoUrl    String?
  content     Json     // Contenu pédagogique structuré
  exercises   Json?
  homework    Json?    // Rubrique du devoir
  bpSection   String?  // Section du plan d'affaires alimentée
  isPublished Boolean  @default(false)
  progress    ModuleProgress[]
  submissions Submission[]
}

model ModuleProgress {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])
  moduleId     String
  module       Module   @relation(fields: [moduleId], references: [id])
  status       ProgressStatus @default(NOT_STARTED)
  videoWatched Boolean  @default(false)
  exercisesDone Boolean @default(false)
  timeSpent    Int      @default(0) // en secondes
  startedAt    DateTime?
  completedAt  DateTime?
  updatedAt    DateTime @updatedAt

  @@unique([userId, moduleId])
}

model Submission {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  moduleId    String
  module      Module   @relation(fields: [moduleId], references: [id])
  content     Json     // Réponses / livrable
  fileUrl     String?
  status      SubmissionStatus @default(SUBMITTED)
  feedback    String?
  score       Int?
  submittedAt DateTime @default(now())
  reviewedAt  DateTime?
}

model BusinessPlan {
  id          String   @id @default(cuid())
  userId      String   @unique
  user        User     @relation(fields: [userId], references: [id])
  sections    Json     @default("{}") // Sections alimentées par les modules
  currentSection String?
  completionPct Int    @default(0)
  updatedAt   DateTime @updatedAt
  createdAt   DateTime @default(now())
}

model Message {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  role        String   // user, assistant
  content     String   @db.Text
  moduleId    String?  // Contexte du module si applicable
  createdAt   DateTime @default(now())
}

model CalendarEvent {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  title       String
  description String?
  dueDate     DateTime
  type        String   // homework, module, milestone
  moduleId    String?
  isCompleted Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model WebhookEvent {
  id          String   @id @default(cuid())
  type        String   // progress.updated, payment.received, submission.validated
  userId      String?
  payload     Json
  status      String   @default("pending")
  processedAt DateTime?
  createdAt   DateTime @default(now())
}

enum Role { STUDENT ADMIN GOVERNMENT_VIEWER }
enum ProgressStatus { NOT_STARTED IN_PROGRESS COMPLETED VALIDATED }
enum SubmissionStatus { DRAFT SUBMITTED REVIEWED APPROVED REVISION_NEEDED }
```

---

## CONSOLE GOUVERNEMENTALE / INSTITUTIONNELLE

### Accès en lecture seule (gouvernement)
- Tableau de bord des cohortes actives
- Statistiques de progression globales
- Taux de complétion par module
- Nombre de devoirs soumis / validés
- Étudiants actifs / inactifs
- Export de rapports (PDF, CSV)

### Ce qui N'est PAS partagé
- Contenu des devoirs
- Conversations avec l'AI Mentor
- Données personnelles non autorisées
- Résultats individuels identifiables (selon entente de confidentialité)

---

## STACK TECHNIQUE

- **Frontend :** Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend :** Next.js API Routes + Server Actions
- **LLM :** Claude API (Anthropic) — AI Mentor + feedback + plan d'affaires
- **MCP :** Orchestrateur pour outils contrôlés (recherche, calculs)
- **Database :** PostgreSQL via Prisma (Neon)
- **Auth :** NextAuth.js (Google OAuth + email/password)
- **Emails :** Resend
- **Webhooks :** Système interne + connectivité institutionnelle
- **Storage :** Vercel Blob ou AWS S3 (devoirs, fichiers)
- **Vidéos :** Mux ou Cloudflare Stream
- **Déploiement :** Vercel

---

## ROADMAP DE DÉVELOPPEMENT

| Phase | Contenu | Priorité |
|-------|---------|----------|
| 0 | Architecture, setup, DB, auth | ✅ En cours |
| 1 | Auth + dashboard étudiant de base | Semaine 1 |
| 2 | Learning Studio — module viewer | Semaine 2 |
| 3 | Système de progression + devoirs | Semaine 2-3 |
| 4 | AI Mentor Studio (Claude API) | Semaine 3-4 |
| 5 | Business Plan Studio progressif | Semaine 4-5 |
| 6 | Finance Studio | Semaine 5 |
| 7 | Student Planner + Calendrier | Semaine 6 |
| 8 | Assessment Studio | Semaine 6-7 |
| 9 | Government Admin Console | Semaine 7-8 |
| 10 | Webhooks + Student Finance Bridge | Semaine 8 |
| 11 | Emails + alertes automatiques | Semaine 9 |
| 12 | Contenu (24 modules) — scripts + vidéos | Continu |
| 13 | Sécurité, tests, QA | Semaine 10 |
| 14 | Projet pilote beta (10-20 étudiants) | Semaine 11-12 |

---

## PRÉSENTATION PILOTE GOUVERNEMENTAL

| Élément | Proposition |
|---------|-------------|
| Programme | Formation numérique en entrepreneuriat |
| Durée | 24 semaines (2 saisons × 12 semaines) |
| Modules | 24 modules structurés |
| Environnement | 100% numérique et autonome |
| Accompagnement | AI Mentor pédagogique (Claude) |
| Validation | Exercices, devoirs, projets, rubriques |
| Projet final | Plan d'affaires complet (Business Plan Studio) |
| Surveillance | Aucune webcam — preuves de progression mesurables |
| Administration | Console de suivi institutionnel |
| Financement visé | Emploi-Québec / MDEIE (validation requise) |

---

## CRITÈRES DE VALIDATION AVANT LANCEMENT PILOTE
- [ ] Auth complète (Google + email)
- [ ] 24 modules structurés (contenu minimal)
- [ ] Vidéos lisibles (Mux/Cloudflare)
- [ ] Système de progression fonctionnel
- [ ] Devoirs soumissionnables + feedback AI
- [ ] Business Plan Studio connecté aux modules
- [ ] AI Mentor répondant en contexte
- [ ] Dashboard étudiant complet
- [ ] Console gouvernementale opérationnelle
- [ ] Webhooks de progression actifs
- [ ] Emails automatiques (relances, confirmations)
- [ ] Tests avec 5-10 utilisateurs beta
- [ ] Déploiement Vercel stable
