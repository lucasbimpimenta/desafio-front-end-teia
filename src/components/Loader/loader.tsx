import LogoAzul from "../LogoAzul/logo-azul";
import { ContainerElemento } from "./loader-style";

export default function Loader() {
  return (
    <ContainerElemento className="p-8">
      <div className="container-box-loading">
        <div className="dsc-loading">
          <LogoAzul />
        </div>
      </div>
    </ContainerElemento>
  );
}
