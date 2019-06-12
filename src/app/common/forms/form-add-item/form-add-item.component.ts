import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { MessageComponent } from './message.component';
import { IStudent, ISubject } from '../../entities';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent implements OnInit {
  @ViewChild('messagecontainer', { read: ViewContainerRef }) public entry: ViewContainerRef;
  @Output() public onClick: EventEmitter<{}> = new EventEmitter();
  @Input() public formTitle: string;
  @Input() public item: ISubject | IStudent;
  @Input() public fieldsTitle: string[];
  @Input() public requiredFields: string[];

  public itemKeys: string[];
  public defaultFieldDefined: boolean = true;
  public defaultValuesNoSet: string;

  public values: object = {};
  public componentRef: ComponentRef<MessageComponent>;

  constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    this.itemKeys = Object.keys(this.item);
  }

  public onClickAdd(): void {
    this.defaultValuesNoSet = this.requiredFields.find(el => {
      return this.item[el] === '';
    });
    if (this.defaultValuesNoSet) {
      this.defaultFieldDefined = false;
      let input: HTMLElement = document.getElementById(this.defaultValuesNoSet);
      this.renderer.addClass(input, 'error-input');
      this.onShown('FAIL');
    } else {
      this.onShown('SUCCESS');
      setTimeout(() => this.onClick.emit(), 3000);
    }
  }
  public onShown(message: string): void {
    this.entry.clear();
    const factory: ComponentFactory<MessageComponent> = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
    setTimeout(() => this.componentRef.destroy(), 1000);
  }

}
