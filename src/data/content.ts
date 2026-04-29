export type AlertLevel = 'danger' | 'warning' | 'info'

export interface Alert {
  id: string
  level: AlertLevel
  title: string
  description: string
  link?: string
  linkLabel?: string
}

export type ServiceStatusLevel = 'operational' | 'partial' | 'outage' | 'unknown' | 'in_progress'

export interface ServiceStatus {
  id: string
  name: string
  status: ServiceStatusLevel
  statusLabel: string
  description: string
  warning?: string
  link?: string
  linkLabel?: string
  links?: { url: string; label: string }[]
}

export interface Resource {
  id: string
  title: string
  description: string
  location?: string
  warning?: string
  link?: string
  linkLabel?: string
  locations?: string[]
}

export interface MeetingPoint {
  locality: string
  location: string
}

export interface CommunityEvent {
  id: string
  title: string
  date: string
  time: string
  description: string
  meetingPoints: MeetingPoint[]
  materials?: string[]
  note: string
}

export interface TransportOffer {
  id: string
  provider: string
  title: string
  description: string
  details: string[]
  period: string
}

export interface AdministrativeItem {
  id: string
  title: string
  description: string
  documents?: string[]
  link?: string
  linkLabel?: string
  contacts?: { type: 'email' | 'whatsapp'; value: string; display: string }[]
  note?: string
}

export type EnvironmentIcon = 'oil' | 'lamp' | 'battery' | 'monos' | 'textile'

export interface EnvironmentItem {
  id: string
  icon: EnvironmentIcon
  title: string
  description: string
  location?: string
  note?: string
}

export interface ServicoPublico {
  id: number
  nome: string
  empresa: string
  categoria: string
  descricao: string
  contacto: string
}

export interface ContactInfo {
  entity: string
  municipality: string
  address: string
  phone: string
  mobile: string
  email: string
  facebook: string
  website: string
  message: string
}

export interface SiteContent {
  meta: {
    title: string
    subtitle: string
    lastUpdated: string
  }
  navSections: { id: string; label: string }[]
  alerts: Alert[]
  serviceStatus: ServiceStatus[]
  resources: Resource[]
  communityEvents: CommunityEvent[]
  transport: TransportOffer[]
  administrative: AdministrativeItem[]
  environment: EnvironmentItem[]
  contact: ContactInfo
}

