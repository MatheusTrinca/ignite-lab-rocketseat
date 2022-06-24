import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
  const isAvaliableAt = isPast(props.avaliableAt);

  return (
    <a href="#">
      <span className="text-gray-300">
        {format(props.avaliableAt, "EEEE • dd 'de' MMMM • k'h'mm", {
          locale: ptBR,
        })}
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex justify-between items-center">
          {isAvaliableAt ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-400 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
};
