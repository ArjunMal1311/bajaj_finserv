import BFHLForm from "@/components/BFHLForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl px-4 font-bold mb-4 text-white text-center">Bajaj Finserv Health Challenge</h1>
      <div className="w-full flex justify-center items-center py-3 pb-8">
        <Link href={"https://github.com/ArjunMal1311"} className="w-fit px-4 rounded-lg py-2 flex justify-center items-center bg-purple-500 text-white">
          Github
        </Link>
      </div>
      <BFHLForm />
    </div>
  )
}
