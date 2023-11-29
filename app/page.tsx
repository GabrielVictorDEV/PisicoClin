import Link from 'next/link';
import { TbHealthRecognition } from 'react-icons/tb';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <ToastContainer />
      <main className="h-screen flex justify-center aling-center items-center flex-col gap-4 bg-fuchsia-300 text-slate-900">
        <section className="flex flex-col gap-4 py-8 items-center">
          <TbHealthRecognition size={80} style={{ color: '#6b21a8' }} />
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="p-2 w-full bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              className="p-2 w-full bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <Link
            href="/home"
            className="flex items-center justify-center w-full h-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded duration-500"
          >
            ACESSAR
          </Link>
        </section>

        <p>NÃO TEM CONTA? FAÇA AGORA MESMO</p>
        <Link href="/create" className="text-blue-600">
          CLIQUE AQUI
        </Link>
      </main>
    </>
  );
}
