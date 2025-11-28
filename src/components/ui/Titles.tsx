const Titles = ({
  align = 'text-center',
  children,
}: {
  align?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={`text-[hsl(var(--primary))] text-2xl capitalize py-5 ${align} font-semibold`}
    >
      {children}
    </h3>
  );
};

export default Titles;
