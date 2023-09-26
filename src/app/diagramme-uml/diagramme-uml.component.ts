import { Component, Input, OnInit } from '@angular/core';
import { DiagrammeUml } from '../models/diagramme-uml.model';
import { DiagrammeUmlsService } from '../services/diagrammes-uml.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagramme-uml',
  templateUrl: './diagramme-uml.component.html',
  styleUrls: ['./diagramme-uml.component.scss']
})
export class DiagrammeUmlComponent implements OnInit {

  @Input() 
  diagrammeUml!: DiagrammeUml;
  
constructor ( private diagrammeUmlsService : DiagrammeUmlsService,
              private router : Router) { }

  ngOnInit(): void { }

  onViewDiagrammeUml(){
    this.router.navigateByUrl(`diagrammeumls/${this.diagrammeUml.id}`);
      }

}
