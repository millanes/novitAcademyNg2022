import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  someone?: string
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params)
    this.someone = this.actRoute.snapshot.params['someone'];
  }

}
