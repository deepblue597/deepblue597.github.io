// All page content lives here so the section components stay presentational.
// Text is carried over verbatim from the previous single-file index.astro.

export const site = {
  name: 'Iasonas Kakandris',
  title: 'Iasonas Kakandris — Software Engineer',
  description: 'Software Engineer specializing in HPC, MLOps, and cloud-native infrastructure.',
  email: 'ikakandris@gmail.com',
  github: 'https://github.com/deepblue597',
  linkedin: 'https://www.linkedin.com/in/iasonas-kakandris-498688209',
  location: 'Athens, Greece',
  cvUpdated: 'Updated Sep 2026',
};

// Rotating roles for the hero typewriter
export const roles = ['Software Engineer', 'MLOps Engineer', 'HPC Enthusiast', 'Homelab Operator'];

// In-page navigation. The HPC link stays out until the Slurm section is finished.
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Cluster', href: '#cluster-section' },
  // { name: 'HPC', href: '#slurm-section' }, // bring back once the Slurm section is finished
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
    description: 'Integrated OpenBao into Themelio for dynamic, short-lived credentials and per-role access. Built zone-based network isolation on the Kubernetes cluster with Calico GlobalNetworkPolicy. Deployed Open OnDemand with Keycloak OIDC on Rocky Linux 9, exposing Jupyter, VSCode, and RStudio as Apptainer apps. Stood up Outline, Keycloak, Zammad, and Plane as the team\'s docs, auth, support, and project-tracking stack, and migrated provisioning and deployment to Ansible, Terraform, and ArgoCD.',
    tags: ['OpenBao', 'Calico', 'Open OnDemand', 'Keycloak', 'Ansible', 'Terraform', 'ArgoCD'],
  },
];

export const projects = [
  {
    name: 'Beaver',
    description: 'A declarative DSL for building ML pipelines on live data streams. Write .bvr files — Beaver generates Python that wires Kafka, Quix Streams, River, and Plotly/Dash together. Includes static validation, model analysis, a unified CLI, and detailed error reporting. Developed as my M.Eng thesis.',
    tags: ['TextX', 'Jinja', 'Kafka', 'Quix Streams', 'River', 'Python', 'Docker'],
    status: 'live',
    icon: '🦫',
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
  },
  {
    name: 'Pharos AI Factory',
    description: 'EU-funded Greek national AI infrastructure. Building the platform layer connecting researchers to compute — HPC, Open OnDemand, identity management, and cloud-native services.',
    tags: ['EU', 'AI', 'HPC', 'Infrastructure'],
    status: 'building',
    icon: '🏛️',
  },
] as const;

export const skills = [
  'Python', 'C++', 'Java', 'TypeScript', 'Dart', 'C', 'Bash',
  'Kafka', 'Quix Streams', 'River', 'PostgreSQL', 'MinIO', 'Firebase',
  'Docker', 'Kubernetes', 'k3s', 'Istio', 'ArgoCD', 'Kyverno', 'Helm', 'OpenTofu', 'Ansible',
  'Falco', 'Trivy', 'cosign', 'Slurm', 'Apptainer', 'Traefik', 'Tailscale',
  'Authentik', 'Keycloak', 'OpenLDAP', 'SSSD', 'ColdFront',
  'Prometheus', 'Grafana', 'Loki', 'Kiali', 'Zammad',
];

export const stats = [
  { value: 25, suffix: '+', label: 'Self-hosted services' },
  // { value: 3, suffix: '', label: 'Node HPC cluster' },
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
    apps: ['Jellyfin', 'Sonarr', 'Radarr', 'Prowlarr', 'Jellyseerr', 'qBittorrent', 'Recommendarr'],
  },
  {
    name: 'Photos & Docs',
    dot: 'bg-sky-400',
    title: 'text-sky-700 dark:text-sky-300',
    chip: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-200',
    col: 'md:col-span-5',
    apps: ['Immich', 'Paperless', 'BookLore', 'Syncthing', 'File Browser', 'Karakeep'],
  },
  {
    name: 'Infrastructure',
    dot: 'bg-amber-400',
    title: 'text-amber-700 dark:text-amber-300',
    chip: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-200',
    col: 'md:col-span-12',
    apps: ['Traefik', 'Pi-hole', 'Portainer', 'Beszel', 'Uptime Kuma', 'n8n'],
  },
  {
    name: 'Finance',
    dot: 'bg-emerald-400',
    title: 'text-emerald-700 dark:text-emerald-300',
    chip: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200',
    col: 'md:col-span-6',
    apps: ['Actual Budget', 'Ghostfolio'],
  },
  {
    name: 'AI & Storage',
    dot: 'bg-indigo-400',
    title: 'text-indigo-700 dark:text-indigo-300',
    chip: 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-400/25 dark:bg-indigo-400/10 dark:text-indigo-200',
    col: 'md:col-span-6',
    apps: ['Open WebUI', 'OpenMediaVault'],
  },
];

export const clusterTags = ['k3s', 'Istio ambient', 'ArgoCD', 'cert-manager', 'Kyverno', 'Authentik', 'Sealed Secrets', 'Trivy'];
export const slurmTags = ['Slurm', 'Open OnDemand', 'Apptainer', 'Ansible', 'MUNGE', 'ColdFront', 'SSSD / LDAP', 'MariaDB'];
