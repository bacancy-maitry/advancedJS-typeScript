var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarType;
(function (CarType) {
    CarType[CarType["Hatchback"] = 2000000] = "Hatchback";
    CarType[CarType["Sedan"] = 1000000] = "Sedan";
    CarType[CarType["Crossover"] = 4000000] = "Crossover";
})(CarType || (CarType = {}));
var CarBrand;
(function (CarBrand) {
    CarBrand["Swift"] = "Swift";
    CarBrand["Ciaz"] = "Ciaz";
    CarBrand["Volvo"] = "Volvo";
})(CarBrand || (CarBrand = {}));
var BikeBrand;
(function (BikeBrand) {
    BikeBrand[BikeBrand["Yamaha"] = 70000] = "Yamaha";
    BikeBrand[BikeBrand["Ducati"] = 90000] = "Ducati";
    BikeBrand[BikeBrand["Honda"] = 50000] = "Honda";
})(BikeBrand || (BikeBrand = {}));
var CycleBrand;
(function (CycleBrand) {
    CycleBrand[CycleBrand["Giant"] = 25000] = "Giant";
    CycleBrand[CycleBrand["Trek"] = 10000] = "Trek";
    CycleBrand[CycleBrand["Atlas"] = 20000] = "Atlas";
})(CycleBrand || (CycleBrand = {}));
var Vehicle = /** @class */ (function () {
    //Constructor
    function Vehicle(wheels, seats) {
        this.wheels = wheels;
        this.seats = seats;
    }
    return Vehicle;
}());
//Car Class
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    //Constructor
    function Car(type, brand, model, engine_type, year_of_purchase, wheels, seats) {
        var _this = _super.call(this, wheels, seats) || this;
        _this.type = type;
        _this.brand = brand;
        _this.model = model;
        _this.engine_type = engine_type;
        _this.year_of_purchase = year_of_purchase;
        return _this;
    }
    Car.prototype.getCarInfo = function () {
        // console.log(this.type);
        // document.getElementById("cartype").innerHTML = "Car Type: " + this.type;
        // document.getElementById("carbrand").innerHTML = "Car Brand: " + this.brand;
        // document.getElementById("carmodel").innerHTML = "Car Model: " + this.model;
        // document.getElementById("carprice").innerHTML = "Car Price: " + CarType[this.type];
        // document.getElementById("carenginetype").innerHTML = "Car Engine Type: " + this.engine_type.toString();
        // document.getElementById("caryop").innerHTML = "Car Your Of Purchase: " + this.year_of_purchase.toString();
        // document.getElementById("carwheels").innerHTML = "Car Wheels: " + this.wheels.toString();
        // document.getElementById("carseats").innerHTML = "Car Seats: " + this.seats.toString();
        var carTable = (document.getElementById("carTable"));
        var row = carTable.insertRow(1);
        var cell1 = row.insertCell(0).innerHTML = this.type;
        var cell2 = row.insertCell(1).innerHTML = this.brand;
        var cell3 = row.insertCell(2).innerHTML = this.model;
        var cell4 = row.insertCell(3).innerHTML = CarType[this.type];
        var cell5 = row.insertCell(4).innerHTML = this.engine_type.toString();
        var cell6 = row.insertCell(5).innerHTML = this.year_of_purchase.toString();
        var cell7 = row.insertCell(6).innerHTML = this.wheels.toString();
        var cell8 = row.insertCell(7).innerHTML = this.seats.toString();
    };
    return Car;
}(Vehicle));
function getCarInfo() {
    console.log("Test");
    var cType = document.getElementById("carType");
    var carType = CarType[cType.value];
    var carBrand = document.getElementById("carBrand").value;
    var carModel = document.getElementById("carModel").value;
    var carEngineType = parseInt(document.getElementById("carEngineType").value);
    var carYearOfPurchase = parseInt(document.getElementById("carYearOfPurchase").value);
    var carWheels = parseInt(document.getElementById("carWheels").value);
    var carSeats = parseInt(document.getElementById("carSeats").value);
    debugger;
    var car_Info = new Car(carType, carBrand, carModel, carEngineType, carYearOfPurchase, carWheels, carSeats);
    car_Info.getCarInfo();
}
//Bike Class
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    //Constructor
    function Bike(brand, model, engine_type, year_of_purchase, wheels, seats) {
        var _this = _super.call(this, wheels, seats) || this;
        _this.brand = brand;
        _this.model = model;
        _this.engine_type = engine_type;
        _this.year_of_purchase = year_of_purchase;
        return _this;
    }
    Bike.prototype.getBikeInfo = function () {
        var bikeTable = (document.getElementById("bikeTable"));
        var row = bikeTable.insertRow(1);
        var cell2 = row.insertCell(0).innerHTML = this.brand;
        var cell3 = row.insertCell(1).innerHTML = this.model;
        var cell4 = row.insertCell(2).innerHTML = BikeBrand[this.brand];
        var cell5 = row.insertCell(3).innerHTML = this.engine_type.toString();
        var cell6 = row.insertCell(4).innerHTML = this.year_of_purchase.toString();
        var cell7 = row.insertCell(5).innerHTML = this.wheels.toString();
        var cell8 = row.insertCell(6).innerHTML = this.seats.toString();
    };
    return Bike;
}(Vehicle));
function getBikeInfo() {
    var bikeBrand = document.getElementById("bikeBrand").value;
    var bikeModel = document.getElementById("bikeModel").value;
    var bikeEngineType = parseInt(document.getElementById("bikeEngineType").value);
    var bikeYearOfPurchase = parseInt(document.getElementById("bikeYearOfPurchase").value);
    var bikeWheels = parseInt(document.getElementById("bikeWheels").value);
    var bikeSeats = parseInt(document.getElementById("bikeSeats").value);
    debugger;
    var bike_Info = new Bike(bikeBrand, bikeModel, bikeEngineType, bikeYearOfPurchase, bikeWheels, bikeSeats);
    bike_Info.getBikeInfo();
}
//Cycle Class
var Cycle = /** @class */ (function (_super) {
    __extends(Cycle, _super);
    //Constructor
    function Cycle(brand, model, year_of_purchase, wheels, seats) {
        var _this = _super.call(this, wheels, seats) || this;
        _this.brand = brand;
        _this.model = model;
        _this.year_of_purchase = year_of_purchase;
        return _this;
    }
    Cycle.prototype.getCycleInfo = function () {
        var cycleTable = (document.getElementById("cycleTable"));
        var row = cycleTable.insertRow(1);
        var cell2 = row.insertCell(0).innerHTML = this.brand;
        var cell3 = row.insertCell(1).innerHTML = this.model;
        var cell4 = row.insertCell(2).innerHTML = CycleBrand[this.brand];
        var cell6 = row.insertCell(3).innerHTML = this.year_of_purchase.toString();
        var cell7 = row.insertCell(4).innerHTML = this.wheels.toString();
        var cell8 = row.insertCell(5).innerHTML = this.seats.toString();
    };
    return Cycle;
}(Vehicle));
function getCycleInfo() {
    var cycleBrand = document.getElementById("cycleBrand").value;
    var cycleModel = document.getElementById("cycleModel").value;
    var cycleYearOfPurchase = parseInt(document.getElementById("cycleYearOfPurchase").value);
    var cycleWheels = parseInt(document.getElementById("cycleWheels").value);
    var cycleSeats = parseInt(document.getElementById("cycleSeats").value);
    debugger;
    var cycle_Info = new Cycle(cycleBrand, cycleModel, cycleYearOfPurchase, cycleWheels, cycleSeats);
    cycle_Info.getCycleInfo();
}
