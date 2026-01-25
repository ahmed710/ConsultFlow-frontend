import { Component, ViewChild, input } from '@angular/core';
import * as FilePond from 'filepond';
import { FilePondModule,FilePondComponent } from 'ngx-filepond';
@Component({
  selector: 'spk-filepond',
  standalone: true,
  imports: [FilePondModule],
  templateUrl: './spk-filepond.html',
  styleUrl: './spk-filepond.scss'
})
export class SpkFilepond {
  @ViewChild("myPond") myPond!: FilePondComponent;
   mainClass = input<string>('');
  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [

  ];

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }
}
