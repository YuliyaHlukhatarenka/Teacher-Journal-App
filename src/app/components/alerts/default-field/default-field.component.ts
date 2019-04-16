import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-field',
  templateUrl: './default-field.component.html',
  styleUrls: ['./default-field.component.scss']
})
export class DefaultFieldComponent {
  @Input() defaultValuesNoSet: string;
}
