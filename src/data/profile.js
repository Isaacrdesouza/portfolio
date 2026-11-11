/**
 * ============================================================
 *  DADOS DO PORTFÓLIO — edite apenas este arquivo
 * ============================================================
 *  Tudo o que aparece no site vem daqui.
 *
 *  Campos vazios ('') são tratados assim:
 *   - em desenvolvimento (npm run dev): aparecem como um aviso
 *     tracejado "A preencher", para você saber o que falta;
 *   - em produção (site publicado): ficam ocultos, para que
 *     nenhum link quebrado ou texto provisório chegue ao recrutador.
 * ============================================================
 */

export const profile = {
  name: 'Isaac Rodrigues de Souza',
  // Iniciais usadas no logotipo do menu (ex.: 'MG')
  initials: 'IS',
  role: 'Desenvolvedor de Software',
  location: 'Americana – SP',

  available: true,
  availabilityText: 'Disponível para oportunidades',

  headline: 'Transformando problemas reais em soluções tecnológicas.',
  subheadline:
    'Estudante de Análise e Desenvolvimento de Sistemas, com experiência prática em desenvolvimento de aplicações e interesse em sistemas empresariais, automação de processos e tecnologia.',

  links: {
    github: 'https://github.com/Isaacrdesouza',
    linkedin: 'https://www.linkedin.com/in/isaac-rodrigues-de-souza',
    email: 'isaacdevsouza@gmail.com',
    resume: '', // opcional: '/curriculo.pdf' (coloque o arquivo em /public)
  },
};

export const about = {
  intro:
    'Sou formado no Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas pela ETEC Polivalente e atualmente curso Análise e Desenvolvimento de Sistemas na UNIP.',
  paragraphs: [
    'Tenho interesse em tecnologia aplicada à resolução de problemas reais, especialmente no desenvolvimento de sistemas, automação de processos e soluções empresariais.',
    'Busco oportunidades que me permitam aplicar meus conhecimentos técnicos, desenvolver novas competências e contribuir para a implementação e melhoria de soluções tecnológicas.',
  ],
  highlights: [
    {
      icon: 'graduation',
      label: 'Formação',
      text: 'Técnico em Desenvolvimento de Sistemas (ETEC Polivalente) concluído e graduação em ADS (UNIP) em andamento.',
    },
    {
      icon: 'code',
      label: 'Experiência prática',
      text: 'Criação de um sistema para gerenciamento de inspeções de risco, usado no dia a dia de uma empresa: organização de atividades, distribuição de tarefas e automação de processos operacionais.',
    },
    {
      icon: 'layers',
      label: 'Foco atual',
      text: 'Estudos direcionados ao ecossistema TOTVS, com foco no ERP Protheus, ADVPL e ferramentas relacionadas.',
    },
    {
      icon: 'target',
      label: 'Interesses',
      text: 'Implantação de ERP, sistemas empresariais, automação e otimização de processos e IA aplicada.',
    },
  ],
};

/**
 * status:
 *  'pratica'     → já utilizado na prática (projetos, estudos aplicados)
 *  'aprendizado' → em estudo / aprendizado
 */
