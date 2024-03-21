type LogoAzulProps = {
  pequena?: boolean;
};

function LogoAzul({ pequena }: LogoAzulProps) {
  const width = pequena ? "25" : "56";
  const height = pequena ? "16" : "40";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3003 32.4664L35.5347 20.9688L45.0011 39.9985H28.0451L24.3003 32.4664Z"
        fill="#005CA9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 39.9985H16.9559L35.5349 20.9688H18.579L0 39.9985Z"
        fill="#F39200"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9985 0.0092873L27.9454 0L37.4208 19.039H20.4648L10.9985 0.0092873Z"
        fill="#005CA9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0533 0.0078125L31.6997 7.53982L37.4212 19.0375L56.0002 0.0078125H39.0533Z"
        fill="#F39200"
      />
    </svg>
  );
}

LogoAzul.defaultProps = {
  pequena: false,
};
export default LogoAzul;
