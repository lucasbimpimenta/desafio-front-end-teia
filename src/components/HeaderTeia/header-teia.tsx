import logo from "../../assets/logo_teia.webp";

export default function HeaderTeia() {
  return (
    <div className="ml-auto">
      <img
        src={logo}
        className="max-h-64 min-h-40 w-full object-cover opacity-95"
      />
    </div>
  );
}
