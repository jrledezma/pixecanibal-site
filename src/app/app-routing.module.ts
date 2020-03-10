import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsDetailComponent } from './components/projects-detail/projects-detail.component';
import { ReelComponent } from './components/reel/reel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "proyectos", component: ProjectsComponent },
  { path: "proyecto/:project", component: ProjectsDetailComponent },
  { path: "reel", component: ReelComponent },
  { path: "acercade", component: AboutUsComponent },
  { path: "contacto", component: ContactUsComponent },
  { path: "**", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
