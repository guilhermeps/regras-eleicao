import { Injectable } from '@angular/core';

export interface IRule {
  area: string;
  actionAllowed: string;
  actionNotAllowed: string;
  searchTerm: string;
}

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private rules: IRule[];

  constructor() {
    this.rules = [];
    this.rules.push({
      area: 'COMÍCIO',
      actionAllowed: `A partir do dia previsto para início da
      campanha em 27/09/2020 até 48h antes do
      dia das eleições, das 8h às 24h, com
      exceção do comício de encerramento
      da campanha, que poderá ser
      prorrogado por mais duas horas.
      Permitida a aparelhagem de
      sonorização fixa e trio elétrico no
      evento`,
      actionNotAllowed: `Showmício ou de evento assemelhado
      e apresentação, remunerada ou não,
      de artistas com a finalidade de
      animação dos presentes.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'ALTO FALANTE E AMPLIFICADORES',
      actionAllowed: `A partir do dia previsto para início (27/09/2020) e até
      a véspera da eleição, entre 8h e 22h,
      apenas, para sonorização de
      comícios, passeatas e carreatas`,
      actionNotAllowed: `Som a menos de 200 metros das
      sedes, dos Poderes Executivo e
      Legislativo da União, dos Estados, do
      Distrito Federal e dos Municípios; das
      sedes dos Tribunais Judiciais; dos
      quartéis e de outros estabelecimentos
      militares; dos hospitais e casas de
      saúde; bem como das escolas,
      bibliotecas públicas, igrejas e teatros,
      quando em funcionamento. Carros de
      som e minitrios circulando fora de
      carreatas e passeatas estão proibidos.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'CAMINHADA, PASSEATA E CARREATA',
      actionAllowed: `A partir do dia 27/09/2020 até as 22h
      do dia que antecede as eleições.
      Permitida a distribuição de material
      gráfico, acompanhados ou não de
      carros de som ou minitrios.`,
      actionNotAllowed: `Transformação do ato em comício,
      sem comunicação prévia. Vedações
      sobre a distância mínima de órgãos
      públicos também se aplicam (acima).`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'CAMISETAS, CHAVEIROS, BONÉS, CANETAS',
      actionAllowed: undefined,
      actionNotAllowed: `Terminantemente proibida a confecção, utilização ou distribuição feita ou
      autorizada pelo candidato. Esta vedação também vale para quaisquer outros
      bens ou materiais que possam proporcionar vantagem, ainda que mínima, ao
      eleitor (CDs, pen drives, sacolas, canetas, bloquinhos etc.).
      Admite-se, excepcionalmente, a confecção de camisetas para utilização pelo
      pessoal que presta serviços à campanha, desde que em número razoável e
      que não caracterize distribuição de brindes ao eleitor.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'BANDEIRAS E MESAS PARA DISTRIBUIÇÃO DE MATERIAIS',
      actionAllowed: `Ao longo das vias públicas, desde que
      móveis e não dificultem o bom
      andamento do trânsito de pessoas e
      veículos.
      Só podem ser colocados
      diariamente entre as 6h e as 22h.`,
      actionNotAllowed: `Promover a fixação de tais
      propagandas em local público e sua
      permanência durante todo o período
      da campanha, além de sua
      manutenção nos horários vedados.
      Estão proibidos os bonecos,
      cavaletes, placas, faixas,
      estandartes e assemelhados.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'BENS PARTICULARES',
      actionAllowed: `Não depende de licença municipal
      nem de autorização da Justiça
      Eleitoral.
      Deve ser feita apenas de forma
      gratuita e em adesivo ou em papel e
      suas dimensões não podem
      ultrapassar o limite máximo de 0,5 m².`,
      actionNotAllowed: `Colocação em troca de dinheiro ou
      de qualquer tipo de pagamento. Não
      é permitida a colocação de adesivos
      ou cartazes cujo efeito visual viole a
      dimensão total da propaganda de 0,5
      m².
      Também não é permitida colocação
      de placas e a pintura de muros e
      paredes, ainda que em dimensões
      inferiores ao limite estabelecido.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'FOLHETOS, VOLANTES, ADESIVOS E SANTINHOS',
      actionAllowed: `Até as 22h do dia que antecede as
      eleições, sendo desnecessária licença
      municipal ou autorização da Justiça
      Eleitoral.
      Todo material impresso de campanha
      deverá conter o número do CNPJ ou
      CPF do responsável pela confecção,
      bem como de quem a contratou, e a
      respectiva tiragem do material.
      Deve constar, ainda, a legenda
      partidária ou a coligação: na
      majoritária, o nome da coligação com
      todos os partidos que a compõem, e
      na proporcional apenas o nome da
      coligação e a sigla do partido do
      candidato (vide modelo).`,
      actionNotAllowed: `Distribuição sem os requisitos legais.
      Vedada sua distribuição no dia das
      eleições (boca de urna), bem como
      espalhar material de campanha no
      local de votação ou nas vias próximas,
      ainda que na véspera da eleição,
      sujeitando-se os infratores à multa e
      apuração criminal.
      Colocação em bens cujo uso dependa
      de cessão ou permissão do poder
      público, ou que a ele pertençam, e nos
      bens de uso comum, inclusive postes
      de iluminação pública, sinalização de
      tráfego, viadutos, passarelas, pontes,
      paradas de ônibus e outros
      equipamentos urbanos.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'OUTDOOR',
      actionAllowed: undefined,
      actionNotAllowed: `Independentemente do local, inclusive os eletrônicos, sujeitando-se a
      empresa responsável, os partidos, as coligações e os candidatos à retirada
      imediata do material e multa. Proibida também a justaposição de materiais
      para criação do efeito visual de outdoor.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'ADESIVOS EM VEÍCULOS',
      actionAllowed: `É permitido colar adesivos
      microperfurados (perfurades) até a
      extensão total do para-brisa traseiro e,
      em outras posições, até a dimensão
      máxima de 0,5m².
      Os adesivos também deverão conter
      as informações obrigatórias de todo
      material impresso (acima).`,
      actionNotAllowed: `Colocação de forma não gratuita e
      espontânea, em troca de dinheiro ou
      de qualquer tipo de pagamento pelo
      espaço utilizado.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'TELEMARKETING',
      actionAllowed: undefined,
      actionNotAllowed: `É proibida qualquer propaganda via telemarketing, em qualquer horário.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'JORNAIS E REVISTAS',
      actionAllowed: `Até a antevéspera das eleições, é
      permitida a divulgação paga de
      propaganda eleitoral na imprensa
      escrita. É permitida também a
      divulgação de opinião política
      favorável pelo veículo, desde que
      não seja matéria paga, sujeitando-se
      à apuração do abuso dos meios de
      comunicação.
      Deve constar no anúncio, de forma
      visível, o valor pago pela inserção.`,
      actionNotAllowed: `Publicação fora dos limites legais: 10
      anúncios, por veículo, em datas
      diversas, para cada candidato, num
      espaço máximo, por edição, de 1/8 (um
      oitavo) de página de jornal padrão e 1/4
      (um quarto) de página de revista ou
      tabloide.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'RÁDIO E TELEVISÃO',
      actionAllowed: `Apenas para a propaganda eleitoral
      gratuita, veiculada nos 35 dias
      anteriores à antevéspera das
      eleições, e debates eleitorais.`,
      actionNotAllowed: `Qualquer propaganda eleitoral
      (ostensiva ou dissimulada) mediante
      pagamento. Com exceção da
      propaganda eleitoral gratuita, é vedado
      às emissoras transmitir, a partir de 11/08/2020, programa apresentado ou
      comentado por pré-candidato.`,
      searchTerm: ''
    });
    this.rules.push({
      area: 'INTERNET',
      actionAllowed: `Partidos e candidatos, desde que
      comunicados à Justiça Eleitoral e
      hospedados em provedores
      estabelecidos no Brasil.
      Após essa data, é permitida também a
      veiculação de propaganda eleitoral
      por meio de blogs, sites de
      relacionamento (Facebook, Twitter
      etc.) e sites de mensagens
      instantâneas.
      As propagandas eleitorais veiculadas
      por mensagens eletrônicas são
      permitidas, mas deverão conter
      mecanismo que possibilite ao
      destinatário solicitar seu
      descadastramento do eleitor.`,
      actionNotAllowed: `Qualquer tipo de propaganda eleitoral
      em sites de pessoas jurídicas, com ou
      sem fins lucrativos, e em sites oficiais
      ou hospedados por órgãos ou
      entidades da administração pública.
      CONSTITUI CRIME a contratação
      direta ou indireta de grupo de pessoas
      com a finalidade específica de emitir
      mensagens ou comentários na
      Internet para ofender a honra ou
      denegrir a imagem de candidato, de
      partido ou de coligação.`,
      searchTerm: ''
    });

    this.rules.forEach(s => {
      s.searchTerm = `${s.area.toLowerCase()} ${s.actionAllowed ? s.actionAllowed.toLowerCase() : ''} ${s.actionNotAllowed.toLowerCase()}`;
    });
  }

  getRules(): IRule[] {
    return this.rules;  
  }
}
