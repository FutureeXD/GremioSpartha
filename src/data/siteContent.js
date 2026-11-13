// Edite aqui os textos, propostas, integrantes, imagens e canais da chapa.
export const site = {
  name: 'Spartha', slogan: 'Juntos somos mais fortes!', school: 'Escola Zacarias Antonio', number: '300',
  intro: 'Uma escola melhor se constrói com a união de todos. Queremos ouvir os estudantes, aproximar as turmas e transformar boas ideias em propostas.',
  about: 'A Spartha acredita na força da participação. Nossa vontade é construir, junto com os estudantes, uma escola mais acolhedora, integrada e cheia de oportunidades.',
  mascot: { name: 'Dório', title: 'O guardião da Spartha', description: 'Dório é a tartaruga e mascote oficial da chapa Spartha. Leal, corajoso, determinado e inteligente, ele está sempre pronto para ajudar.', values: 'Ele representa união, resistência, coragem e compromisso com os estudantes. Sua mensagem é que uma escola forte se constrói com a união de todos.', quote: 'Uma escola forte se constrói com a união de todos!' },
  // Coloque arquivos em public/images e informe os caminhos abaixo, por exemplo: '/images/logo.png'.
  images: { logo: '', mascot: '/images/Dório, guardião espartano.png', mascotPortrait: '/images/Mascote tartaruga espartana em emblema dourado.png' },
  // Exemplo: { name: 'Nome', role: 'Função', description: 'Descrição', photo: '/images/foto.jpg' }
  members: [
    { name: 'Miguel Almeida', role: 'Coordenador geral', className: '9º B' },
    { name: 'Vitoria', role: 'Vice coordenadora geral', className: '9º C' },
    { name: 'Gabrielly', role: 'Coordenadora artística', className: '8º D' },
    { name: 'Kaik', role: 'Coordenador desportivo', className: '8º B' },
    { name: 'Paula', role: 'Coordenadora comunicativa', className: '8º B' },
    { name: 'Guilherme', role: 'Coordenador de saúde e sustentabilidade', className: '1º D' },
    { name: 'Manuelly', role: 'Coordenador comunitário', className: '7º B' },
    { name: 'Sarah', role: 'Coordenador de convivência', className: '1º A' },
  ],
  // Exemplo: { label: 'Instagram', url: 'https://...' }. Só aparecem canais preenchidos.
  contacts: [],
};

// Acrescente, edite ou remova propostas nesta lista. O ícone deve existir no mapa em App.jsx.
export const proposals = [
 { title:'Queremos a biblioteca de volta', category:'Educação e cultura', icon:'book', description:'Buscar a volta de um espaço na escola onde os estudantes possam ler e ter acesso a livros.' },
 { title:'Gincanas, desafios e premiações', category:'Integração e participação', icon:'trophy', description:'Propor gincanas e desafios, inclusive ligados às lições. Os participantes poderão concorrer a produtos ou outros itens comprados com recursos arrecadados pelo grêmio; não haverá prêmios em dinheiro.' },
 { title:'Interescolas', category:'Esporte e integração', icon:'medal', description:'Buscar a realização de competições e atividades com outras escolas, para aproximar estudantes de diferentes comunidades.' },
 { title:'Trote de integração', category:'Integração e participação', icon:'users', description:'Propor atividades divertidas para aproximar as turmas. A ideia é que a participação seja voluntária, com respeito e sem constrangimento ou humilhação.' },
 { title:'Trazer a Semana Zacarias de volta', category:'Educação e cultura', icon:'calendar', description:'Buscar a volta gradual da Semana Zacarias, com palestras e apresentações, incluindo releituras de músicas e filmes. A ideia é adaptar as atividades à rotina escolar, sem deixar uma semana inteira sem aulas.' },
 { title:'Festa à fantasia', category:'Cultura e eventos', icon:'sparkles', description:'Propor uma festa à fantasia para reunir os estudantes, com espaço para criatividade e diversão. Uma possibilidade é usar o Halloween como tema.' },
 { title:'Um interclasse mais organizado', category:'Esporte e integração', icon:'flag', description:'Trabalhar por um interclasse com atividades e competições mais organizadas entre as turmas, incentivando o esporte, o respeito e o trabalho em equipe.' },
 { title:'Horta escolar', category:'Sustentabilidade', icon:'sprout', description:'Buscar a criação de uma horta para que os estudantes participem do cultivo e aprendam sobre alimentação e meio ambiente.' },
 { title:'Projeto de reciclagem', category:'Sustentabilidade', icon:'recycle', description:'Propor ações para separar e descartar os materiais corretamente, incentivando o cuidado com o meio ambiente na escola.' },
 { title:'Valorização da saúde mental', category:'Cuidado e bem-estar', icon:'heart', description:'Divulgar o serviço de psicologia disponível na escola e incentivar os estudantes a conhecê-lo.' },
 { title:'Melhoria da estrutura escolar', category:'Cuidado e bem-estar', icon:'school', description:'Ouvir o que os estudantes precisam e levar à direção sugestões para melhorar os espaços e as condições da escola.' },
 { title:'Eventos escolares', category:'Cultura e eventos', icon:'party', description:'Incentivar eventos e atividades recreativas para tornar a rotina escolar mais divertida e reunir os estudantes.' },
];
