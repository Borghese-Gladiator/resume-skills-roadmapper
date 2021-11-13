import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Account() {
  return (
    <div>
      <p>This is the Account page.</p>
      <p>
        <Link href="/profile">
          <a className="my-link">Go: Profile</a>
        </Link>
      </p>
    </div>
  );
}

Account.Layout = DefaultLayout;