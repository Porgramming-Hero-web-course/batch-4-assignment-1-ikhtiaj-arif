{
  //! Count Word In A Sentence

  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceArray = sentence
      .toLocaleLowerCase() //to remove case sensitivity
      .replace(/[^a-zA-Z0-9 ]/g, "") //to remove special characters
      .split(" ");

    let total = 0;
    sentenceArray.forEach((item) => item === word && total++);

    return total;
  };

  // console.log( countWordOccurrences(
  //     "TypeScript is great. I love TypeScript! TypeScript!",
  //     "typescript"
  //   ));


    //
}