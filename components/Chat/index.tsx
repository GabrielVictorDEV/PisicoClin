export function InputChat() {
  return (
    <>
      <form>
        <label htmlFor="chat" className="sr-only">
          Inicie o chat
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-purple-300">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 resize-none"
            placeholder="Inicie uma conversa..."
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center p-2 text-purple-600 rounded-full cursor-pointer hover:bg-purple-400 duration-300"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </>
  );
}