export const siteContent: SiteContent = {
  meta: {
    title: 'Info Amor',
    subtitle: 'Informações de Emergência — Tempestade Kristin',
    lastUpdated: '18 de Março de 2026',
  },

  navSections: [
    { id: 'servicos', label: 'Serviços' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'limpeza', label: 'Limpeza' },
    { id: 'transporte', label: 'Transporte' },
    { id: 'declaracoes', label: 'Apoios' },
    { id: 'bolsa-trabalho', label: 'Bolsa de Trabalho' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'contactos', label: 'Contactos' },
    { id: 'meteo', label: 'Meteo' },
  ],

  alerts: [
    {
      id: 'alert-acesso-barreiros-ponte-pedra',
      level: 'info',
      title: 'Acesso Restabelecido – Barreiros / Ponte da Pedra',
      description:
        '✅ A ligação dos Barreiros à Ponte da Pedra (Freguesia de Regueira de Pontes) já se encontra restabelecida desde ontem ao final do dia.\n\nApós a realização de vistorias técnicas, foi considerado que a via não apresenta riscos para a circulação automóvel ou pedonal, podendo ser utilizada com normalidade. A situação vai continuar a ser acompanhada pelos serviços autárquicos.',
    },
    {
      id: 'alert-rua-rei-lavrador',
      level: 'warning',
      title: 'Rua Rei Lavrador – Em Reparação',
      description:
        '⚠️ As entidades competentes já avaliaram os estragos na Rua Rei Lavrador e encontram-se a trabalhar na correção dos taludes, de forma a permitir a reabertura o mais rapidamente possível.',
    },
    {
      id: 'alert-reerguer-leiria-gabinetes',
      level: 'info',
      title: 'REERGUER LEIRIA – Gabinetes nas Freguesias',
      description:
        '📅 17 de março  🕙 Das 10h às 17h  📍 Junta de Freguesia\n\nPrecisa de apoio para submeter a sua candidatura na plataforma da CCDR Centro? Aproveite este apoio gratuito para submeter o seu pedido. Faça a sua inscrição na Junta de Freguesia ou em https://forms.gle/UWabr7PJAjPi1tdK9\n\nCaso não possa nesse dia, iremos contactá-lo para atender o mais rápido possível. Pedimos a todos que façam a inscrição também de familiares e vizinhos que possam não ter acesso à internet ou facilidade na sua utilização.',
      link: 'https://forms.gle/UWabr7PJAjPi1tdK9',
      linkLabel: 'Fazer inscrição →',
    },
    {
      id: 'alert-casalito-closure',
      level: 'warning',
      title: 'Depósito de Material e Entulho do Casalito',
      description:
        'O espaço criado no campo de futebol do Casalito para deposição de entulho, metais, resíduos verdes e outros materiais resultantes das tempestades será encerrado no próximo dia 9 de março. Solicitamos a todos os fregueses que ainda pretendam colocar materiais que o façam até essa data. A partir do dia seguinte, o Município de Leiria dará início à remoção dos resíduos e à limpeza do espaço, que não voltará a abrir para este fim. Agradecemos a compreensão e a colaboração de todos.',
    },
    {
      id: 'alert-damages',
      level: 'warning',
      title: 'Declare os seus estragos',
      description:
        'Preencha as declarações de prejuízos agrícolas, empresariais e em habitações com a maior brevidade possível.',
    },
  ],

  serviceStatus: [
    {
      id: 'service-water',
      name: 'Água',
      status: 'operational',
      statusLabel: 'Operacional',
      description: 'Abastecimento reposto em toda a freguesia. Informe a Junta em caso de falha.',
    },
    {
      id: 'service-electricity',
      name: 'Eletricidade',
      status: 'operational',
      statusLabel: 'Operacional',
      description: 'Abastecimento elétrico reposto em toda a freguesia pela E-Redes. Informe a Junta em caso de falha.',
    },
    {
      id: 'service-telecom',
      name: 'Telecomunicações',
      status: 'partial',
      statusLabel: 'Parcial',
      description: 'Rede fixa inoperacional. Rede móvel com falhas frequentes. Antenas provisórias em estudo.',
    },
    {
      id: 'service-atm',
      name: 'Multibanco',
      status: 'operational',
      statusLabel: 'Operacional',
      description: '',
    },
    {
      id: 'service-schools',
      name: 'Escolas',
      status: 'operational',
      statusLabel: 'Operacional',
      description:
        'Todas as escolas continuam abertas. Estamos a proceder às restantes reparações o mais rapidamente possível.',
      link: 'https://aemarrazes.com/pt/ultimas/estabelecimentos-de-educacao-e-ensino-do-agrupamento-com-condicoes-de-funcionamento-informacao-de-reabertura-atualizado-em-04-02-2026-15-54h-',
      linkLabel: 'Ver informação do Agrupamento →',
    },
    {
      id: 'service-waste',
      name: 'Recolha de lixo',
      status: 'in_progress',
      statusLabel: 'Em progresso',
      description:
        'Recolha iniciada. Rotas habituais em fase de reposição. Pedido da Junta: coloquem os caixotes do lixo no local habitual, mas não na via pública.',
    },
    {
      id: 'service-mail',
      name: 'Correio / CTT',
      status: 'operational',
      statusLabel: 'Operacional',
      description: 'Os serviços de Correio / CTT estão funcionais.',
    },
    {
      id: 'service-pharmacy',
      name: 'Farmácia',
      status: 'operational',
      statusLabel: 'Operacional',
      description: 'Os serviços de farmácia estão operacionais.',
    },
  ],

  resources: [
    {
      id: 'resource-debris',
      title: 'Entulho, telhas, fibrocimento e verdes',
      description: 'Depositar no campo de futebol do Casalito. O espaço está dividido conforme o tipo de material.',
      warning: 'Não depositar junto ao estaleiro da Junta (Marinheira).',
    },
    {
      id: 'resource-tiles',
      title: 'Telhas e material de construção',
      description:
        'Está a ser criado um depósito no Mercado do Falcão (Marrazes). Até lá, podem deslocar-se ao Estádio Municipal — levem um exemplar da telha e as quantidades necessárias. Para doações, estamos a aceitar na Junta.',
    },
    {
      id: 'resource-internet',
      title: 'Internet e carregamento',
      description:
        'Ligação wireless disponível na Junta de Freguesia, em rede aberta. Posto de carregamento de telemóvel também disponível. Internet também disponível no Bar Unidos (rede Unidos-Starlink).',
    },
    {
      id: 'resource-whatsapp',
      title: 'Grupo WhatsApp',
      description: 'Grupo comunitário com informações atualizadas sobre a situação na freguesia.',
      link: 'https://chat.whatsapp.com/FisY199oJlgB3umsP5tfoG',
      linkLabel: 'Entrar no grupo →',
    },
    {
      id: 'resource-door-to-door',
      title: 'Apoio porta a porta',
      description:
        'A Junta, Conferência São Vicente de Paulo e Cáritas de Leiria estão a realizar visitas porta a porta para verificar o estado das pessoas e habitações. Se conhecer alguém que precise de ajuda, alerte a Junta.',
    },
    {
      id: 'resource-sos-leiria',
      title: 'SOS Leiria',
      description: 'Plataforma de reporte de emergências para Leiria, Portugal. Funciona offline.',
      link: 'https://sosleiria.pt/',
      linkLabel: 'Aceder →',
    },
    {
      id: 'resource-tempestades-sos',
      title: 'Tempestades SOS',
      description: 'Plataforma para pedir ou fornecer ajuda em caso de tempestades.',
      link: 'http://tempestadesos.com/',
      linkLabel: 'Aceder →',
    },
  ],

  communityEvents: [
    {
      id: 'community-event-2',
      title: 'Ações diárias',
      date: 'Todos os dias',
      time: '8h00 e 14h00',
      description: 'Junte-se a nós para ajudar a nossa comunidade.',
      meetingPoints: [{ locality: 'Amor', location: 'Junta de Freguesia de Amor' }],
      note: 'Não dispomos de alimentos para oferecer aos voluntários',
    },
  ],

  transport: [
    {
      id: 'transport-bus',
      provider: 'Transportes públicos',
      title: 'Rotas adaptadas',
      description:
        'Existem adaptações às rotas habituais devido aos estragos. As rotas habituais serão repostas assim que os autocarros consigam passar.',
      details: ['Sem informação sobre paragens temporárias'],
      period: 'Até restabelecimento',
    },
  ],

  administrative: [
    {
      id: 'admin-formulario-doacoes',
      title: 'Formulário de necessidades — Doações',
      description:
        'Formulário da Junta de Freguesia para recolher dados e agilizar a distribuição de doações à população afetada.',
      link: 'https://tally.so/r/jaQg6a',
      linkLabel: 'Preencher formulário →',
    },
    {
      id: 'admin-support',
      title: 'Pedidos de apoio — Particulares',
      description: 'Plataforma da CCDR Centro para pedidos de apoio por particulares.',
      documents: [
        'Registo fotográfico dos danos',
        'Identificação do proprietário do imóvel',
        'Identificação dos danos',
        'Caderneta Predial Urbana',
        'Certidão do Registo Predial',
        'Comprovativo de IBAN legível',
        'Apólice do seguro (se existir)',
      ],
      link: 'https://sigecandidaturas.ccdrc.pt/',
      linkLabel: 'Aceder à plataforma →',
    },
    {
      id: 'admin-housing',
      title: 'Declaração de danos — Particulares',
      description: 'Formulário para declaração de prejuízos em habitações particulares causados pelas tempestades.',
      link: 'https://shorturl.at/febPL',
      linkLabel: 'Preencher formulário →',
    },
    {
      id: 'admin-business',
      title: 'Declaração de danos — Empresas',
      description: 'Formulário para declaração de estragos causados pelas intempéries em empresas e indústrias.',
      link: 'https://shorturl.at/4q1yC',
      linkLabel: 'Preencher formulário →',
    },
    {
      id: 'admin-agriculture',
      title: 'Declaração de danos — Agrícolas',
      description:
        'Plataforma da CCDR Centro para declaração de prejuízos agrícolas. Agricultores devem proceder ao registo com a maior brevidade.',
      link: 'https://pdp25.ccdrc.pt/pdp_nologin.php',
      linkLabel: 'Aceder à plataforma →',
    },
    {
      id: 'admin-sports',
      title: 'Apoio a clubes e instalações desportivas',
      description:
        'Candidaturas gratuitas à Medida I.3 do Contrato-Programa de Desenvolvimento Desportivo 2024-2028 (Comité Olímpico de Portugal) para requalificação de instalações desportivas. Até 50% do custo, máximo 45.000€.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScBRedfQl69bEHHNRMXfQVrjrtgV4hhSPUnlDx1enFn8Cv0-A/viewform',
      linkLabel: 'Preencher formulário →',
      note: 'Prazo: até 5 de março de 2026. Serviço gratuito da Fullback.',
    },
    {
      id: 'admin-agricultural-support',
      title: 'Apoio para restabelecimento do potencial produtivo',
      description:
        'Apoios agrícolas para restabelecimento do potencial produtivo afetado pela Tempestade Kristin (3.º concurso). Submissão de candidaturas válida até 30 de abril de 2026.',
      link: 'https://pepacc.pt/concursos/restabelecimento-do-potencial-produtivo-tempestade-kristin-3o-concurso/',
      linkLabel: 'Ver concurso →',
      note: 'Prazo: até 30 de abril de 2026.',
    },
    {
      id: 'admin-caderneta',
      title: 'Caderneta predial para seguro',
      description: 'Obtenção gratuita de caderneta predial. Envie o artigo matricial e o NIF.',
      contacts: [
        {
          type: 'email',
          value: 'geral@sofiafernandes.net',
          display: 'geral@sofiafernandes.net',
        },
        {
          type: 'whatsapp',
          value: '351919092984',
          display: '919 092 984',
        },
      ],
      note: 'Serviço gratuito.',
    },
  ],

  environment: [
    {
      id: 'env-oleos',
      icon: 'oil',
      title: 'Óleos alimentares usados',
      description:
        'Pode depositar os óleos alimentares usados no oleão localizado junto à Farmácia Laranjeira Pais, na Rua das Fontainhas, em Amor.',
      location: 'Rua das Fontainhas, junto à Farmácia Laranjeira Pais',
      note: 'Em Portugal são produzidos cerca de 60 milhões de litros de óleos alimentares usados por ano. 1 litro de óleo usado pode poluir cerca de 1 milhão de litros de água.',
    },
    {
      id: 'env-lampadas',
      icon: 'lamp',
      title: 'Lâmpadas usadas',
      description:
        'A Junta de Freguesia de Amor é ponto de recolha de lâmpadas usadas, recolhidas pela ERP Portugal — Associação Gestora de Resíduos. Aceitam-se lâmpadas tubulares e lâmpadas economizadoras (LED e fluorescentes).',
      location: 'Junta de Freguesia de Amor',
    },
    {
      id: 'env-pilhas',
      icon: 'battery',
      title: 'Pilhas usadas',
      description:
        'Existem pilhões para deposição de pilhas usadas distribuídos pela freguesia, em parceria com a ERP Portugal.',
    },
    {
      id: 'env-monos',
      icon: 'monos',
      title: 'Monos e equipamentos elétricos (REEE)',
      description:
        'Pode depositar monos (móveis, eletrodomésticos e outros volumosos) na sede da Junta de Freguesia, durante o horário de expediente. O Município de Leiria disponibiliza também serviço gratuito de recolha de monos ao domicílio, mediante marcação prévia.',
      location: 'Junta de Freguesia de Amor (horário de expediente)',
    },
    {
      id: 'env-textil',
      icon: 'textile',
      title: 'Roupa, têxteis, calçado, brinquedos e livros',
      description:
        'A Junta de Freguesia tem um protocolo de cooperação com o Projeto Esperança — Cooperativa de Solidariedade Social — para recolha de roupa, têxteis, calçado, brinquedos e livros, através de contentores distribuídos pela freguesia.',
    },
  ],

  contact: {
    entity: 'Junta de Freguesia de Amor',
    municipality: 'Leiria',
    address: 'Largo Padre Margalhau, nº 3, 2400-788 Amor',
    phone: '+351244861144',
    mobile: '927589981',
    email: 'geral@jf-amor.pt',
    facebook: 'https://www.facebook.com/freguesiadeamor.junta',
    website: 'https://infoamor.org',
    message: 'Para mais informações ou assistência, dirija-se à Junta de Freguesia.',
  },
}
