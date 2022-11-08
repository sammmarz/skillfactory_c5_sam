class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // метод, который определяет прибор как включенный в розетку
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }

  // метод, который определяет прибор как выключеный из розетки
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }

}


// Прибор 1
class Lamp extends ElectricalAppliance{
  constructor(brand, bulbType, name, power){
    super(name, power);
    this.brand = brand;
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}


// Прибор 2
class Computer extends ElectricalAppliance {
  constructor(brand, type, functionality, name, power){
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }  
}


// экземпляр лампы
const tableLamp = new Lamp("Xiaomi" , "LED", "Table lamp", 5);


// экземпляр компьютера
const homePC = new Computer( "Intel", "stationary", "for work","Table PC", 120);

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)
