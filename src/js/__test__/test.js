import Character from '../character';

test('Short name', () => {
  const result = () => { Character('N', 'Deamon', 50, 50); };
  expect(result).toThrow();
});

// test('Short name2', () => {
//   const result = () => { new Character('N', 'Deamon', 50, 50); };
//   expect(result).toThrow('Invalid length name');
// });

test('Long name', () => {
  const result = () => { Character('LOOOOONGNAME', 'Deamon', 50, 50); };
  expect(result).toThrow();
});

test('Invalid type', () => {
  expect(() => { Character('Bob', 'FakeDeamon', 50, 50); }).toThrow();
});

// test('Invalid type', () => {
//   const result = () => { new Character('Bob', 'FakeDeamon', 50, 50); };
//   expect(result).toThrow(/Invalid type/);
// });
