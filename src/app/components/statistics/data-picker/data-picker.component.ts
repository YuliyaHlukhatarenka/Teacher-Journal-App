import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { ISubject, IMark, IStudent } from '../../../common/entities/';
@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss']
})
export class DataPickerComponent implements OnInit {
  @Output() public onChange: EventEmitter<object> = new EventEmitter<object>();
  public subjects: ISubject[];
  public selectedDays: string[] = [];
  public listOpened: boolean = false;

  constructor(private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.store.select('subjectsState').subscribe(res => this.subjects = res.subjects );
    this.selectAll(false);
  }

  public checkboxChanged(evt: MouseEvent): void {
    if ((evt.target as HTMLInputElement).nodeName === 'INPUT') {
      if ((evt.target as HTMLInputElement).parentNode.nodeName === 'DIV') {
        if ((evt.target as HTMLInputElement).checked) {
          this.subjects[(evt.target as HTMLInputElement).id].marks
          .map(el => { this.selectedDays.push(el.date); el.checked = true; return el; });
        } else {
          this.subjects[(evt.target as HTMLInputElement).id].marks.map(el => { el.checked = false; return el; });
        }
      } else {
        if (!(evt.target as HTMLInputElement).checked) {
          let subjectId: string =
          (evt.target as HTMLInputElement).parentNode.parentNode.parentNode.parentNode.querySelectorAll('.level0')[0].id;
          this.subjects[subjectId].checked = false;
        }
      }
      this.changeSelectedValuesInput();
    }
    this.onChange.emit(this.subjects);
  }

  public changeSelectedValuesInput(): void {
    this.selectedDays = [];
    this.subjects.map(item => {
      item.marks.map(el => {
        if (el.checked) {
          this.selectedDays.push(el.date);
        }
      });
    });
  }

  public onCloseOpenList(): void {
    if (this.listOpened) {
      document.getElementById('tree').style.display = 'none';
      this.listOpened = false;
    } else {
      document.getElementById('tree').style.display = 'block';
      this.listOpened = true;
    }
  }

  public selectAll(value: boolean): void {
    this.subjects.map(item => {
      item.checked = value;
      item.marks.map(el => {
        el.checked = value;
        return el;
      });
      return item;
    });
    this.selectedDays = [];
    if (value) {
      this.changeSelectedValuesInput();
    }
  }

  public onCheckAll(evt: MouseEvent): void {
    if ((evt.target as HTMLInputElement).innerHTML === 'CHECK ALL') {
      (evt.target as HTMLInputElement).innerHTML = 'UNCHECK ALL';
      this.selectAll(true);
    } else {
      (evt.target as HTMLInputElement).innerHTML = 'CHECK ALL';
      this.selectAll(false);
    }
    this.onChange.emit(this.subjects);
  }

  public onExpandCollapse(evt: MouseEvent): void {
    if ((evt.target as HTMLInputElement).innerHTML === String.fromCharCode(9660)) {
      (evt.target as HTMLInputElement).innerHTML = '&#9654;';
      (evt.target as HTMLInputElement).parentNode.parentNode.querySelector('.subject-section')[0].style.display = 'none';
    } else {
      (evt.target as HTMLInputElement).innerHTML = '&#9660;';
      (evt.target as HTMLInputElement).parentNode.parentNode.querySelector('.subject-section')[0].style.display = 'block';
    }

  }

  public onExpandAll(evt: MouseEvent): void {
    if ((evt.target as HTMLInputElement).innerHTML === 'EXPAND ALL') {
      (evt.target as HTMLInputElement).innerHTML = 'COLLAPSE ALL';

      let rootList: HTMLCollection = document.getElementsByClassName('arrow-button');

      for (let i: number = 0; i < rootList.length; i++) {
        (rootList[i] as HTMLElement).innerHTML = '&#9660;';
      }

      let list: HTMLCollection = document.getElementsByClassName('subject-section');

      for (let i: number = 0; i < list.length; i++) {
        (list[i] as HTMLElement).style.display = 'block';
      }
    } else {
      (evt.target as HTMLInputElement).innerHTML = 'EXPAND ALL';

      let rootList: HTMLCollection = document.getElementsByClassName('arrow-button');

      for (let i: number = 0; i < rootList.length; i++) {
        (rootList[i] as HTMLElement).innerHTML = '&#9654;';
      }
      let list: HTMLCollection = document.getElementsByClassName('subject-section');

      for (let i: number = 0; i < list.length; i++) {
        (list[i] as HTMLElement).style.display = 'none';
      }

    }
  }
}
