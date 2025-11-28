import React from "react";

const SubTitle = ({
  align = "text-center",
  children,
}: {
  align?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={`text-md text-[hsl(var(--text))] pb-5 text-center ${align} xl:w-200 mx-auto`}>
      {children}
    </h4>
  );
};

export default SubTitle;
