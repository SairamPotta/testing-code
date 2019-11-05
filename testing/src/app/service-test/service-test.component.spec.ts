import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTestComponent } from './service-test.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedService } from '../shared.service';
import { of, throwError } from 'rxjs';

describe('ServiceTestComponent', () => {
  let component: ServiceTestComponent;
  let fixture: ComponentFixture<ServiceTestComponent>;
  let service: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTestComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(SharedService);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get todos information by subscribing', async () => {
    const dummyPosts = [
      {
        userId: '1',
        id: 1,
        body: 'hello world1'
      },
      {
        userId: '2',
        id: 2,
        body: 'hello world2'
      }
    ];
    spyOn(service, 'getTodos').and.returnValue(of(dummyPosts));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.todosInfo).toBe(dummyPosts);
  });

  it('should get error while todos information by subscribing', async () => {  
    spyOn(service, 'getTodos').and.returnValue(throwError('error finding'));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.error).toBe('error finding');
  });

});
