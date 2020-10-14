import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Filter} from '../models/item-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filter: Filter;

  constructor(private router: Router) {
    this.filter = {
      name: '',
      type: ''
    };
  }

  search(): void {
    this.router.navigate(['/result'], {
      queryParams: {...this.filter}
    });
  }
}
