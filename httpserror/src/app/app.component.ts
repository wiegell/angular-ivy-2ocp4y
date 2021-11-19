import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { HttpsError } from '@firebase/functions-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  error = 'httpserror';

  constructor(private aff: AngularFireFunctions) {}

  ngOnInit() {
    this.aff
      .httpsCallable('test')('')
      .subscribe({
        complete: () => {},
        error: (err: HttpsError) => {
          this.error = JSON.stringify(err, null, 2);
        },
        next: (inp) => {
          this.error = '';
        },
      });
  }
}
