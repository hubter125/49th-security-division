type Props = { id: string; eyebrow: string; title: string; children?: React.ReactNode; center?: boolean };

export default function SectionHeading({ id, eyebrow, title, children, center }: Props) {
  return (
    <header className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 leading-relaxed text-slate-400">{children}</p>}
    </header>
  );
}
