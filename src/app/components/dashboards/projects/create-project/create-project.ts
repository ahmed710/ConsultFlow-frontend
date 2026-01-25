import { Component, ViewChild } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import * as FilePond from 'filepond';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';

interface Select {
  value: string;
  label: string;
}

@Component({
  selector: 'app-create-project',
  imports: [SharedModule, QuillModule, FormsModule, ReactiveFormsModule, FilePondModule, SpkFlatpickr, SpkNgSelect,TagInputModule],
  templateUrl: './create-project.html',
  styleUrl: './create-project.scss'
})
export class CreateProject {
  //
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drag & Drop Your files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [

  ];

  pondHandleInit() {

  }

  pondHandleAddFile(event: any) {

  }

  pondHandleActivateFile(event: any) {

  }
  //

  modules = {
    //formula: true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],

      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],

      ['link', 'image', 'video']
    ]
  };


 StatusSelect: Select[] = [
    { value: "Completed", label: 'Completed' },
    { value: "Inprogress", label: 'Inprogress' },
    { value: "On-hold", label: 'On-hold' },
  ];
  Priority=[
    {label:'High',value:1},
    {label:'Medium',value:2},
    {label:'Low',value:3},
  ]
 AsignSelect: Select[] = [
    { value: "Angelina May", label: 'Angelina May' },
    { value: "Kiara advain", label: 'Kiara advain' },
    { value: "Hercules Jhon", label: 'Hercules Jhon' },
    { value: "Mayor Kim", label: 'Mayor Kim' },
    { value: "Alexa Biss", label: 'Alexa Biss' },
    { value: "Karley Dia", label: 'Karley Dia' },
    { value: "Kim Jong", label: 'Kim Jong' },
    { value: "Darren Sami", label: 'Darren Sami' },
    { value: "Elizabeth", label: 'Elizabeth' },
    { value: "Bear Gills", label: 'Bear Gills' },
    { value: "Alex Carey", label: 'Alex Carey' },
  ];
  selectedTags=['Alexa Biss','Alex Carey','Angelina May']

  Passing=[
    'Marketing',
    'Sales',
    'Development',
    'Research',
   ]
selected=[1,2,4,5,6]
}