export const skillGroups = [
  {
    title: 'Linguagens e Web',
    icon: 'code',
    items: [
      { name: 'JavaScript', status: 'pratica' },
      { name: 'Python', status: 'pratica' },
      { name: 'HTML', status: 'pratica' },
      { name: 'CSS', status: 'pratica' },
    ],
  },
  {
    title: 'Back-end e Mobile',
    icon: 'terminal',
    items: [
      { name: 'Node.js', status: 'pratica' },
      { name: 'React Native', status: 'pratica' },
      { name: 'Expo', status: 'pratica' },
    ],
  },
  {
    title: 'Banco de dados',
    icon: 'database',
    items: [
      { name: 'SQL', status: 'pratica' },
      { name: 'MySQL', status: 'pratica' },
      { name: 'SQL Server', status: 'pratica' },
    ],
  },
  {
    title: 'Conceitos',
    icon: 'brackets',
    items: [
      { name: 'Lógica de programação', status: 'pratica' },
      { name: 'POO', status: 'pratica' },
      { name: 'Análise e modelagem de sistemas', status: 'pratica' },
      { name: 'Sistemas ERP', status: 'pratica' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: 'tool',
    items: [
      { name: 'Git', status: 'pratica' },
      { name: 'GitHub', status: 'pratica' },
      { name: 'VS Code', status: 'pratica' },
    ],
  },
  {
    title: 'Ecossistema TOTVS',
    icon: 'layers',
    accent: true,
    items: [
      { name: 'Protheus', status: 'aprendizado' },
      { name: 'ADVPL', status: 'aprendizado' },
      { name: 'Terminal da Informação', status: 'aprendizado' },
    ],
  },
];

/**
 * PROJETOS
 * Para adicionar um projeto, copie um objeto e preencha.
 * Imagens: coloque os arquivos em /public/projects/<pasta>/ e informe o caminho
 * em `src` (ex.: '/projects/inspecoes/web-painel.png'). Enquanto `src` estiver
 * vazio, o site mostra uma moldura reservada para a captura.
 */
export const projects = [
  {
    id: 'inspecoes',
    number: '01',
    featured: true,
    inUse: 'Em uso no dia a dia de uma empresa',
    title: 'Sistema de Gerenciamento de Inspeções',
    tagline: 'Gestão e execução de inspeções de risco para o setor de seguros',
    description:
      'Desenvolvimento de uma aplicação voltada à gestão e execução de inspeções de risco para o setor de seguros, buscando digitalizar processos operacionais e reduzir atividades manuais. A aplicação é utilizada no dia a dia de uma empresa do setor.',
    problem:
      'Inspeções de risco envolvem muitas etapas manuais: distribuir vistorias entre a equipe, acompanhar o andamento pelo escritório e organizar um grande volume de fotografias tiradas em campo. Feito à mão, esse fluxo é lento, sujeito a erros e difícil de acompanhar.',
    solution:
      'Uma aplicação que conecta escritório e campo: o escritório distribui e gerencia as inspeções, o inspetor executa pelo aplicativo mobile e as fotos já chegam organizadas e renomeadas automaticamente — menos retrabalho e um processo mais padronizado.',
    features: [
      'Distribuição de inspeções entre colaboradores',
      'Gerenciamento de atividades pelo escritório',
      'Aplicativo mobile para realização das inspeções',
      'Coleta de dados em formulários de campo',
      'Captura e organização de fotografias',
      'Renomeação automatizada de imagens',
      'Organização dos dados e processos de inspeção',
    ],
    stack: ['JavaScript', 'React Native', 'Expo'],
    media: {
      web: { src: '', alt: 'Interface web do sistema de inspeções — painel do escritório' },
      mobile: { src: '', alt: 'Aplicativo mobile do sistema de inspeções — execução em campo' },
      gallery: [
        // { src: '/projects/inspecoes/captura-1.png', alt: 'Descrição da captura' },
      ],
    },
    links: {
      demo: '', // link para demonstração, se houver
      repo: '', // link para o repositório, se público
    },
    // true = código não é público (exibe aviso discreto no lugar do link)
    repoPrivate: true,
  },
];

/**
 * Áreas reservadas para próximas publicações.
 * Não são projetos — são espaços preparados. Quando publicar um projeto,
 * adicione-o ao array `projects` acima e remova a área correspondente daqui.
 */
export const upcomingAreas = [
  { icon: 'terminal', title: 'Aplicações Python' },
  { icon: 'plug', title: 'Integrações com APIs' },
  { icon: 'sparkles', title: 'Inteligência Artificial' },
  { icon: 'database', title: 'Banco de dados SQL' },
  { icon: 'building', title: 'Sistemas empresariais' },
  { icon: 'layers', title: 'Ecossistema TOTVS' },
];

/**
 * FORMAÇÃO — preencha instituição e período.
 */
export const education = [
  {
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    short: 'ADS — UNIP, em andamento',
    status: 'Em andamento',
    current: true,
    institution: 'UNIP — Universidade Paulista (EAD)',
    period: '2026 — 2027 (previsão de conclusão)',
  },
  {
    title: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas',
    short: 'Técnico em Desenv. de Sistemas',
    status: 'Concluído',
    current: false,
    institution: 'ETEC Polivalente',
    period: '2022 — 2024',
  },
];

export const courses = {
  provider: 'Alura',
  items: [
    'Python',
    'JavaScript',
    'HTML e CSS',
    'Git e GitHub',
    'Desenvolvimento Web',
    'Lógica de Programação',
    'Inteligência Artificial',
    'Boas Práticas de Desenvolvimento',
  ],
};

export const languages = [
  { name: 'Inglês', level: 'Intermediário — leitura de documentação técnica' },
];

export const studies = {
  intro:
    'Aprendizado contínuo faz parte da forma como trabalho. Hoje, meus estudos estão concentrados em sistemas empresariais — e no que é preciso para implantá-los bem.',
  currentFocus: ['ERP Protheus', 'ADVPL'],
  items: [
    {
      icon: 'layers',
      title: 'Ecossistema TOTVS',
      text: 'Compreensão das soluções TOTVS e de como apoiam a gestão das empresas.',
      tag: 'Foco principal',
    },
    {
      icon: 'building',
      title: 'ERP Protheus',
      text: 'Estrutura do sistema, módulos e sua relação com os processos de negócio.',
      tag: 'Foco principal',
    },
    {
      icon: 'brackets',
      title: 'ADVPL',
      text: 'Primeiros passos na linguagem de customização do Protheus.',
      tag: 'Em aprendizado',
    },
    {
      icon: 'code',
      title: 'Desenvolvimento JavaScript',
      text: 'Aprofundamento na linguagem que uso no desenvolvimento de aplicações.',
      tag: 'Contínuo',
    },
    {
      icon: 'terminal',
      title: 'Python',
      text: 'Scripts, automação de tarefas e manipulação de dados.',
      tag: 'Contínuo',
    },
    {
      icon: 'sparkles',
      title: 'IA aplicada ao desenvolvimento',
      text: 'Uso de inteligência artificial como ferramenta para construir soluções melhores.',
      tag: 'Contínuo',
    },
  ],
};

export const contact = {
  title: 'Vamos conversar sobre tecnologia?',
  text: 'Estou aberto a oportunidades profissionais, novos desafios e conexões com pessoas da área de tecnologia.',
};

export const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'competencias', label: 'Competências' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'estudos', label: 'Estudos' },
  { id: 'contato', label: 'Contato' },
];
