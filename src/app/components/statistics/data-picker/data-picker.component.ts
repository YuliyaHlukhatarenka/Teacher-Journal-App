import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataPickerService } from '../../../common/services/data-picker/data-picker.service';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss']
})
export class DataPickerComponent implements OnInit {
  @Output() public onChange = new EventEmitter<object>();
  public subjects;
  public selected_days;
  public listOpened = false;

  constructor(private dataPickerService: DataPickerService) { }

  ngOnInit() {
    this.subjects = this.dataPickerService.getDataForPicker();
    this.selectAll(false);
  }

  checkboxChanged(evt) {
    if (evt.target.nodeName === 'INPUT') {
      if (evt.target.parentNode.nodeName === 'DIV') {
        if (evt.target.checked) {
          this.subjects[evt.target.id].marks.map(el => { this.selected_days.push(el.date); el.checked = true; return el })
        } else {
          this.subjects[evt.target.id].marks.map(el => { el.checked = false; return el })
        }
      } else {
        if (!evt.target.checked) {
          let subject_id = evt.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('level0')[0].id;
          this.subjects[subject_id].checked = false;
        }
      }
      this.changeSelectedValuesInput()
    }
    this.onChange.emit(this.subjects);
  }

  changeSelectedValuesInput() {
    this.selected_days = [];
    this.subjects.map(item => {
      item.marks.map(el => {
        if (el.checked) {
          this.selected_days.push(el.date)
        }
      })
    })
  }
  onCloseOpenList() {
    if (this.listOpened) {
      document.getElementById('tree').style.display = "none";
      this.listOpened = false;
    } else {
      document.getElementById('tree').style.display = "block";
      this.listOpened = true;
    }
  }

  selectAll(value) {
    this.subjects.map(item => {
      item.checked = value;
      item.marks.map(el => {
        el.checked = value;
        return el;
      })
      return item
    });
    this.selected_days = [];
    if (value) {
      this.changeSelectedValuesInput();
    }
   
  }

  onCheckAll(evt) {
    if(evt.target.innerHTML === "CHECK ALL") {
      evt.target.innerHTML = "UNCHECK ALL";
      this.selectAll(true);
    } else {
      evt.target.innerHTML = "CHECK ALL";
      this.selectAll(false);
    }  
    this.onChange.emit(this.subjects);
  }

  onExpandCollapse(evt) {
    if (evt.target.innerHTML === String.fromCharCode(9660)) {
      evt.target.innerHTML = '&#9654;';
      evt.target.parentNode.parentNode.getElementsByClassName('subject-section')[0].style.display = "none";
    } else {
        evt.target.innerHTML = '&#9660;';
        evt.target.parentNode.parentNode.getElementsByClassName('subject-section')[0].style.display = "block";
    }

  }

  onExpandAll(evt) {
    if (evt.target.innerHTML === "EXPAND ALL") {
      evt.target.innerHTML = "COLLAPSE ALL";
      let list = document.getElementsByClassName('subject-section');
      
      for ( let i = 0; i < list.length; i++ ) {
        (list[i] as HTMLElement).style.display = "block";
      }
    } else {
      evt.target.innerHTML = "EXPAND ALL";
      let list = document.getElementsByClassName('subject-section');
      
      for ( let i = 0; i < list.length; i++ ) {
        (list[i] as HTMLElement).style.display = "none";
      }

    }
  }
}

