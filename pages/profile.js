import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Profile() {
  return (
    <div>
      <p>This is the Profile page.</p>
      <p>
        <Link href="/account">
          <a className="my-link">Go: Account</a>
        </Link>
      </p>
    </div>
  );
}

Profile.Layout = DefaultLayout;