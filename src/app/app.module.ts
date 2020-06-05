
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ResumeComponent } from './features/resume/resume.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { CardComponent } from './shared/card/card.component';
import { MapComponent } from './features/map/map.component';
import { BlogComponent } from './features/blog/blog.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PostCominciamoConAngularComponent } from './features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component';
import { PostTodoAppConAngularComponent } from './features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component';
import { PostIntroduzioneVscodeComponent } from './features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component';
import { SocialComponent } from './core/sidebar/components/social.component';
import { PostTemplateDrivenFormComponent } from './features/blog/posts/post-template-driven-form/post-template-driven-form.component';
import { MaterialElevationDirective } from './shared/card/material-elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    NotFoundComponent,
    CardComponent,
    MapComponent,
    BlogComponent,
    PostCominciamoConAngularComponent,
    PostTodoAppConAngularComponent,
    PostIntroduzioneVscodeComponent,
    SocialComponent,
    PostTemplateDrivenFormComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxGistModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
