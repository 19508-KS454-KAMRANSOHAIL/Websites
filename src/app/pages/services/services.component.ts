import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-hero">
      <div class="container">
        <h1>Services</h1>
        <p>Comprehensive Solutions for Digital Transformation</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div
          class="service-detailed"
          *ngFor="let service of services; let i = index"
          [class.reverse]="i % 2 !== 0"
        >
          <div class="service-description">
            <h2>{{ service.title }}</h2>
            <p>{{ service.fullDescription }}</p>
            <ul class="features-list">
              <li *ngFor="let feature of service.features">{{ feature }}</li>
            </ul>
          </div>
          <div class="service-benefits">
            <h3>Key Benefits</h3>
            <div class="benefits-grid">
              <div class="benefit" *ngFor="let benefit of service.benefits">
                <div class="benefit-icon">{{ benefit.icon }}</div>
                <p>{{ benefit.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="section-title">My Process</h2>
        <div class="process-steps">
          <div class="step" *ngFor="let step of processSteps">
            <div class="step-number">{{ step.number }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-services">
      <div class="container">
        <h2>Ready to Start Your Transformation?</h2>
        <p>
          Let's schedule a free consultation to discuss your project and goals.
        </p>
        <a href="#contact" class="btn btn-primary btn-lg"
          >Schedule Consultation</a
        >
      </div>
    </section>
  `,
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: "Digital Transformation",
      fullDescription:
        "Transform your legacy systems into modern, scalable platforms. I help organizations navigate the complexities of modernization while minimizing risk and maximizing ROI.",
      features: [
        "Legacy system assessment and modernization roadmap",
        "Cloud migration strategies (Azure, AWS)",
        "API-first architecture implementation",
        "Microservices decomposition",
        "Data migration and integration",
        "Zero-downtime deployment strategies",
      ],
      benefits: [
        { icon: "⚡", text: "Faster time-to-market" },
        { icon: "💰", text: "Reduced operational costs" },
        { icon: "📈", text: "Improved scalability" },
        { icon: "🔒", text: "Enhanced security" },
      ],
    },
    {
      title: "Custom Development",
      fullDescription:
        "Full-stack enterprise applications built from the ground up for your specific needs. From concept to deployment, I handle every aspect with meticulous attention to performance and scalability.",
      features: [
        "Enterprise application architecture",
        "Angular/React frontend development",
        ".NET/Node.js backend solutions",
        "Real-time dashboards and analytics",
        "E-commerce platforms",
        "High-performance systems design",
      ],
      benefits: [
        { icon: "🎯", text: "Purpose-built for your needs" },
        { icon: "⚙️", text: "Seamless integration" },
        { icon: "🚀", text: "Production-ready quality" },
        { icon: "🔄", text: "Easy maintenance" },
      ],
    },
    {
      title: "Performance Optimization",
      fullDescription:
        "Unlock hidden potential in your existing systems. Through detailed analysis and strategic optimization, I improve performance by 3x on average, reducing costs and improving user satisfaction.",
      features: [
        "Performance audits and bottleneck identification",
        "Code optimization and refactoring",
        "Database query tuning",
        "Caching strategies implementation",
        "CDN and compression optimization",
        "Monitoring and alerting setup",
      ],
      benefits: [
        { icon: "⚡", text: "Dramatically faster load times" },
        { icon: "💸", text: "Lower infrastructure costs" },
        { icon: "😊", text: "Better user experience" },
        { icon: "📊", text: "Improved SEO rankings" },
      ],
    },
    {
      title: "Strategic Consulting",
      fullDescription:
        "Expert guidance on technology decisions that matter. I work with leadership teams to develop comprehensive technology roadmaps aligned with business objectives.",
      features: [
        "Technology roadmap planning",
        "Architecture reviews and recommendations",
        "Team mentoring and knowledge transfer",
        "Technology selection guidance",
        "Risk assessment and mitigation",
        "Cost-benefit analysis",
      ],
      benefits: [
        { icon: "🎓", text: "Expert perspective" },
        { icon: "🎯", text: "Aligned with business goals" },
        { icon: "📚", text: "Knowledge transfer" },
        { icon: "💡", text: "Innovation strategies" },
      ],
    },
  ];

  processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description:
        "Deep dive into your current systems, challenges, and goals. I analyze your technical landscape and business objectives.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Create a comprehensive roadmap with clear milestones, timelines, and success metrics aligned with business goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Execute with precision, maintaining transparency and regular communication throughout the development process.",
    },
    {
      number: "04",
      title: "Optimization & Support",
      description:
        "Continuous monitoring, optimization, and support to ensure sustained success and maximum ROI.",
    },
  ];

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    gsap.utils.toArray<any>(".service-detailed").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.6,
      });
    });

    gsap.utils.toArray<any>(".step").forEach((step, index) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }
}
