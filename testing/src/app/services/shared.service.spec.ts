import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService, 
    httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SharedService]
    });
    service = TestBed.get(SharedService);
    httpMock = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should get getTodos', () => {
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
    service.getTodos().subscribe((res: any[]) => {
      expect(res.length).toBe(2);
      expect(res).toBe(dummyPosts);
    });
    const request = httpMock.expectOne(service.endPoint+ '1');

    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });

});
