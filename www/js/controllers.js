angular.module('badku.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicHistory) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Root controller

    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

    $scope.faculties = [
      {
        "id": "feroz_ahmed",
        "name": "Feroz Ahmed",
        "position": "Professor",
        "description": "Feroz Ahmed is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. He is also in charge of Head of Human Resource Management Discipline.",
        "photo": "no_photo.png",
        "research": [
          {
            "topic": "Does Ecotourism Produce Sustainable Outcomes? Testing the Direct and Mediated Effects",
            "publisher": "Curtin University, Australia",
            "description": "This study proposes a comprehensive model that includes the antecedents and sustainable outcomes of ecotourism. The research incorporated a mixed method research design and data analyses were conducted by NVivo 10 and PLS SEM. The results identified that two major types of antecedents (resource dimension and support dimension) are needed for ecotourism, which then produces economic, environmental, socio-cultural and emotional benefits in the destination. The analysis further identified the mediation and moderating effects of the outcomes."
          }
        ]
      },

      {
        "id": "mizanur_rahman",
        "name": "Mizanur Rahman",
        "position": "Professor",
        "description": "Md. Mizanur Rahman is currently serving as a Professor and also the Head at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "no_photo.png",

      },

      {
        "id": "dr_mamunur_rashid",
        "name": "Dr. Mamunur Rashid",
        "position": "Professor",
        "description": "Dr. Mamunur Rashid is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh.",
        "photo": "dr_mamunur_rashid.png",

      },

      
      {
        "id": "dr_atm_jahir",
        "name": "Dr. A T M Jahiruddin",
        "position": "Professor",
        "description": "Dr. A T M Jahiruddin is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "dr_atm_jahir.png",

      },

      {
        "id": "dr_noor_un_nabi",
        "name": "Dr. Md. Noor Un Nabi",
        "position": "Professor",
        "description": "Dr. Md. Noor Un Nabi is currently serving as an Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "dr_noor_un_nabi.png",

      },


      

      {
        "id": "sm_arifuzzaman",
        "name": "S. M. Arifuzzaman",
        "position": "Professor",
        "description": "Md. Mizanur Rahman is currently serving as a Professor and also the Head at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "sm_arifuzzaman.png",

      }




    ];

    $scope.faculties_data = {};

    $scope.faculties.forEach(function(item) {
        $scope.faculties_data[item["id"]] = item;
    });

    


  })

  .controller("FacultyCtrl", function($scope, $stateParams) {
    $scope.faculty = $scope.faculties_data[$stateParams["facultyId"]] ;
    
  })

