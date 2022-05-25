import React from "react";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mention={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
