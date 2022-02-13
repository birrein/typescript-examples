// class Vehicle {
//   private brandName: string;
//   private model: string;
//   private color: string;

//   constructor(b: string, model: string, color: string) {
//     this.brandName = b;
//     this.model = model;
//     this.color = color;
//   }

//   drive() {
//     console.log(`Driving a ${this.brandName} ${this.model} in ${this.color}`);
//   }
// }

interface Billable {
  currentBill(): string;
}

interface Flyable {
  altitude(): number;
}

class Vehicle {
  constructor(
    protected readonly brandName: string,
    protected readonly model: string,
    protected color: string,
    protected price: number
  ) {}

  get getPrice() {
    return `El precio actual es ${this.price}`;
  }

  set setPrice(newPrice: number) {
    this.price = newPrice;
  }

  static PriceToCurrency(value: number, typeOfCurrency: string) {
    let result = '';
    switch (typeOfCurrency) {
      case 'USD':
        result = 'US ' + value;
        break;
      case 'PESO':
        result = '$ ' + value;
        break;
      default:
        break;
    }

    return result;
  }

  drive() {
    console.log(`Driving a ${this.brandName} ${this.model} in ${this.color}`);
  }
}

class Airplane extends Vehicle implements Billable, Flyable {
  total = 0;

  set setTotal(newTotal: number) {
    this.total = newTotal;
  }

  drive() {
    console.log(
      `Driving a car ${this.brandName} ${this.model} in ${this.color}`
    );
  }

  currentBill(): string {
    return `El precio actual es ${this.price}`;
  }

  altitude(): number {
    return 100;
  }
}
const niceCar = new Airplane('Ferrari', 'F40', 'red', 200);
console.log(niceCar.getPrice);
niceCar.setPrice = 300;
