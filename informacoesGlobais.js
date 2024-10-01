const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
   const res = await fetch(url) 
   const dados = await res.json()
   console.log(dados);
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container___texto')

   paragrafo.innerHTML = 'Você sabia que o mundo tem $ {dados.total_ pessoas_mundo} de pessoas e que aproximadamente $ { dados.totais__pessoas__conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectados.'
 
   const container_= document.getElementById('graficos-container')
   container.appendChild(paragrafo)  
} 

vizualizarinformacoesGlobais