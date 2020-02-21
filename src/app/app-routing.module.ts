import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { BlogComponent } from './features/blog/blog.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { depth: 1 } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: { depth: 2 } },
  { path: 'resume', component: ResumeComponent, data: { depth: 3 } },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { state: 'portfolio' }
  },
  { path: 'blog', component: BlogComponent, data: { depth: 4 } },
  { path: 'contact', component: ContactComponent, data: { depth: 5 } },
  { path: 'blogposts', component: BlogpostsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
