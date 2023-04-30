// корабль
class Ship {
  size = null;
  direction = null;
  killed = false;

  x = null;
  y = null;

  get placed() {
    // проверка наличия корабля на игровом поле
    return this.x !== null && this.y !== null;
  }

  constructor(size, direction) {
    this.size = size;
    this.direction = direction;
  }
}
