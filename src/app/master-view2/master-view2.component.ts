import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view2',
  templateUrl: './master-view2.component.html',
  styleUrls: ['./master-view2.component.scss']
})
export class MasterView2Component implements OnInit {
  public northwindCategories: any[];
  public northwindRegions: any[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindCategories = this.northwindService.getData('Categories');
    this.northwindRegions = this.northwindService.getData('Regions');
  }
}
