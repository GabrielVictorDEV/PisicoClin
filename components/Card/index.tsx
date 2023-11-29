import Link from 'next/link';
import { FaUserNurse } from 'react-icons/fa';

interface CardProps {
  title: string;
  icon: string;
  url: string;
}

export function Card({ title, icon, url }: CardProps) {
  const Icon = icon;
  return (
    <Link
      href={url}
      className="flex flex-col items-center min-w-[130px] h-auto bg-purple-300 p-4 gap-3 rounded-md cursor-pointer hover:bg-purple-400 duration-500 text-sm"
    >
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
}
