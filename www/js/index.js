fetch('js/backend.json')
  .then(response => response.json())
  .then(data => {
    // Salvar no localStorage corretamente
    localStorage.setItem('produtos', JSON.stringify(data));
    console.log('Dados salvos no localStorage:', data);
   //esva
    $("produtos").empty();
    data.forEach()


  })
  .catch(error => console.error('Erro ao fazer fetch dos dados:', error));



