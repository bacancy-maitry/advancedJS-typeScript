enum CarType {
    Hatchback = 2000000,
    Sedan = 1000000,
    Crossover = 4000000,
}

enum CarBrand {
    Swift = "Swift",
    Ciaz = "Ciaz",
    Volvo = "Volvo",
}

enum BikeBrand {
    Yamaha = 70000,
    Ducati = 90000,
    Honda = 50000,
}

enum CycleBrand {
    Giant = 25000,
    Trek = 10000,
    Atlas = 20000
}

class Vehicle {
    //Properties
    wheels: number;
    seats: number;

    //Constructor
    constructor(wheels: number, seats: number) {
        this.wheels = wheels;
        this.seats = seats;
    }
    //Method
}

//Car Class
class Car extends Vehicle {
    //Properties
    type: CarType;
    brand: CarBrand;
    model: string;
    engine_type: number;
    year_of_purchase: number;
    price: number;

    //Constructor
    constructor(type: CarType, brand: CarBrand, model: string, engine_type: number, year_of_purchase: number, wheels: number, seats: number) {
        super(wheels, seats);

        this.type = type;
        this.brand = brand;
        this.model = model;
        this.engine_type = engine_type;
        this.year_of_purchase = year_of_purchase;
    }

    getCarInfo() {
        // console.log(this.type);
        // document.getElementById("cartype").innerHTML = "Car Type: " + this.type;
        // document.getElementById("carbrand").innerHTML = "Car Brand: " + this.brand;
        // document.getElementById("carmodel").innerHTML = "Car Model: " + this.model;
        // document.getElementById("carprice").innerHTML = "Car Price: " + CarType[this.type];
        // document.getElementById("carenginetype").innerHTML = "Car Engine Type: " + this.engine_type.toString();
        // document.getElementById("caryop").innerHTML = "Car Your Of Purchase: " + this.year_of_purchase.toString();
        // document.getElementById("carwheels").innerHTML = "Car Wheels: " + this.wheels.toString();
        // document.getElementById("carseats").innerHTML = "Car Seats: " + this.seats.toString();

        let carTable: HTMLTableElement = <HTMLTableElement>(document.getElementById("carTable"));

        let row = carTable.insertRow(1);
        let cell1 = row.insertCell(0).innerHTML = this.type;
        let cell2 = row.insertCell(1).innerHTML = this.brand;
        let cell3 = row.insertCell(2).innerHTML = this.model;
        let cell4 = row.insertCell(3).innerHTML = CarType[this.type];
        let cell5 = row.insertCell(4).innerHTML = this.engine_type.toString();
        let cell6 = row.insertCell(5).innerHTML = this.year_of_purchase.toString();
        let cell7 = row.insertCell(6).innerHTML = this.wheels.toString();
        let cell8 = row.insertCell(7).innerHTML = this.seats.toString();

    }
}

function getCarInfo() {
    console.log("Test");

    let cType = (<HTMLInputElement>document.getElementById("carType"));
    let carType = CarType[cType.value];

    let carBrand = (<HTMLInputElement>document.getElementById("carBrand")).value;

    let carModel = (<HTMLInputElement>document.getElementById("carModel")).value;
    let carEngineType = parseInt((<HTMLInputElement>document.getElementById("carEngineType")).value);
    let carYearOfPurchase = parseInt((<HTMLInputElement>document.getElementById("carYearOfPurchase")).value);
    let carWheels = parseInt((<HTMLInputElement>document.getElementById("carWheels")).value);
    let carSeats = parseInt((<HTMLInputElement>document.getElementById("carSeats")).value);

    debugger;

    let car_Info = new Car(carType, carBrand, carModel, carEngineType, carYearOfPurchase, carWheels, carSeats);
    car_Info.getCarInfo();
}



//Bike Class
class Bike extends Vehicle {
    //Properties
    brand: BikeBrand;
    model: string;
    engine_type: number;
    year_of_purchase: number;
    price: number;

    //Constructor
    constructor(brand: BikeBrand, model: string, engine_type: number, year_of_purchase: number, wheels: number, seats: number) {
        super(wheels, seats);

        this.brand = brand;
        this.model = model;
        this.engine_type = engine_type;
        this.year_of_purchase = year_of_purchase;
    }

    getBikeInfo() {
        let bikeTable: HTMLTableElement = <HTMLTableElement>(document.getElementById("bikeTable"));
        let row = bikeTable.insertRow(1);
        let cell2 = row.insertCell(0).innerHTML = this.brand;
        let cell3 = row.insertCell(1).innerHTML = this.model;
        let cell4 = row.insertCell(2).innerHTML = BikeBrand[this.brand];
        let cell5 = row.insertCell(3).innerHTML = this.engine_type.toString();
        let cell6 = row.insertCell(4).innerHTML = this.year_of_purchase.toString();
        let cell7 = row.insertCell(5).innerHTML = this.wheels.toString();
        let cell8 = row.insertCell(6).innerHTML = this.seats.toString();
    }

}

function getBikeInfo() {
    let bikeBrand = (<HTMLInputElement>document.getElementById("bikeBrand")).value;
    let bikeModel = (<HTMLInputElement>document.getElementById("bikeModel")).value;
    let bikeEngineType = parseInt((<HTMLInputElement>document.getElementById("bikeEngineType")).value);
    let bikeYearOfPurchase = parseInt((<HTMLInputElement>document.getElementById("bikeYearOfPurchase")).value);
    let bikeWheels = parseInt((<HTMLInputElement>document.getElementById("bikeWheels")).value);
    let bikeSeats = parseInt((<HTMLInputElement>document.getElementById("bikeSeats")).value);

    debugger;

    let bike_Info = new Bike(bikeBrand, bikeModel, bikeEngineType, bikeYearOfPurchase, bikeWheels, bikeSeats);
    bike_Info.getBikeInfo();
}



//Cycle Class
class Cycle extends Vehicle {
    //Properties
    brand: CycleBrand;
    model: string;
    year_of_purchase: number;
    price: number;

    //Constructor
    constructor(brand: CycleBrand, model: string, year_of_purchase: number, wheels: number, seats: number) {
        super(wheels, seats);

        this.brand = brand;
        this.model = model;
        this.year_of_purchase = year_of_purchase;
    }

    getCycleInfo() {
        let cycleTable: HTMLTableElement = <HTMLTableElement>(document.getElementById("cycleTable"));
        let row = cycleTable.insertRow(1);
        let cell2 = row.insertCell(0).innerHTML = this.brand;
        let cell3 = row.insertCell(1).innerHTML = this.model;
        let cell4 = row.insertCell(2).innerHTML = CycleBrand[this.brand];
        let cell6 = row.insertCell(3).innerHTML = this.year_of_purchase.toString();
        let cell7 = row.insertCell(4).innerHTML = this.wheels.toString();
        let cell8 = row.insertCell(5).innerHTML = this.seats.toString();
    }

}

function getCycleInfo() {
    let cycleBrand = (<HTMLInputElement>document.getElementById("cycleBrand")).value;
    let cycleModel = (<HTMLInputElement>document.getElementById("cycleModel")).value;
    let cycleYearOfPurchase = parseInt((<HTMLInputElement>document.getElementById("cycleYearOfPurchase")).value);
    let cycleWheels = parseInt((<HTMLInputElement>document.getElementById("cycleWheels")).value);
    let cycleSeats = parseInt((<HTMLInputElement>document.getElementById("cycleSeats")).value);

    debugger;

    let cycle_Info = new Cycle(cycleBrand, cycleModel, cycleYearOfPurchase, cycleWheels, cycleSeats);
    cycle_Info.getCycleInfo();
}