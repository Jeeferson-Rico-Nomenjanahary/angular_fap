angular.module('common.services')
.factory('menu', function () {
  return [
    {
      name: 'Accueil',
      url: '#/',
      ico: 'fa fa-home'
    },
    {
      name: 'User',
      ico: 'fa fa-user',
      closed: true,
      children : [
        {
          name: 'liste des utlisateurs',
          url: '#/'

        }

      ]
    },
    {
      name: 'Mes Applications',
      ico: 'fa fa-tasks',
      closed: true,
      children : [
        {
          name: 'Lists',
          url: '#/applications'

        }

      ]
    }
  ];
});