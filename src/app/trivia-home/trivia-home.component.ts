import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// declare var particlesJS: any;



@Component({
  selector: 'app-trivia-home',
  templateUrl: './trivia-home.component.html',
  styleUrls: ['./trivia-home.component.css']
})
export class TriviaHomeComponent implements OnInit {
  showSpinner: boolean ;
  trivia: any;

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.getTrivias();
    this.showSpinner = false;

  }

  getTrivias() {
    this.showSpinner = true;
    this.httpClient.get('http://numbersapi.com/random/trivia', {responseType: 'text'
  } )
      .subscribe((response) => {
        console.log('Trivia', response);
        this.trivia = response;
        if (this.trivia !== null) {
          this.showSpinner = false;
        }
      });

  }

}
