import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-subject',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  subject = new Subject('', '', '', '');
  formTitle: string = "Add new subject:";
  fieldsTitle: string[] = ["* Name", "* Teacher", "Cabinet", "Description"] ;
  requiredFields: string[] = ["name", "teacher"];

  constructor(private dataService: DataService, private router: Router) {
  }

 ngOnInit() {
 }

 public AddNewSubject() {
   this.dataService.add(this.subject, 'subjects');
   this.router.navigate(['/subjects']);
 }

}
