import Image from "next/image";
import Link from "next/link";
import pic from '../public/images/image1.png'

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
        <li>
          <Link href="/home">Home</Link>{" "}
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users/1">user 1</Link>
        </li>
        <li>
          <Link href="/users/2">user 2</Link>
        </li>
      </ul>
      <Image src={'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'} alt='Picture' width={800} height={400} />
    </div>
  );
}
