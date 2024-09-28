import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Hello app!</div>
      <Button as={Link} href="/members" color="primary" variant="bordered">
        Click me!
      </Button>
    </div>
  );
}
