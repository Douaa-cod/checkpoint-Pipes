import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-image',
  templateUrl: './pipe-image.component.html',
  styleUrls: ['./pipe-image.component.css']
})

export class PipeImageComponent implements OnInit {
  imgPath = ""
  constructor() { }

  ngOnInit(): void {
  }

}
