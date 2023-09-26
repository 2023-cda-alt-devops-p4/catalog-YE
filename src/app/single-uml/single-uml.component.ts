import { Component, OnInit } from '@angular/core';
import { DiagrammeUml } from '../models/diagramme-uml.model';
import { DiagrammeUmlsService } from '../services/diagrammes-uml.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-single-uml',
  templateUrl: './single-uml.component.html',
  styleUrls: ['./single-uml.component.scss']
})


export class SingleUmlComponent implements OnInit {
  diagrammeUml!: DiagrammeUml;
  buttonText!: string;

  constructor(private diagrammeUmlsService : DiagrammeUmlsService,
              private route: ActivatedRoute) {}

  ngOnInit():void {
   const diagrammeUmlId = +this.route.snapshot.params['id'];
   this.diagrammeUml = this.diagrammeUmlsService.getDiagrammeById(diagrammeUmlId);

  }
}
