{
  //! Remove Duplicate From An Array

  const removeDuplicates = (array: number[]): number[] => {
    const newArray = array?.filter((num, index) => array.indexOf(num) === index); // indexof returns the first occurrence of an element of the array
    return newArray;
  };

  // console.log(removeDuplicates([50, 4, 5, 5, 3]))
  // console.log(removeDuplicates([10, 10, 4, 8, 9 ,9, 7 ,8 , 65]))

  //
}
