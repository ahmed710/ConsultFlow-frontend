import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-blog-card',
  imports: [RouterModule],
  templateUrl: './spk-blog-card.html',
  styleUrl: './spk-blog-card.scss'
})
export class SpkBlogCard {
   blog = input<any>();
}
