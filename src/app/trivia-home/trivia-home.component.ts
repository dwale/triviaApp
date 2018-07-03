import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
declare var particlesJS: any;


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

    particlesJS.load('particles-js', '{"particles": {\n' +
      '    "number": {\n' +
      '      "value": 80,\n' +
      '      "density": {\n' +
      '        "enable": true,\n' +
      '        "value_area": 800\n' +
      '      }\n' +
      '    },\n' +
      '    "color": {\n' +
      '      "value": "#ffffff"\n' +
      '    },\n' +
      '    "shape": {\n' +
      '      "type": "circle",\n' +
      '      "stroke": {\n' +
      '        "width": 0,\n' +
      '        "color": "#000000"\n' +
      '      },\n' +
      '      "polygon": {\n' +
      '        "nb_sides": 5\n' +
      '      },\n' +
      '      "image": {\n' +
      '        "src": "img/github.svg",\n' +
      '        "width": 100,\n' +
      '        "height": 100\n' +
      '      }\n' +
      '    },\n' +
      '    "opacity": {\n' +
      '      "value": 0.5,\n' +
      '      "random": false,\n' +
      '      "anim": {\n' +
      '        "enable": false,\n' +
      '        "speed": 1,\n' +
      '        "opacity_min": 0.1,\n' +
      '        "sync": false\n' +
      '      }\n' +
      '    },\n' +
      '    "size": {\n' +
      '      "value": 10,\n' +
      '      "random": true,\n' +
      '      "anim": {\n' +
      '        "enable": false,\n' +
      '        "speed": 80,\n' +
      '        "size_min": 0.1,\n' +
      '        "sync": false\n' +
      '      }\n' +
      '    },\n' +
      '    "line_linked": {\n' +
      '      "enable": true,\n' +
      '      "distance": 300,\n' +
      '      "color": "#ffffff",\n' +
      '      "opacity": 0.4,\n' +
      '      "width": 2\n' +
      '    },\n' +
      '    "move": {\n' +
      '      "enable": true,\n' +
      '      "speed": 12,\n' +
      '      "direction": "none",\n' +
      '      "random": false,\n' +
      '      "straight": false,\n' +
      '      "out_mode": "out",\n' +
      '      "bounce": false,\n' +
      '      "attract": {\n' +
      '        "enable": false,\n' +
      '        "rotateX": 600,\n' +
      '        "rotateY": 1200\n' +
      '      }\n' +
      '    }\n' +
      '  },\n' +
      '  "interactivity": {\n' +
      '    "detect_on": "canvas",\n' +
      '    "events": {\n' +
      '      "onhover": {\n' +
      '        "enable": false,\n' +
      '        "mode": "repulse"\n' +
      '      },\n' +
      '      "onclick": {\n' +
      '        "enable": true,\n' +
      '        "mode": "push"\n' +
      '      },\n' +
      '      "resize": true\n' +
      '    },\n' +
      '    "modes": {\n' +
      '      "grab": {\n' +
      '        "distance": 800,\n' +
      '        "line_linked": {\n' +
      '          "opacity": 1\n' +
      '        }\n' +
      '      },\n' +
      '      "bubble": {\n' +
      '        "distance": 800,\n' +
      '        "size": 80,\n' +
      '        "duration": 2,\n' +
      '        "opacity": 0.8,\n' +
      '        "speed": 3\n' +
      '      },\n' +
      '      "repulse": {\n' +
      '        "distance": 400,\n' +
      '        "duration": 0.4\n' +
      '      },\n' +
      '      "push": {\n' +
      '        "particles_nb": 4\n' +
      '      },\n' +
      '      "remove": {\n' +
      '        "particles_nb": 2\n' +
      '      }\n' +
      '    }\n' +
      '  },\n' +
      '  "retina_detect": true\n' +
      '}\n', function() {
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
