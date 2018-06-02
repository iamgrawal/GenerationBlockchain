import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public valueSelected = 'date';
  public datasource: DataSource[];

  public sortValues: SortValues[] = [
    {'id': 1, 'name': 'recent', 'value': 'date'},
    {'id': 2, 'name': 'views', 'value': 'views'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSelect(sortValue) {
    this.valueSelected = sortValue;
  }

  getSortedData( sortBy) {
    this.http.post<SortedDataStructure>('http://localhost:3000/questions/sort', {
      'field': this.valueSelected
    }
  ).subscribe(data => {
      this.datasource = data.msg;
      console.log(data.msg);
      console.log('datasource');
      console.log(this.datasource);
    });
  }
}

class SortValues {
  id: number;
  name: String;
  value: String;
}

class DataSource {
  question: String;
  createdOn: Date;
  username: String;
  views: Number;
  answers: Object[];
}

class SortedDataStructure {
  success: boolean;
  msg: DataSource[];
}
