import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert if duration is more that an hour', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(62)).toEqual('1hr 2min');
  })
});
