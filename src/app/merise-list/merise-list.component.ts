import { Component, OnInit } from '@angular/core';
import { Merise } from '../models/merise.model';
import { MerisesService } from '../services/merises.service';

@Component({
  selector: 'app-merise-list',
  templateUrl: './merise-list.component.html',
  styleUrls: ['./merise-list.component.scss']
})
export class MeriseListComponent implements OnInit {

  merises! : Merise[];

 constructor(private merisesService : MerisesService) { }
  
 ngOnInit(){
   this.merises = this.merisesService.getAllMerises();
 }

}
