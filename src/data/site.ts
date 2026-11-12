// All page content lives here so the section components stay presentational.
// Text is carried over verbatim from the previous single-file index.astro.

export const site = {
  name: 'Iasonas Kakandris',
  title: 'Iasonas Kakandris — Software Engineer',
  description: 'Software Engineer building cloud-native platforms, MLOps pipelines, and self-hosted infrastructure.',
  email: 'ikakandris@gmail.com',
  github: 'https://github.com/deepblue597',
  linkedin: 'https://www.linkedin.com/in/iasonas-kakandris-498688209',
  location: 'Athens, Greece',
  cvUpdated: 'Updated Oct 2026',
};

// Rotating roles for the hero typewriter
export const roles = ['Software Engineer', 'Platform Engineer', 'MLOps Engineer', 'Homelab Operator'];

// In-page navigation.
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Infra', href: '#infra-section' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Homelab', href: '#homelab' },
  { name: 'CV', href: '#cv' },
  { name: 'Contact', href: '#contact' },
];

export const timeline = [
  {
    year: 'Nov 2021 – Nov 2024',
    role: 'Software Engineer',
    org: 'SpaceDot (student space team)',
    description: 'Built the Angular operator UI to monitor and control the team\'s satellite data transmission system. Containerized the application with Docker, cutting deployment time by 40%.',
    tags: ['Angular', 'TypeScript', 'Docker'],
  },
  {
    year: 'Jul 2024 – Sept 2024',
    role: 'Software Engineer Intern',
    org: 'Technology Without Borders',
    description: 'Created B2B apps with Microsoft PowerApps, reducing processing time by 98%. Designed an event management app with Flutter & Dart, and built a Chrome extension using Plasmo and Firebase.',
    tags: ['Flutter', 'Dart', 'PowerApps', 'Firebase'],
  },
  {
    year: 'Jul 2025 – Feb 2026',
    role: 'MLOps Engineer',
    org: 'ICS, FORTH',
    description: 'Trained a semantic segmentation model for river region detection (Dice 0.91). Deployed a containerized data pipeline on Kubernetes integrating Kafka, MinIO, PostgreSQL, and Grafana dashboards for live metrics.',
    tags: ['MLOps', 'Kubernetes', 'Kafka', 'Grafana'],
  },
  {
    year: 'Feb 2026 – Present',
    role: 'Software Engineer',
    org: 'IIT, NCSR "Demokritos"',
    description: 'Built the Pharos platform\'s Support service in Go: users open and follow Zammad tickets with live updates, kept consistent through outages by an event-driven design (RabbitMQ, transactional outbox, idempotent consumers). Packaged Zammad as an Argo CD service so any environment gets a ready helpdesk in one command. Stood up Outline, Keycloak, Zammad, and Plane as the team\'s docs, auth, support, and project-tracking stack. Prototyped OpenBao dynamic credentials and Calico zone-based network isolation for Themelio\'s Kubernetes cluster, and deployed a pilot Open OnDemand portal with Keycloak OIDC.',
    tags: ['Go', 'RabbitMQ', 'Zammad', 'ArgoCD', 'Keycloak', 'OpenBao', 'Kubernetes'],
  },
];

