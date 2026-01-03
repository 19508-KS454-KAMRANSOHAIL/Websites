import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-hero">
      <div class="container">
        <h1>About Me</h1>
        <p>The Story Behind the Expertise</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-intro">
          <h2>Senior Software Engineer & Technical Consultant</h2>
          <p>
            With over a decade of experience transforming digital landscapes,
            I've dedicated my career to helping American businesses harness the
            power of technology to drive growth, efficiency, and competitive
            advantage.
          </p>
        </div>

        <div class="timeline">
          <h2 class="section-title">My Journey</h2>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Early Career: Enterprise Systems Foundation</h3>
              <p>
                Built foundational expertise in enterprise application
                development, working with Fortune 500 companies on
                mission-critical systems. Mastered full-stack development across
                diverse technology stacks.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Mid Career: Technical Leadership</h3>
              <p>
                Transitioned to technical leadership roles, architecting
                scalable solutions and mentoring development teams. Pioneered
                microservices adoption and cloud-native architectures.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Current: Business Transformation Consultant</h3>
              <p>
                Now focused on helping businesses undergo digital
                transformation, providing strategic guidance on technology
                decisions that drive real business value.
              </p>
            </div>
          </div>
        </div>

        <div class="expertise-section">
          <h2 class="section-title">Technical Expertise</h2>
          <div class="expertise-grid">
            <div class="expertise-card" *ngFor="let area of expertiseAreas">
              <h3>{{ area.title }}</h3>
              <ul>
                <li *ngFor="let tech of area.technologies">{{ tech }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="philosophy">
          <h2 class="section-title">My Philosophy</h2>
          <div class="philosophy-content">
            <p class="philosophy-statement">
              "I don't just write code; I build business solutions that scale."
            </p>
            <p>
              Every line of code, every architectural decision, and every
              recommendation is driven by a singular focus: delivering
              measurable business value. My goal is not to impress with
              technology, but to solve real problems that impact your bottom
              line.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  expertiseAreas = [
    {
      title: "Frontend Development",
      technologies: [
        "Angular",
        "React",
        "TypeScript",
        "SCSS",
        "HTML5",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      technologies: [
        ".NET Core",
        "Node.js",
        "Microservices",
        "API Design",
        "Database Architecture",
        "System Design",
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        "Azure",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Infrastructure as Code",
      ],
    },
    {
      title: "Enterprise Solutions",
      technologies: [
        "Legacy Modernization",
        "System Integration",
        "Performance Tuning",
        "Security",
        "Scalability",
        "Cloud Migration",
      ],
    },
  ];

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    gsap.utils.toArray<any>(".timeline-item").forEach((item, index) => {
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

    gsap.utils.toArray<any>(".expertise-card").forEach((card, index) => {
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
  }
}
