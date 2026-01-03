import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="blog-hero">
      <div class="container">
        <h1>Blog & Insights</h1>
        <p>Technical Thoughts & Industry Analysis</p>
      </div>
    </section>

    <section class="blog-content">
      <div class="container">
        <div class="blog-grid">
          <article class="blog-card" *ngFor="let post of blogPosts">
            <div class="blog-date">{{ post.date }}</div>
            <h2>{{ post.title }}</h2>
            <p class="excerpt">{{ post.excerpt }}</p>
            <div class="blog-meta">
              <span class="category">{{ post.category }}</span>
              <span class="read-time">{{ post.readTime }} min read</span>
            </div>
            <a href="#" class="read-more">Read Article →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="newsletter-section">
      <div class="container">
        <h2>Stay Updated</h2>
        <p>
          Get the latest insights on digital transformation and software
          development trends.
        </p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  `,
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogPosts = [
    {
      title: "Why Angular SSR Beats React for SEO",
      excerpt:
        "A comprehensive comparison of server-side rendering implementations and their impact on search engine optimization and user experience.",
      date: "Jan 2024",
      category: "SEO",
      readTime: 8,
    },
    {
      title: "Microservices: When to Use and When to Avoid",
      excerpt:
        "Understanding the trade-offs of microservices architecture and making the right choice for your organization's scale and complexity.",
      date: "Dec 2023",
      category: "Architecture",
      readTime: 12,
    },
    {
      title: "Cost Optimization in Cloud Architectures",
      excerpt:
        "Practical strategies for reducing cloud infrastructure costs while maintaining performance, scalability, and reliability.",
      date: "Nov 2023",
      category: "Cloud",
      readTime: 10,
    },
    {
      title: "The Future of Digital Transformation",
      excerpt:
        "Emerging trends in technology adoption and what businesses need to know to stay competitive in the digital era.",
      date: "Oct 2023",
      category: "Trends",
      readTime: 7,
    },
    {
      title: "Building High-Performance Systems",
      excerpt:
        "Deep dive into performance optimization techniques that can improve your system's response times by orders of magnitude.",
      date: "Sep 2023",
      category: "Performance",
      readTime: 15,
    },
    {
      title: "AI and Machine Learning in Enterprise",
      excerpt:
        "How enterprises are leveraging AI and ML to gain competitive advantages and transform business processes.",
      date: "Aug 2023",
      category: "AI/ML",
      readTime: 11,
    },
  ];

  ngOnInit() {
    this.animateOnScroll();
  }

  animateOnScroll() {
    gsap.utils.toArray<any>(".blog-card").forEach((card, index) => {
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
