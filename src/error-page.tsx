import { useRouteError } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} height={"100vh"}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Flex>
  );
}
