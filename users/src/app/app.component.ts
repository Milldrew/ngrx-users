import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { selectAll, State } from './user.reducer';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { addUser } from './user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users';
  id = 1;
  users$;
  user: any;
  constructor(private store: Store<State>) {
    this.users$ = this.store.select((state) => state).pipe(map(this.toArray));

    this.users$.subscribe((data) => console.log('users', data));
  }
  toArray(ob: any) {
    const {
      users: { entities },
    } = ob;
    console.log(entities);
    const keys = Object.keys(entities);
    return keys.map((key) => entities[key]);
  }

  add() {
    const newUser = { id: this.id++, name: this.user };
    this.store.dispatch(addUser({ user: newUser }));
  }
}
