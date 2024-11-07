{
    
  //! Find value of an object using Generic function

  const getProperty = <T >(paramObj: T, value: keyof T): T[keyof T] => {
    return paramObj[value];
  };
  const person = { name: "Alice", age: 30, email:"lala@lili" };
  // console.log(getProperty(person, "email"));


    //
}