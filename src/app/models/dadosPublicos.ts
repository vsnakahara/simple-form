import { Contato } from './contato';
import { Endereco } from './endereco';

export interface DadosPublicos {
    estadoCivil: string;
    sabatista: boolean;
    grauDeEscolaridade: 'ensino_fundamentao_incompleto';
    quantidadeDeFilhos: number,
    endereco: Endereco;
    contato: Contato;
    
}

