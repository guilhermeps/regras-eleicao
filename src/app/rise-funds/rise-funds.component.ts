import { Component, OnInit } from '@angular/core';

export interface IRisingFundsRules {
  description: string;
  rules: IRisingRule[];
  forbiden: string[];
}

export interface IRisingRule {
  text: string;
  bold: boolean;
  margin: boolean;
}

@Component({
  selector: 'app-rise-funds',
  templateUrl: './rise-funds.component.html',
  styleUrls: ['./rise-funds.component.css']
})
export class RiseFundsComponent implements OnInit {

  risingFundsRules: IRisingFundsRules;

  constructor() {
    this.risingFundsRules = { } as IRisingFundsRules;
    this.risingFundsRules.rules = [];
    this.risingFundsRules.forbiden = [];
  }

  ngOnInit(): void {
    this.risingFundsRules.description = 'Os candidatos poderão arrecadar recursos obedecendo:';
    this.risingFundsRules.rules.push({
      text: `1 – De pessoas físicas (limitadas a 10% dos rendimentos brutos
          recebidos pelo doador no ano anterior à eleição)`,
      bold: false,
      margin: false
    });
    this.risingFundsRules.rules.push({
      text: `2 – Doações estimáveis em dinheiro mediante recibo assinado pelo
            doador`,
      bold: false,
      margin: false
    });
    this.risingFundsRules.rules.push({
      text: `3 – Utilização de Recursos próprios até o total de 10% dos limites
        previstos para gastos de campanha no cargo em que concorrer`,
      bold: false,
      margin: false
    });
    this.risingFundsRules.rules.push({
      text: 'IMPORTANTE',
      margin: false,
      bold: true
    });
    this.risingFundsRules.rules.push({
      text: `As doações de recursos financeiros somente poderão ser efetuadas na
        conta mencionada no art. 22 desta lei por meio de:`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `I – cheques cruzados e nominais ou transferência eletrônica de
        depósitos;`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `II – depósitos em espécie devidamente identificados até o limite fixado
        no inciso I do § 1º deste artigo;`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `III – mecanismo disponível em sítio do candidato, partido ou coligação
        na Internet, permitindo inclusive o uso de cartão de crédito, e que
        deverá atender aos seguintes requisitos:`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `a) identificação do doador;`,
      margin: true,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `b) emissão obrigatória de recibo eleitoral para cada doação realizada;`,
      margin: true,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `IV – instituições que promovam técnicas e serviços de financiamento
        coletivo por meio de sítios na Internet, aplicativos eletrônicos e outros
        recursos similares, que deverão atender aos requisitos legais.`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.rules.push({
      text: `V – comercialização de bens e/ou serviços, ou promoção de eventos de
        arrecadação realizados diretamente pelo candidato ou pelo partido
        político.`,
      margin: false,
      bold: false
    });
    this.risingFundsRules.forbiden.push(`Receber direta ou indiretamente doação em dinheiro ou estimável em
      dinheiro, inclusive por meio de publicidade de qualquer espécie,
      procedente de:`);
    this.risingFundsRules.forbiden.push(`I – entidade ou governo estrangeiro;`);
    this.risingFundsRules.forbiden.push(`II – órgão da administração pública direta e indireta ou fundação
      mantida com recursos provenientes do poder público;`);
    this.risingFundsRules.forbiden.push(`III – concessionário ou permissionário de serviço público;`);
    this.risingFundsRules.forbiden.push(`IV – entidade de direito privado que receba, na condição de beneficiária,
      contribuição compulsória em virtude de disposição legal;`);
    this.risingFundsRules.forbiden.push(`V – entidade de utilidade pública;`);
    this.risingFundsRules.forbiden.push(`VI – entidade de classe ou sindical;`);
    this.risingFundsRules.forbiden.push(`VII – pessoa jurídica sem fins lucrativos que receba recursos do exterior;`);
    this.risingFundsRules.forbiden.push(`VIII – entidades beneficentes e religiosas;`);
    this.risingFundsRules.forbiden.push(`IX – entidades esportivas;`);
    this.risingFundsRules.forbiden.push(`X – organizações não-governamentais que recebam recursos públicos;`);
    this.risingFundsRules.forbiden.push(`XI – organizações da sociedade civil de interesse público;`);
  }

}
