import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Filter, ItemModel} from '../models/item-model';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayedColumns = ['id', 'name', 'type'];
  filter: Filter;
  results: Observable<ItemModel[]>;

  constructor(private route: ActivatedRoute,
              private service: DataService) {
    this.filter = {
      name: '',
      type: ''
    };
    this.route.queryParams.subscribe(params => {
      this.filter.name = params.name || '';
      this.filter.type = params.type || '';
    });
  }

  ngOnInit(): void {
    this.results = this.service.getData(this.filter);
  }
}
