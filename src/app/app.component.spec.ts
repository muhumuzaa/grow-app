import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'grow'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('grow');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('grow app is running!');
  });
});

// import { TestBed, ComponentFixture  } from "@angular/core/testing";
// import { AppComponent } from "./app.component";

// describe('App Component', () =>{
//   let component: AppComponent;
//   let fixture : ComponentFixture<AppComponent>;

//   beforeEach( async() =>{
//     await TestBed.configureTestingModule({
//       declarations: [AppComponent]
//     }).compileComponents();

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it("should have a title", () =>{
//     const compiled = fixture.nativeElement;
//     const title = compiled.querySelector('h1').textContent;
//     expect(title).toBe('Grow App');
//   })
// });