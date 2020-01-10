import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listMarvel: any;

  constructor(private apiService: ApiService) {
    this.getMarvel();
  }

  getMarvel() {
    this.apiService.getMarvel().subscribe(data => {
      this.listMarvel = data['data'].results;
    });
  }

}
