'use client';
import { useEffect, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

interface Appointment {
  id: string;
  name: string;
  locale: string;
  price: number;
}

export default function Agendamento() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);

  useEffect(() => {
    const appointmentData = localStorage.getItem('appointments');
    if (appointmentData) {
      const parsedAppointments = JSON.parse(appointmentData) as Appointment[];
      setAppointments(parsedAppointments);
    }
  }, []);

  const handleDeleteAppointment = (id: string) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Consulta eliminada com sucesso');
  };

  // Get current appointments
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl font-bold mb-4">Detalhes dos Agendamentos:</h2>
      {currentAppointments.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-purple-300">
            <tr>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Local</th>
              <th className="py-2 px-4 border-b">Preço</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody className="bg-purple-200">
            {currentAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="py-2 px-4 border-b">{appointment.name}</td>
                <td className="py-2 px-4 border-b">{appointment.locale}</td>
                <td className="py-2 px-4 border-b">R${appointment.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="rounded-full bg-red-500 text-white p-4"
                  >
                    <BsTrashFill size={10} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum agendamento encontrado.</p>
      )}

      <div className="mt-4">
        <button
          className={`text-purple-500 hover:text-purple-700`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className={`ml-2 text-purple-500 hover:text-purple-700`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastAppointment >= appointments.length}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
