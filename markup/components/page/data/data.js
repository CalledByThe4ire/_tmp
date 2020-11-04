/* eslint-disable no-unused-vars */
const data = {
  panes: [
    {
      modifier: 'greeting',
      prev: '',
      next: 'skills'
    },
    {
      modifier: 'skills',
      prev: 'greeting',
      next: 'tools',
      content: {
        header: 'Ключевые навыки',
        list: [
          {
            text: 'HTML5'
          },

          {
            text: 'CSS3'
          },

          {
            text: 'Javascript'
          }
        ],
        note:
          'отличное знание вышеперечисленных технологий, отслеживание изменений в&nbsp;спецификациях, использование различных библиотек и&nbsp;фреймворков'
      }
    },
    {
      modifier: 'tools',
      prev: 'skills',
      next: 'projects',
      content: {
        header: 'Инструменты,<br>которыми я&nbsp;пользуюсь,<br>работая над проектами',
        list: [
          {
            technologies: [
              {
                text: 'Gulp',
                link: 'http://gulpjs.com/'
              },
              {
                text: 'Webpack',
                link: 'http://webpack.github.io/'
              }
            ],
            description: 'системы сборки'
          },
          {
            technologies: [
              {
                text: 'Pug',
                link: 'https://pugjs.org/api/getting-started.html'
              },
              {
                text: 'SASS',
                link: 'http://sass-lang.com/'
              }
            ],
            description: 'шаблонизатор,<br>препроцессор'
          },
          {
            technologies: [
              {
                text: 'БЭМ',
                link: 'https://ru.bem.info/'
              }
            ],
            description: 'методология'
          },
          {
            technologies: [
              {
                text: 'React',
                link: 'https://facebook.github.io/react/'
              }
            ],
            description: 'библиотека для&nbsp;создания<br>пользовательских интерфейсов'
          }
        ]
      }
    },
    {
      modifier: 'projects',
      prev: 'tools',
      next: 'contacts',
      content: {
        header: 'Примеры работ',
        list: [
          {
            title: 'Презентация',
            lead: 'которую вы сейчас смотрите',
            description:
              "Сверстал проект на&nbsp;препроцессорах <a class='item-list__link' href='https://pugjs.org/api/getting-started.html' target='_blank'>pug</a>, <a class='item-list__link' href='https://sass-lang.com/' target='_blank'>scss</a>, vanilla JS, в&nbsp;соответствии с&nbsp;методологией <a class='item-list__link' href='https://ru.bem.info/' target='_blank'>БЭМ</a>. Анимацию реализовал с&nbsp;помощью библиотек <a class='item-list__link' href='https://animate.style/' target='_blank'>animate.css</a> и&nbsp;<a class='item-list__link' href='https://wowjs.uk/' target='_blank'>wow.js</a>. В&nbsp;качестве сборщика проекта использовал <a class='item-list__link' href='https://github.com/tars/tars/blob/master/README_RU.md' target='_blank'>TARS</a>.",
            repoLink: 'https://github.com/CalledByThe4ire/AboutMe'
          },
          {
            title: 'Лига Банк',
            lead:
              'Корпоративный сайт Лига Банка с кредитным калькулятором и множеством интерактивных элементов',
            description:
              "Проект написал на&nbsp;нативном javascript (современный ESNext-синтаксис), с&nbsp;использованием препроцессоров <a class='item-list__link' href='https://pugjs.org/api/getting-started.html' target='_blank'>pug</a> и&nbsp;<a class='item-list__link' href='https://sass-lang.com/' target='_blank'>scss</a>, в&nbsp;соответствии с&nbsp;методологией <a class='item-list__link' href='https://ru.bem.info/' target='_blank'>БЭМ</a>.<br>В&nbsp;качестве сборщика проекта выбрал&nbsp;<a class='item-list__link' href='https://github.com/werty1001/bemgo/blob/master/README_RU.md' target='_blank'>BemGo</a>.",
            siteLink: '_projects/liga-bank/',
            repoLink: 'https://github.com/CalledByThe4ire/liga-bank'
          },
          {
            title: 'RSS агрегатор',
            lead: 'JS-Приложение',
            description:
              "Написал RSS-ленту новостей с&nbsp;автоматическим обновлением по&nbsp;AJAX.<br>Архитектура&nbsp;&ndash; <a class='item-list__link' href='https://ru.wikipedia.org/wiki/Model-View-Controller' target='_blank'>MVC</a>, браузерная инфраструктура&nbsp;&ndash; <a class='item-list__link' href='https://webpack.js.org/' target='_blank'>webpack</a>, html/css фреймворк&nbsp;&ndash; <a class='item-list__link' href='https://getbootstrap.com/' target='_blank'>bootstrap</a>. Вывод всех текстов реализован через библиотеку <a class='item-list__link' href='https://www.i18next.com/' target='_blank'>i18next</a>.",
            appLink: '_projects/rss-aggregator/',
            repoLink: 'https://github.com/CalledByThe4ire/frontend-project-lvl2'
          },
          {
            title: 'Online Store',
            lead: 'React-Redux-приложение',
            description:
              "Проект от&nbsp;<a class='item-list__link' href='https://school.csssr.com/ru' target='_blank'>CSSSR.School</a> в&nbsp;рамках прохождения онлайн-курса <a class='item-list__link' href='https://school.csssr.com/ru/course/react/junior' target='_blank'>Junior React</a>.<br>Реализовал асинхронную работу с&nbsp;данными, с&nbsp;их последующей фильтрацией по&nbsp;ряду параметров и&nbsp;отображением в&nbsp;виде списка с&nbsp;пагинацией.<br><a class='item-list__link' href='https://redux.js.org/' target='_blank'>Redux</a> разбил на&nbsp;модули в&nbsp;соответствии с&nbsp;форматом <a class='item-list__link' href='https://github.com/erikras/ducks-modular-redux' target='_blank'>ducks</a>. <br>На каждый ключ состояния написал отдельный редьюсер, с&nbsp;их последующим объединением через <a class='item-list__link' href='https://redux.js.org/api/combinereducers' target='_blank'>combineReducers</a>.<br>Работа с&nbsp;состоянием redux&#8209;хранилища велась через селекторы, с&nbsp;использованием <a class='item-list__link' href='https://github.com/reduxjs/reselect' target='_blank'>reselect</a>.<br>Cинхронизацию роутинга и&nbsp;redux реализовал через&nbsp;<a class='item-list__link' href='https://github.com/supasate/connected-react-router' target='_blank'>connected-react-router</a>.<br>Изменения в&nbsp;redux&#8209;хранилище отслеживал с&nbsp;помощью <a class='item-list__link' href='https://github.com/reduxjs/redux-devtools' target='_blank'>Redux DevTools</a>.<br>По&nbsp;итогам успешной защиты проекта получил <a class='item-list__link' href='../_projects/store/_certificate.jpg' target='_blank'>сертификат</a>.",
            repoLink: 'https://github.com/CalledByThe4ire/junior-course-boilerplate'
          },
          {
            title: 'Contact Keeper',
            lead: 'Full-stack-приложение',
            description:
              "Написал менеджер контактов на&nbsp;стеке&nbsp;<a class='item-list__link' href='https://www.mongodb.com/mern-stack' target='_blank'>MERN</a> с&nbsp;системой авторизации и&nbsp;хранением информации в&nbsp;базе данных. Клиентская часть реализована на&nbsp;<a class='item-list__link' href='https://ru.reactjs.org/' target='_blank'>React</a>, серверная часть&nbsp;&mdash; на&nbsp;<a class='item-list__link' href='https://nodejs.org/en/' target='_blank'>Node.js</a>, <a class='item-list__link' href='https://expressjs.com/' target='_blank'>Express</a>&nbsp;и&nbsp;<a class='item-list__link' href='https://www.mongodb.com/' target='_blank'>MongoDB</a>.",
            appLink: 'https://arcane-wave-48254.herokuapp.com/',
            repoLink: 'https://github.com/CalledByThe4ire/contact-keeper'
          },
          {
            title: "Conway's Game of Life",
            lead: 'JS-Приложение',
            description:
              'Реализовал игру «Жизнь», используя объектно-ориентированную парадигму программирования.',
            appLink: 'https://calledbythe4ire.github.io/gol/',
            repoLink: 'https://github.com/CalledByThe4ire/gol'
          },
          {
            title: 'Вычислитель отличий',
            lead: 'NodeJS-Приложение',
            description:
              'Написал утилиту для поиска отличий в конфигурационных файлах. Реализована поддержка разных форматов, генерация отчетов в виде plain text, pretty, json, а также unit-тестирование',
            repoLink: 'https://github.com/CalledByThe4ire/frontend-project-lvl2'
          },
          {
            title: 'Painter',
            lead: 'JS-Приложение',
            description:
              'Реализовал простой растровый графический редактор, используя объектно-ориентированную парадигму программирования.',
            appLink: 'https://calledbythe4ire.github.io/painter/',
            repoLink: 'https://github.com/CalledByThe4ire/painter'
          },
          {
            title: 'Игры разума',
            lead: 'NodeJS-Приложение',
            description: 'Написал набор мини-игр, запускаемых из&nbsp;консоли.',
            repoLink: 'https://github.com/CalledByThe4ire/project-lvl1-s412'
          },
          {
            title: 'Sedona',
            lead: 'Веб-сайт',
            description:
              "Сверстал проект на&nbsp;препроцессорах <a class='item-list__link' href='https://pugjs.org/api/getting-started.html' target='_blank'>pug</a>, <a class='item-list__link' href='https://sass-lang.com/' target='_blank'>scss</a>, vanilla JS, в&nbsp;соответствии с&nbsp;методологией <a class='item-list__link' href='https://ru.bem.info/' target='_blank'>БЭМ</a>.<br>Для&nbsp;сетки и всех компонентов&nbsp;— <a class='item-list__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout' target='_blank'>CSS Grid Layout</a> и&nbsp;<a class='item-list__link' href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank'>flexbox</a>.<br>В&nbsp;качестве системы сборки был выбран <a class='item-list__link' href='https://github.com/tars/tars/blob/master/README_RU.md' target='_blank'>TARS</a>.",
            siteLink: '_projects/sedona/',
            repoLink: 'https://github.com/CalledByThe4ire/sedona-pug-tars'
          },
          {
            title: 'Mishka',
            lead: 'Веб-сайт',
            description:
              "Сверстал проект на&nbsp;препроцессорах <a class='item-list__link' href='https://pugjs.org/api/getting-started.html' target='_blank'>pug</a> и&nbsp;<a class='item-list__link' href='https://sass-lang.com/' target='_blank'>scss</a>, нативном javascript, в&nbsp;соответствии с&nbsp;методологией <a class='item-list__link' href='https://ru.bem.info/' target='_blank'>БЭМ</a>.<br>Сеточную систему построил на&nbsp;<a class='item-list__link' href='http://susy.oddbird.net/' target='_blank'>susy</a>.",
            siteLink: '_projects/mishka/',
            repoLink: 'https://github.com/CalledByThe4ire/Mishka'
          },
          {
            title: 'Pink',
            lead: 'Веб-сайт',
            description:
              "Проект сверстал с использованием препроцессоров <a class='item-list__link' href='https://pugjs.org/api/getting-started.html' target='_blank'>pug</a> и&nbsp;<a class='item-list__link' href='https://stylus-lang.com/' target='_blank'>stylus</a>, в&nbsp;качестве с&nbsp;методологии выбран <a class='item-list__link' href='https://ru.bem.info/' target='_blank'>БЭМ</a>.<br>Макет сделан максимально адаптивным и выглядит по-разному для&nbsp;мобильной, планшетной и&nbsp;десктопной версии. Раскладку всех компонентов страницы реализовал на&nbsp;<a class='item-list__link' href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox' target='_blank'>flexbox</a>, в&nbsp;качестве сеточной системы выбрал <a class='item-list__link' href='https://github.com/peterramsing/lost' target='_blank'>lost</a>.<br>Для каждого размера и&nbsp;разрешения экрана подготовил свой комплект изображений; всю&nbsp;декоративную графику собрал в&nbsp;спрайты, которые в&nbsp;свою очередь разделил на&nbsp;векторные и&nbsp;растровые с&nbsp;помощью соответствующих npm-пакетов.<br>Система сборки&nbsp;&ndash; <a class='item-list__link' href='https://gulpjs.com/' target='_blank'>gulp</a>.<br>Проект является дипломной работой <a class='item-list__link' href='https://htmlacademy.ru/intensive/adaptive' target='_blank'>продвинутого интенсива htmlacademy</a>, по&nbsp;итогам успешной защиты ( (100% выполненных заданий) ) получил <a class='item-list__link' href='../_projects/pink/sertificate.jpg' target='_blank'>сертификат</a>.",
            siteLink: '_projects/pink/',
            repoLink: 'https://github.com/CalledByThe4ire/Pink'
          },
          {
            title: 'Код и&nbsp;Магия',
            lead: 'Приложение',
            description:
              "В&nbsp;рамках проекта я решил следующие задачи:<br>–&nbsp;написал функцию для&nbsp;вывода и&nbsp;отрисовки сообщений для&nbsp;игры посредством HTML5 Canvas API;<br>–&nbsp;написал валидацию формы отправки отзыва, с&nbsp;сохранением имени пользователя и&nbsp;оценки в&nbsp;cookies;<br>–&nbsp;написал функцию, реализующую AJAX-запрос к&nbsp;серверу для&nbsp;получения данных;<br>–&nbsp;на&nbsp;основе полученных данных написал модуль, генерирующий HTML-код списка отзывов на&nbsp;основе подготовленного шаблона и&nbsp;добавляющий этот код на&nbsp;страницу;<br>–&nbsp;для&nbsp;списка отзывов написал фильтрацию с&nbsp;постраничным выводом, последний примененный фильтр сохраняется в&nbsp;localStorage;<br>–&nbsp;написал функцию-конструктор для&nbsp;создания объекта галереи, отвечающего за&nbsp;показ фотографий, с&nbsp;использованием объекта для&nbsp;работы с&nbsp;адресной строкой;<br>–&nbsp;в&nbsp;блоке с&nbsp;игрой реализовал эффект параллакса.<br>Проект является дипломной работой <a class='item-list__link' href='https://htmlacademy.ru/intensive/javascript' target='_blank'>интенсива по&nbsp;javascript</a> от&nbsp;<a class='item-list__link' href='https://htmlacademy.ru/' target='_blank'>htmlacademy</a>:<br>весь код написан на&nbsp;нативном&nbsp;js, без&nbsp;использования вспомогательных библиотек;<br>помимо синтаксических особенностей языка, на&nbsp;интенсиве рассматривались такие темы, как использование модульного подхода в&nbsp;разработке, введение в&nbsp;компонентный подход (разделение поведения и&nbsp;состояния DOM-компонент, работа с&nbsp;типизированными объектами (классами) ), объектно-ориентированное программирование.<br>По итогам успешной защиты проекта (100% выполненных заданий) получил <a class='item-list__link' href='_projects/CodeAndMagick/sertificate.jpg' target='_blank'>сертификат</a>.",
            repoLink: 'https://github.com/CalledByThe4ire/17243-code-and-magick'
          }
        ]
      }
    },
    {
      modifier: 'contacts',
      prev: 'projects',
      next: '',
      content: {
        header: 'Свяжитесь со&nbsp;мной',
        list: [
          {
            text: 'e-mail',
            link: 'mailto:karamnoff@gmail.com'
          },

          {
            text: 'telegram',
            link: 'https://t.me/CalledByTheFire'
          },

          {
            text: 'messenger',
            link: 'https://m.me/AndreyKarammoff'
          }
        ]
      }
    }
  ]
};
