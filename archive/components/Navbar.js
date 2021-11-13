import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="nav">
      <Link href="/">
        <a className="my-link">Home</a>
      </Link>
      <Link href="/profile">
        <a className="my-link">Profile</a>
      </Link>
      <Link href="/account">
        <a className="my-link">Account</a>
      </Link>
    </nav>
  )
}