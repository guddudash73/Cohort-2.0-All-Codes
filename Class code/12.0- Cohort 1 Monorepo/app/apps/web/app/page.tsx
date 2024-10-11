import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Signup } from "@repo/ui/signup";

export default function Home() {
  return (
    <>
      <Signup />
    </>
  );
}
