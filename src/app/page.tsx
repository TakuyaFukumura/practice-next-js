import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>これはウェブサイトのメインページです。</p>
      <p>
        <Link href="/about">Go to About Page</Link> {/* Aboutページへのリンク */}
      </p>
      <p>
        <Link href="/contact">Go to Contact Page</Link>
      </p>
    </div>
  );
}
