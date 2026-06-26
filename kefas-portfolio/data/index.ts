export const siteConfig = {
  name: "Kefas Etiku Francis",
  title: "Cloud & DevOps Engineer",
  description:
    "Entry-level Cloud & DevOps Engineer based in Abuja, Nigeria — deploying scalable applications on AWS, automating with CI/CD, and shipping containerized workloads on Docker & Kubernetes.",
  url: "https://kefas.live",
  email: "kefasetikufrancis@gmail.com",
  phone: "+2348102839482",
  location: "Abuja, Nigeria",
  socials: {
    github: "https://github.com/kefras",
    linkedin: "https://linkedin.com/in/kefas",
    twitter: "https://x.com/Kefras1",
    whatsapp: "https://wa.me/2348102839482",
  },
};

export const projects = [
  {
    id: "devops-evaluation",
    icon: "🏗️",
    title: "DevOps Cloud Engineer Practical Evaluation",
    description:
      "Full end-to-end deployment of a luxury restaurant web application on AWS. Covers infrastructure provisioning, containerization, and production-level automation.",
    problem:
      "Needed to demonstrate full end-to-end production deployment covering infrastructure, containerization and automation in one cohesive project.",
    solution:
      "Provisioned AWS infrastructure, containerized the application with Docker, configured Nginx as a reverse proxy, set up monitoring and automated the full deployment pipeline.",
    impact:
      "A comprehensive showcase of real-world DevOps skills — the strongest single-project proof of production capability.",
    tags: ["Docker", "AWS EC2", "Linux", "Nginx", "Monitoring", "Automation"],
    category: "cloud",
    github: "https://github.com/kefras/DevOps-Cloud-Engineer-Practical-Evaluation-Assignment",
    featured: true,
  },
  {
    id: "cicd-pipeline",
    icon: "🔀",
    title: "GitHub Actions CI/CD Pipeline",
    description:
      "A robust, automated CI/CD pipeline designed to streamline software delivery, ensure code quality, and automate deployments.",
    problem:
      "Manual deployments were slow, inconsistent and error-prone with no automated quality gates.",
    solution:
      "Built an automated pipeline using GitHub Actions to enforce code quality checks and automate deployments to AWS EC2.",
    impact:
      "Eliminated manual deployment steps, reduced human error and established repeatable delivery workflows.",
    tags: ["GitHub Actions", "Docker", "AWS EC2", "CI/CD"],
    category: "ci-cd",
    github: "https://github.com/kefras/devops-cicd-pipeline",
    featured: true,
  },
  {
    id: "kubernetes-app",
    icon: "📦",
    title: "Kubernetes Scalable Application",
    description:
      "Declarative Kubernetes orchestration demonstrating automated microservice self-healing, elastic replication and NodePort traffic routing for high-availability deployments.",
    problem:
      "A single-container deployment couldn't self-heal or scale horizontally under load.",
    solution:
      "Implemented Pods, ReplicaSets, Services and NodePort routing with automatic self-healing and elastic replication.",
    impact:
      "Achieved high-availability cloud deployment patterns with automatic recovery and horizontal scaling.",
    tags: ["Kubernetes", "Pods", "ReplicaSets", "Services", "Load Balancing"],
    category: "kubernetes",
    github: "https://github.com/kefras/kubernetes-scalable-app",
    featured: true,
  },
  {
    id: "aws-3tier",
    icon: "🔐",
    title: "AWS Secure 3-Tier Architecture",
    description:
      "Highly secure and scalable 3-tier AWS architecture with Auto Scaling Groups, isolated private subnets, keyless IAM Instance Profiles and AWS WAF perimeter protection.",
    problem:
      "Most demo AWS setups use flat, insecure configurations that wouldn't pass a security review.",
    solution:
      "Designed enterprise-grade architecture with Auto Scaling, isolated subnets, IAM Instance Profiles for S3 and AWS WAF.",
    impact:
      "Demonstrates enterprise-grade AWS security posture with least-privilege access and multi-layer defence.",
    tags: ["AWS", "VPC", "Subnets", "Security Groups", "IAM", "WAF", "Auto Scaling"],
    category: "cloud",
    github: "https://github.com/kefras/aws-secure-3tier-architecture",
    featured: true,
  },
  {
    id: "multi-tier-app",
    icon: "🗂️",
    title: "Production Multi-Tier Application",
    description:
      "Multi-tier application deployment using Docker Compose with Nginx routing, container networking and environment-specific configuration management.",
    problem:
      "Needed to simulate a real-world multi-tier production deployment beyond a single-server demo.",
    solution:
      "Deployed with Docker Compose, Nginx routing, service networking and environment variable management.",
    impact:
      "A reusable production deployment pattern demonstrating container orchestration and service networking.",
    tags: ["Docker Compose", "Nginx", "Networking", "Linux"],
    category: "cloud",
    github: "https://github.com/kefras/production-multi-tier-app",
    featured: false,
  },
  {
    id: "ha-web-tier",
    icon: "☁️",
    title: "High Availability Web Tier",
    description:
      "Production-ready, fault-tolerant web infrastructure on AWS that automatically scales and self-repairs using Load Balancers and Auto Scaling Groups.",
    problem: "Single-server web setups fail under load with no automatic recovery.",
    solution:
      "Deployed AWS Load Balancers, Auto Scaling Groups and health checks for automatic scaling and recovery.",
    impact:
      "Demonstrated cloud-native high availability patterns mirroring real enterprise AWS architectures.",
    tags: ["AWS", "Load Balancing", "Auto Scaling", "EC2", "High Availability"],
    category: "cloud",
    github: "https://github.com/kefras/High-Availability-Web-Tier-Project-2-",
    featured: false,
  },
  {
    id: "aws-databases",
    icon: "🗄️",
    title: "AWS Cloud Databases Lab",
    description:
      "Production-grade, highly available 3-tier database infrastructure using Amazon RDS (MySQL) with Multi-AZ failure chaos testing.",
    problem: "Single-AZ database deployments are a common failure point.",
    solution:
      "Deployed Amazon RDS MySQL with secure network configurations and dynamic Multi-AZ failure chaos testing.",
    impact:
      "Validated database resilience under simulated failure conditions — critical for production reliability engineering.",
    tags: ["AWS RDS", "MySQL", "Multi-AZ", "VPC", "Security"],
    category: "cloud",
    github: "https://github.com/kefras/aws-cloud-databases-lab",
    featured: false,
  },
  {
    id: "velvet-restaurant",
    icon: "🌐",
    title: "Velvet Restaurant — AWS Deployment",
    description:
      "Phase 1 of a full AWS static website deployment pipeline. Documents initial architecture setup, local environment configuration and core web asset delivery.",
    problem:
      "Needed to deploy a production-quality static web presence with global performance and a documented pipeline.",
    solution:
      "S3 + CloudFront CDN for global delivery with IAM policies and documented reproducible infrastructure.",
    impact:
      "Foundation for a full multi-phase cloud deployment with documented, reproducible infrastructure.",
    tags: ["AWS S3", "CloudFront", "IAM", "Static Hosting"],
    category: "cloud",
    github: "https://github.com/kefras/velvet-restaurant-deployment-p1",
    featured: false,
  },
  {
    id: "dockerized-v2",
    icon: "🐳",
    title: "Dockerized App Deploy v2",
    description:
      "Phase 2 focusing on infrastructure scaling, enhanced configuration management via environment variables, security hardening and deployment improvements.",
    problem:
      "Phase 1 deployment lacked scaling capability, configuration management and security hardening.",
    solution:
      "Enhanced with infrastructure scaling, environment variable config management and security hardening.",
    impact:
      "Demonstrated iterative DevOps improvement — taking a basic container to a production-grade configuration.",
    tags: ["Docker", "Linux", "Nginx", "Security", "Config Management"],
    category: "cloud",
    github: "https://github.com/kefras/dockerized-app-deploy-v2",
    featured: false,
  },
  {
    id: "ec2-nginx",
    icon: "🖥️",
    title: "AWS EC2 Web Server (Nginx)",
    description:
      "Documented, repeatable workflow for deploying a publicly accessible Nginx web server on AWS EC2 with full security group configuration.",
    problem:
      "Needed a documented, repeatable workflow for manually deploying a publicly accessible web server.",
    solution:
      "Deployed Nginx on AWS EC2, configured security groups and documented the full deployment process.",
    impact:
      "Clear, reproducible EC2 deployment documentation usable as a foundation for automated deployments.",
    tags: ["AWS EC2", "Nginx", "Linux", "Security Groups"],
    category: "cloud",
    github: "https://github.com/kefras/AWS-EC2-Web-Server-Deployment-Nginx-",
    featured: false,
  },
  {
    id: "terraform-aws",
    icon: "⚙️",
    title: "Terraform First Project — AWS IaC",
    description:
      "Beginner Infrastructure as Code project using Terraform to provision an AWS S3 bucket, demonstrating the core Terraform workflow: init → plan → apply → destroy.",
    problem: "Manual AWS resource provisioning is slow and not reproducible.",
    solution:
      "Used Terraform to provision AWS S3, practising the full IaC workflow: init → plan → apply → destroy.",
    impact:
      "First IaC project establishing the foundation for fully automated cloud provisioning.",
    tags: ["Terraform", "AWS", "IaC", "S3"],
    category: "automation",
    github: "https://github.com/kefras/Terraform-First-Project-AWS",
    featured: false,
  },
  {
    id: "cloud-architect-portfolio",
    icon: "🏛️",
    title: "Cloud Architect Portfolio",
    description:
      "Production-grade, high-availability personal portfolio and backend architected on AWS with compute, storage, CDN and DNS.",
    problem:
      "Needed a portfolio backed by real AWS architecture — not shared hosting.",
    solution:
      "Architected portfolio with production-grade high-availability AWS backend covering compute, storage, CDN and DNS.",
    impact:
      "The portfolio itself is a live proof of cloud architecture skills — the infrastructure is the demonstration.",
    tags: ["AWS", "JavaScript", "High Availability", "CDN"],
    category: "cloud",
    github: "https://github.com/kefras/Cloud-Architect-Portfolio",
    featured: false,
  },
  {
    id: "schull-capstone",
    icon: "🔬",
    title: "Schull Technologies Capstone",
    description:
      "End-of-training capstone cloud engineering project applying skills across infrastructure provisioning, containerization and deployment.",
    problem:
      "End-of-training capstone requiring a deployable, real-world cloud engineering project.",
    solution:
      "Completed a full capstone applying cloud infrastructure, containerization and deployment skills.",
    impact:
      "Formal assessment of practical cloud engineering competency — demonstrating readiness for professional roles.",
    tags: ["AWS", "Docker", "Linux", "Cloud Engineering"],
    category: "cloud",
    github: "https://github.com/kefras/Schull-Technologies-capstone-project1",
    featured: false,
  },
];

