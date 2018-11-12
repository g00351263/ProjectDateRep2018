import { Component, OnInit } from '@angular/core';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
   }

  }

