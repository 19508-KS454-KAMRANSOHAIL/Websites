import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Transforming American Businesses with Cutting-Edge Software
            Solutions
          </h1>
          <p class="hero-subtitle">
            10+ Years Delivering Scalable, High-Performance Applications
          </p>
          <div class="hero-cta">
            <a routerLink="/contact" class="btn btn-primary"
              >Schedule Free Consultation</a
            >
            <a routerLink="/portfolio" class="btn btn-secondary"
              >View My Work</a
            >
          </div>
        </div>
        <div class="hero-background">
          <div class="gradient-orb orb-1"></div>
          <div class="gradient-orb orb-2"></div>
          <div class="gradient-orb orb-3"></div>
        </div>
      </div>
    </section>

    <section class="value-props">
      <div class="container">
        <h2 class="section-title">Why Partner With Me</h2>
        <div class="props-grid">
          <div class="prop-card" *ngFor="let prop of valueProps">
            <div class="prop-number">{{ prop.number }}</div>
            <h3>{{ prop.title }}</h3>
            <p>{{ prop.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview">
      <div class="container">
        <h2 class="section-title">Services Overview</h2>
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <div class="view-more">
          <a routerLink="/services" class="btn btn-secondary"
            >View All Services</a
          >
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Trusted by Industry Leaders</h2>
        <div class="trust-grid">
          <div class="trust-item">
            <div class="stat-number">50+</div>
            <p>Projects Completed</p>
          </div>
          <div class="trust-item">
            <div class="stat-number">85%</div>
            <p>Repeat Business Rate</p>
          </div>
          <div class="trust-item">
            <div class="stat-number">3x</div>
            <p>Average Performance Improvement</p>
          </div>
          <div class="trust-item">
            <div class="stat-number">4.9/5</div>
            <p>Client Satisfaction Rating</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how I can help you achieve your technical and business
            goals.
          </p>
          <a routerLink="/contact" class="btn btn-primary btn-lg"
            >Start Your Free Consultation</a
          >
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  valueProps = [
    {
      number: "40%",
      title: "Cost Reduction",
      description:
        "Optimized solutions reduce development and operational costs",
    },
    {
      number: "300%",
      title: "Performance Increase",
      description: "Systems engineered for scale and high availability",
    },
    {
      number: "50+",
      title: "Projects Delivered",
      description:
        "Proven track record across diverse industries and technologies",
    },
    {
      number: "100%",
      title: "Client Satisfaction",
      description: "Dedicated to exceeding expectations on every project",
    },
  ];

  services = [
    {
      icon: "🚀",
      title: "Digital Transformation",
      description:
        "Modernize legacy systems and embrace cloud-native architectures",
    },
    {
      icon: "💻",
      title: "Custom Development",
      description: "Full-stack enterprise applications built to scale",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Unlock speed and efficiency in your existing systems",
    },
    {
      icon: "🎯",
      title: "Strategic Consulting",
      description: "Expert guidance on technology roadmaps and architecture",
    },
  ];

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    // Animate value props on scroll
    gsap.utils.toArray<any>(".prop-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });

    // Animate service cards
    gsap.utils.toArray<any>(".service-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });

    // Animate trust items
    gsap.utils.toArray<any>(".trust-item").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
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
