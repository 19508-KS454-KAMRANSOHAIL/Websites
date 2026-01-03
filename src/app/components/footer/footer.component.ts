import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Portfolio</h3>
            <p>
              Transforming American businesses with cutting-edge software
              solutions. 10+ years of proven expertise.
            </p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/portfolio">Portfolio</a></li>
              <li><a routerLink="/blog">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#digital-transformation">Digital Transformation</a>
              </li>
              <li><a href="#custom-development">Custom Development</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#optimization">Optimization</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener"
                  >GitHub</a
                >
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener"
                  >Twitter</a
                >
              </li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Professional Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {}
