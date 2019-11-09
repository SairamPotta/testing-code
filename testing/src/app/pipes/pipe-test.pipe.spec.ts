import { PipeTestPipe } from './pipe-test.pipe';

describe('PipeTestPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeTestPipe();
    expect(pipe).toBeTruthy();
  });

  it('should not return data', () => {
    const pipe = new PipeTestPipe();
    expect(pipe.transform(null)).toBeNull();
  });

  it('should return filtered data', () => {
    const data = ['ab', 'ac', 'hb'];
    const pipe = new PipeTestPipe();
    expect(pipe.transform(data)).toEqual(['ab', 'ac']);
  });
});
