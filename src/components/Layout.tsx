import { FC, PropsWithChildren } from "react";
import { VStack } from "@chakra-ui/react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <VStack maxWidth="960px">{children}</VStack>;
};
