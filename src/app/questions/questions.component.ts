import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public searchQuery: String;
  public valueSelected = 'createdOn';
  public datasource: DataSource[];

  public sortValues: SortValues[] = [
    {'id': 1, 'name': 'recent', 'value': 'date'},
    {'id': 2, 'name': 'views', 'value': 'views'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<CollectionDataStructure>('http://localhost:3000/questions/getInitialData', { }).subscribe(
      data => {
        this.datasource = data.message;
      }
    );
  }

  onSelect(sortValue) {
    this.valueSelected = sortValue;
    this.getSortedData(sortValue);
  }

  getSortedData(sortBy) {
    this.http.post<SortedDataStructure>('http://localhost:3000/questions/sort', {
      'field': this.valueSelected
    }
  ).subscribe(data => {
      this.datasource = [];
      this.datasource = data.msg;
    });
  }

  onSubmit(query) {
    this.http.post<CollectionDataStructure>('http://localhost:3000/questions/search', {
      'query': query.value
    }).subscribe(data => {
      this.datasource = [];
      this.datasource = data.message;
    });
  }
}

class SortValues {
  id: number;
  name: String;
  value: String;
}

class DataSource {
  _id: String;
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

class CollectionDataStructure {
  status: String;
  message: DataSource[];
}
