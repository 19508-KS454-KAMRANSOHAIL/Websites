import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="portfolio-hero">
      <div class="container">
        <h1>Portfolio</h1>
        <p>Case Studies & Success Stories</p>
      </div>
    </section>

    <section class="portfolio-content">
      <div class="container">
        <div
          class="case-study"
          *ngFor="let study of caseStudies; let i = index"
          [class.reverse]="i % 2 !== 0"
        >
          <div class="case-study-content">
            <h2>{{ study.title }}</h2>
            <p class="company">{{ study.company }}</p>

            <div class="challenge">
              <h3>Challenge</h3>
              <p>{{ study.challenge }}</p>
            </div>

            <div class="solution">
              <h3>Solution</h3>
              <p>{{ study.solution }}</p>
            </div>

            <div class="results">
              <h3>Results</h3>
              <div class="results-grid">
                <div class="result-item" *ngFor="let result of study.results">
                  <div class="result-metric">{{ result.metric }}</div>
                  <p>{{ result.description }}</p>
                </div>
              </div>
            </div>

            <div class="technologies">
              <h3>Technologies</h3>
              <div class="tech-tags">
                <span
                  class="tech-tag"
                  *ngFor="let tech of study.technologies"
                  >{{ tech }}</span
                >
              </div>
            </div>
          </div>

          <div class="case-study-visual">
            <div class="visual-placeholder">
              <div class="visual-icon">{{ study.icon }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-stats">
      <div class="container">
        <h2 class="section-title">Impact Summary</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <p>Projects Delivered</p>
          </div>
          <div class="stat-card">
            <div class="stat-number">3x</div>
            <p>Average Performance Gain</p>
          </div>
          <div class="stat-card">
            <div class="stat-number">40%</div>
            <p>Cost Reduction</p>
          </div>
          <div class="stat-card">
            <div class="stat-number">4.9/5</div>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  caseStudies = [
    {
      title: "E-Commerce Platform Modernization",
      company: "Fortune 500 Retail Company",
      icon: "🛍️",
      challenge:
        "Legacy monolithic e-commerce platform causing slow deployments, scaling issues, and poor user experience during peak traffic.",
      solution:
        "Implemented microservices architecture with Angular frontend, Node.js backend, and Azure cloud infrastructure. Introduced CI/CD pipelines and containerization.",
      results: [
        { metric: "300% faster", description: "Page load times reduced" },
        {
          metric: "10x capacity",
          description: "Handling peak loads without downtime",
        },
        {
          metric: "50% faster",
          description: "Deployment times reduced to minutes",
        },
        { metric: "$2M saved", description: "Annual infrastructure costs" },
      ],
      technologies: [
        "Angular",
        "Node.js",
        "Docker",
        "Kubernetes",
        "Azure",
        "PostgreSQL",
      ],
    },
    {
      title: "Enterprise CRM System Integration",
      company: "B2B SaaS Company",
      icon: "📊",
      challenge:
        "Multiple disconnected systems causing data silos, manual processes, and limited reporting capabilities.",
      solution:
        "Built unified API layer, created real-time dashboards, and implemented automated workflows to integrate 5 systems.",
      results: [
        { metric: "75% reduction", description: "In manual data entry" },
        {
          metric: "Real-time",
          description: "Data synchronization across systems",
        },
        { metric: "60% faster", description: "Report generation time" },
        { metric: "+$1.5M revenue", description: "From improved efficiency" },
      ],
      technologies: [
        ".NET Core",
        "Angular",
        "SQL Server",
        "Azure Service Bus",
        "Power BI",
      ],
    },
    {
      title: "Legacy System Modernization",
      company: "Insurance Industry Leader",
      icon: "🏢",
      challenge:
        "20-year-old mainframe system with high maintenance costs, difficulty hiring specialized talent, and inability to adapt to market changes.",
      solution:
        "Systematically migrated monolithic application to .NET microservices with Angular frontend, maintaining zero downtime.",
      results: [
        {
          metric: "$5M saved",
          description: "Over 3 years in licensing and maintenance",
        },
        { metric: "40x faster", description: "Feature deployment cycle" },
        {
          metric: "+200 developers",
          description: "Able to work on modern stack",
        },
        { metric: "99.99% uptime", description: "Improved system reliability" },
      ],
      technologies: [
        ".NET Core",
        "Angular",
        "Azure",
        "Docker",
        "PostgreSQL",
        "Event Sourcing",
      ],
    },
    {
      title: "Real-Time Analytics Platform",
      company: "Financial Services Company",
      icon: "📈",
      challenge:
        "Outdated analytics system causing delayed insights and limiting business decision-making capabilities.",
      solution:
        "Built real-time data pipeline with Apache Kafka, created interactive dashboards with Angular, and implemented ML-powered insights.",
      results: [
        { metric: "100x faster", description: "Data processing and analysis" },
        { metric: "Real-time", description: "Business insights and alerts" },
        { metric: "$800K saved", description: "In infrastructure costs" },
        { metric: "+30% revenue", description: "From faster insights" },
      ],
      technologies: [
        "Node.js",
        "Angular",
        "Apache Kafka",
        "Elasticsearch",
        "AWS",
        "Python",
      ],
    },
  ];

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    gsap.utils.toArray<any>(".case-study").forEach((study, index) => {
      gsap.from(study, {
        scrollTrigger: {
          trigger: study,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.6,
      });
    });

    gsap.utils.toArray<any>(".stat-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }
}
