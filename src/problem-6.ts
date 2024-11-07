{
    
  //! Interface to declare type and a function that updates an objects value

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    paramObj: Profile,
    valueObj: Partial<Profile>
  ): Profile => {
    return { ...paramObj, ...valueObj };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  // console.log(updateProfile(myProfile, { email: "noone@nono.com" }));
  
//
}