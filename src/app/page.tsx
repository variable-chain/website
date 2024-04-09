"use client";
import Chain from "./Chain";
import Dex from "./Dex";
import { useLayout } from "./components/context/LayoutContext";
export default function Home() {
  const { layout } = useLayout();

  return <>{!layout ? <Dex /> : <Chain />}</>;
}
