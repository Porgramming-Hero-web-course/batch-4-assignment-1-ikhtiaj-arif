{

  //! Create Car class and a method to return the age of the car

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const currentDate = new Date().getFullYear();
      return currentDate - this.year;
    }
  }

  const hondaCivic = new Car("Honda", "Civic", 2004);

    // console.log(hondaCivic.getCarAge());

    //
}