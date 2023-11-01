type RandomUrl<T extends string> = `https://source.unsplash.com/random/?${T}`;

export const UseRandomImage = <T extends string>(name: T): RandomUrl<T> => {
  return `https://source.unsplash.com/random/?${name}`;
};
