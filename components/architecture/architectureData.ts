export const architectures = [
    {
      title: "AWS Production Platform",
      image: "/architecture/aws-platform.png",
      description:
        "Production-grade AWS platform running highly available Kubernetes workloads with multi-AZ networking, EKS, RDS, Redis, AmazonMQ, centralized logging and security controls.",
    },
  
    {
      title: "GitOps CI/CD Pipeline",
      image: "/architecture/gitops-pipeline.png",
      description:
        "End-to-end GitOps deployment pipeline using GitHub Actions, Amazon ECR, ArgoCD and Amazon EKS with automated testing, image scanning and GitOps deployment.",
    },
  
    {
      title: "Terraform Infrastructure",
      image: "/architecture/terraform-platform.png",
      description:
        "Infrastructure as Code provisioning using reusable Terraform modules with remote backend, state locking and automated AWS deployments.",
    },
  
    {
      title: "Observability Platform",
      image: "/architecture/observability.png",
      description:
        "Centralized monitoring platform collecting infrastructure, Kubernetes and application metrics using Prometheus, Grafana and Alertmanager.",
    },
  
    {
      title: "CloudWatch → Grafana Loki",
      image: "/architecture/cloudwatch-loki.png",
      description:
        "Custom AWS Lambda pipeline forwarding CloudWatch logs securely into Grafana Loki for centralized log visualization.",
    },
  
    {
      title: "Centralized Logging Platform",
      image: "/architecture/centralized-logging.png",
      description:
        "Enterprise logging architecture using Fluent Bit, Logstash, Elasticsearch and Kibana with lifecycle management and S3 snapshots.",
    },
  ];