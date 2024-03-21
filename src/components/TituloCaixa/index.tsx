interface TituloCaixaProps {
  title: string;
}

export default function TituloCaixa({ title }: TituloCaixaProps) {
  return (
    <h2 className="mb-0 font-[futuraMdBt] text-xl font-extrabold leading-relaxed text-[#005ca9]">
      <div className="inline-flex items-center">
        <svg
          className="mr-2 h-4 w-4"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4992 3.42882L3.39946 24.0951C2.13366 25.3348 0 24.4381 0 22.6662V2C0 0.895429 0.895431 0 2 0H23.0998C24.8916 0 25.7794 2.17502 24.4992 3.42882Z"
            fill="#F39200"
          />
        </svg>
        {title}
      </div>
    </h2>
  );
}
