import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
      <Link href="week-2">Student Info</Link>
      </p>
      <p>      
      <Link href="week-3">Shopping List</Link>
      </p>
      <p>      
      <Link href="week-4">Interactivity</Link>
      </p>
      <p>
      <Link href="week-5">Handling Lists</Link>
      </p>
      <p>
      <Link href="week-6">Managing State</Link>
      </p>
      <p>
      <Link href="week-7">Fetching Data</Link>
      </p>
      <p>
      <Link href="week-8">FireBase Authentication</Link>
      </p>
    </main>


    
  );
}
