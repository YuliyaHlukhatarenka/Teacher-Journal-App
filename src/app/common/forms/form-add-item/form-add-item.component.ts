import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ComponentFactoryResolver, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { MessageComponent } from './message.component';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent {
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  @Output() public onClick = new EventEmitter();
  @Input() public formTitle: string;
  @Input() public item;
  @Input() public fieldsTitle: string[];
  @Input() public requiredFields: string[];

  public defaultFieldDefined: boolean = true;
  public defaultValuesNoSet: string;

  values: object = {};
  componentRef: any;


 constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver) { }

  public onClickAdd() {
    this.defaultValuesNoSet = this.requiredFields.find(el => {
      return this.item[el] == '';
    });
    if (this.defaultValuesNoSet) {
      this.defaultFieldDefined = false;
      let input = document.getElementById(this.defaultValuesNoSet);
      this.renderer.addClass(input, 'error-input');
      this.onShown("FAIL");
    } else {
      this.onShown("SUCCESS");
      setTimeout( () => this.onClick.emit(), 3000);
    }
  }
  onShown( message) {
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(MessageComponent);
      this.componentRef = this.entry.createComponent(factory);
      this.componentRef.instance.message = message;
     setTimeout( () => this.componentRef.destroy(), 2000);
  }

}
