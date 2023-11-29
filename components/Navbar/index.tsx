import { TbHealthRecognition } from 'react-icons/tb';

export function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center	p-4 bg-purple-200">
        <TbHealthRecognition size={40} style={{ color: '#c084fc' }} />

        {/*<input
          type="text"
          name="text"
          placeholder="Procurando por algo?"
          className="min-w-[300px] bg-transparent border-2 border-purple-500 text-gray-900 rounded-md focus:ring-purple-500 focus:border-purple-500 p-2 placeholder-purple-400"
        />8*/}
      </div>
    </>
  );
}
