import { Component, OnInit } from '@angular/core';
import { DiagrammeUml } from '../models/diagramme-uml.model';
import { DiagrammeUmlsService } from '../services/diagrammes-uml.service';

@Component({
  selector: 'app-diagramme-uml-list',
  templateUrl: './diagramme-uml-list.component.html',
  styleUrls: ['./diagramme-uml-list.component.scss']
})

export class DiagrammeUmlListComponent implements OnInit {

   diagrammeUmls! : DiagrammeUml [];
  diagrammeUmlsService: any;

   constructor(private diagrammeUmlService: DiagrammeUmlsService) { }
   
  ngOnInit(): void {
    this.diagrammeUmls = this.diagrammeUmlsService.getAllDiagrammeUmls();
  }

}
