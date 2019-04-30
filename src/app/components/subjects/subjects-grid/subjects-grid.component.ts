import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subjects-grid',
  templateUrl: './subjects-grid.component.html',
  styleUrls: ['./subjects-grid.component.scss']
})
export class SubjectsGridComponent implements OnInit {
  subjects: {};

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(debounceTime(300)).subscribe(() => {
      this.dataService.getSubjectsFromStorage('subjects').subscribe((res) => {
        this.subjects = res;
      });
    })
  }

  public openAddNewSubjectPage(): void {
    this.router.navigate(['/subjects/new-subject']);
  }

  public click(subject) {
    this.router.navigate(['/subjects/' + subject.name]);

  }
}
