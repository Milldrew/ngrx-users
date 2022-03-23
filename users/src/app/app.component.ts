import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { State } from './user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users';
  users$;
  constructor(private store: Store<State>) {
    this.users$ = this.store.select((state) => state);

    this.users$.subscribe((data) => console.log('users', data));
  }
}
