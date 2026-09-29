// Every personal detail on the site lives here. Components read from this
// file, so updating a link, project, or photo is a one-line change.

export const PROFILE = {
  name: "Jaydeep Gujar",
  firstName: "Jaydeep",
  location: "Ahmedabad, India",
  email: "jaydeepgujar7@gmail.com",
  github: "https://github.com/jaydeep-99o",
  linkedin: "https://www.linkedin.com/in/jaydeep-gujar",
  resume: "/Jaydeep_Gujar_Resume.pdf",
};

// Swap these for real media when it's ready (drop files into /public).
// Set heroVideo to null to show heroPoster instead, with no play button.
export const MEDIA = {
  avatar: "/avatar-logo.jpg",
  portrait: "/portrait.jpg",
  heroVideo: "/hero-bg-video.mp4",
  heroPoster: "/hero-poster.svg",
  favicon: "/icon.png",
};

// Loader cycles through these, one per second, before the hero reveals.
export const LOADER_TEXT = ["જયદીપ પોર્ટફોલિયો", "जयदीप पोर्टफोलियो", "JAYDEEP PORTFOLIO"];

export const HERO = {
  eyebrow: "HELLO, I'M JAYDEEP",
  lines: ["DEVOPS", "& CLOUD"],
  mutedLine: "ENGINEER",
  tagline: "Building, shipping and running production apps on AWS.",
};

export const ABOUT = {
  heading: [
    ["Shipping", "Real"],
    ["Cloud", "Systems"],
  ],
  intro: [
    "Hi, I'm Jaydeep, a DevOps-focused Software Engineer based in Ahmedabad, India.",
    "For the past two years I've built and run production web applications on AWS: containerized on EKS and EC2, released through Jenkins and GitHub Actions pipelines, and defined in Terraform. I also own production support for a SaaS product in a regulated (21 CFR Part 11) environment, from triage through root cause to fix and release.",
  ],
  services: [
    {
      title: "Cloud & AWS",
      body: "EKS, EC2, ECR, S3, CloudFront, Cognito, Pinpoint, SSM Parameter Store, IAM, and CloudWatch.",
    },
    {
      title: "CI/CD & Automation",
      body: "Jenkins and GitHub Actions pipelines, commit-SHA image tags, automated rollback on failed health checks, and Bash.",
    },
    {
      title: "Containers & IaC",
      body: "Docker, Docker Compose, Kubernetes, Terraform, multi-stage image builds, and Linux.",
    },
    {
      title: "Full-Stack Development",
      body: "React, Angular, Node.js, Express, TypeScript, MongoDB, PostgreSQL, and MySQL.",
    },
  ],
};

export const EXPERIENCE = [
  {
    name: "Maharshi Systems",
    role: "Software Engineer — Full-Stack & DevOps",
    kind: "Oct 2024 – Now",
    highlights: [
      "Shipped a 21 CFR Part 11–compliant calibration portal for 100+ users and ~2,000 devices on EKS, S3, and CloudFront.",
      "Designed and owned Jenkins and GitHub Actions pipelines, replacing manual deploys with automated container releases.",
      "Implemented Cognito auth and RBAC, Pinpoint notifications, and config and secrets management through SSM Parameter Store.",
      "Own end-to-end production support and incident resolution for the company's SaaS product.",
    ],
  },
  {
    name: "Meghmani Organics",
    role: "Web Developer",
    kind: "Mar – Aug 2024",
    highlights: [
      "Maintained the corporate WordPress site and built JavaScript features for an internal HR application.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Éclat",
    href: "https://github.com/jaydeep-99o/perfume-shop",
    role: "Docker • Jenkins • Terraform • AWS EC2 & ECR",
    kind: "DevOps",
    note: "3D AI fragrance store. Cut the production image 48% (497 → 258 MB), with SHA-pinned deploys that roll back automatically on a failed health check.",
    image: "/images/projects/eclat.svg",
  },
  {
    name: "Travel Management API",
    href: null,
    role: "Node.js • Express • MongoDB • Redis • Docker • AWS",
    kind: "Backend",
    note: "Users, trips, bookings, payments, and reviews with JWT auth, RBAC, Redis caching, and Stripe. Containerized and deployed on AWS.",
    image: "/images/projects/travel.svg",
  },
  {
    name: "Healthcare Chatbot",
    href: "https://github.com/mayanksali05/Healthcare-ChatBot",
    role: "Python • Flask • React • Vite",
    kind: "AI / RAG",
    note: "Built the Flask API and React frontend for a retrieval-augmented medical Q&A assistant, with streaming chat and source attribution.",
    image: "/images/projects/chatbot.svg",
  },
];

export const MARQUEE = "From Commit to Production, Automated.";

export const CONTACT = {
  eyebrow: "have a role or project in mind?",
  headline: "let's talk.",
};

export const FOOTER = {
  tagline: "DevOps Engineer building and running production apps on AWS.",
  subline: "From commit to production, automated.",
};
