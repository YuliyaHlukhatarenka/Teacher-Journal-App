import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent {
  @Output() public onClick = new EventEmitter();
  @Input() public formTitle: string;
  @Input() public item;
  @Input() public fieldsTitle: string[];
  @Input() public requiredFields: string[];

  public defaultFieldDefined: boolean = true;
  public defaultValuesNoSet: string;

  values: object = {};

  constructor(private renderer: Renderer2) { }

  public onClickAdd() {
    this.defaultValuesNoSet = this.requiredFields.find(el => {
      return this.item[el] == '';
    });
    if (this.defaultValuesNoSet) {
      this.defaultFieldDefined = false;
      let input = document.getElementById(this.defaultValuesNoSet);
      this.renderer.addClass(input, 'error-input');
    } else {
      this.onClick.emit();
    }
  }

}
