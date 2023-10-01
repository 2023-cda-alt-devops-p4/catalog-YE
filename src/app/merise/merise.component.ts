import { Component, Input, OnInit } from '@angular/core';
import { Merise } from '../models/merise.model';
import { MerisesService } from '../services/merises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merise',
  templateUrl: './merise.component.html',
  styleUrls: ['./merise.component.scss']
})
export class MeriseComponent implements OnInit {

  @Input() 
  merise!: Merise;
  buttonText!: string;
  
constructor ( private merisesService : MerisesService,
              private router : Router) { }

  ngOnInit() {}

  onViewMerise(){
    this.router.navigateByUrl(`merises/${this.merise.id}`);
      }

}
    