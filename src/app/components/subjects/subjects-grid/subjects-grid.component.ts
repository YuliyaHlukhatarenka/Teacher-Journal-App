import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-grid',
  templateUrl: './subjects-grid.component.html',
  styleUrls: ['./subjects-grid.component.scss']
})
export class SubjectsGridComponent implements OnInit {
  subjects: Subject[];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.subjects = this.dataService.getDataFromLocalStorage('subjects');
  }


  public openAddNewSubjectPage(): void {
    this.router.navigate(['/subjects/new-subject']);

  }

  public click(subject) {
    this.router.navigate(['/subjects/'+ subject.name]);

  }
}
