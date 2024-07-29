import { Component, Input } from '@angular/core';
import { InvestmentResult } from './investments-results.model';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  @Input() results?: InvestmentResult[];
}
