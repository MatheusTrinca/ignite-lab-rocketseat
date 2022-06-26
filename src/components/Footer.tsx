import { RocketSeatLogo } from './RocketSeatLogo';

export const Footer = () => {
  return (
    <div className="py-6 border-t border-gray-400 mt-20 flex items-center">
      <a href="https://www.rocketseat.com.br/" target="_blank">
        <RocketSeatLogo />
      </a>
      <p className="text-sm text-gray-400 ml-6 flex-1">
        Rocketseat - Todos os direitos reservados
      </p>
      <p className="text-sm text-gray-400 ml-6 ">Política de privacidade</p>
    </div>
  );
};
