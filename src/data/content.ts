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
  link?: string
  linkLabel?: string
}

export interface Resource {
  id: string
  title: string
  description: string
  location?: string
  warning?: string
  link?: string
  linkLabel?: string
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
    { id: 'declaracoes', label: 'Declarações' },
    { id: 'meteo', label: 'Meteorologia' },
    { id: 'contactos', label: 'Contactos' },
  ],

  alerts: [
    {
      id: 'alert-leonardo',
      level: 'danger',
      title: 'Depressão Leonardo — Agravamento do mau tempo',
      description:
        'Aviso amarelo para chuva e vento (00h – 15h, rajadas até 90 km/h). Solos saturados — risco de cheias nas zonas baixas. Evite deslocações desnecessárias e afaste-se de zonas inundáveis.',
    },
    {
      id: 'alert-cables',
      level: 'danger',
      title: 'Cuidado com cabos elétricos caídos',
      description: 'Não toque em cabos caídos. Podem conter energia. Mantenha distância e contacte as autoridades.',
    },
    {
      id: 'alert-cleanup',
      level: 'info',
      title: 'Ação de Limpeza Comunitária — Sábado, 7 de Fevereiro às 9h',
      description: 'Vamos limpar a nossa freguesia! Consulte os detalhes na secção abaixo.',
    },
    {
      id: 'alert-materials',
      level: 'danger',
      title: 'Urgente — Lonas, telha e chapa',
      description: 'Precisamos com urgência de lonas, telha e chapa. Entregue na Junta de Freguesia.',
    },
    {
      id: 'alert-damages',
      level: 'warning',
      title: 'Declare os seus estragos',
      description: 'Preencha as declarações de prejuízos agrícolas e empresariais com a maior brevidade possível.',
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
        'Fornecimento parcialmente reposto. Algumas zonas ainda sem energia. Consulte a E-Redes para atualizações.',
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
      description: 'Todas as escolas e jardins de infância estão abertos.',
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
      status: 'outage',
      statusLabel: 'Inoperacional',
      description: 'Serviço de correio não disponível.',
    },
    {
      id: 'service-pharmacy',
      name: 'Farmácia',
      status: 'operational',
      statusLabel: 'Operacional',
      description:
        'Os serviços de farmácia estão operacionais. Apesar de com alguns problemas informáticos e dificuldade no uso de cartões de multibanco.',
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
      id: 'resource-debris',
      title: 'Entulho, telhas e fibrocimento',
      description: 'Depositar no campo de futebol do Casalito.',
      warning: 'Não depositar junto ao estaleiro da Junta (Marinheira).',
    },
    {
      id: 'resource-internet',
      title: 'Internet e carregamento',
      description: 'Ponto de acesso Wi-Fi e posto de carregamento de telemóvel disponíveis na Junta de Freguesia.',
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
      description: 'Plataforma para pedir or fornecer ajuda em caso de tempestades.',
      link: 'https://tempestades-sos.pt/',
      linkLabel: 'Aceder →',
    },
  ],

  communityEvents: [
    {
      id: 'community-event-1',
      title: 'Ação de Limpeza Comunitária',
      date: 'Sábado, 7 de Fevereiro',
      time: '9h00',
      description: 'Junte-se a nós para limpar a freguesia. Encontre-se num dos pontos de concentração indicados.',
      meetingPoints: [
        { locality: 'Amor', location: 'Largo Padre Margalhau' },
        { locality: 'Barreiros', location: 'Largo da Igreja' },
        { locality: 'Casal dos Claros', location: 'Largo da Igreja' },
        { locality: 'Casal Novo', location: 'Campo de Futebol' },
      ],
      materials: ['Pás', 'Vassouras e ancinhos', 'Tratores e carrinhas', 'Luvas (temos disponíveis na Junta)'],
      note: 'Não dispomos de alimentos para oferecer aos voluntários. Muitas mãos fazem trabalho ligeiro!',
    },
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
  ],

  administrative: [
    {
      id: 'admin-agriculture',
      title: 'Declaração de estragos agrícolas',
      description:
        'A CCDR Centro disponibiliza plataforma para declaração de prejuízos agrícolas causados pelas tempestades. Agricultores da região Centro devem proceder ao registo com a maior brevidade possível.',
      link: 'https://www.ccdrc.pt/pt/ccdr-centro-disponibiliza-plataforma-para-declaracao-de-prejuizos-agricolas-causados-pelas-tempestades/',
      linkLabel: 'Aceder à plataforma CCDR →',
    },
    {
      id: 'admin-business',
      title: 'Declaração de estragos — Empresas e Indústrias',
      description:
        'Preencha o formulário de declaração de estragos causados pelas intempéries para que as entidades municipais possam agilizar os apoios necessários. A colaboração de todos é fundamental para processos de apoio mais rápidos e eficazes.',
      link: 'https://arcg.is/1TGfb43',
      linkLabel: 'Preencher formulário →',
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
    website: 'http://jf-amor.pt',
    message: 'Para mais informações ou assistência, dirija-se à Junta de Freguesia.',
  },
}
