
type HeadingProps = {
  title: string;
  color?: string;
};

export default function SectionHeading({ title, color = "text-gray-900" }: HeadingProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 ${color}`}>
      {title}
    </h2>
  );
}
