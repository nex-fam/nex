import { useState } from "react";
import type { NextPage } from "next";
import { Button } from "@nex-fam/lib";

interface PageProps {}
const Page: NextPage<PageProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <Button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Hello, Button
        </Button>
      </div>
      <div>Count: {count}</div>
    </div>
  );
};

export default Page;
