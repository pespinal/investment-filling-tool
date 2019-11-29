import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSignedIn: boolean;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        history.pushState(null, null, location.href);
        window.onpopstate = () => {
          history.go(1);
        };
      }
    });
    this.afAuth.authState.subscribe(state => {
    console.log("TCL: HeaderComponent -> ngOnInit -> state", state)
      this.isSignedIn = !!state;
      console.log("TCL: HeaderComponent -> ngOnInit -> this.isSignedIn", this.isSignedIn)
      if (!this.isSignedIn) {
        this.goHome();
      }
    });
  }

  goHome() {
    this.router.navigate(['/'])
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

}
