import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-kanbanboard-card',
  imports: [CommonModule, SpkDropdowns],
  templateUrl: './spk-kanbanboard-card.html',
  styleUrl: './spk-kanbanboard-card.scss'
})
export class SpkKanbanboardCard {
  @Input() kanban: any;
   cardClass = input<string>();
  index: any;
}
