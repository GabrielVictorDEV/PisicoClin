'use client';
import { Appointment } from '@/components/Appointment';
import { useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function Queries() {
  const [currentPage, setCurrentPage] = useState(1);

  const doctorsPerPage = 3;
  const doctors = [
    {
      name: 'Dr. Jhonata Figueireido',
      locale: 'Rua Presidente Prudente, nº 84',
      price: 300,
    },
    {
      name: 'Dr. Samanta Lima',
      locale: 'Rua Aluisio Neto, nº 567',
      price: 246,
    },
    {
      name: 'Dr. Algusto Valadares',
      locale: 'Rua Marcio Onorato, nº 67',
      price: 345,
    },
    {
      name: 'Dr. Rafaela Santos',
      locale: 'Avenida das Flores, nº 123',
      price: 280,
    },
    {
      name: 'Dr. Marcelo Costa',
      locale: 'Rua dos Sonhos, nº 456',
      price: 320,
    },
    {
      name: 'Dr. Isabela Oliveira',
      locale: 'Avenida Central, nº 789',
      price: 270,
    },
    {
      name: 'Dr. Lucas Mendes',
      locale: 'Rua das Palmeiras, nº 10',
      price: 290,
    },
    {
      name: 'Dr. Camila Rodrigues',
      locale: 'Avenida do Sol, nº 987',
      price: 310,
    },
    {
      name: 'Dr. Felipe Almeida',
      locale: 'Rua das Estrelas, nº 321',
      price: 260,
    },
    {
      name: 'Dr. Larissa Silva',
      locale: 'Avenida dos Anjos, nº 654',
      price: 330,
    },
    {
      name: 'Dr. Gustavo Santos',
      locale: 'Rua das Flores, nº 789',
      price: 280,
    },
    {
      name: 'Dr. Amanda Costa',
      locale: 'Avenida dos Sonhos, nº 987',
      price: 300,
    },
  ];

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex flex-col text-purple-900 items-center py-4 w-full h-auto">
        <h2>Clique no profissional desejado e escolha o melhor horário</h2>

        <div className="pt-6 flex flex-col gap-2">
          {currentDoctors.map((doctor, index) => (
            <Appointment
              key={index}
              name={doctor.name}
              locale={doctor.locale}
              price={doctor.price}
            />
          ))}

          <span className="gap-2 mt-4 text-xs flex items-center w-full justify-center cursor-pointer hover:text-purple-600">
            <AiOutlineArrowLeft
              size={12}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from(
              { length: Math.ceil(doctors.length / doctorsPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <span
                key={page}
                className={`mx-1 ${page === currentPage ? 'font-bold' : ''}`}
                onClick={() => paginate(page)}
              >
                {page}
              </span>
            ))}
            <AiOutlineArrowRight
              size={12}
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(doctors.length / doctorsPerPage)
              }
            />
          </span>
        </div>
      </div>
    </>
  );
}
