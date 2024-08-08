import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentsResultsComponent],
  imports: [BrowserModule, UserInputModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
