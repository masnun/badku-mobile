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
        "position": "Professor, Head",
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
        "id": "dr_ranajit",
        "name": "Dr. Ranajit Kumar Bairagi",
        "position": "Professor",
        "description": "Dr. Ranajit Kumar Bairagi is currently serving as an Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "dr_ranajit.png",

        "research": [
          {
            "topic": "The underpricing of US REIT IPOs: 1996–2010",
            "publisher": "Journal of Property Research, Deakin University, Australia",
            "description": "This study examines the underpricing cost of 123 US REIT IPOs over the period 1996 until June 2010, including the period of the global financial crisis. The study uses OLS multivariate regression to determine some potential factors behind underpricing. The underpricing cost of raising REIT external equity averaged 3.18% using an equal weighting for each of the 123 REIT IPOs. The study finds offer size is positively related to underpricing. A value weighted approach finds that underpricing averages 4.67% and suggests larger offer size is an important determinant for leaving more money on the table. Higher reputation underwriters, the industry differentiated auditor and post offer ownership structure negatively influence underpricing. The study documents declining underpricing over time with the period of 2007–2010 experiencing negative underpricing (overpricing) during the global financial crisis (GFC). Offers during the hot periods of 1997 and 2004 and the office/industrial property type were more highly underpriced. The 10-year treasury interest rate is identified as another significant positive determinant of underpricing."
          },


          {
            "topic": "The level of representative underwriting and the underwriting costs of REIT SEOs",
            "publisher": "Emerald Group Publishing Limited",
            "description": "The purpose of this paper is to investigate factors influencing the underwriting discount for US Real Estate Investment Trust (REIT) Seasoned Equity Offerings (SEOs). The study provides new evidence on determinants of underwriting discounts with a comprehensive dataset of 783 US REIT SEOs from 1996 until June 2010. Ordinary least squares regressions are performed to estimate the effect of the level of representative underwriting along with other potential factors on underwriting discounts."
          },


          {
            "topic": "The direct costs of raising external equity capital for US REIT IPO",
            "publisher": "Emerald Group Publishing Limited",
            "description": "The purpose of this paper is to investigate the total direct costs of raising external equity capital for US real estate investment trust (REIT) initial public offerings (IPOs). \n \n The study provides recent evidence on total direct costs for a comprehensive dataset of 125 US REIT IPOs from 1996 until June 2010. A multivariate OLS regression is performed to determine significant factors influencing the level of total direct costs and also underwriting fees and non‐underwriting direct expenses."
          },

          



        ]

      },


      {
        "id": "sk_mahmudul_hasan",
        "name": "Sk. Mahmudul Hasan",
        "position": "Professor",
        "description": "Sk. Mahmudul Hasan is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "sk_mahmudul_hasan.png",

      },

      {
        "id": "mehedi_hasan",
        "name": "Mehedi Hasan Md. Hefzur Rahman",
        "position": "Professor, Dean",
        "description": "Mehedi Hasan Md. Hefzur Rahman is currently serving as a Professor and also the Dean at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "mehedi_hasan.png",

      },


      

      {
        "id": "sm_arifuzzaman",
        "name": "S. M. Arifuzzaman",
        "position": "Professor",
        "description": "Md. Mizanur Rahman is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
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

