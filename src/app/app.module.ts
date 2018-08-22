import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GS1UiShowLogoComponent } from './gs1-ui-show-logo.component';
import { GS1UiShowHeaderComponent } from './gs1-ui-show-header.component';
import { GS1UiShowFooterComponent } from './gs1-ui-show-footer.component';
import { GS1UiShowNavigationComponent } from './gs1-ui-show-navigation.component';
import { GS1UiShowContentsComponent } from './gs1-ui-show-contents.component';
import { GS1UiShowChartComponent } from './gs1-ui-show-chart.component';
import { GS1UiShowDetailComponent } from './gs1-ui-show-detail.component';
import { GS1UiShowTableComponent } from './gs1-ui-show-table.component';
import { GS1UiShowPageNotFoundComponent } from './gs1-ui-show-page-not-found.component';
import { Gs1GoogleAnalListComponent } from './gs1-google-anal-list.component';
import { Gs1GoogleAnalChartComponent } from './gs1-google-anal-chart.component';
import { Gs1GoogleAnalDetailComponent } from './gs1-google-anal-detail.component';
import { Gs1GoogleAnalList2Component } from './gs1-google-anal-list2.component';
import { Gs1GoogleAnalList3Component } from './gs1-google-anal-list3.component';
import { ChartsModule } from 'ng2-charts'; ​

import { GS1GetGoogleAnaliticsService } from './gs1-get-google-analitics.service';
import { Gs1UiShowBackButtonComponent } from './gs1-ui-show-back-button.component';
import { Gs1UiShowTitleComponent } from './gs1-ui-show-title.component';
import { GtagModule } from 'angular-gtag';


@NgModule({
  declarations: [
    AppComponent,
    GS1UiShowLogoComponent,
    GS1UiShowHeaderComponent,
    GS1UiShowFooterComponent,
    GS1UiShowNavigationComponent,
    GS1UiShowContentsComponent,
    GS1UiShowChartComponent,
    GS1UiShowDetailComponent,
    GS1UiShowTableComponent,
    GS1UiShowPageNotFoundComponent,
    Gs1GoogleAnalListComponent,
    Gs1GoogleAnalChartComponent,
    Gs1GoogleAnalDetailComponent,
    Gs1GoogleAnalList2Component,
    Gs1GoogleAnalList3Component,
    Gs1UiShowBackButtonComponent,
    Gs1UiShowTitleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GtagModule.forRoot({ trackingId: 'UA-123890110-1', trackPageviews: true })
  ],
  providers: [GS1GetGoogleAnaliticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
