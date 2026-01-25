import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-collapse-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-collapse-card.html',
  styleUrl: './spk-collapse-card.scss'
})
export class SpkCollapseCard {
   title = input<string>('Card Title');
   collapseClass = input<string | undefined>('');
   subtitle = input<string | undefined>('');
   defaultBorder = input<string | undefined>('');
   cardBodycontent = input<string | undefined>('');
   content = input<string | undefined>('Default card content');
   fullscreenContent = input<string | undefined>('Default card content');
   isCollapsible = input<boolean>(false);
   isClosable = input<boolean>(false);
   isFullscreenable = input<boolean>(false);
  isCollapsed: boolean = false;
  isClosed: boolean = false;
  isFullscreen: boolean = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCard() {
    this.isClosed = true;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
