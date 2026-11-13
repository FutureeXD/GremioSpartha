// Edite aqui os textos, propostas, integrantes, imagens e canais da chapa.
export const site = {
  name: 'Spartha', slogan: 'Juntos somos mais fortes!', school: 'Escola Zacarias Antonio', number: '300',
  intro: 'Uma escola melhor se constrói com a união de todos. Queremos ouvir os estudantes, aproximar as turmas e transformar boas ideias em propostas.',
  about: 'A Spartha acredita na força da participação. Nossa vontade é construir, junto com os estudantes, uma escola mais acolhedora, integrada e cheia de oportunidades.',
  mascot: { name: 'Dório', title: 'O guardião da Spartha', description: 'Dório é a tartaruga e mascote oficial da chapa Spartha. Leal, corajoso, determinado e inteligente, ele está sempre pronto para ajudar.', values: 'Ele representa união, resistência, coragem e compromisso com os estudantes. Sua mensagem é que uma escola forte se constrói com a união de todos.', quote: 'Uma escola forte se constrói com a união de todos!' },
  // Coloque arquivos em public/images e informe os caminhos abaixo, por exemplo: '/images/logo.png'.
  images: { logo: '', mascot: '' },
  // Exemplo: { name: 'Nome', role: 'Função', description: 'Descrição', photo: '/images/foto.jpg' }
  members: [],
  // Exemplo: { label: 'Instagram', url: 'https://...' }. Só aparecem canais preenchidos.
  contacts: [],
};

// Acrescente, edite ou remova propostas nesta lista. O ícone deve existir no mapa em App.jsx.
export const proposals = [
 { title:'Queremos a biblioteca de volta', category:'Educação e cultura', icon:'book', description:'Buscar a reativação de um espaço dedicado à leitura e ao acesso a livros para os estudantes.' },
 { title:'Gincanas, desafios e premiações', category:'Integração e participação', icon:'trophy', description:'Promover desafios e atividades, inclusive ligados às lições, com possíveis prêmios em produtos ou itens custeados por recursos arrecadados pelo grêmio, sem pagamentos em dinheiro.' },
 { title:'Interescolas', category:'Esporte e integração', icon:'medal', description:'Buscar competições e atividades com outras escolas, levando a integração para além dos muros da nossa escola.' },
 { title:'Trote de integração', category:'Integração e participação', icon:'users', description:'Organizar atividades divertidas, respeitosas e voluntárias para aproximar as turmas, sem constrangimento ou humilhação.' },
 { title:'Trazer a Semana Acadêmica de volta', category:'Educação e cultura', icon:'calendar', description:'Trabalhar por uma retomada gradual e adaptada, com palestras e apresentações, respeitando a rotina escolar sem interromper uma semana inteira de aulas.' },
 { title:'Festa à fantasia', category:'Cultura e eventos', icon:'sparkles', description:'Propor uma festa à fantasia, com possível temática de Halloween, para celebrar a criatividade e a integração.' },
 { title:'Um interclasse mais organizado', category:'Esporte e integração', icon:'flag', description:'Trabalhar por atividades e competições entre turmas que incentivem o esporte, o respeito e o trabalho em equipe.' },
 { title:'Projeto de horta escolar', category:'Sustentabilidade', icon:'sprout', description:'Buscar a criação de uma horta com participação dos estudantes, incentivando o aprendizado sobre alimentação e meio ambiente.' },
 { title:'Projeto de reciclagem', category:'Sustentabilidade', icon:'recycle', description:'Desenvolver uma proposta para incentivar o descarte adequado de materiais e a conscientização ambiental na escola.' },
 { title:'Valorização da saúde mental', category:'Cuidado e bem-estar', icon:'heart', description:'Divulgar e incentivar os alunos a conhecerem o serviço de psicologia disponível na escola.' },
 { title:'Melhoria da estrutura escolar', category:'Cuidado e bem-estar', icon:'school', description:'Ouvir as necessidades dos estudantes e levar sugestões à direção para melhorar os espaços e as condições da escola.' },
 { title:'Eventos escolares', category:'Cultura e eventos', icon:'party', description:'Incentivar eventos e atividades recreativas para tornar a rotina escolar mais divertida e participativa.' },
];
