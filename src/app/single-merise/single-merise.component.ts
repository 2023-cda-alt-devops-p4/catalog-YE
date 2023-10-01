import { Component, OnInit } from '@angular/core';
import { Merise } from '../models/merise.model';

import { ActivatedRoute } from '@angular/router';
import { MerisesService } from '../services/merises.service';

@Component({
  selector: 'app-single-merise',
  templateUrl: './single-merise.component.html',
  styleUrls: ['./single-merise.component.scss']
})

export class SingleMeriseComponent implements OnInit {

  merise!:Merise;
  buttonText!: string;

  constructor(private merisesService : MerisesService,
    private route: ActivatedRoute) {}

  ngOnInit(){
   const meriseId = +this.route.snapshot.params['id'];
   this.merise = this.merisesService.getMeriseById(meriseId);
  }
}
