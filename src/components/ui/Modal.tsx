type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur">
      <div className="w-full max-w-2xl rounded-3xl border border-cyan-300/10 bg-slate-950 p-8">
        {children}
      </div>
    </div>
  );
}
