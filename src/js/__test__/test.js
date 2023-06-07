import Character from '../character';

test('Short name', () => {
  expect(() => new Character('N', 'Deamon', 50, 50)).toThrow('Invalid length name');
});

test('Long name', () => {
  expect(() => new Character('LOOOOONGNAME', 'Deamon', 50, 50)).toThrow('Invalid length name');
});

test('Invalid type', () => {
  expect(() => new Character('Bob', 'FakeDeamon', 50, 50)).toThrow('Invalid type');
});

// test('Invalid type', () => {
//   const result = () => { new Character('Bob', 'FakeDeamon', 50, 50); };
//   expect(result).toThrow(/Invalid type/);
// });
