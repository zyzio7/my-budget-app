import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillsListComponent } from './bills-list/bills-list.component';
import { MatListModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IncomeOutcomeSummaryComponent } from './income-outcome-summary/income-outcome-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BillsListComponent,
    IncomeOutcomeSummaryComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
