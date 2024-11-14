type SectionTitleProps = {
  label: string;
};
const SectionTitle = ({ label }: SectionTitleProps) => {
  return (
    <div className="flex items-center  w-full gap-8">
      <h2 className="text-[40px] font-extralight text-black leading-[1]">
        {label}
      </h2>
      <div className="flex-1 bg-[#26A522] w-full h-[1px]" />
    </div>
  );
};

export default SectionTitle;
