import {Injectable} from '@angular/core';
import {Filter, ItemModel} from '../models/item-model';
import {items} from '../models/items';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: ItemModel[] = items;

  constructor() { }

  public getData(f: Filter): Observable<ItemModel[]> {
    return of(this.data).pipe(
      delay(1000),
      map(result =>
        result.filter(e => e.name.toLowerCase().includes(f.name.toLowerCase()) && e.type.toLowerCase().includes(f.type.toLowerCase()))
      )
    );
  }
}
