import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { selectAll, State } from './user.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users';
  users$;
  constructor(private store: Store<State>) {
    this.users$ = this.store.select((state) => state).pipe(map(this.toArray));

    this.users$.subscribe((data) => console.log('users', data));
  }
  toArray(ob: any) {
    const keys = Object.keys(ob);
    return keys.map((key) => ob[key]);
  }
}
