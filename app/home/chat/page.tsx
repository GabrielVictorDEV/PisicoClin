import { InputChat } from '@/components/Chat';

export default function Chat() {
  return (
    <>
      <div className="bg-purple-200 h-[400px] flex flex-col items-center justify-between rounded-md">
        <div>Chat</div>
        <div>
          <InputChat />
        </div>
      </div>
    </>
  );
}
