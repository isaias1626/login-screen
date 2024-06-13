import Link from "next/link";

const Home = () => {
  return ( 
    <div className="items-center text-center">
      <h1 className="font-bold text-xl">Home Page</h1>
      <br />
      <nav>
        <Link href="/pages/login">login</Link>
      </nav>
    </div>
  );
}

export default Home;