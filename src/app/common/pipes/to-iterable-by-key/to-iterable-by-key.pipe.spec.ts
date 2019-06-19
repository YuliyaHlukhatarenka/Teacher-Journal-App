import { ToIterableByKeyPipe } from './to-iterable-by-key.pipe';

describe('ToIterableByKeyPipe', () => {
  it('create an instance', () => {
    const pipe: ToIterableByKeyPipe = new ToIterableByKeyPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform { name1: value1, name2: value2 } to [name1, name2]', () => {
    const pipe: ToIterableByKeyPipe = new ToIterableByKeyPipe();
    expect(pipe.transform({ name1: 'value1', name2: 'value2' } ).toString()).toBe(['name1', 'name2'].toString());
  });
});