export const skills = [
  {
    category: "Cloud Platforms",
    icon: "☁️",
    items: ["AWS EC2", "AWS S3", "AWS IAM", "CloudFront", "AWS WAF", "Auto Scaling", "Azure", "GCP"],
  },
  {
    category: "Containers & Orchestration",
    icon: "📦",
    items: ["Docker", "Docker Compose", "Kubernetes", "Pods", "ReplicaSets", "Services"],
  },
  {
    category: "CI/CD & Automation",
    icon: "🔀",
    items: ["GitHub Actions", "Jenkins", "Bash Scripting", "AWS CLI", "Infrastructure as Code"],
  },
  {
    category: "Infrastructure as Code",
    icon: "⚙️",
    items: ["Terraform", "Ansible", "CloudFormation"],
  },
  {
    category: "Monitoring & Logging",
    icon: "📈",
    items: ["Prometheus", "Grafana", "ELK Stack", "Linux top/htop", "CloudWatch"],
  },
  {
    category: "Languages & Tools",
    icon: "💻",
    items: ["Python", "Bash", "JavaScript", "Git", "GitHub", "Linux", "Nginx", "VS Code"],
  },
];

export const certifications = [
  {
    name: "AWS Cloud Quest: Generative AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Apr 2026",
    badge: "☁️",
    verify: "https://aws.amazon.com/training/digital/aws-cloud-quest/",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Apr 2026",
    badge: "☁️",
    verify: "https://aws.amazon.com/training/digital/aws-cloud-quest/",
  },
  {
    name: "Kubernetes & Cloud Native Essentials (LFS250)",
    issuer: "The Linux Foundation",
    date: "2025–2026",
    badge: "📦",
    verify: "https://training.linuxfoundation.org/training/kubernetes-and-cloud-native-essentials-lfs250/",
  },
  {
    name: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    date: "2025–2026",
    badge: "📦",
    verify: "https://training.linuxfoundation.org/training/introduction-to-kubernetes/",
  },
  {
    name: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    date: "2025–2026",
    badge: "🐧",
    verify: "https://training.linuxfoundation.org/training/introduction-to-linux/",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    badge: "☁️",
    verify: "https://aws.amazon.com/training/",
  },
  {
    name: "Cloud Computing Micro-credential",
    issuer: "Africa Agility & Oz",
    date: "Apr 2026–Present",
    badge: "🎓",
    verify: "#",
  },
  {
    name: "Work Ready Africa — Cohort 1",
    issuer: "Work Ready Africa",
    date: "2025",
    badge: "🏅",
    verify: "#",
  },
  {
    name: "Hashgraph Developer Course",
    issuer: "Hedera",
    date: "2025",
    badge: "🔗",
    verify: "#",
  },
];

