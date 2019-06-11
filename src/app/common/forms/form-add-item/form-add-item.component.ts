import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent implements OnInit {
  @Output() onClick = new EventEmitter();
  @Input() formTitle: string;
  @Input() item;
  @Input() fieldsTitle: string[];
  @Input() requiredFields: string[];
  defaultFieldDefined: boolean = true;
  defaultValuesNoSet: string;

  values: object = {};

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() { 
  }

  click() {
    this.defaultValuesNoSet = this.requiredFields.find( el => {
      return this.item[el] == ''; 
    });
    if(this.defaultValuesNoSet) {
      this.defaultFieldDefined = false;
      let input = document.getElementById(this.defaultValuesNoSet);
      this.renderer.addClass(input, 'error-input');
    } else {
      this.onClick.emit();
    }
  }

}
