/* eslint-disable import/no-anonymous-default-export */
import Link from "next/link";

// eslint-disable-next-line react/display-name
export default function () {
  return (
    <div>
      <h1>Category Not Found</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
