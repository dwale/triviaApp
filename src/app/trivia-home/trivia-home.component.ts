import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// declare var particlesJS: any;
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import * as  particlesJS from 'particlesjs';
import { myFirstParticle } from '../../assets/particlesjs-config';



@Component({
  selector: 'app-trivia-home',
  templateUrl: './trivia-home.component.html',
  styleUrls: ['./trivia-home.component.css'],
  animations: [

    trigger('trivia', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
        ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class TriviaHomeComponent implements OnInit {
  showSpinner: boolean ;
  trivia: any;

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.getTrivias();

    particlesJS.load('particles-js', myFirstParticle , function() {
      console.log('callback - particles.js config loaded'); });
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
