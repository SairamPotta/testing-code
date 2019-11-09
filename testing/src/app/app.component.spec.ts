import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PipeTestComponentComponent } from './pipe-test-component/pipe-test-component.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PipeTestComponentComponent,
        PipeTestPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
