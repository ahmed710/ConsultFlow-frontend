import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../../../shared/shared.module';
import { ToggleBtnDirective } from '../../../../shared/directives/toggle-btn.directive';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'app-mail-settings',
  imports: [SharedModule, NgbNavModule, ToggleBtnDirective, FormsModule, ReactiveFormsModule, NgbDropdownModule, SpkNgSelect, SpkDropdowns],
  templateUrl: './mail-settings.html',
  styleUrl: './mail-settings.scss'
})
export class MailSettings {
  url1: string = ''; // Assuming url1 is a property in your component

handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
LanguageSelect = [
  { label: 'English', value: 'English' },
  { label: 'French', value: 'French' },
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Hindi', value: 'Hindi' },
]
selectedLang=["English",]
selectedLang1=["English","French"]
CountrySelect = [
  { label: 'Usa', value: 'Usa' },
  { label: 'Australia', value: 'Australia' },
  { label: 'Dubai', value: 'Dubai' },
];
selectedcountry=['Usa']

Maximumoptions=[
	{value:"10", label:"10"},
	{value:"50", label:"50"},
	{value:"100", label:"100"},
	{value:"200", label:"200"},

];
selectedpage=["10"]

Devices = [
  {
      icon: 'bi-phone',
      name: 'Mobile-LG-1023',
      locationDate: 'Manchester, UK-Nov 30, 04:45PM',
  },
  {
      icon: 'bi-laptop',
      name: 'Lenovo-1291203',
      locationDate: 'England, UK-Aug 12, 12:25PM',
  },
  {
      icon: 'bi-laptop',
      name: 'Macbook-Suzika',
      locationDate: 'Brightoon, UK-Jul 18, 8:34AM',
  },
  {
      icon: 'bi-pc-display-horizontal',
      name: 'Apple-Desktop',
      locationDate: 'Darlington, UK-Jan 14, 11:14AM',
  },
];
MailCategories = [
  { id: 'label-all-mails', label: 'All Mails', defaultChecked: true },
  { id: 'label-sent', label: 'Inbox', defaultChecked: true },
  { id: 'label-sent2', label: 'Sent', defaultChecked: true },
  { id: 'label-drafts', label: 'Drafts', defaultChecked: true },
  { id: 'label-spam', label: 'Spam', defaultChecked: true },
  { id: 'label-important', label: 'Important', defaultChecked: true },
  { id: 'label-trash', label: 'Trash', defaultChecked: true },
  { id: 'label-archive', label: 'Archive', defaultChecked: true },
  { id: 'label-starred', label: 'Starred', defaultChecked: true },
];
Categories = [
  { id: 'label-mail', label: 'Mail', defaultChecked: true },
  { id: 'label-home', label: 'Home', defaultChecked: true },
  { id: 'label-work', label: 'Work', defaultChecked: true },
  { id: 'label-friends', label: 'Friends', defaultChecked: true },
];
Accountoptions=[
	{value:"1 Day", label:"1 Day"},
	{value:"1 Hour", label:"1 Hour"},
	{value:"1 Month", label:"1 Month"},
	{value:"1 Year", label:"1 Year"},

];
selectedAccount=["1 Day"]
MaxLimitoptions=[
	{value:"3 Attempts", label:"3 Attempts"},
	{value:"5 Attempts", label:"5 Attempts"},
	{value:"10 Attempts", label:"10 Attempts"},
	{value:"20 Attempts", label:"20 Attempts"},

];
}
