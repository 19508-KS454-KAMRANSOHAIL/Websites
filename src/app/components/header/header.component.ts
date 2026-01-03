import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <a routerLink="/" class="logo">
              <span class="logo-text">Portfolio</span>
            </a>
          </div>
          <ul class="nav-menu">
            <li>
              <a
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li>
              <a routerLink="/services" routerLinkActive="active">Services</a>
            </li>
            <li>
              <a routerLink="/portfolio" routerLinkActive="active">Portfolio</a>
            </li>
            <li><a routerLink="/blog" routerLinkActive="active">Blog</a></li>
            <li>
              <a routerLink="/contact" routerLinkActive="active" class="cta-btn"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {}
