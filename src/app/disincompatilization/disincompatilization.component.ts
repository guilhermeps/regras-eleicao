import { Component, OnInit } from '@angular/core';

export interface IDisincompatibilization {
  actualPosition: string;
  pretendedPosition: string;
  deadline: string;
  date: string;
  isThereDisincompatibilization: boolean;
  specialConditions: string[]
}

@Component({
  selector: 'app-disincompatilization',
  templateUrl: './disincompatilization.component.html',
  styleUrls: ['./disincompatilization.component.css']
})
export class DisincompatilizationComponent implements OnInit {

  disincompatibilizationList: IDisincompatibilization[];

  constructor() {
    this.disincompatibilizationList = [];
  }

  ngOnInit(): void {
    this.disincompatibilizationList.push({
      actualPosition: 'Assessor especial de Ministro',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Chefe de divisão escolar do municipio',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Chefe da Agencia Postal da EBCT',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Diretor de Santa Casa conveniado com o SUS',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Diretor e Vice-diretor de escola pública',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Dirigente de conselho comunitário sem interesse direto ou indireto na arrecadação de tributos',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Dirigente de Fundação de Partido Político ',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Empregado de empresa pública e sociedade de economia mista',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Juiz de paz',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Membro de conselho com função consultiva',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Membro de conselho municipal da criança e do adolescente ',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Membro de Conselho Municipal de Saúde',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Membro do Conselho Tutelar ',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Presidente de conselho diretor de programa de desestatizaçãoTSE)',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Presidente de partido político',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Secretário parlamentar',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Serventuário celetista de cartório',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Servidor ocupante de cargo público de livre nomeação eexoneração',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Servidor público que exerce de cargo de provimento efetivo',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Servidor Celetista ou com contrato temporário (Não Comissionado)',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Vogal de junta comercial ',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Advogado – convênio OAB – assistência judiciária)',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Assessor de Câmara Municipal ',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Cartório Extrajudicial (Titular) – Tabelião, Oficial de Registro',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Médico – Servidor público',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Profissionais liberais que prestam serviços ao município sem vínculo empregatício',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Servidor de Assembleia Legislativa Estadual',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: '3 meses',
      date: '15/08/2020',
      isThereDisincompatibilization: true,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Médico de hospital privado que recebe remuneração proveniente do SUS',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'O médico credenciado ao SUS estando no exercício particular da medicina',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: false,
      specialConditions: []
    });
    this.disincompatibilizationList.push({
      actualPosition: 'Militar',
      pretendedPosition: 'Prefeito/Vice/Vereador',
      deadline: undefined,
      date: undefined,
      isThereDisincompatibilization: true,
      specialConditions: [
        '1) Com menos de 10 anos de serviço deverá afastar-se da atividade;',
        '2) Com mais de 10 anos, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade',
        `Não é exigível prévia filiação partidária e
        desincompatibilização de suas funções ao Policial
        Militar da ativa que pretenda concorrer a cargo
        eletivo, pois só com o deferimento do registro da
        candidatura é que se dará a transferência para a
        inatividade ou a agregação, conforme o caso.`
      ]
    });
  }

}
