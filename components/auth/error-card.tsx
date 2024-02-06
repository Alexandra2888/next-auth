import { Card, CardHeader, CardFooter } from "../ui/card";
import { BackButton } from "./back-buton";
import { Header } from "./header";

export const ErrorCard = () => {
  return <Card className="w-[400px] shadw-md">
    <CardHeader>
        <Header label="Ooops! something went wrong!"/>
    </CardHeader>
    <CardFooter>
        <BackButton href="/auth/login" label="Back to login"/>
    </CardFooter>
  </Card>;
};
