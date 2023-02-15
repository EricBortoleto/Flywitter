const textarea = document.querySelector('textarea');
const postar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__listaPosts');

function pegarPost(event) {
  event.preventDefault();
  const postTextarea = textarea.value;
  criarPost(postTextarea);
}

postar.addEventListener('click', pegarPost);

function criarPost(postTexto) {
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  const post = {
    nome: 'Eric Bortoleto',
    foto: 'img/ProfilePic.png',
    usuario: '@ericbortoleto',
    texto: postTexto,
    tempo: `${hora}:${minutos}:${segundos}`,
  };

  listarTemplatePost(post);
}

function listarTemplatePost(post) {
  const { nome, foto, usuario, texto, tempo } = post;

  let li = document.createElement('li');
  li.classList.add('.conteudoPrincipal__post');
  let img = document.createElement('img');
  img.src = foto;
  img.classList.add('post__fotoPerfil');
  let div = document.createElement('div');
  div.classList.add('post__conteudo');
  let h2 = document.createElement('h2');
  h2.innerText = nome;
  let span = document.createElement('span');
  span.innerText = `${usuario} - ${tempo}`;
  let p = document.createElement('p');
  p.innerText = texto;

  li.appendChild(img);
  li.appendChild(div);
  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);
  feed.appendChild(li);
  textarea.value = '';
}
