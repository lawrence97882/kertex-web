import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
//const Typewriter = require('t-writer.js');



@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Get the element onwhich the typing effect is to take place 
    const target = document.querySelector('.type');
    /** 
     * The type writing process
     */
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
      /**
       * And introduction of myself
       */
      .type('Welcome to Kertex global where we:- ')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(0)
      .type('1. Export tea, coffee, hoticulture and other agricultural products . ')
      .rest(500)
      .remove(69)
      .type('2. Import construction materials, machinery and equipments')
      .rest(500)
       .clear()
      .start()

  }

}
