// Перечисление для типа документа
enum DocumentTypes {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Удостоверение личности"
}

// Интерфейс Владелец
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: DocumentTypes; 
    documentSeries: string;
    documentNumber: string;
    displayInfo(): void;
}

// Интерфейс Транспортное средство
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayInfo(): void;
}

// Класс, реализующий интерфейс Владелец
class VehicleOwner implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _documentType: DocumentTypes; 
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        documentType: DocumentTypes,
        documentSeries: string,
        documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get birthDate() { return this._birthDate; }
    get documentType() { return this._documentType; }
    get documentSeries() { return this._documentSeries; }
    get documentNumber() { return this._documentNumber; }

    displayInfo(): void {
        console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._documentType}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}

// // Класс, реализующий интерфейс Транспортное средство
// class Car implements Vehicle {
//     private _brand: string;
//     private _model: string;
//     private _year: number;
//     private _vin: string;
//     private _registrationNumber: string;
//     private _owner: Owner;

//     constructor(
//         brand: string,
//         model: string,
//         year: number,
//         vin: string,
//         registrationNumber: string,
//         owner: Owner
//     ) {
//         this._brand = brand;
//         this._model = model;
//         this._year = year;
//         this._vin = vin;
//         this._registrationNumber = registrationNumber;
//         this._owner = owner;
//     }

//     // Геттеры
//     get brand() { return this._brand; }
//     get model() { return this._model; }
//     get year() { return this._year; }
//     get vin() { return this._vin; }
//     get registrationNumber() { return this._registrationNumber; }
//     get owner() { return this._owner; }

//     // Метод для вывода информации о транспортном средстве
//     displayInfo(): void {
//         console.log(`Марка: ${this._brand}`);
//         console.log(`Модель: ${this._model}`);
//         console.log(`Год выпуска: ${this._year}`);
//         console.log(`VIN-номер: ${this._vin}`);
//         console.log(`Регистрационный номер: ${this._registrationNumber}`);
//     }
// }

// // Пример использования
// const owner = new VehicleOwner(
//     "Иванов",
//     "Иван",
//     "Иванович",
//     new Date(1990, 0, 1),
//     DocumentTypes.Passport,
//     "1234",
//     "567890"
//  );

// const car = new Car(
//     "Toyota",
//     "Camry",
//     2020,
//     "1HGBH41JXMN109186",
//     "A123BC",
//     owner
// );

// // Вывод информации о владельце и транспортном средстве
// owner.displayInfo();
// car.displayInfo();







// Перечисление для типа кузова
enum BodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Convertible = "Кабриолет"
}

// Перечисление для класса автомобиля
enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Luxury = "Люкс"
}

// Интерфейс Автомобиль
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
    displayInfo(): void; // Переопределение метода
}

// Класс, реализующий интерфейс Автомобиль
class Automobile implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }

    // Метод для вывода информации о транспортном средстве
    displayInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}

// Интерфейс Мотоцикл
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
    displayInfo(): void; // Переопределение метода
}

// Класс, реализующий интерфейс Мотоцикл
class Motorcycle implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isSport: boolean
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }

    // Геттеры
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get frameType() { return this._frameType; }
    get isSport() { return this._isSport; }

    // Метод для вывода информации о транспортном средстве
    displayInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isSport ? "Да " : "Нет"}`);
    }
}

// const ownerCar = new VehicleOwner(
//     "Петров",
//     "Петр",
//     "Петрович",
//     new Date(1985, 5, 15),
//     DocumentTypes.DriverLicense,
//     "5678",
//     "123456"
// );

// const automobile = new Automobile(
//     "Honda",
//     "Accord",
//     2021,
//     "2HGFC2F59MH500000",
//     "B456CD",
//     ownerCar,
//     BodyType.Sedan,
//     CarClass.Business
// );

// const ownerBike = new VehicleOwner(
//     "Сидоров",
//     "Сидор",
//     "Сидорович",
//     new Date(1992, 3, 20),
//     DocumentTypes.IDCard,
//     "9101",
//     "112233"
// );

// const motorcycle = new Motorcycle(
//     "Yamaha",
//     "YZF-R3",
//     2020,
//     "JYARJ23E0JA000000",
//     "C789EF",
//     ownerBike,
//     "Спортивная",
//     true
// );

// // Вывод информации о автомобиле и мотоцикле
// automobile.displayInfo();
// motorcycle.displayInfo();



interface VechicleStorage<T extends Vehicle>{
    creationDate: Date;
    vechicles: T[];
    getAllVechicles(): T[];
}

class StorageOfVehicles<T extends Vehicle> implements VechicleStorage<T>{
    creationDate: Date;
    vechicles: T[];

    constructor(){
        this.creationDate=new Date();
        this.vechicles=[];
    }

    addVehicle(vehicle: T): void{
        this.vechicles.push(vehicle);
    }

    getAllVechicles(): T[] {
        return this.vechicles;
    }
}

const vStorage= new StorageOfVehicles<Automobile>();
const ownerCar = new VehicleOwner(
    "Петров",
    "Петр",
    "Петрович",
    new Date(1985, 5, 15),
    DocumentTypes.DriverLicense,
    "5678",
    "123456"
);

const automobile = new Automobile(
    "Honda",
    "Accord",
    2021,
    "2HGFC2F59MH500000",
    "B456CD",
    ownerCar,
    BodyType.Sedan,
    CarClass.Business
);

// Добавление автомобиля в хранилище
vStorage.addVehicle(automobile);

// Получение всех автомобилей из хранилища
const allVehicles = vStorage.getAllVechicles();
allVehicles.forEach(vehicle => vehicle.displayInfo());
