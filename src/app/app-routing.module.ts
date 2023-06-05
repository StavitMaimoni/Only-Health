import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ArticlesComponent } from './components/articles-area/articles/articles.component';
import { ArticleOneComponent } from './components/articles-area/article-one/article-one.component';
import { ArticleTwoComponent } from './components/articles-area/article-two/article-two.component';
import { ArticleThreeComponent } from './components/articles-area/article-three/article-three.component';
import { ArticleFourComponent } from './components/articles-area/article-four/article-four.component';
import { ArticleFifthComponent } from './components/articles-area/article-fifth/article-fifth.component';
import { ArticleSixthComponent } from './components/articles-area/article-sixth/article-sixth.component';
import { ArticleSeventhComponent } from './components/articles-area/article-seventh/article-seventh.component';
import { ArticleEighthComponent } from './components/articles-area/article-eighth/article-eighth.component';
import { DataComponent } from './components/data-area/data/data.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "article-one", component: ArticleOneComponent },
    { path: "article-two", component: ArticleTwoComponent },
    { path: "article-three", component: ArticleThreeComponent },
    { path: "article-four", component: ArticleFourComponent },
    { path: "article-fifth", component: ArticleFifthComponent },
    { path: "article-sixth", component: ArticleSixthComponent },
    { path: "article-seventh", component: ArticleSeventhComponent },
    { path: "article-eighth", component: ArticleEighthComponent },
    { path: "data", component: DataComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact empty string
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
