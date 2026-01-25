import { Component, input } from '@angular/core';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.html',
    styleUrls: ['./breadcrumb.scss'],
    standalone: false
})
export class Breadcrumb {

  sub_title = input<string>(''); // Main card class, defaults to empty string
  active_item = input<string>(''); // Card body class, defaults to empty string
  title = input<string>(''); // Card title, defaults to empty string

  subtitle = input<boolean>(true); // Navigation arrows visibility, defaults to false

  constructor() { }

  ngOnInit(): void {
  }
}
