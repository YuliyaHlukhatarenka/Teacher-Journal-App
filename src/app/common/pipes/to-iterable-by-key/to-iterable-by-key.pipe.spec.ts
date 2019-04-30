import { ToIterableByKeyPipe } from './to-iterable-by-key.pipe';

describe('ToIterableByKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToIterableByKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
