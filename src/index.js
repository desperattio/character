const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    if (!types.includes(type)) {
      throw new Error('Введен несуществующий класс');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
