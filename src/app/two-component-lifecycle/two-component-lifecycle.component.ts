import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-component-lifecycle',
  templateUrl: './two-component-lifecycle.component.html',
  styleUrls: ['./two-component-lifecycle.component.css']
})
export class TwoComponentLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
