export const LinkParser = (text: string) => {
  return text.split(" ").join("-").toLowerCase();
};
export const LinkJoin = (text: string) => {
  return text.split(" ").join("+").toUpperCase();
};
export const RemoveJoin = (text: string) => {
  return text.split("-").join(" ").toLocaleUpperCase();
};
