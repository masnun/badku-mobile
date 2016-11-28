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
        "id": "zahidur_rahman",
        "name": "S M Zahidur Rahman",
        "position": "Professor",
        "description": "S M Zahidur Rahman is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "zahidur_rahman.png",

      },

      {
        "id": "nur_alam",
        "name": "Dr. Md. Nur Alam",
        "position": "Professor",
        "description": "Dr. Md. Nur Alam is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "nur_alam.png",

      },

      {
        "id": "khashrul_alam",
        "name": "Md. Khashrul Alam",
        "position": "Professor",
        "description": "Md. Khashrul Alam is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "khashrul_alam.png",

      },


      {
        "id": "rumana_haque",
        "name": "Dr. Rumana Haque",
        "position": "Professor",
        "description": "Dr. Rumana Haque is currently serving as a Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "no_photo_female.png",

      },


      {
        "id": "eijaz_ahmed",
        "name": "Dr. Eijaz Ahmed Khan",
        "position": "Associate Professor",
        "description": "Dr. Eijaz Ahmed Khan is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "eijaz_ahmed.png",

         "research": [
          {
            "topic": "Sustainable Growth of Informal Social Microenterprises (ISMs) in a Developing Country: A Multidimensional Assessment",
            "publisher": "Curtin University",
            "description": "The sustainable growth of informal social microenterprises (ISMs) is seen as an important element of overall economic policy, especially for promoting self-employement, reducing poverty and enhancing overall growth in a developing country. Despite increased attention from scholars, practitioners and policy makers, the sustainable growth of Isms and its challenges have been continuously reported and are frequently growing, This problem is in part related to the failure or the existing frameworks which are inconsistent, overlapping and contradictory and do not adequately address the relevant issues. Although many studies have been conducted, the investigation of the antecedent factors of sustainable growth of ISMs is still relatively unexplored. Consequently, there is huge gap between theory and practice in understanding antecedents’ factors and outcomes of ISMs. Therefore the current researche address this shortcoming by exploring and empirically examining the antecedents that influence the sustainable growth of ISMs particularly in the context of a developing country like Bangladesh"
          },
         ]

      },


       {
        "id": "sm_towhid",
        "name": "S M Towhidur Rahman",
        "position": "Associate Professor",
        "description": "S M Towhidur Rahman is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "sm_towhid.png",

      },


      {
        "id": "smk",
        "name": "Sarif Mohammad Khan",
        "position": "Associate Professor",
        "description": "Sarif Mohammad Khan is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "smk.png",

      },


      {
        "id": "msh",
        "name": "Mir Sohrab Hossain",
        "position": "Associate Professor",
        "description": "Mir Sohrab Hossain is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "msh.png",

        "research": [
          {
            "topic": "How can applying a strength-based approach in team settings contribute to the development of innovative ideas that lead to improvements and innovations?",
            "publisher": "N/A",
            "description": "The Strength-based approach is a dynamic approach which focuses on employee’s strengths. It can be applied in team level and individual level. The aim of this study is to find out how the strength-based approach (including strength identification, strength development, strength use and strength appreciation) can contribute to the development of innovative ideas in team settings that leads to improvement and innovations, a topic largely unexplored in the current literature. A multiple case study method was used in this research. Data has been collected with semi-structured interviews with ten team members of six teams in five different organizations operating in Bangladesh. The organizations included one fast moving consumer goods organization, one logistic organization, two software development organizations and one telecommunication organization. The teams were chosen on the basis of those who worked on innovation and use strength-based approach through strength identification, strength development, strength use and strength appreciation of the team members. Analysis was done via pattern matching. "
          },
         ]

      },


      {
        "id": "tania_afroze",
        "name": "Tania Afroze",
        "position": "Associate Professor",
        "description": "Tania Afroze is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "tania_afroze.png",

      },

      {
        "id": "eh",
        "name": "Md.  Enamul Haque",
        "position": "Associate Professor",
        "description": "Md.  Enamul Haque is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "eh.png",

      },

      {
        "id": "sm_arifuzzaman",
        "name": "S. M. Arifuzzaman",
        "position": "Associate Professor",
        "description": "S. M. Arifuzzaman is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "sm_arifuzzaman.png",

      },

      {
        "id": "tkb",
        "name": "Tarun Kanti Bose",
        "position": "Associate Professor",
        "description": "Tarun Kanti Bose is currently serving as Associate Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "tkb.png",

        "research": [
          {
            "topic": "CRITICAL SUCCESS FACTORS OF SME INTERNATIONALIZATION",
            "publisher": "Journal of Small Business Strategy",
            "description": "This study was directed towards investigating the critical success factors of SME internationalization. Qualitative and explorative research work have been carried out to detect the key underlying variables existing in the context. Thorough review of literature reveals four important variables as key success factors. Those are: the current internationalization scenario, future internationalization prospects, internationalization competencies, and strategies for internationalization. A conceptual networking model was established from the literature which describes the multidimensional and networking relationship among the main variables and underlying constructs. This study contributed toward developing a model for successful internationalization framework by covering important literature in the field of SME internationalization."
          },

          {
            "topic": "Surge in SME surge in economy – an explorative analysis",
            "publisher": "International Journal of Economics and Business Research",
            "description": "This study directed towards investigating the possible linkage between the growth in SME sector and economic growth and development. Qualitative and explorative research work was carried out to detect the key underlying variables exist between the constructs. Thorough review of literature reveals quite significant and well-established relationship does exists between SME and Economy. A conceptual networking model has also been established from the data and literature. It also portrayed the relationship in a well-defined way. Further empirical data in few key sectors like employment, value added also exposed intimate and strong relationship between development of SME sector and economic growth and development."
          },

         ]

      },


      {
        "id": "reaz_uddin",
        "name": "Md. Reaz Uddin",
        "position": "Assistant Professor",
        "description": "Md. Reaz Uddin is currently serving as Assistant Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "reaz_uddin.png",

        "research": [
          {
            "topic": "Entrepreneurial orientation (EO) and performance of business in Khulna City, Bangladesh",
            "publisher": "Journal of Small Business Strategy",
            "description": "This study aims to explore the relationship between the entrepreneurial orientation (EO) and the business performance. Data were collected from the business firms located and operated in Khulna City for this purpose, a divisional city of Bangladesh. A structured five-point Likert-type scale was developed based on the previous studies to measure the relationships between EO and performance of business. Applying convenience sampling strategy, a total of 150 entrepreneurs was interviewed in person using a structured questionnaire. A causal model was developed incorporating relevant variables: innovation, pro-activeness, risk-taking tendency, and autonomy. The model was tested and all the variables were found to be related with the business performance but risk taking and innovativeness have positive and pro-activeness and autonomy have negative relations although all variables except pro-activeness were found to be statistically significant."
          },

          {
            "topic": "Do male and female entrepreneurs of Khulna City, Bangladesh differ on motivation?",
            "publisher": "Int. J. Entrepreneurship and Small Business, Vol. 24, No. 4, 2015",
            "description": "The study was aimed to identify on what motivational factors perceptions of male and female entrepreneurs differ. This is an empirical research based on the opinions of entrepreneurs doing business mainly in Khulna, a divisional city of Bangladesh. Data were collected from primary and secondary sources for this study. Initially, motivational factors were identified from the extensive review of previous literatures. Primary data was collected from both male and female entrepreneurs involved in business in Khulna City. This study used convenience sampling technique to fix up the number of respondents. A total of 100 entrepreneurs, maintaining equal ratio of males and females were finally interviewed with structured questionnaire for the study. Instruments for extracting opinions of entrepreneurs were developed based on previous studies to find motivation of entrepreneurs and on what male and female entrepreneurs differ. Descriptive statistical tools and independent t sample test were applied with SPSS for analysing data. This study has found that motivation differs on authority and autonomy, job and income security, past experience, and self-actualisation. On the other hand, motivation does not differ on family, opportunity, and skills."
          },

         ]

      },

      {
        "id": "pkg",
        "name": "Protap Kumar Ghosh",
        "position": "Assistant Professor",
        "description": "Protap Kumar Ghosh is currently serving as Assistant Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "pkg.png",
      },

      {
        "id": "nzlopa",
        "name": "Nusrat Zahan Lopa",
        "position": "Assistant Professor",
        "description": "Nusrat Zahan Lopa is currently serving as Assistant Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "no_photo_female.png",

        "research": [
          {
            "topic": "Determinants of Entrepreneurial Intention among Students: A study based on Asian Institute of Technology",
            "publisher": "Curtin University",
            "description": "The main objective of the study was to identify the determinants of entrepreneurial intention among students. This study also aims to determine whether personal factor or situational factor have more influence on entrepreneurial intention. The eight independent variables i.e. need for achievement, locus of control, risk taking, autonomy and authority, challenges and opportunities, job security, environment for starting business and education were used as determinants of entrepreneurial intention. These variables were chosen by reviewing previous papers thoroughly which were divided into two main classes: personal factor and situational factor. The scope of the study was the students of Asian Institute of Technology which is a renowned international educational institution in South-east Asia. Data was collected from the students of all schools and all programs. There were nine hypothesis and correlation and regression were used to test the hypothesis. This is really a matter of concern for the stakeholders if they want to motivate the young generation to be entrepreneur and make them able to contribute to economic and social development."
          },
        ]
      },

      {
        "id": "mortuza_ahmed",
        "name": "Md. Mourtuza Ahamed",
        "position": "Assistant Professor",
        "description": "Md. Mourtuza Ahamed is currently serving as Assistant Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "mortuza_ahmed.png",
      },


      {
        "id": "rafiza_zaman",
        "name": "Rafia Zaman",
        "position": "Assistant Professor",
        "description": "Rafia Zaman is currently serving as Assistant Professor at Business Administration Discipline of Khulna University in Bangladesh. ",
        "photo": "no_photo_female.png",
      },


    ];

    $scope.faculties_data = {};

    $scope.faculties.forEach(function(item) {
        $scope.faculties_data[item["id"]] = item;
    });

    


  })

  .controller("FacultyCtrl", function($scope, $stateParams) {
    $scope.faculty = $scope.faculties_data[$stateParams["facultyId"]] ;
    
  })

