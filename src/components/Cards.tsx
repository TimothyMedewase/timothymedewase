import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Cards() {
  return (
    <div>
      <Card className=" relative flex w-96 h-96">
        <Image src="/Logo.png" width={384} height={384} alt="logo" />
      </Card>
    </div>
  );
}
