import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">What Clients Say</h2>
        <div class="testimonials-grid">
          <div
            class="testimonial-card"
            *ngFor="let testimonial of testimonials"
          >
            <div class="stars">
              <span *ngFor="let _ of [1, 2, 3, 4, 5]">★</span>
            </div>
            <p class="quote">"{{ testimonial.quote }}"</p>
            <div class="author">
              <h4>{{ testimonial.author }}</h4>
              <p>{{ testimonial.company }} - {{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .testimonials {
        padding: 6rem 0;
        background: linear-gradient(135deg, #0f1729 0%, #1e293b 100%);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 3rem;
        color: #f1f5f9;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .testimonial-card {
        padding: 2rem;
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid rgba(148, 163, 184, 0.2);
        border-radius: 1rem;
        transition: all 0.3s ease;

        &:hover {
          border-color: rgba(20, 184, 166, 0.5);
          transform: translateY(-5px);
        }

        .stars {
          color: #fbbf24;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .quote {
          color: #cbd5e1;
          font-style: italic;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .author {
          h4 {
            color: #f1f5f9;
            margin: 0 0 0.25rem 0;
          }

          p {
            color: #14b8a6;
            font-size: 0.9rem;
            margin: 0;
          }
        }
      }

      @media (max-width: 768px) {
        .testimonials {
          padding: 4rem 0;
        }

        .container {
          padding: 0 1rem;
        }

        .section-title {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote:
        "Exceptional work. The modernization of our legacy system exceeded expectations. They delivered on time and under budget while maintaining zero downtime.",
      author: "John Smith",
      company: "Fortune 500 Tech Company",
      title: "CTO",
    },
    {
      quote:
        "A rare combination of technical expertise and business acumen. They understood our challenges and delivered solutions that drove real revenue growth.",
      author: "Sarah Johnson",
      company: "SaaS Startup",
      title: "Founder & CEO",
    },
    {
      quote:
        "Professional, responsive, and brilliant. They took our vague ideas and turned them into a scalable, high-performing system. Highly recommend.",
      author: "Michael Chen",
      company: "E-Commerce Leader",
      title: "VP Engineering",
    },
    {
      quote:
        "The technical leadership and mentoring they provided transformed our team. Knowledge transfer was exceptional.",
      author: "Emily Rodriguez",
      company: "Financial Services",
      title: "Engineering Manager",
    },
    {
      quote:
        "Outstanding ROI on the investment. Not just good code, but strategic solutions that aligned with business objectives.",
      author: "David Park",
      company: "Insurance Corporation",
      title: "Chief Strategy Officer",
    },
    {
      quote:
        "Rare to find someone with this depth of expertise across so many technologies and the wisdom to choose the right tool for each problem.",
      author: "Lisa Martinez",
      company: "Healthcare Tech",
      title: "Product Director",
    },
  ];
}
