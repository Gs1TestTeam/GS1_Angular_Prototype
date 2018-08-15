import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gs1GoogleAnalListComponent } from './gs1-google-anal-list.component';
import { Gs1GoogleAnalList2Component } from './gs1-google-anal-list2.component';
import { Gs1GoogleAnalList3Component } from './gs1-google-anal-list3.component';
import { Gs1GoogleAnalChartComponent } from './gs1-google-anal-chart.component';
import { Gs1GoogleAnalDetailComponent } from './gs1-google-anal-detail.component';
import { GS1UiShowPageNotFoundComponent } from './gs1-ui-show-page-not-found.component';

const routes: Routes = [
  { path: 'list1'       , component: Gs1GoogleAnalListComponent },
  { path: 'list2'       , component: Gs1GoogleAnalList2Component },
  { path: 'list3'       , component: Gs1GoogleAnalList3Component },    
  { path: 'chart/:id'   , component: Gs1GoogleAnalChartComponent },
  { path: 'detail/:id'  , component: Gs1GoogleAnalDetailComponent },
  { path: ''            , redirectTo: '/list1' , pathMatch: 'full' },  
  { path: '**'          , component: GS1UiShowPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
