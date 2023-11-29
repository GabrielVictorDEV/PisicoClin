'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { TbHealthRecognition } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = () => {
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      toast.error('Por favor, preencha todos os campos');
    } else if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
    } else {
      // Lógica para criar nova conta aqui
      toast.success('Conta criada com sucesso!');
      setTimeout(() => {
        router.push('/home');
      }, 3500);
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="h-screen flex justify-center aling-center items-center flex-col gap-4 bg-fuchsia-300 text-slate-900">
        <section className="flex flex-col gap-4 py-8 items-center">
          <TbHealthRecognition size={80} style={{ color: '#6b21a8' }} />
          <h1>Criação de Nova Conta</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 w-full bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="p-2 w-full bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="p-2 w-full bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <button
            onClick={handleSignup}
            className="flex items-center justify-center w-full h-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded duration-500"
          >
            CRIAR
          </button>
        </section>

        <p>Já possui conta? Faça login com ela</p>
        <Link href="/" className="text-blue-600">
          CLIQUE AQUI
        </Link>
      </main>
    </>
  );
}
