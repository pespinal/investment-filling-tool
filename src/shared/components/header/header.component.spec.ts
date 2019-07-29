import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header.component';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should to call history.pushState whend event is isntanceof NavigationEnd', () => {
    const hello = Observable.create(function (observer) {
      observer.next(new NavigationEnd(1, 'a', 'b'));
      observer.complete();
    });

    const routerService = TestBed.get(Router);
    routerService.events = hello;

    const spyPushState = spyOn(history, 'pushState');
    component.ngOnInit()
    expect(spyPushState).toHaveBeenCalled();
  });

  test('should not call history.pushState whend event is not isntanceof NavigationEnd', () => {
    const hello = Observable.create(function (observer) {
      observer.next({});
      observer.complete();
    });

    const routerService = TestBed.get(Router);
    routerService.events = hello;

    const spyPushState = spyOn(history, 'pushState');
    component.ngOnInit()
    expect(spyPushState).toHaveBeenCalledTimes(0);
  });

});
