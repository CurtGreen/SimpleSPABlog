import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArticleFeedComponent } from './components/article-feed/article-feed.component';
import { FooterInfoComponent } from './components/footer-info/footer-info.component';
import { ArticleReaderComponent } from './components/article-reader/article-reader.component';
import { Article } from './models/Article';
import { ArticlesService } from './services/articles.service';
import { AboutComponent } from './components/about/about.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

const appRoutes: Routes = [
  {
    path: 'feed',
    component: ArticleFeedComponent
  },
  {
    path: 'article/:id',
    component: ArticleReaderComponent
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin/new',
    component: ArticleFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleFeedComponent,
    FooterInfoComponent,
    ArticleReaderComponent,
    AboutComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
