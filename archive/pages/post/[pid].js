import { useRouter } from 'next/router';
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Post() {
  const router = useRouter()
  const { pid } = router.query

  console.log(pid)

  return <p>Post: {pid}</p>
}

Post.Layout = DefaultLayout;