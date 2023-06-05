import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
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
import { FooterComponent } from './components/layout-area/footer/footer.component';


@NgModule({

    // Which components belongs to this module:
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ArticlesComponent,
        ArticleOneComponent,
        ArticleTwoComponent,
        ArticleThreeComponent,
        ArticleFourComponent,
        ArticleFifthComponent,
        ArticleSixthComponent,
        ArticleSeventhComponent,
        ArticleEighthComponent,
        DataComponent,
        PageNotFoundComponent,
        FooterComponent
    ],

    // Which other modules we need: 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],

    // Which components we need to export from our module: 
    exports: [],

    // Which component is the first to be loaded in index.html:
    bootstrap: [LayoutComponent]
})
export class AppModule { }
