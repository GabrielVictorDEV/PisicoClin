import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>not found 404</h1>
      <Link href="/home">Home</Link>
    </>
  );
}
