import { Box } from "@mui/material";

type UseBoxProps = {
  text: React.ReactNode;
  color?: string;
};

export const UseText = ({ text }: UseBoxProps) => {
  return (
    <Box component="h3" fontSize="1rem" fontWeight={"500"} m={0}>
      {text}
    </Box>
  );
};
export const UseText2 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h1" fontSize="1.11rem" fontWeight={"500"} m={0}>
      {text}
    </Box>
  );
};
export const UseText3 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h1" fontSize="1.9rem" fontWeight={"700"} m={0}>
      {text}
    </Box>
  );
};
export const UseText4 = ({ text }: UseBoxProps) => {
  return (
    <Box component="h1" fontSize="2.5rem" fontWeight={"800"} m={0}>
      {text}
    </Box>
  );
};
