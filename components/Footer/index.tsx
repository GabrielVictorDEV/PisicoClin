'use client';
import Link from 'next/link';
import { AiFillHome, AiOutlineSearch, AiFillCalendar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

export function Footer() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <>
      <div className="flex justify-between b-0 bg-purple-200 px-10 py-4">
        <Link href="/home">
          <AiFillHome
            size={40}
            style={{ color: '#c084fc', hover: '#9333ea' }}
            className="cursor-pointer focus:outline-none"
          />
        </Link>

        <Link href="/home/agendamentos">
          <AiFillCalendar
            size={40}
            style={{ color: '#c084fc' }}
            className="cursor-pointer"
          />
        </Link>

        <p
          className="cursor-pointer rounded-full bg-white-100 p-2"
          onClick={() => {
            setDropdownVisibility(!isDropdownVisible);
          }}
        >
          <BiUserCircle
            size={40}
            style={{ color: '#c084fc' }}
            className="cursor-pointer"
          />
        </p>
      </div>

      <div
        id="userDropdown"
        className={`${
          isDropdownVisible ? 'block' : 'hidden'
        } z-10 bg-purple-300 divide-gray-100 rounded-lg shadow-md w-56 mt-[250px] absolute right-0 mr-4`}
      >
        <div className="px-4 py-3 text-sm text-white-100 bg-purple-400">
          <div className="flex justify-between items-center">
            admin@gmail.com
            <p
              className="cursor-pointer"
              onClick={() => {
                setDropdownVisibility(false);
              }}
            >
              <MdClose />
            </p>
          </div>
        </div>
        <ul
          className="py-2 text-sm text-purple-100"
          aria-labelledby="avatarButton"
        >
          <li>
            <Link
              href="/home"
              className="block px-4 py-2 hover:bg-purple-400"
              onClick={() => {
                setDropdownVisibility(false);
              }}
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              href="/home/profile"
              className="block px-4 py-2 hover:bg-purple-400"
              onClick={() => {
                setDropdownVisibility(false);
              }}
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              href="/home/cadrastadas"
              className="block px-4 py-2 hover:bg-purple-400"
              onClick={() => {
                setDropdownVisibility(false);
              }}
            >
              Receitas cadrastadas
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <Link
            href="/"
            className="text-white-100 block px-4 py-2 text-sm hover:bg-purple-400"
            onClick={() => {
              setDropdownVisibility(false);
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
