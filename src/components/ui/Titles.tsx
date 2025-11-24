const Titles = ({
  align = 'text-center',
  children,
}: {
  align?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={`text-[#1E56A0] text-2xl capitalize py-5 ${align} font-semibold`}
    >
      {children}
    </h3>
  );
};

export default Titles;
