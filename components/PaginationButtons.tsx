import { useRouter } from "next/router";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?q=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <BiLeftArrowAlt className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?q=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <BiRightArrowAlt className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
