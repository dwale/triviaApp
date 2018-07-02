import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-trivia-home',
  templateUrl: './trivia-home.component.html',
  styleUrls: ['./trivia-home.component.css']
})
export class TriviaHomeComponent implements OnInit {
  showSpinner: boolean ;

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.getTrivias();
    this.showSpinner = false;

  }

  getTrivias() {
    this.showSpinner = true;
    this.httpClient.get('http://numbersapi.com/random/trivia' )
      .subscribe((data) => {
        JSON.stringify(data);
        console.log('hgdsgjhg', data);
        // for (const key in response) {
        //   this.exchangeRate = response[key];
        // }
      });
  }

}
