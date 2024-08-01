import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentsResultsComponent, UserInputComponent],
})
export class AppComponent {}
