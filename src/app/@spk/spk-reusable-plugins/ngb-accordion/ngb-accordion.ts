import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-ngb-accordion',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './ngb-accordion.html',
  styleUrl: './ngb-accordion.scss'
})
export class NgbAccordion {
   accordionId = input<string>('');
   accodionClass = input<string>('');
   closeOthers = input<boolean>(false);
   accordionItems = input<Array<{
    title: string;
    body: string;
    headingId: string;
    collapseId: string;
    collapsed: boolean;
    accodionItemClass?: string;
}>>();
  constructor( private sanitizer: DomSanitizer) { }

  getSanitizedSVG(cardIcon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(cardIcon);
  }
}
