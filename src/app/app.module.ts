import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SectionComponent } from './components/section/section.component';
import { QuestionComponent } from './components/question/question.component';
import { SubQuestionComponent } from './components/sub-question/sub-question.component';
import { ProductComponent } from './components/product/product.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    SectionComponent,
    QuestionComponent,
    SubQuestionComponent,
    ProductComponent,
    ProductListComponent,
    SectionListComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
