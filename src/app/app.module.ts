import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document-list/document/document.component';
import { MutualFundStrategyRequestComponent } from './components/mutual-fund-strategy-request/mutual-fund-strategy-request.component';
import { SectionComponent } from './components/section/section.component';
import { QuestionComponent } from './components/question/question.component';
import { SubQuestionComponent } from './components/sub-question/sub-question.component';
import { ProductComponent } from './components/product/product.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StrategyListComponent } from './components/strategy-list/strategy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    DocumentListComponent,
    DocumentComponent,
    MutualFundStrategyRequestComponent,
    SectionComponent,
    QuestionComponent,
    SubQuestionComponent,
    ProductComponent,
    StrategyComponent,
    StrategyListComponent
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
