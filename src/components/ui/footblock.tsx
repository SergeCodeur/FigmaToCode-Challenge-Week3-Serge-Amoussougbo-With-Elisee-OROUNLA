import Link from "next/link";

function FootBlock({ data }) {
  return (
    <div>
      <p className="font-bold font-monserrat text-text_color tracking-wide">
        {data?.label}
      </p>
      <ul className="mt-2 space-y-2">
        {data?.items?.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.path}
              className="text-second_text_color text-s font-medium transition-colors duration-300 hover:text-secondary_2"
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FootBlock;
