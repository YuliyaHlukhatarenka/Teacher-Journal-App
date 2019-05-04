import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/';
import { StoreService } from '../../../common/services/store-service/store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-subject',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  subject = new Subject('', '', '', '');
  formTitle: string = "Add new subject:";
  fieldsTitle: string[] = ["* Name", "* Teacher", "Cabinet", "Description"];
  requiredFields: string[] = ["name", "teacher"];

  constructor(private storeService: StoreService, private router: Router) {
  }

  ngOnInit() {}

  public AddNewSubject() {
    this.storeService.addSubjectToStore(this.subject);
    this.router.navigate(['/subjects']);
  }

}