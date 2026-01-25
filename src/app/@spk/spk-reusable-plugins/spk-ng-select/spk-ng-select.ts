import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

interface Option {
  label: string; // Adjust according to your option structure
  value: any;    // Use the appropriate type based on your data
}
@Component({
  selector: 'spk-ng-select',
  standalone: true,
  imports: [NgSelectModule,FormsModule],
  templateUrl: './spk-ng-select.html',
  styleUrl: './spk-ng-select.scss'
})
export class SpkNgSelect {
   options = input<any>([]); // Options for the select
  @Input() defaultValue: any=[];   // Default value for the select
   id = input<string>('');       // Additional classes
   mainClass = input<string>('');       // Additional classes
   maxSelectedItems = input<number>();       // Additional classes
   selectClass = input<string>('');       // Additional classes
   disabled = input<boolean>(false); // Disable the select
   clearable = input<boolean | undefined>(true); // Allow clearing of selection
   addTag = input<boolean | undefined>(false);   // Enable multiple selection
   multiple = input<boolean | undefined>(false);   // Enable multiple selection
   multi = input<boolean | undefined>(false);   // Enable multiple selection
   searchable = input<boolean | undefined>(true); // Enable searching
   hideSelected = input<boolean>(true); // Enable searching
   placeholder = input<string>('' // Placeholder text
);      // Placeholder text
   additionalProperties = input<{
    [key: string]: any;
}>({});
  @Output() change: EventEmitter<Option | Option[]> = new EventEmitter(); // Emit value change
   extraProps = input<any>({});
  // @Input() extraProps: { [key: string]: any } = {};
prop: any;
image: any;
@Output() selectedChange = new EventEmitter<any>(); // Emit changes in selection

onSelectionChange(selected: any): void {
  this.selectedChange.emit(selected);
}
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.applyAdditionalProperties();
  }

  // Apply additional properties using Renderer2
  private applyAdditionalProperties() {
    const selectElement = this.el.nativeElement.querySelector('ng-select');

    const additionalProperties = this.additionalProperties();
    if (selectElement && additionalProperties) {
      Object.keys(additionalProperties).forEach(prop => {
        const value = this.additionalProperties()[prop];
        if (this.isValidAttributeName(prop)) {
          this.renderer.setAttribute(selectElement, prop, value);
        }
      });
    }
  }
  
  addTagFn(name: any) {
    return { name: name, tag: true };
  }
  // Example attribute validation
  isValidAttributeName(name: string): boolean {
    const invalidCharacters = [' ', '|', ':', '/', '\\', ';', ','];
    return !invalidCharacters.some(char => name.includes(char));
  }

  onValueChange(event: any) {
    console.log('Selected Value:', event);
  }
}
