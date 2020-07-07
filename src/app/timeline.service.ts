import { Injectable } from '@angular/core';

export interface IEvent {
  name: string;
  begins: string;
  ends: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private events: IEvent[];

  constructor() {
    this.events = [];
    this.events.push({
      name: 'Vedação de propaganda partidária',
      begins: '11/08/2020',
      ends: undefined,
      icon: 'voice_over_off'
    });
    this.events.push({
      name: 'Convenção partidária',
      begins: '31/08/2020',
      ends: '16/09/2020',
      icon: 'group'
    });
    this.events.push({
      name: 'Registro de candidatura',
      begins: undefined,
      ends: '26/09/2020',
      icon: 'how_to_reg'
    });
    this.events.push({
      name: 'Convocação para plano de mídia',
      begins: '26/09/2020',
      ends: '26/09/2020',
      icon: 'assignment'
    });
    this.events.push({
      name: 'Propaganda eleitoral',
      begins: '27/09/2020',
      ends: '12/11/2020',
      icon: 'record_voice_over'
    });
    this.events.push({
      name: 'Rádio e TV',
      begins: '11/10/2020',
      ends: undefined,
      icon: 'settings_voice'
    });
    this.events.push({
      name: 'Divulgação do relatório de transferências do fundo partidário e recursos',
      begins: '27/10/2020',
      ends: undefined,
      icon: 'money'
    });
    this.events.push({
      name: 'Eleições 1º Turno',
      begins: '15/11/2020',
      ends: '15/11/2020',
      icon: 'how_to_vote'
    });
    this.events.push({
      name: 'Eleições 2º Turno',
      begins: '29/11/2020',
      ends: '29/11/2020',
      icon: 'how_to_vote'
    });
    this.events.push({
      name: 'Prestação de contas (candidatos e comitês)',
      begins: undefined,
      ends: '15/12/2020',
      icon: 'bar_chart'
    });
  }

  getEvents(): IEvent[] {
    return this.events;
  } 
}
