import { Component, Inject } from '@angular/core';
import {Chardin} from 'chardin.ts';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';

let chardin = new Chardin(document.querySelector('body'));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'x';


  constructor(@Inject(DOCUMENT) private document: Document) {
    // Add the current (light) theme as a default
    this.document.body.classList.add('test');
  }

 
  onInit(){

    
    
    //this.document.body.classList.add('test');
    //return false
    $('.test').chardinJs({
      'attribute': 'data-intro'
    });

    // trigger via a buttot
      $('body').on('click', 'button[data-toggle="chardinjs"]', function (e) {
          e.preventDefault();
          if ($('.jumbotron img').is(':visible')) {
              return ($('.test').data('chardinJs')).toggle();
          } else {
              return $('.jumbotron img').animate({
                  height: 250
              }, 600, function () {
                  return ($('.test').data('chardinJs')).toggle();
              });
          }
      });

      $('a[data-toggle="chardinjs"]').on('click', function (e) {
        e.preventDefault();
        if ($('.jumbotron img').is(':visible')) { 
          return ($('.test').data('chardinJs')).toggle();
        } else {
          return $('.jumbotron img').animate({
            height: 250
          }, 600, function() {
            return ($('.test').data('chardinJs')).toggle();
          });
        }
      });

      return $('.test').on('chardinJs:stop', function () {
        $('a.btn.primary').off('click').text('See more on Github').attr('href', 'https://github.com/heelhook/chardin.js');
        return $('a#opentour').css({
          display: 'block'
        });
      });

  }

  onclick() {
  chardin.start();  
  }
}
