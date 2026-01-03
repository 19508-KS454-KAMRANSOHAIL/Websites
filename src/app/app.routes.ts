import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ServicesComponent } from "./pages/services/services.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogComponent } from "./pages/blog/blog.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home - Professional Software Engineer" },
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About - My Story & Expertise" },
  },
  {
    path: "services",
    component: ServicesComponent,
    data: { title: "Services - Software Solutions" },
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    data: { title: "Portfolio - Case Studies" },
  },
  {
    path: "blog",
    component: BlogComponent,
    data: { title: "Blog - Technical Insights" },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact - Schedule Consultation" },
  },
  { path: "**", redirectTo: "" },
];
