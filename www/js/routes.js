//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'App Vozes',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: true,
      transition: 'f7-fade', // Adiciona o efeito de transição
      on: {
        pageBeforeIn: function (event, page) {
        // fazer algo antes da página ser exibida
      $("#menuprincipal").show("fast");
        },
        pageAfterIn: function (event, page) {
        // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        // fazer algo quando a página for inicializada
      //app.views.main.router.navigate('/detalhes/');
      $.getScript('js/index.js');

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next', // Setinha de próximo
          prevEl: '.swiper-button-prev', // Setinha de anterior
        },
        delay: 5000,
        loop: true,
        breakpoints: {
          50: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        on: {
          slideChange: function () {
            // Ação de clique no slide
            document.querySelectorAll('.swiper-slide a').forEach(link => {
              link.addEventListener('click', function (e) {
                // Aqui você pode manipular a navegação se necessário
                window.open(link.href, '_blank');
              });
            });
          }
        }
      });
      

    var swiper2 = new Swiper(".categorias", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode:true,

      breakpoints:{
        50:{
          slidesPerView:3,
          spaceBetween:30
        },
        640:{
          slidesPerView:3,
          spaceBetween:30
        },
        992:{
          slidesPerView:9,
          spaceBetween:30
        }
      }

      
    });
  
        },
        pageBeforeRemove: function (event, page) {
        // fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      path: '/teste/',
      url: 'teste.html',
      animate: true,
      transition: 'f7-fade', // Adiciona o efeito de transição
      on: {
        pageBeforeIn: function (event, page) {
        // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
        // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
        // fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      path: '/link3/',
      url: 'lib/link3.html',
      animate: true,
      transition: 'f7-fade', // Adiciona o efeito de transição
      on: {
        pageBeforeIn: function (event, page) {
        // fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
        // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
        // fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      path: '/link4/', 
      url: 'link4.html',  // URL correta para o link 4
      animate: true,
      transition: 'f7-fade', // Adiciona o efeito de transição
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },
    
    {
      path: '/detalhes/',
      url: 'detalhes.html',
      animate: true,
      transition: 'f7-fade', // Adiciona o efeito de transição
      on: {
        pageBeforeIn: function (event, page) {
        // fazer algo antes da página ser exibida
      $("#menuprincipal").hide("fast");
        },
        pageAfterIn: function (event, page) {
        // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        // fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
        // fazer algo antes da página ser removida do DOM
        },
      }
    },
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID   
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}

