import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent}  from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article/article-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        ],
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticleFormComponent
        ],
    bootstrap: [AppComponent]
})
export class AppModule{

}