export const timeline = [
  {
    date: "2026 – Present",
    role: "DevOps & Cloud Projects — SIWES Intern",
    company: "Build and Ship Academy Ltd, UK (Remote)",
    description:
      "Designing and deploying multi-tier AWS environments, building automated CI/CD pipelines with GitHub Actions, and managing containerized workloads with Docker.",
    icon: "💼",
  },
  {
    date: "Nov 2025 – Feb 2026",
    role: "Cloud Engineering Trainee",
    company: "Schull Technologies, Lagos, Nigeria",
    description:
      "Completed practical training in cloud architecture, infrastructure deployment, IAM, access management and secure application hosting.",
    icon: "🎓",
  },
  {
    date: "2025 – 2026",
    role: "Kubernetes African Developer Training",
    company: "Andela / The Linux Foundation (Remote)",
    description:
      "Developed hands-on skills in Linux CLI, process monitoring, shell environments, infrastructure scripting and Kubernetes deployment patterns.",
    icon: "📦",
  },
  {
    date: "Jan 2026 – Apr 2026",
    role: "Student Mentor & Community Volunteer",
    company: "Miva Open University — Buddy Programme",
    description:
      "Spearheaded onboarding and community-building support for incoming students, facilitating collaboration and peer engagement.",
    icon: "🤝",
  },
  {
    date: "2023 – 2027 (In View)",
    role: "B.Sc. Computer Science",
    company: "Miva Open University, Abuja",
    description:
      "Undergraduate degree in Computer Science with focus on cloud computing, distributed systems and software engineering.",
    icon: "🎓",
  },
];

export const filterCategories = [
  { key: "all", label: "All Projects" },
  { key: "cloud", label: "Cloud" },
  { key: "kubernetes", label: "Kubernetes" },
  { key: "ci-cd", label: "CI/CD" },
  { key: "automation", label: "IaC / Automation" },
];
