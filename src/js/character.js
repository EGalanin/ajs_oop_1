const types = [
  'Bowerman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Invalid length name');
    }
    if (!types.includes(type)) {
      throw new Error('Invalid type');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
