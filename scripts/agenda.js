
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),
      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd')
      }
    },
    mes: dayjs(data).format('MMMMM'),
    hora: dayjs(data).format('HH:mm')
  }
};

//estrutura de objeto
//Coletando os Dados
const atv = {
  nome: 'Almoço',
  data: new Date('2024-07-13 13:00'),
  finalizada: true
};
//lista, da pra colocar qualuqer coisa aqui dentro
let atvs = [
  atv,
  {
    nome: 'Acaedemia em grupo',
    data: new Date('2024-07-09 12:00'),
    finalizada: false
  },
  
  {
    nome: 'Gaming session',
    data: new Date('2024-07-10 01:00'),
    finalizada: true
  },
];

//atvs = []

//Arrow function para a criação dos itens
//processando os dados
const itemAtv = (atv) => {

  //controle de fluxo
  let input = `<input onchange="completAtv(event)" value="${atv.data}" type="checkbox" `
  if(atv.finalizada){
   input += ' checked' 
  }
  input += '>'

  const formatar = formatador(atv.data);

  return `
  <div class="card-bg">
    ${input}
    <div>
      <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.50008 9.00002L8.16675 10.6667L11.5001 7.33335M17.3334 9.00002C17.3334 13.6024 13.6025 17.3334 9.00008 17.3334C4.39771 17.3334 0.666748 13.6024 0.666748 9.00002C0.666748 4.39765 4.39771 0.666687 9.00008 0.666687C13.6025 0.666687 17.3334 4.39765 17.3334 9.00002Z" stroke="#BEF264" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="inactive" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41664 0.818364C8.46249 0.615965 9.53745 0.615965 10.5833 0.818364M10.5833 17.1817C9.53745 17.3841 8.46249 17.3841 7.41664 17.1817M13.6741 2.10086C14.5587 2.70022 15.3197 3.46409 15.9158 4.35086M0.818303 10.5834C0.615904 9.53751 0.615904 8.46255 0.818303 7.4167M15.8991 13.6742C15.2998 14.5588 14.5359 15.3198 13.6491 15.9159M17.1816 7.4167C17.384 8.46255 17.384 9.53751 17.1816 10.5834M2.1008 4.32586C2.70016 3.44131 3.46403 2.68026 4.3508 2.0842M4.3258 15.8992C3.44124 15.2998 2.6802 14.536 2.08414 13.6492" stroke="#A1A1AA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${atv.nome}</span>
    </div>
    <time class="short">
      ${formatar.dia.semana.curto}
      ${formatar.dia.numerico} <br>
      ${formatar.hora}
    </time>

    <time class="full">${formatar.dia.semana.longo}, 
    dia ${formatar.dia.numerico}
    de ${formatar.mes} 
    às ${formatar.hora}
    </time>
  </div>
  `
};

const reloadAtvs = () => {
  const section =  document.querySelector('section');
  section.innerHTML = ''

  //verificação dos conteudos da lista
  if(atvs.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade encontrada.</p>`
    return
  }

  for (let atv of atvs) {
  //Pra retornar somente oq ta dentro da funcção tem que utilizar o ()
  section.innerHTML += itemAtv (atv);
  }; 
};
reloadAtvs()

const salvarAtv = (event) => {
  event.preventDefault()
  //pegar os dados do formulário
  const dadosDoFormulario = new FormData(event.target)
  const nome = dadosDoFormulario.get('atividade')
  const dia = dadosDoFormulario.get('data')
  const hora = dadosDoFormulario.get('hora')
  const data = `${dia} ${hora}`

  const atv = {
    nome,
    data, 
    finalizada: false
  };

  const exist = atvs.find((a) => {
    return a.data == atv.data
  })

  if(exist){
    return alert('Dia/Hora não disponível')
  }

  atvs = [atv, ... atvs]
  reloadAtvs()
};

const completAtv = (event) => {
  const inputt = event.target
  const inputData = inputt.value

  const atv  = atvs.find((atv) => {
    return atv.data == inputData
  })

  if(!atv) {
    return
  }

  atv.finalizada = !atv.finalizada
  
}


const test = () => {
  return`
  <p> Olá mundo</p>

`
}

