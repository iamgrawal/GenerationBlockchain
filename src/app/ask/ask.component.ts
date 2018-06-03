import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  public searchQuery: String;
  public datasource: DataSource[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
