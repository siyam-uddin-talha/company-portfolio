const UseRandomImage = <T extends string>(name?: T): string => {
  if (name) {
    return `https://source.unsplash.com/random/?${name}`;
  }

  return `https://source.unsplash.com/random/?code`;
};

export default UseRandomImage;
