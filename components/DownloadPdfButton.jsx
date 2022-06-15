const TransparentButton = ({ title }) => {
  return (
    <a href="/210802 think week DOSSIER.pdf" download={true}>
      <button className="border-yellow-400  font-medium py-2 px-3 rounded-md text-amarilloThink border text-[1.4rem]  md:text-[1.6rem]">
        {title}
      </button>
    </a>
  );
};

export default TransparentButton;
