import { Card } from '@/components/Card';
import { FaUserNurse } from 'react-icons/fa';
import { BsFillGearFill, BsChatDots } from 'react-icons/bs';
import {
  AiOutlineClockCircle,
  AiFillPhone,
  AiOutlineStar,
} from 'react-icons/ai';

export default function Home() {
  return (
    <div className="px-4 flex flex-col gap-5 text-purple-900">
      <div className="flex flex-row gap-5">
        <Card url={'/home/queries'} title="Pisicólogo" icon={FaUserNurse} />
        <Card
          url={'/home/agendamentos'}
          title="Agendamento"
          icon={AiOutlineClockCircle}
        />
        <Card url={'#'} title="Atendimento" icon={AiFillPhone} />
      </div>

      <div className="flex flex-row gap-5">
        <Card url={'#'} title="Avaliações" icon={AiOutlineStar} />
        <Card
          url={'/home/configuracoes'}
          title="Configurações"
          icon={BsFillGearFill}
        />
        <Card url={'/home/chat'} title="Chat" icon={BsChatDots} />
      </div>
    </div>
  );
}
