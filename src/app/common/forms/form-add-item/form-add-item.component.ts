import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../common/entities/';

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

  constructor() {
  }

  ngOnInit() { 
  }

  click() {
    this.defaultValuesNoSet = this.requiredFields.find( el => {
      return this.item[el] == ''; 
    });
    if(this.defaultValuesNoSet) {
      this.defaultFieldDefined = false;
    } else {
      this.onClick.emit();
    }
  }

}
