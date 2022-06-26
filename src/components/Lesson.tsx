import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
  const isAvaliableAt = isPast(props.avaliableAt);

  const { slug } = useParams();

  const isActive = props.slug === slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {format(props.avaliableAt, "EEEE • dd 'de' MMMM • k'h'mm", {
          locale: ptBR,
        })}
      </span>
      <div
        className={classnames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
          {
            'bg-green-500': isActive,
          }
        )}
      >
        <header className="flex justify-between items-center">
          {isAvaliableAt ? (
            <span
              className={classnames(
                'text-sm font-medium flex items-center gap-2',
                {
                  'text-blue-500': !isActive,
                  'text-white': isActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-400 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames(
              'text-xs rounded py-[0.125rem] px-2 text-white border font-bold',
              {
                'border-green-300': !isActive,
                'border-white': isActive,
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={classnames('mt-5 block', {
            'text-gray-200': !isActive,
            'text-white': isActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};
