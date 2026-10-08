import { WHATSAPP_URL } from '@/lib/site'

/** Botón flotante de WhatsApp, siempre visible para hacer pedidos. */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer un pedido por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-xl shadow-black/20 transition-all hover:pr-5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.004 3C9.374 3 3.98 8.393 3.98 15.02c0 2.12.555 4.19 1.61 6.015L3.875 27.3a.6.6 0 0 0 .737.75l6.43-1.686a12.02 12.02 0 0 0 4.962 1.075h.005c6.627 0 12.02-5.394 12.022-12.02A11.94 11.94 0 0 0 16.004 3Zm0 21.98h-.004a9.98 9.98 0 0 1-5.085-1.393l-.365-.216-3.78.99 1.01-3.684-.237-.378a9.95 9.95 0 0 1-1.53-5.28c0-5.51 4.483-9.993 9.995-9.993a9.93 9.93 0 0 1 7.066 2.93 9.93 9.93 0 0 1 2.924 7.07c-.002 5.51-4.485 9.993-9.994 9.993Zm5.48-7.484c-.3-.15-1.777-.877-2.052-.977-.275-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.177-.175.2-.35.226-.65.075-.3-.15-1.268-.467-2.415-1.49-.893-.795-1.495-1.778-1.67-2.078-.175-.3-.019-.462.131-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.23-.244-.585-.492-.506-.676-.515l-.576-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.503 0 1.476 1.075 2.903 1.225 3.103.15.2 2.116 3.23 5.126 4.53.716.31 1.275.494 1.711.633.719.228 1.373.196 1.89.119.577-.086 1.776-.726 2.026-1.428.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[8rem]">
        Hacé tu pedido
      </span>
    </a>
  )
}