// `site` is a live deployment, `repo` the source code. Both are optional.
export const projects: ReadonlyArray<{
  name: string;
  description: string;
  tags: readonly string[];
  status: 'live' | 'building';
  icon: string;
  site?: string;
  repo?: string;
}> = [
  {
    name: 'Athens Bus',
    description: 'Web and Android app for Athens public transport: nearby stops, live arrivals, line timetables, live bus positions on a map, OASA service announcements, and metro and tram lines. No backend of its own: a Cloudflare Worker proxies the OASA API, and the list of stops is rebuilt nightly by a GitHub Action. Installable and works offline.',
    tags: ['TypeScript', 'React', 'MapLibre', 'Cloudflare Workers', 'Capacitor', 'PWA'],
    status: 'live',
    icon: '🚌',
    site: 'https://bus.deepblue597.org',
    repo: 'https://github.com/deepblue597/athens-bus-app',
  },
  {
    name: 'Beaver',
    description: 'A declarative DSL for building ML pipelines on live data streams. Write .bvr files — Beaver generates Python that wires Kafka, Quix Streams, River, and Plotly/Dash together. Includes static validation, model analysis, a unified CLI, and detailed error reporting. Developed as my M.Eng thesis.',
    tags: ['TextX', 'Jinja', 'Kafka', 'Quix Streams', 'River', 'Python', 'Docker'],
    status: 'live',
    icon: '🦫',
    repo: 'https://github.com/deepblue597/beaver',
  },
  {
    name: 'ESP32 Greenhouse Monitor',
    description: 'Standalone greenhouse monitor — no PC required after setup. DHT22 reads temperature and humidity; two potentiometers set alert thresholds; readings display on a 16×2 LCD. The ESP32 hosts its own web dashboard and fires Telegram alerts when thresholds are crossed.',
    tags: ['ESP32', 'C++', 'DHT22', 'Telegram API', 'Embedded'],
    status: 'live',
    icon: '🌱',
  },
  {
    name: 'SixPath',
    description: 'Self-hosted professional network graph tool. Maps people, projects, and relationships through an interactive graph interface.',
    tags: ['TypeScript', 'Graph', 'Self-hosted'],
    status: 'live',
    icon: '🕸️',
    repo: 'https://github.com/deepblue597/sixpath',
  },
  {
    name: 'Pharos AI Factory',
    description: 'EU-funded Greek national AI infrastructure. Building the platform services around it on Kubernetes: the user support service and helpdesk, identity, and the team\'s docs and project tooling.',
    tags: ['EU', 'AI', 'Kubernetes', 'Platform'],
    status: 'building',
    icon: '🏛️',
  },
];

export const skills = [
  'Go', 'Python', 'TypeScript', 'C++', 'Java', 'Dart', 'C', 'Bash',
  'RabbitMQ', 'Kafka', 'Quix Streams', 'River', 'PostgreSQL', 'MinIO', 'Firebase',
  'Docker', 'Kubernetes', 'k3s', 'Istio', 'ArgoCD', 'Kyverno', 'Calico', 'Helm', 'OpenTofu', 'Ansible',
  'OpenBao', 'Falco', 'Trivy', 'cosign', 'Traefik', 'Tailscale', 'Komodo',
  'Authentik', 'Keycloak', 'Zammad', 'restic',
  'Prometheus', 'Grafana', 'Loki', 'Kiali',
];

export const stats = [
  { value: 25, suffix: '+', label: 'Self-hosted services' },
  { value: 4, suffix: '+', label: 'Years engineering' },
];

// Colour classes are spelled out in full so Tailwind can detect them.
export const homelabCategories = [
  {
    name: 'Media',
    dot: 'bg-violet-400',
    title: 'text-violet-700 dark:text-violet-300',
    chip: 'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/25 dark:bg-violet-400/10 dark:text-violet-200',
    col: 'md:col-span-7',
    apps: ['Jellyfin', 'Jellyseerr', 'Sonarr', 'Radarr', 'Lidarr', 'Prowlarr', 'qBittorrent', 'slskd', 'Navidrome'],
  },
  {
    name: 'Photos & Docs',
    dot: 'bg-sky-400',
    title: 'text-sky-700 dark:text-sky-300',
    chip: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-200',
    col: 'md:col-span-5',
    apps: ['Immich', 'Paperless', 'Grimmory', 'Karakeep', 'Miniflux', 'Syncthing', 'File Browser'],
  },
  {
    name: 'Infrastructure',
    dot: 'bg-amber-400',
    title: 'text-amber-700 dark:text-amber-300',
    chip: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-200',
    col: 'md:col-span-12',
    apps: ['Traefik', 'Authentik', 'Tailscale', 'Komodo', 'Pi-hole', 'Backrest', 'Uptime Kuma', 'Homarr'],
  },
  {
    name: 'Finance',
    dot: 'bg-emerald-400',
    title: 'text-emerald-700 dark:text-emerald-300',
    chip: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200',
    col: 'md:col-span-6',
    apps: ['Ghostfolio', 'ezBookkeeping'],
  },
  {
    name: 'Home & Storage',
    dot: 'bg-indigo-400',
    title: 'text-indigo-700 dark:text-indigo-300',
    chip: 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-200',
    col: 'md:col-span-6',
    apps: ['Home Assistant', 'OpenMediaVault'],
  },
];

export const infraTags = ['Tailscale', 'Traefik', 'Cloudflare DNS', 'Authentik', 'OIDC · LDAP · forward auth', 'Komodo', 'restic · Backrest', 'Hetzner Storage Box'];
