export type AlertLevel = 'danger' | 'warning' | 'info'

export interface Alert {
  id: string
  level: AlertLevel
  title: string
  description: string
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
  contact: ContactInfo
}

export const siteContent: SiteContent = {
  meta: {
    title: 'Info Amor',
    subtitle: 'Informações de Emergência — Tempestade Kristin',
    lastUpdated: '6 de Fevereiro de 2026',
  },

  navSections: [
    { id: 'servicos', label: 'Serviços' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'limpeza', label: 'Limpeza' },
    { id: 'transporte', label: 'Transporte' },
    { id: 'declaracoes', label: 'Apoios' },
    { id: 'contactos', label: 'Contactos' },
    { id: 'meteo', label: 'Meteo' },
  ],

  alerts: [
{
      id: 'alert-gandara',
      level: 'danger',
      title: 'Estrada da Gândara–Barreiros',
      description: 'Abre e fecha conforme a chuva e altura da água. Verifique antes de passar.',
    },
    {
      id: 'alert-roads-info',
      level: 'info',
      title: 'Estado dos acessos',
      description: 'A17 pelo Campo: Fechado. Barreiros–Ponta da Pedra: Fechado. Monte Real (Rua da Base Aérea): Aberto. Marinha Grande (Casalito, Casal Novo, Coucinheira): Aberto.',
    },
{
      id: 'alert-damages',
      level: 'warning',
      title: 'Declare os seus estragos',
      description: 'Preencha as declarações de prejuízos agrícolas, empresariais e em habitações com a maior brevidade possível.',
    },
    {
      id: 'alert-internet-junta',
      level: 'warning',
      title: 'Internet limitada na Junta',
      description: 'De momento, temos internet muito limitada na Junta de Freguesia, o que não nos vai permitir atender todos os fregueses com a rapidez que gostaríamos.',
    },
    {
      id: 'alert-colegio-dinis-melo',
      level: 'danger',
      title: 'Colégio Dinis de Melo — Reabertura terça-feira, 10 de Fevereiro',
      description: 'Atividades letivas retomam na terça-feira. Almoço disponível (prato único). Horários enviados por email e Teams. Alunos devem levar material básico: caderno, canetas e lápis de cor. Inovar indisponível por falta de rede. Transporte escolar retoma horário habitual.',
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
      status: 'partial',
      statusLabel: 'Parcial',
      description:
        'Falhas de abastecimento na zona das Barradas, Brejieira e Toco. Estão a tentar restabelecer nas próximas horas.',
      warning: 'Cuidado com cabos caídos — não toque, podem ter energia.',
      link: 'https://balcaodigital.e-redes.pt/home/risky',
      linkLabel: 'Reportar cabos perigosos →',
      links: [
        {
          url: 'https://balcaodigital.e-redes.pt/anomalies/without-light',
          label: 'Reportar falta de luz em casa →',
        },
      ],
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
      status: 'outage',
      statusLabel: 'Inoperacional',
      description: 'Terminais de pagamento e caixas automáticas sem serviço.',
    },
    {
      id: 'service-schools',
      name: 'Escolas',
      status: 'operational',
      statusLabel: 'Operacional',
      description: 'Todas as escolas continuam abertas. Estamos a proceder às restantes reparações o mais rapidamente possível.',
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
      name: 'Correio',
      status: 'partial',
      statusLabel: 'Parcial',
      description: 'Apenas entrega de cartas registadas e encomendas. Não se efetuam envios.',
    },
    {
      id: 'service-pharmacy',
      name: 'Farmácia',
      status: 'operational',
      statusLabel: 'Operacional',
      description:
        'Os serviços de farmácia estão operacionais. Apesar de com alguns problemas informáticos e dificuldade no uso de cartões de multibanco.',
    },
    {
      id: 'service-pensions',
      name: 'Vales e reformas',
      status: 'outage',
      statusLabel: 'Indisponível',
      description:
        'Não é possível efetuar o pagamento de vales e reformas na Junta de Freguesia. Por favor, dirijam-se a Leiria.',
    },
  ],

  resources: [
    {
      id: 'resource-food',
      title: 'Alimentação',
      description:
        'Refeições disponíveis na Junta de Freguesia e no Estádio Municipal (Porta 10). Doações de alimentos aceites na Junta.',
    },
    {
      id: 'resource-shower',
      title: 'Banho Quente',
      description: 'Vários locais na região com banhos quentes disponíveis para a população afetada.',
      locations: [
        'CRC 22 Junho (Amor)',
        'Leroy Merlin (Leiria)',
        'Junta de Freguesia dos Parceiros',
        'Pavilhão Desportivo do Souto da Carpalhosa',
        'Campo de Futebol da Batalha',
        'Piscinas Municipais de Porto de Mós',
        'Piscinas Municipais de Alcobaça',
        'Colégio São Miguel (Fátima)',
        'Base Aérea nº 5 – Monte Real (Pavilhão)',
        'Pavilhão Desportivo de Santa Eufémia',
        'União Desportiva de Santa Catarina da Serra',
        'ADCCMI da Cruz da Areia',
      ],
    },
    {
      id: 'resource-debris',
      title: 'Entulho, telhas, fibrocimento e verdes',
      description: 'Depositar no campo de futebol do Casalito. O espaço está dividido conforme o tipo de material.',
      warning: 'Não depositar junto ao estaleiro da Junta (Marinheira).',
    },
    {
      id: 'resource-tarpaulin',
      title: 'Lonas',
      description: 'Pode requisitar lona na Junta de Freguesia (traga as medidas) ou recolher no Pavilhão dos Pousos.',
      warning: 'Apenas se entregam lonas para cobrir habitações primárias.',
    },
    {
      id: 'resource-tiles',
      title: 'Telhas e material de construção',
      description: 'Está a ser criado um depósito no Mercado do Falcão (Marrazes). Até lá, podem deslocar-se ao Estádio Municipal — levem um exemplar da telha e as quantidades necessárias. Para doações, estamos a aceitar na Junta.',
    },
    {
      id: 'resource-internet',
      title: 'Internet e carregamento',
      description: 'Ligação wireless disponível na Junta de Freguesia, em rede aberta. Posto de carregamento de telemóvel também disponível.',
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
      id: 'transport-bolt',
      provider: 'Bolt',
      title: 'Viagens gratuitas',
      description: 'Deslocações gratuitas de Amor até ao Estádio Municipal de Leiria.',
      details: ['Até 20€ por viagem', 'Máximo de 4 viagens por utilizador'],
      period: '3 a 15 de Fevereiro',
    },
    {
      id: 'transport-bus',
      provider: 'Transportes públicos',
      title: 'Rotas adaptadas',
      description: 'Existem adaptações às rotas habituais devido aos estragos. As rotas habituais serão repostas assim que os autocarros consigam passar.',
      details: ['Sem informação sobre paragens temporárias'],
      period: 'Até restabelecimento',
    },
  ],

  administrative: [
    {
      id: 'admin-support',
      title: 'Pedidos de apoio — Particulares',
      description:
        'Plataforma da CCDR Centro para pedidos de apoio por particulares.',
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
      description:
        'Formulário para declaração de prejuízos em habitações particulares causados pelas tempestades.',
      link: 'https://shorturl.at/febPL',
      linkLabel: 'Preencher formulário →',
    },
    {
      id: 'admin-business',
      title: 'Declaração de danos — Empresas',
      description:
        'Formulário para declaração de estragos causados pelas intempéries em empresas e indústrias.',
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
