"use client"
import Navbar_Chain from "./components/Navbar_Chain";
import ChainEfficency from "./sections/ChainEfficiency";
import ChainWork from "./sections/ChainWork";
import Header_Chain from "./sections/Header_Chain";
import Header_DEX from "./sections/Header_DEX";

export default function Home() {
  const handleButtonClick = () => {
    // Your custom logic here
    console.log('Button clicked!');
  };

  return (
    <>
    <Navbar_Chain />
    {/* <Header_DEX /> */}
    {<Header_Chain />}
    <ChainEfficency />
    <ChainWork />
    {/* <CustomButton text="Click Me" textColor="white" bgColor="blue-500" onClick={handleButtonClick} /> */}
    {/* <main>Hello</main>
    <Card title="Sample Card" description="This is a sample card using Next.js, Tailwind CSS, and TypeScript." /> */}
    </>
  );
}