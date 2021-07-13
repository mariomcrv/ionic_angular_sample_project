import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
emails = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('./assets/MOCK_DATA.json').subscribe(res => {
      console.log(res);
      this.emails = res;
    });
  }
}
