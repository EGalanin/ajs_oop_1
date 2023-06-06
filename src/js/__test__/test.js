import Character from '../character';
import Bowerman from '../bowerman';
import Deamon from '../deamon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

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
  const result = () => { Character('Bob', 'FakeDeamon', 50, 50); };
  expect(result).toThrow();
});

// test('Invalid type', () => {
//   const result = () => { new Character('Bob', 'FakeDeamon', 50, 50); };
//   expect(result).toThrow(/Invalid type/);
// });

test('Bowerman', () => {
  const result = new Bowerman('Bowerman');
  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Deamon', () => {
  const result = new Deamon('Deamon');
  expect(result).toEqual({
    name: 'Deamon',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  const result = new Magician('Magician');
  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  const result = new Swordsman('Swordsman');
  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  const result = new Undead('Undead');
  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  const result = new Zombie('Zombie');
  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
