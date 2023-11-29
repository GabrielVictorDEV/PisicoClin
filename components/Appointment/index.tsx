'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import '../../app/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AppointmentProps {
  name: string;
  locale: string;
  price: number;
}

export function Appointment({ name, locale, price }: AppointmentProps) {
  const router = useRouter();

  function notify() {
    toast.success('Horário cadastrado com sucesso', {
      autoClose: 3000,
    });
    toast.success('Redirecionando para o início', {
      autoClose: 3000,
    });

    const appointment = { name, locale, price };
    saveAppointment(appointment);

    setTimeout(() => {
      router.push('/home');
    }, 3500);
  }

  function saveAppointment(appointment: AppointmentProps) {
    const appointments = JSON.parse(
      localStorage.getItem('appointments') || '[]'
    );
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }

  useEffect(() => {
    const appointmentData = { name, locale, price };
    localStorage.setItem('appointment', JSON.stringify(appointmentData));
  }, [name, locale, price]);

  return (
    <>
      <ToastContainer />

      <details className="min-w-[400px] bg-purple-300 p-4 rounded-md duration-300">
        <summary className="flex items-center text-xl gap-4">
          <BsFillArrowRightCircleFill size={20} />
          {name}
        </summary>
        <ul className="py-4">
          <li>Local: {locale}</li>
          <br />
          <li>Valor: R${price}</li>
        </ul>
        <div>
          <label htmlFor="countries" className="pb-4 text-sm">
            Selecione um Horário:
          </label>
          <select
            id="countries"
            className="mt-2 bg-purple-400 text-sm rounded-lg w-full p-2.5 text-purple-100"
          >
            <option selected>Horários</option>
            <option value="US">08:00</option>
            <option value="CA">09:30</option>
            <option value="FR">11:00</option>
            <option value="DE">12:30</option>
          </select>
        </div>

        <button
          onClick={notify}
          className="w-full mt-6 flex items-center justify-center max-w-8 h-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded duration-500"
        >
          Confirmar Reserva
        </button>
      </details>
    </>
  );
}
