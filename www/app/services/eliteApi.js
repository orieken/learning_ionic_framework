(function() {
  'use strict';

  angular.module('exampleApp').factory('EliteApi', EliteApi);

  function EliteApi() {

    var leagues = [
      {"name": "Spring Fling Tournament 2014","id": 2009},
      {"name": "5th Grade Championship - 7:30m MAC 3","id": 2008},
      {"name": "6th Grade Championship - 6:30pm MAC 4", "id": 2007}
    ];

    var leagueData = {
      "league": {
        "name": "Spring Fling Tournament 2014",
        "id": 2009,
        "homeScreen": "* 5th Grade Championship - 7:30m MAC 3\n* 6th Grade Championship - 6:30pm MAC 4\n* 7th Grade White Championship - 7:30pm MAC 4\n* 7th Grade Green Championship - 7:30pm MAC 2\n* 8th Grade Championship - 7:30pm MAC 1\n* 9th Grade Championship - 8:30pm MAC 4\n* 10th Grade Championship - 8:30pm MAC 1\n* 11th Grade Championship - 8:30pm MAC 3",
        "rulesScreen": null
      },
      "teams": [
        {
          "divisionName": "5th Grade - Green",
          "divisionTeams": [
            {
              "id": 3222,
              "name": "Columbia Ravens 5th",
              "coach": "John Miller"
            },
            {
              "id": 4299,
              "name": "D1 Spartans",
              "coach": "Jacob Silverman"
            },
            {
              "id": 3220,
              "name": "HC Elite OMalley 5th",
              "coach": "Eddie OMalley"
            },
            {
              "id": 3277,
              "name": "MD 3D 5th",
              "coach": "Marty Libinski"
            },
            {
              "id": 3275,
              "name": "Severn Elite Gold",
              "coach": "Darryl Adams"
            },
            {
              "id": 3224,
              "name": "Team Dedication 5th",
              "coach": "Don Carpenter"
            }
          ]
        },
        {
          "divisionName": "5th Grade - White",
          "divisionTeams": [
            {
              "id": 3225,
              "name": "CBSA Hoyas 5th Grade",
              "coach": "Terrance Taylor"
            },
            {
              "id": 3276,
              "name": "HC Elite 4th Tookes",
              "coach": "Anthony Tookes"
            },
            {
              "id": 3221,
              "name": "HC Elite Knisley 5th",
              "coach": "Jordan Knisley"
            },
            {
              "id": 3226,
              "name": "Randelstown Runnin Rebels 5th",
              "coach": "Eric Levi"
            },
            {
              "id": 3223,
              "name": "Up n Coming Clippers 5th",
              "coach": "Brian Jackson"
            }
          ]
        },
        {
          "divisionName": "6th Grade",
          "divisionTeams": [
            {
              "id": 3231,
              "name": "Baltimore Beastmode 6th",
              "coach": "Joe Hall"
            },
            {
              "id": 3229,
              "name": "Columbia Ravens 6th",
              "coach": "Tim Swartz"
            },
            {
              "id": 3278,
              "name": "Double R Lakers 6th",
              "coach": "Dameon Smith"
            },
            {
              "id": 3228,
              "name": "HC Elite Green 6th",
              "coach": "Steve Michelotti"
            },
            {
              "id": 3227,
              "name": "HC Elite White 6th",
              "coach": "Steve Michelotti"
            },
            {
              "id": 3232,
              "name": "MD 3D  6th",
              "coach": "Brian Bieman"
            },
            {
              "id": 3230,
              "name": "Team Dedication 6th",
              "coach": "Jason Paar"
            }
          ]
        },
        {
          "divisionName": "7th Grade - Green",
          "divisionTeams": [
            {
              "id": 3282,
              "name": "CC Crush 7th",
              "coach": "Brandon Costley"
            },
            {
              "id": 3239,
              "name": "Columbia Ravens - Paugh 7th",
              "coach": "Dan Paugh"
            },
            {
              "id": 3237,
              "name": "Columbia Ravens Chamblee 7th",
              "coach": "Rich Chamblee"
            },
            {
              "id": 3280,
              "name": "Double R Lakers 7th",
              "coach": "Ricky Hewlett"
            },
            {
              "id": 4298,
              "name": "Frederick Storm",
              "coach": "Manny Powe"
            },
            {
              "id": 3281,
              "name": "Liberty Dream 7th",
              "coach": "Jullian Allen"
            },
            {
              "id": 3244,
              "name": "Randelstown Runnin Rebels 7th",
              "coach": "Lawrence Brown"
            },
            {
              "id": 3283,
              "name": "Spartans 7th",
              "coach": "Ed Hunter"
            },
            {
              "id": 3241,
              "name": "Team Dedication Blue 7th",
              "coach": "Tim Hale"
            }
          ]
        },
        {
          "divisionName": "7th Grade - White",
          "divisionTeams": [
            {
              "id": 3243,
              "name": "CBSA Hoyas  7th",
              "coach": "Jason Sticher"
            },
            {
              "id": 3238,
              "name": "Columbia Ravens - Held 7th",
              "coach": "Rich Held"
            },
            {
              "id": 3235,
              "name": "HC Elite Green- Hollwedel 7th",
              "coach": "Chad Hollwedel"
            },
            {
              "id": 3234,
              "name": "HC Elite Phillips 7th",
              "coach": "Bill Phillips"
            },
            {
              "id": 3236,
              "name": "HC Elite White - Hollwedel 7th",
              "coach": "Chad Hollwedel"
            },
            {
              "id": 3279,
              "name": "Laurel Stallions 7th",
              "coach": "Yemi Oshinnaiye"
            },
            {
              "id": 3242,
              "name": "MD 3D 7th",
              "coach": "Brad Cantrell"
            },
            {
              "id": 3240,
              "name": "Team Dedication Gold  7th",
              "coach": "Dennis Kirkland"
            }
          ]
        },
        {
          "divisionName": "8th Grade - Green",
          "divisionTeams": [
            {
              "id": 3247,
              "name": "Columbia Ravens 8th",
              "coach": "Dan Ingersol"
            },
            {
              "id": 3286,
              "name": "Fairfax Stars 8th",
              "coach": "Jeff Curfman"
            },
            {
              "id": 3246,
              "name": "HC Elite Borden 8th",
              "coach": "BJ Borden"
            },
            {
              "id": 3250,
              "name": "MD Shockers  8th",
              "coach": "John McCormick"
            },
            {
              "id": 3252,
              "name": "MD Wildkatz 8th",
              "coach": "Frantz Mitchell"
            }
          ]
        },
        {
          "divisionName": "8th Grade - White",
          "divisionTeams": [
            {
              "id": 3285,
              "name": "Double R Lakers 8th",
              "coach": "LaVar Tyre"
            },
            {
              "id": 3251,
              "name": "E-Town Elite 8th",
              "coach": "Leroy Hill"
            },
            {
              "id": 3245,
              "name": "HC Elite Eudell 8th",
              "coach": "Corey Eudell"
            },
            {
              "id": 3284,
              "name": "MD Finest 8th",
              "coach": "Tim Womack"
            },
            {
              "id": 3248,
              "name": "Team Dedication 8th",
              "coach": "Dennis Kirkland"
            }
          ]
        },
        {
          "divisionName": "9th Grade - Green",
          "divisionTeams": [
            {
              "id": 3262,
              "name": "CBSA Hoyas 9th",
              "coach": "Robert Rollins"
            },
            {
              "id": 3253,
              "name": "HC Elite - Tringali 9th",
              "coach": "Chris Tringali"
            },
            {
              "id": 3260,
              "name": "Liberty Road Alliance 9th",
              "coach": "Lanze Blazek"
            },
            {
              "id": 3255,
              "name": "MD Hoopmasters 9th",
              "coach": "Scott Cole"
            },
            {
              "id": 3287,
              "name": "MD Tar Heels 9th",
              "coach": "Coach Corey"
            },
            {
              "id": 3257,
              "name": "Raptors 9th",
              "coach": "Yong Choe"
            }
          ]
        },
        {
          "divisionName": "9th Grade - White",
          "divisionTeams": [
            {
              "id": 3259,
              "name": "AIP  9th",
              "coach": "Brian Brady"
            },
            {
              "id": 3254,
              "name": "HC Elite - Thai 9th",
              "coach": "Gary Thai"
            },
            {
              "id": 3256,
              "name": "Liberty Basketball 9th",
              "coach": "Dave Tucker"
            },
            {
              "id": 3261,
              "name": "Urbana Hawks 9th",
              "coach": "Don DiMatteo"
            },
            {
              "id": 3258,
              "name": "York Raiders 9th",
              "coach": "Jay Hall"
            }
          ]
        },
        {
          "divisionName": "HS 10th Grade - Green",
          "divisionTeams": [
            {
              "id": 3288,
              "name": "BTA Academy 10th",
              "coach": "Shadeed Sullivan"
            },
            {
              "id": 3268,
              "name": "EC Cobras 10th",
              "coach": "Otis Fields"
            },
            {
              "id": 3264,
              "name": "HC Elite - Clark 10th",
              "coach": "Dave Clark"
            },
            {
              "id": 3290,
              "name": "MD 3D 10th",
              "coach": "Mike Dennin"
            },
            {
              "id": 3267,
              "name": "Team Ice 10th",
              "coach": "Eric Roman"
            }
          ]
        },
        {
          "divisionName": "HS 10th Grade - White",
          "divisionTeams": [
            {
              "id": 3265,
              "name": "Delaware AIM 10th",
              "coach": "Jason Matthews"
            },
            {
              "id": 3289,
              "name": "Elite Ballers 10th",
              "coach": "Andre Ashby"
            },
            {
              "id": 3266,
              "name": "E-Town Elite 10th",
              "coach": "Leroy Hill"
            },
            {
              "id": 3263,
              "name": "HC Elite Stefan 10th",
              "coach": "James Stefan"
            },
            {
              "id": 3271,
              "name": "MD Hoopmasters - Woodyard 10th",
              "coach": "Bruce Woodyard"
            }
          ]
        },
        {
          "divisionName": "HS 11th Grade",
          "divisionTeams": [
            {
              "id": 3292,
              "name": "CBSA Hoyas 11th",
              "coach": "Kenny Smith"
            },
            {
              "id": 3270,
              "name": "HC Elite - Dan Nap 11th",
              "coach": "Dan Nap"
            },
            {
              "id": 3274,
              "name": "HC Elite - Stefan 11th",
              "coach": "James Stefan"
            },
            {
              "id": 3269,
              "name": "HC Elite - Stock 11th",
              "coach": "Joe Stock"
            },
            {
              "id": 3272,
              "name": "MD Hoopmasters - Neville 11th",
              "coach": "Ray Neville"
            },
            {
              "id": 3291,
              "name": "MD Tar Heels 11th",
              "coach": "Ricky Washington"
            },
            {
              "id": 3273,
              "name": "Team AIP 11th",
              "coach": "Michael Irvin"
            }
          ]
        },
        {
          "divisionName": "Sunday Championships",
          "divisionTeams": [
            {
              "id": 3294,
              "name": "5th Grade Green 1st Seed",
              "coach": ""
            },
            {
              "id": 3293,
              "name": "5th Grade White 1st Seed",
              "coach": ""
            },
            {
              "id": 3295,
              "name": "6th Grade 1st Seed",
              "coach": ""
            },
            {
              "id": 3296,
              "name": "6th Grade 2nd Seed",
              "coach": ""
            },
            {
              "id": 3299,
              "name": "7th Grade Green 1st Seed",
              "coach": ""
            },
            {
              "id": 3300,
              "name": "7th Grade Green 2nd Seed",
              "coach": ""
            },
            {
              "id": 3297,
              "name": "7th Grade White 1st Seed",
              "coach": ""
            },
            {
              "id": 3298,
              "name": "7th Grade White 2nd Seed",
              "coach": ""
            },
            {
              "id": 3301,
              "name": "8th Grade Green 1st Seed",
              "coach": ""
            },
            {
              "id": 3302,
              "name": "8th Grade White 1st Seed",
              "coach": ""
            },
            {
              "id": 3304,
              "name": "9th Grade Green 1st Seed",
              "coach": ""
            },
            {
              "id": 3303,
              "name": "9th Grade White 1st Seed",
              "coach": ""
            },
            {
              "id": 3306,
              "name": "HS 10th Grade Green 1st Seed",
              "coach": ""
            },
            {
              "id": 3305,
              "name": "HS 10th Grade White 1st Seed",
              "coach": ""
            },
            {
              "id": 3307,
              "name": "HS 11th Grade 1st Seed",
              "coach": ""
            },
            {
              "id": 3308,
              "name": "HS 11th Grade 2nd Seed",
              "coach": ""
            }
          ]
        }
      ],
      "locations": [
        {
          "id": 1015,
          "name": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "address": "2400 Rt 97, Cookesville, MD 21723",
          "latitude": 39.3,
          "longitude": -77.02
        },
        {
          "id": 1016,
          "name": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "address": "2400 Rt 97, Cookesville, MD 21723",
          "latitude": 39.3,
          "longitude": -77.02
        },
        {
          "id": 1004,
          "name": "Howard HS",
          "locationUrl": "http://goo.gl/maps/xvgPm",
          "address": "8700 Old Annapolis Road, Ellicott City, MD 21043",
          "latitude": 39.22,
          "longitude": -76.81
        },
        {
          "id": 3,
          "name": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "address": "5001 Meadowbrook Lane, Ellicott City, MD",
          "latitude": 39.24,
          "longitude": -76.82
        },
        {
          "id": 4,
          "name": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "address": "5001 Meadowbrook Lane, Ellicott City, MD",
          "latitude": 39.24,
          "longitude": -76.82
        },
        {
          "id": 5,
          "name": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "address": "5001 Meadowbrook Lane, Ellicott City, MD",
          "latitude": 39.24,
          "longitude": -76.82
        },
        {
          "id": 6,
          "name": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "address": "5001 Meadowbrook Lane, Ellicott City, MD",
          "latitude": 39.24,
          "longitude": -76.82
        },
        {
          "id": 1003,
          "name": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
          "latitude": 39.11,
          "longitude": -76.83
        },
        {
          "id": 1011,
          "name": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
          "latitude": 39.11,
          "longitude": -76.83
        }
      ],
      "games": [
        {
          "id": 4764,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "HC Elite OMalley 5th",
          "team1Id": 3220,
          "team2": "Team Dedication 5th",
          "team2Id": 3224,
          "team1Score": "46",
          "team2Score": "35",
          "time": "2014-05-02T18:00:00"
        },
        {
          "id": 4767,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Green- Hollwedel 7th",
          "team1Id": 3235,
          "team2": "Team Dedication Gold  7th",
          "team2Id": 3240,
          "team1Score": "36",
          "team2Score": "41",
          "time": "2014-05-02T18:00:00"
        },
        {
          "id": 4768,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Eudell 8th",
          "team1Id": 3245,
          "team2": "Team Dedication 8th",
          "team2Id": 3248,
          "team1Score": "46",
          "team2Score": "29",
          "time": "2014-05-02T19:00:00"
        },
        {
          "id": 4765,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "HC Elite White - Hollwedel 7th",
          "team1Id": 3236,
          "team2": "Columbia Ravens - Held 7th",
          "team2Id": 3238,
          "team1Score": "32",
          "team2Score": "30",
          "time": "2014-05-02T19:00:00"
        },
        {
          "id": 4770,
          "location": "Howard HS",
          "locationUrl": "http://goo.gl/maps/xvgPm",
          "locationId": 1004,
          "team1": "HC Elite - Dan Nap 11th",
          "team1Id": 3270,
          "team2": "MD Hoopmasters - Neville 11th",
          "team2Id": 3272,
          "team1Score": "64",
          "team2Score": "33",
          "time": "2014-05-02T19:15:00"
        },
        {
          "id": 4766,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "HC Elite Stefan 10th",
          "team1Id": 3263,
          "team2": "MD Hoopmasters - Woodyard 10th",
          "team2Id": 3271,
          "team1Score": "77",
          "team2Score": "46",
          "time": "2014-05-02T20:00:00"
        },
        {
          "id": 4769,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite - Thai 9th",
          "team1Id": 3254,
          "team2": "Urbana Hawks 9th",
          "team2Id": 3261,
          "team1Score": "61",
          "team2Score": "32",
          "time": "2014-05-02T20:00:00"
        },
        {
          "id": 4771,
          "location": "Howard HS",
          "locationUrl": "http://goo.gl/maps/xvgPm",
          "locationId": 1004,
          "team1": "MD Shockers  8th",
          "team1Id": 3250,
          "team2": "Columbia Ravens 8th",
          "team2Id": 3247,
          "team1Score": "16",
          "team2Score": "67",
          "time": "2014-05-02T20:15:00"
        },
        {
          "id": 4772,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Clark 10th",
          "team1Id": 3264,
          "team2": "EC Cobras 10th",
          "team2Id": 3268,
          "team1Score": "51",
          "team2Score": "32",
          "time": "2014-05-03T08:00:00"
        },
        {
          "id": 4785,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Green 6th",
          "team1Id": 3228,
          "team2": "HC Elite White 6th",
          "team2Id": 3227,
          "team1Score": "45",
          "team2Score": "47",
          "time": "2014-05-03T08:00:00"
        },
        {
          "id": 4798,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite Knisley 5th",
          "team1Id": 3221,
          "team2": "HC Elite 4th Tookes",
          "team2Id": 3276,
          "team1Score": "40",
          "team2Score": "44",
          "time": "2014-05-03T08:00:00"
        },
        {
          "id": 4857,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite Borden 8th",
          "team1Id": 3246,
          "team2": "MD Wildkatz 8th",
          "team2Id": 3252,
          "team1Score": "60",
          "team2Score": "27",
          "time": "2014-05-03T08:00:00"
        },
        {
          "id": 4799,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Severn Elite Gold",
          "team1Id": 3275,
          "team2": "Team Dedication 5th",
          "team2Id": 3224,
          "team1Score": "49",
          "team2Score": "15",
          "time": "2014-05-03T09:00:00"
        },
        {
          "id": 4786,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Borden 8th",
          "team1Id": 3246,
          "team2": "MD Shockers  8th",
          "team2Id": 3250,
          "team1Score": "77",
          "team2Score": "2",
          "time": "2014-05-03T09:00:00"
        },
        {
          "id": 4773,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Thai 9th",
          "team1Id": 3254,
          "team2": "Liberty Basketball 9th",
          "team2Id": 3256,
          "team1Score": "35",
          "team2Score": "60",
          "time": "2014-05-03T09:00:00"
        },
        {
          "id": 4811,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Team Dedication Gold  7th",
          "team1Id": 3240,
          "team2": "Columbia Ravens - Held 7th",
          "team2Id": 3238,
          "team1Score": "56",
          "team2Score": "32",
          "time": "2014-05-03T09:00:00"
        },
        {
          "id": 4812,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Tringali 9th",
          "team1Id": 3253,
          "team2": "MD Tar Heels 9th",
          "team2Id": 3287,
          "team1Score": "45",
          "team2Score": "31",
          "time": "2014-05-03T10:00:00"
        },
        {
          "id": 4774,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "EC Cobras 10th",
          "team1Id": 3268,
          "team2": "MD 3D 10th",
          "team2Id": 3290,
          "team1Score": "42",
          "team2Score": "40",
          "time": "2014-05-03T10:00:00"
        },
        {
          "id": 4787,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "CBSA Hoyas 11th",
          "team1Id": 3292,
          "team2": "MD Tar Heels 11th",
          "team2Id": 3291,
          "team1Score": "56",
          "team2Score": "44",
          "time": "2014-05-03T10:00:00"
        },
        {
          "id": 4800,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite 4th Tookes",
          "team1Id": 3276,
          "team2": "Randelstown Runnin Rebels 5th",
          "team2Id": 3226,
          "team1Score": "47",
          "team2Score": "22",
          "time": "2014-05-03T10:00:00"
        },
        {
          "id": 4801,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Severn Elite Gold",
          "team1Id": 3275,
          "team2": "CBSA Hoyas 5th Grade",
          "team2Id": 3225,
          "team1Score": "38",
          "team2Score": "37",
          "time": "2014-05-03T11:00:00"
        },
        {
          "id": 4788,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Double R Lakers 6th",
          "team1Id": 3278,
          "team2": "Baltimore Beastmode 6th",
          "team2Id": 3231,
          "team1Score": "38",
          "team2Score": "26",
          "time": "2014-05-03T11:00:00"
        },
        {
          "id": 4775,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Liberty Basketball 9th",
          "team1Id": 3256,
          "team2": "York Raiders 9th",
          "team2Id": 3258,
          "team1Score": "37",
          "team2Score": "52",
          "time": "2014-05-03T11:00:00"
        },
        {
          "id": 4813,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite Stefan 10th",
          "team1Id": 3263,
          "team2": "Delaware AIM 10th",
          "team2Id": 3265,
          "team1Score": "81",
          "team2Score": "36",
          "time": "2014-05-03T11:00:00"
        },
        {
          "id": 4823,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Team Dedication Gold  7th",
          "team1Id": 3240,
          "team2": "HC Elite Phillips 7th",
          "team2Id": 3234,
          "team1Score": "33",
          "team2Score": "40",
          "time": "2014-05-03T11:15:00"
        },
        {
          "id": 4832,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Team Dedication Blue 7th",
          "team1Id": 3241,
          "team2": "CC Crush 7th",
          "team2Id": 3282,
          "team1Score": "46",
          "team2Score": "33",
          "time": "2014-05-03T11:15:00"
        },
        {
          "id": 4833,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Columbia Ravens - Paugh 7th",
          "team1Id": 3239,
          "team2": "Randelstown Runnin Rebels 7th",
          "team2Id": 3244,
          "team1Score": "30",
          "team2Score": "44",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4824,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Team Dedication 5th",
          "team1Id": 3224,
          "team2": "HC Elite Knisley 5th",
          "team2Id": 3221,
          "team1Score": "21",
          "team2Score": "1",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4814,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Team Ice 10th",
          "team1Id": 3267,
          "team2": "EC Cobras 10th",
          "team2Id": 3268,
          "team1Score": "31",
          "team2Score": "36",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4776,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "MD Tar Heels 9th",
          "team1Id": 3287,
          "team2": "Raptors 9th",
          "team2Id": 3257,
          "team1Score": "47",
          "team2Score": "34",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4789,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite White 6th",
          "team1Id": 3227,
          "team2": "Columbia Ravens 6th",
          "team2Id": 3229,
          "team1Score": "35",
          "team2Score": "28",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4802,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Columbia Ravens 5th",
          "team1Id": 3222,
          "team2": "HC Elite OMalley 5th",
          "team2Id": 3220,
          "team1Score": "43",
          "team2Score": "44",
          "time": "2014-05-03T12:15:00"
        },
        {
          "id": 4855,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Double R Lakers 8th",
          "team1Id": 3285,
          "team2": "E-Town Elite 8th",
          "team2Id": 3251,
          "team1Score": "49",
          "team2Score": "14",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4790,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "MD Shockers  8th",
          "team1Id": 3250,
          "team2": "MD Wildkatz 8th",
          "team2Id": 3252,
          "team1Score": "28",
          "team2Score": "27",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4777,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Delaware AIM 10th",
          "team1Id": 3265,
          "team2": "MD Hoopmasters - Woodyard 10th",
          "team2Id": 3271,
          "team1Score": "38",
          "team2Score": "31",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4815,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "BTA Academy 10th",
          "team1Id": 3288,
          "team2": "MD 3D 10th",
          "team2Id": 3290,
          "team1Score": "46",
          "team2Score": "59",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4825,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Team Dedication Gold  7th",
          "team1Id": 3240,
          "team2": "CBSA Hoyas  7th",
          "team2Id": 3243,
          "team1Score": "60",
          "team2Score": "50",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4834,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "CC Crush 7th",
          "team1Id": 3282,
          "team2": "Double R Lakers 7th",
          "team2Id": 3280,
          "team1Score": "25",
          "team2Score": "62",
          "time": "2014-05-03T13:15:00"
        },
        {
          "id": 4835,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Spartans 7th",
          "team1Id": 3283,
          "team2": "Team Dedication Blue 7th",
          "team2Id": 3241,
          "team1Score": "36",
          "team2Score": "31",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4826,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "MD 3D 7th",
          "team1Id": 3242,
          "team2": "HC Elite Phillips 7th",
          "team2Id": 3234,
          "team1Score": "48",
          "team2Score": "39",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4816,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Clark 10th",
          "team1Id": 3264,
          "team2": "Team Ice 10th",
          "team2Id": 3267,
          "team1Score": "64",
          "team2Score": "37",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4778,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Thai 9th",
          "team1Id": 3254,
          "team2": "York Raiders 9th",
          "team2Id": 3258,
          "team1Score": "42",
          "team2Score": "60",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4791,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Double R Lakers 6th",
          "team1Id": 3278,
          "team2": "Columbia Ravens 6th",
          "team2Id": 3229,
          "team1Score": "29",
          "team2Score": "35",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4804,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Severn Elite Gold",
          "team1Id": 3275,
          "team2": "Columbia Ravens 5th",
          "team2Id": 3222,
          "team1Score": "35",
          "team2Score": "34",
          "time": "2014-05-03T14:15:00"
        },
        {
          "id": 4805,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite - Dan Nap 11th",
          "team1Id": 3270,
          "team2": "MD Tar Heels 11th",
          "team2Id": 3291,
          "team1Score": "53",
          "team2Score": "42",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4792,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Green 6th",
          "team1Id": 3228,
          "team2": "Team Dedication 6th",
          "team2Id": 3230,
          "team1Score": "49",
          "team2Score": "21",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4779,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "MD Hoopmasters - Neville 11th",
          "team1Id": 3272,
          "team2": "Team AIP 11th",
          "team2Id": 3273,
          "team1Score": "41",
          "team2Score": "68",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4817,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Stefan 11th",
          "team1Id": 3274,
          "team2": "CBSA Hoyas 11th",
          "team2Id": 3292,
          "team1Score": "80",
          "team2Score": "59",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4827,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "CBSA Hoyas  7th",
          "team1Id": 3243,
          "team2": "HC Elite White - Hollwedel 7th",
          "team2Id": 3236,
          "team1Score": "31",
          "team2Score": "48",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4836,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Liberty Dream 7th",
          "team1Id": 3281,
          "team2": "Columbia Ravens - Paugh 7th",
          "team2Id": 3239,
          "team1Score": "32",
          "team2Score": "43",
          "time": "2014-05-03T15:15:00"
        },
        {
          "id": 4837,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Double R Lakers 7th",
          "team1Id": 3280,
          "team2": "Spartans 7th",
          "team2Id": 3283,
          "team1Score": "40",
          "team2Score": "25",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4828,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Columbia Ravens Chamblee 7th",
          "team1Id": 3237,
          "team2": "Randelstown Runnin Rebels 7th",
          "team2Id": 3244,
          "team1Score": "23",
          "team2Score": "65",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4818,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "E-Town Elite 10th",
          "team1Id": 3266,
          "team2": "Elite Ballers 10th",
          "team2Id": 3289,
          "team1Score": "28",
          "team2Score": "57",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4780,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "MD Hoopmasters 9th",
          "team1Id": 3255,
          "team2": "Raptors 9th",
          "team2Id": 3257,
          "team1Score": "58",
          "team2Score": "39",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4793,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "CBSA Hoyas 9th",
          "team1Id": 3262,
          "team2": "Liberty Road Alliance 9th",
          "team2Id": 3260,
          "team1Score": "38",
          "team2Score": "52",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4797,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Team Dedication 8th",
          "team1Id": 3248,
          "team2": "Double R Lakers 8th",
          "team2Id": 3285,
          "team1Score": "44",
          "team2Score": "41",
          "time": "2014-05-03T16:30:00"
        },
        {
          "id": 4807,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Columbia Ravens 8th",
          "team1Id": 3247,
          "team2": "Fairfax Stars 8th",
          "team2Id": 3286,
          "team1Score": "34",
          "team2Score": "45",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4794,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Team Dedication 6th",
          "team1Id": 3230,
          "team2": "MD 3D  6th",
          "team2Id": 3232,
          "team1Score": "28",
          "team2Score": "36",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4781,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "AIP  9th",
          "team1Id": 3259,
          "team2": "HC Elite - Thai 9th",
          "team2Id": 3254,
          "team1Score": "52",
          "team2Score": "42",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4819,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Team Ice 10th",
          "team1Id": 3267,
          "team2": "BTA Academy 10th",
          "team2Id": 3288,
          "team1Score": "44",
          "team2Score": "46",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4829,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Frederick Storm",
          "team1Id": 4298,
          "team2": "MD 3D 7th",
          "team2Id": 3242,
          "team1Score": "42",
          "team2Score": "58",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4838,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Green- Hollwedel 7th",
          "team1Id": 3235,
          "team2": "Laurel Stallions 7th",
          "team2Id": 3279,
          "team1Score": "60",
          "team2Score": "34",
          "time": "2014-05-03T17:30:00"
        },
        {
          "id": 4839,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Columbia Ravens Chamblee 7th",
          "team1Id": 3237,
          "team2": "Liberty Dream 7th",
          "team2Id": 3281,
          "team1Score": "45",
          "team2Score": "49",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4830,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "MD Finest 8th",
          "team1Id": 3284,
          "team2": "HC Elite Eudell 8th",
          "team2Id": 3245,
          "team1Score": "38",
          "team2Score": "32",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4820,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Elite Ballers 10th",
          "team1Id": 3289,
          "team2": "MD Hoopmasters - Woodyard 10th",
          "team2Id": 3271,
          "team1Score": "59",
          "team2Score": "49",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4782,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Liberty Road Alliance 9th",
          "team1Id": 3260,
          "team2": "MD Hoopmasters 9th",
          "team2Id": 3255,
          "team1Score": "32",
          "team2Score": "46",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4795,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Team Dedication 8th",
          "team1Id": 3248,
          "team2": "E-Town Elite 8th",
          "team2Id": 3251,
          "team1Score": "50",
          "team2Score": "22",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4808,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Randelstown Runnin Rebels 5th",
          "team1Id": 3226,
          "team2": "CBSA Hoyas 5th Grade",
          "team2Id": 3225,
          "team1Score": "25",
          "team2Score": "38",
          "time": "2014-05-03T18:30:00"
        },
        {
          "id": 4809,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "MD 3D  6th",
          "team1Id": 3232,
          "team2": "HC Elite White 6th",
          "team2Id": 3227,
          "team1Score": "21",
          "team2Score": "44",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4796,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Fairfax Stars 8th",
          "team1Id": 3286,
          "team2": "MD Shockers  8th",
          "team2Id": 3250,
          "team1Score": "95",
          "team2Score": "15",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4783,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Urbana Hawks 9th",
          "team1Id": 3261,
          "team2": "AIP  9th",
          "team2Id": 3259,
          "team1Score": "30",
          "team2Score": "64",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4821,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "E-Town Elite 10th",
          "team1Id": 3266,
          "team2": "HC Elite Stefan 10th",
          "team2Id": 3263,
          "team1Score": "40",
          "team2Score": "78",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4831,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "MD 3D 7th",
          "team1Id": 3242,
          "team2": "HC Elite Green- Hollwedel 7th",
          "team2Id": 3235,
          "team1Score": "40",
          "team2Score": "46",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4840,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Columbia Ravens - Held 7th",
          "team1Id": 3238,
          "team2": "Laurel Stallions 7th",
          "team2Id": 3279,
          "team1Score": "36",
          "team2Score": "54",
          "time": "2014-05-03T19:30:00"
        },
        {
          "id": 4822,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Stefan 11th",
          "team1Id": 3274,
          "team2": "HC Elite - Dan Nap 11th",
          "team2Id": 3270,
          "team1Score": "61",
          "team2Score": "59",
          "time": "2014-05-03T20:30:00"
        },
        {
          "id": 4784,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Tringali 9th",
          "team1Id": 3253,
          "team2": "Raptors 9th",
          "team2Id": 3257,
          "team1Score": "53",
          "team2Score": "19",
          "time": "2014-05-03T20:30:00"
        },
        {
          "id": 4810,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite - Stock 11th",
          "team1Id": 3269,
          "team2": "MD Hoopmasters - Neville 11th",
          "team2Id": 3272,
          "team1Score": "44",
          "team2Score": "45",
          "time": "2014-05-03T20:30:00"
        },
        {
          "id": 4861,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Baltimore Beastmode 6th",
          "team1Id": 3231,
          "team2": "Team Dedication 6th",
          "team2Id": 3230,
          "team1Score": "29",
          "team2Score": "20",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 5907,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite Knisley 5th",
          "team1Id": 3221,
          "team2": "HC Elite OMalley 5th",
          "team2Id": 3220,
          "team1Score": "58",
          "team2Score": "73",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 4841,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Dan Nap 11th",
          "team1Id": 3270,
          "team2": "HC Elite - Stock 11th",
          "team2Id": 3269,
          "team1Score": "55",
          "team2Score": "43",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 4851,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Columbia Ravens 6th",
          "team1Id": 3229,
          "team2": "MD 3D  6th",
          "team2Id": 3232,
          "team1Score": "53",
          "team2Score": "39",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 4888,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Phillips 7th",
          "team1Id": 3234,
          "team2": "HC Elite White - Hollwedel 7th",
          "team2Id": 3236,
          "team1Score": "39",
          "team2Score": "32",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 4879,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Team Dedication Blue 7th",
          "team1Id": 3241,
          "team2": "Liberty Dream 7th",
          "team2Id": 3281,
          "team1Score": "30",
          "team2Score": "37",
          "time": "2014-05-04T09:00:00"
        },
        {
          "id": 4880,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Columbia Ravens - Paugh 7th",
          "team1Id": 3239,
          "team2": "Spartans 7th",
          "team2Id": 3283,
          "team1Score": "63",
          "team2Score": "24",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4889,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "CBSA Hoyas  7th",
          "team1Id": 3243,
          "team2": "MD 3D 7th",
          "team2Id": 3242,
          "team1Score": "34",
          "team2Score": "56",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4852,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "MD Finest 8th",
          "team1Id": 3284,
          "team2": "Double R Lakers 8th",
          "team2Id": 3285,
          "team1Score": "59",
          "team2Score": "38",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4842,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "AIP  9th",
          "team1Id": 3259,
          "team2": "Liberty Basketball 9th",
          "team2Id": 3256,
          "team1Score": "33",
          "team2Score": "62",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4871,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite Stefan 10th",
          "team1Id": 3263,
          "team2": "Elite Ballers 10th",
          "team2Id": 3289,
          "team1Score": "54",
          "team2Score": "49",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4862,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Fairfax Stars 8th",
          "team1Id": 3286,
          "team2": "MD Wildkatz 8th",
          "team2Id": 3252,
          "team1Score": "61",
          "team2Score": "12",
          "time": "2014-05-04T10:00:00"
        },
        {
          "id": 4863,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "MD 3D  6th",
          "team1Id": 3232,
          "team2": "Baltimore Beastmode 6th",
          "team2Id": 3231,
          "team1Score": "21",
          "team2Score": "41",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4872,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Stefan 11th",
          "team1Id": 3274,
          "team2": "MD Tar Heels 11th",
          "team2Id": 3291,
          "team1Score": "50",
          "team2Score": "40",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4843,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "HC Elite - Tringali 9th",
          "team1Id": 3253,
          "team2": "MD Hoopmasters 9th",
          "team2Id": 3255,
          "team1Score": "58",
          "team2Score": "18",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4853,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Green 6th",
          "team1Id": 3228,
          "team2": "Columbia Ravens 6th",
          "team2Id": 3229,
          "team1Score": "52",
          "team2Score": "12",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4881,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "HC Elite - Stock 11th",
          "team1Id": 3269,
          "team2": "Team AIP 11th",
          "team2Id": 3273,
          "team1Score": "41",
          "team2Score": "78",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4897,
          "location": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1015,
          "team1": "Team Dedication 5th",
          "team1Id": 3224,
          "team2": "Randelstown Runnin Rebels 5th",
          "team2Id": 3226,
          "team1Score": "42",
          "team2Score": "27",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4902,
          "location": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1016,
          "team1": "MD 3D 5th",
          "team1Id": 3277,
          "team2": "Columbia Ravens 5th",
          "team2Id": 3222,
          "team1Score": "25",
          "team2Score": "38",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 4891,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Green- Hollwedel 7th",
          "team1Id": 3235,
          "team2": "HC Elite White - Hollwedel 7th",
          "team2Id": 3236,
          "team1Score": "59",
          "team2Score": "23",
          "time": "2014-05-04T11:00:00"
        },
        {
          "id": 5908,
          "location": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1016,
          "team1": "Team Dedication Blue 7th",
          "team1Id": 3241,
          "team2": "Frederick Storm",
          "team2Id": 4298,
          "team1Score": "26",
          "team2Score": "40",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4898,
          "location": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1015,
          "team1": "CBSA Hoyas 5th Grade",
          "team1Id": 3225,
          "team2": "HC Elite Knisley 5th",
          "team2Id": 3221,
          "team1Score": "46",
          "team2Score": "36",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4890,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "CBSA Hoyas  7th",
          "team1Id": 3243,
          "team2": "Laurel Stallions 7th",
          "team2Id": 3279,
          "team1Score": "42",
          "team2Score": "47",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4854,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Team Dedication 8th",
          "team1Id": 3248,
          "team2": "MD Finest 8th",
          "team2Id": 3284,
          "team1Score": "34",
          "team2Score": "51",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4844,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "York Raiders 9th",
          "team1Id": 3258,
          "team2": "AIP  9th",
          "team2Id": 3259,
          "team1Score": "52",
          "team2Score": "58",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4873,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "CBSA Hoyas 9th",
          "team1Id": 3262,
          "team2": "Raptors 9th",
          "team2Id": 3257,
          "team1Score": "49",
          "team2Score": "46",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4864,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite Borden 8th",
          "team1Id": 3246,
          "team2": "Fairfax Stars 8th",
          "team2Id": 3286,
          "team1Score": "20",
          "team2Score": "44",
          "time": "2014-05-04T12:00:00"
        },
        {
          "id": 4883,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Columbia Ravens Chamblee 7th",
          "team1Id": 3237,
          "team2": "CC Crush 7th",
          "team2Id": 3282,
          "team1Score": "37",
          "team2Score": "43",
          "time": "2014-05-04T13:00:00"
        },
        {
          "id": 4904,
          "location": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1016,
          "team1": "MD 3D 5th",
          "team1Id": 3277,
          "team2": "Severn Elite Gold",
          "team2Id": 3275,
          "team1Score": "40",
          "team2Score": "19",
          "time": "2014-05-04T13:00:00"
        },
        {
          "id": 4893,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Double R Lakers 7th",
          "team1Id": 3280,
          "team2": "Liberty Dream 7th",
          "team2Id": 3281,
          "team1Score": "39",
          "team2Score": "36",
          "time": "2014-05-04T13:00:00"
        },
        {
          "id": 5909,
          "location": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1015,
          "team1": "Randelstown Runnin Rebels 7th",
          "team1Id": 3244,
          "team2": "Frederick Storm",
          "team2Id": 4298,
          "team1Score": "76",
          "team2Score": "30",
          "time": "2014-05-04T13:00:00"
        },
        {
          "id": 4865,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Team Dedication 6th",
          "team1Id": 3230,
          "team2": "Double R Lakers 6th",
          "team2Id": 3278,
          "team1Score": "31",
          "team2Score": "30",
          "time": "2014-05-04T13:15:00"
        },
        {
          "id": 4874,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Stefan 11th",
          "team1Id": 3274,
          "team2": "Team AIP 11th",
          "team2Id": 3273,
          "team1Score": "60",
          "team2Score": "71",
          "time": "2014-05-04T13:15:00"
        },
        {
          "id": 4845,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Liberty Basketball 9th",
          "team1Id": 3256,
          "team2": "Urbana Hawks 9th",
          "team2Id": 3261,
          "team1Score": "69",
          "team2Score": "38",
          "time": "2014-05-04T13:15:00"
        },
        {
          "id": 4866,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "MD Wildkatz 8th",
          "team1Id": 3252,
          "team2": "Columbia Ravens 8th",
          "team2Id": 3247,
          "team1Score": "20",
          "team2Score": "50",
          "time": "2014-05-04T13:15:00"
        },
        {
          "id": 4892,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "HC Elite Phillips 7th",
          "team1Id": 3234,
          "team2": "Laurel Stallions 7th",
          "team2Id": 3279,
          "team1Score": "47",
          "team2Score": "42",
          "time": "2014-05-04T14:00:00"
        },
        {
          "id": 4905,
          "location": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1016,
          "team1": "CBSA Hoyas 5th Grade",
          "team1Id": 3225,
          "team2": "HC Elite 4th Tookes",
          "team2Id": 3276,
          "team1Score": "28",
          "team2Score": "34",
          "time": "2014-05-04T14:00:00"
        },
        {
          "id": 4900,
          "location": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1015,
          "team1": "HC Elite Knisley 5th",
          "team1Id": 3221,
          "team2": "Randelstown Runnin Rebels 5th",
          "team2Id": 3226,
          "team1Score": "28",
          "team2Score": "34",
          "time": "2014-05-04T14:00:00"
        },
        {
          "id": 4884,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Delaware AIM 10th",
          "team1Id": 3265,
          "team2": "E-Town Elite 10th",
          "team2Id": 3266,
          "team1Score": "36",
          "team2Score": "25",
          "time": "2014-05-04T14:00:00"
        },
        {
          "id": 4856,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite - Clark 10th",
          "team1Id": 3264,
          "team2": "BTA Academy 10th",
          "team2Id": 3288,
          "team1Score": "51",
          "team2Score": "33",
          "time": "2014-05-04T14:15:00"
        },
        {
          "id": 4846,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "MD Hoopmasters 9th",
          "team1Id": 3255,
          "team2": "CBSA Hoyas 9th",
          "team2Id": 3262,
          "team1Score": "55",
          "team2Score": "57",
          "time": "2014-05-04T14:15:00"
        },
        {
          "id": 4875,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "MD 3D 10th",
          "team1Id": 3290,
          "team2": "Team Ice 10th",
          "team2Id": 3267,
          "team1Score": "61",
          "team2Score": "33",
          "time": "2014-05-04T14:15:00"
        },
        {
          "id": 4803,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Baltimore Beastmode 6th",
          "team1Id": 3231,
          "team2": "HC Elite Green 6th",
          "team2Id": 3228,
          "team1Score": "24",
          "team2Score": "39",
          "time": "2014-05-04T14:15:00"
        },
        {
          "id": 4885,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "HC Elite - Tringali 9th",
          "team1Id": 3253,
          "team2": "Liberty Road Alliance 9th",
          "team2Id": 3260,
          "team1Score": "38",
          "team2Score": "16",
          "time": "2014-05-04T15:00:00"
        },
        {
          "id": 4901,
          "location": "Gary Arthur Community Center ct 7",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1015,
          "team1": "MD Finest 8th",
          "team1Id": 3284,
          "team2": "E-Town Elite 8th",
          "team2Id": 3251,
          "team1Score": "48",
          "team2Score": "29",
          "time": "2014-05-04T15:00:00"
        },
        {
          "id": 4906,
          "location": "Gary Arthur Community Center ct 8",
          "locationUrl": "http://goo.gl/maps/E0Mhb",
          "locationId": 1016,
          "team1": "HC Elite Eudell 8th",
          "team1Id": 3245,
          "team2": "Double R Lakers 8th",
          "team2Id": 3285,
          "team1Score": "45",
          "team2Score": "42",
          "time": "2014-05-04T15:00:00"
        },
        {
          "id": 4894,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Columbia Ravens Chamblee 7th",
          "team1Id": 3237,
          "team2": "Spartans 7th",
          "team2Id": 3283,
          "team1Score": "27",
          "team2Score": "37",
          "time": "2014-05-04T15:00:00"
        },
        {
          "id": 4867,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Double R Lakers 6th",
          "team1Id": 3278,
          "team2": "HC Elite White 6th",
          "team2Id": 3227,
          "team1Score": "18",
          "team2Score": "45",
          "time": "2014-05-04T15:15:00"
        },
        {
          "id": 4847,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Urbana Hawks 9th",
          "team1Id": 3261,
          "team2": "York Raiders 9th",
          "team2Id": 3258,
          "team1Score": "33",
          "team2Score": "83",
          "time": "2014-05-04T15:15:00"
        },
        {
          "id": 5910,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "Frederick Storm",
          "team1Id": 4298,
          "team2": "Columbia Ravens - Held 7th",
          "team2Id": 3238,
          "team1Score": "29",
          "team2Score": "43",
          "time": "2014-05-04T15:15:00"
        },
        {
          "id": 4895,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "Randelstown Runnin Rebels 7th",
          "team1Id": 3244,
          "team2": "Double R Lakers 7th",
          "team2Id": 3280,
          "team1Score": "40",
          "team2Score": "32",
          "time": "2014-05-04T16:00:00"
        },
        {
          "id": 4886,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "CC Crush 7th",
          "team1Id": 3282,
          "team2": "Columbia Ravens - Paugh 7th",
          "team2Id": 3239,
          "team1Score": "39",
          "team2Score": "59",
          "time": "2014-05-04T16:00:00"
        },
        {
          "id": 4858,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "MD Hoopmasters - Neville 11th",
          "team1Id": 3272,
          "team2": "CBSA Hoyas 11th",
          "team2Id": 3292,
          "team1Score": "44",
          "team2Score": "48",
          "time": "2014-05-04T16:15:00"
        },
        {
          "id": 4848,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "CBSA Hoyas 9th",
          "team1Id": 3262,
          "team2": "MD Tar Heels 9th",
          "team2Id": 3287,
          "team1Score": "37",
          "team2Score": "41",
          "time": "2014-05-04T16:15:00"
        },
        {
          "id": 4868,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "MD 3D 5th",
          "team1Id": 3277,
          "team2": "HC Elite OMalley 5th",
          "team2Id": 3220,
          "team1Score": "55",
          "team2Score": "33",
          "time": "2014-05-04T16:15:00"
        },
        {
          "id": 4877,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite - Clark 10th",
          "team1Id": 3264,
          "team2": "MD 3D 10th",
          "team2Id": 3290,
          "team1Score": "56",
          "team2Score": "41",
          "time": "2014-05-04T16:15:00"
        },
        {
          "id": 4887,
          "location": "North Laurel Comm. Center Ct. 5",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1003,
          "team1": "Elite Ballers 10th",
          "team1Id": 3289,
          "team2": "Delaware AIM 10th",
          "team2Id": 3265,
          "team1Score": "53",
          "team2Score": "38",
          "time": "2014-05-04T17:00:00"
        },
        {
          "id": 4896,
          "location": "North Laurel Comm. Center Ct. 6",
          "locationUrl": "http://goo.gl/maps/DlXFH",
          "locationId": 1011,
          "team1": "E-Town Elite 10th",
          "team1Id": 3266,
          "team2": "MD Hoopmasters - Woodyard 10th",
          "team2Id": 3271,
          "team1Score": "38",
          "team2Score": "54",
          "time": "2014-05-04T17:00:00"
        },
        {
          "id": 4878,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Team AIP 11th",
          "team1Id": 3273,
          "team2": "MD Tar Heels 11th",
          "team2Id": 3291,
          "team1Score": "59",
          "team2Score": "41",
          "time": "2014-05-04T17:15:00"
        },
        {
          "id": 4869,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "Columbia Ravens 5th",
          "team1Id": 3222,
          "team2": "HC Elite 4th Tookes",
          "team2Id": 3276,
          "team1Score": "32",
          "team2Score": "20",
          "time": "2014-05-04T17:15:00"
        },
        {
          "id": 4849,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "E-Town Elite 8th",
          "team1Id": 3251,
          "team2": "HC Elite Eudell 8th",
          "team2Id": 3245,
          "team1Score": "9",
          "team2Score": "44",
          "time": "2014-05-04T17:15:00"
        },
        {
          "id": 4859,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Borden 8th",
          "team1Id": 3246,
          "team2": "Columbia Ravens 8th",
          "team2Id": 3247,
          "team1Score": "31",
          "team2Score": "35",
          "time": "2014-05-04T17:15:00"
        },
        {
          "id": 4860,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "BTA Academy 10th",
          "team1Id": 3288,
          "team2": "EC Cobras 10th",
          "team2Id": 3268,
          "team1Score": "1",
          "team2Score": "21",
          "time": "2014-05-04T18:30:00"
        },
        {
          "id": 4850,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "MD Tar Heels 9th",
          "team1Id": 3287,
          "team2": "Liberty Road Alliance 9th",
          "team2Id": 3260,
          "team1Score": "37",
          "team2Score": "36",
          "time": "2014-05-04T18:30:00"
        },
        {
          "id": 4870,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "CBSA Hoyas 11th",
          "team1Id": 3292,
          "team2": "HC Elite - Stock 11th",
          "team2Id": 3269,
          "team1Score": "42",
          "team2Score": "55",
          "time": "2014-05-04T18:30:00"
        },
        {
          "id": 4912,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HC Elite White 6th",
          "team1Id": 3227,
          "team2": "HC Elite Green 6th",
          "team2Id": 3228,
          "team1Score": "28",
          "team2Score": "41",
          "time": "2014-05-04T18:30:00"
        },
        {
          "id": 4913,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "Randelstown Runnin Rebels 7th",
          "team1Id": 3244,
          "team2": "Columbia Ravens - Paugh 7th",
          "team2Id": 3239,
          "team1Score": "38",
          "team2Score": "29",
          "time": "2014-05-04T19:30:00"
        },
        {
          "id": 4910,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HC Elite 4th Tookes",
          "team1Id": 3276,
          "team2": "MD 3D 5th",
          "team2Id": 3277,
          "team1Score": "42",
          "team2Score": "36",
          "time": "2014-05-04T19:30:00"
        },
        {
          "id": 4907,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "Fairfax Stars 8th",
          "team1Id": 3286,
          "team2": "MD Finest 8th",
          "team2Id": 3284,
          "team1Score": "35",
          "team2Score": "31",
          "time": "2014-05-04T19:30:00"
        },
        {
          "id": 4909,
          "location": "Meadowbrook Ct. 2",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 4,
          "team1": "HC Elite Green- Hollwedel 7th",
          "team1Id": 3235,
          "team2": "MD 3D 7th",
          "team2Id": 3242,
          "team1Score": "36",
          "team2Score": "42",
          "time": "2014-05-04T19:30:00"
        },
        {
          "id": 4908,
          "location": "Meadowbrook Ct. 1",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 3,
          "team1": "9th Grade Green 1st Seed",
          "team1Id": 3304,
          "team2": "9th Grade White 1st Seed",
          "team2Id": 3303,
          "team1Score": "",
          "team2Score": "",
          "time": "2014-05-04T20:30:00"
        },
        {
          "id": 4911,
          "location": "Meadowbrook Ct. 3",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 5,
          "team1": "HS 11th Grade 1st Seed",
          "team1Id": 3307,
          "team2": "HS 11th Grade 2nd Seed",
          "team2Id": 3308,
          "team1Score": "",
          "team2Score": "",
          "time": "2014-05-04T20:30:00"
        },
        {
          "id": 4914,
          "location": "Meadowbrook Ct. 4",
          "locationUrl": "http://goo.gl/rHw5Rj",
          "locationId": 6,
          "team1": "HS 10th Grade Green 1st Seed",
          "team1Id": 3306,
          "team2": "HS 10th Grade White 1st Seed",
          "team2Id": 3305,
          "team1Score": "",
          "team2Score": "",
          "time": "2014-05-04T20:30:00"
        }
      ],
      "standings": [
        {
          "divisionName": "5th Grade - Green",
          "divisionStandings": [
            {
              "teamId": 3275,
              "teamName": "Severn Elite Gold",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 141,
              "pointsAgainst": 126,
              "pointsDiff": 15
            },
            {
              "teamId": 3220,
              "teamName": "HC Elite OMalley 5th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 196,
              "pointsAgainst": 191,
              "pointsDiff": 5
            },
            {
              "teamId": 3277,
              "teamName": "MD 3D 5th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 156,
              "pointsAgainst": 132,
              "pointsDiff": 24
            },
            {
              "teamId": 3222,
              "teamName": "Columbia Ravens 5th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 147,
              "pointsAgainst": 124,
              "pointsDiff": 23
            },
            {
              "teamId": 3224,
              "teamName": "Team Dedication 5th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 113,
              "pointsAgainst": 123,
              "pointsDiff": -10
            },
            {
              "teamId": 4299,
              "teamName": "D1 Spartans",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            }
          ]
        },
        {
          "divisionName": "5th Grade - White",
          "divisionStandings": [
            {
              "teamId": 3276,
              "teamName": "HC Elite 4th Tookes",
              "wins": 4,
              "losses": 1,
              "winningPct": ".800",
              "pointsFor": 187,
              "pointsAgainst": 158,
              "pointsDiff": 29
            },
            {
              "teamId": 3225,
              "teamName": "CBSA Hoyas 5th Grade",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 149,
              "pointsAgainst": 133,
              "pointsDiff": 16
            },
            {
              "teamId": 3226,
              "teamName": "Randelstown Runnin Rebels 5th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 108,
              "pointsAgainst": 155,
              "pointsDiff": -47
            },
            {
              "teamId": 3223,
              "teamName": "Up n Coming Clippers 5th",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3221,
              "teamName": "HC Elite Knisley 5th",
              "wins": 0,
              "losses": 5,
              "winningPct": ".000",
              "pointsFor": 163,
              "pointsAgainst": 218,
              "pointsDiff": -55
            }
          ]
        },
        {
          "divisionName": "6th Grade",
          "divisionStandings": [
            {
              "teamId": 3228,
              "teamName": "HC Elite Green 6th",
              "wins": 4,
              "losses": 1,
              "winningPct": ".800",
              "pointsFor": 226,
              "pointsAgainst": 132,
              "pointsDiff": 94
            },
            {
              "teamId": 3227,
              "teamName": "HC Elite White 6th",
              "wins": 4,
              "losses": 1,
              "winningPct": ".800",
              "pointsFor": 199,
              "pointsAgainst": 153,
              "pointsDiff": 46
            },
            {
              "teamId": 3231,
              "teamName": "Baltimore Beastmode 6th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 120,
              "pointsAgainst": 118,
              "pointsDiff": 2
            },
            {
              "teamId": 3229,
              "teamName": "Columbia Ravens 6th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 128,
              "pointsAgainst": 155,
              "pointsDiff": -27
            },
            {
              "teamId": 3278,
              "teamName": "Double R Lakers 6th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 115,
              "pointsAgainst": 137,
              "pointsDiff": -22
            },
            {
              "teamId": 3230,
              "teamName": "Team Dedication 6th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 100,
              "pointsAgainst": 144,
              "pointsDiff": -44
            },
            {
              "teamId": 3232,
              "teamName": "MD 3D  6th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 117,
              "pointsAgainst": 166,
              "pointsDiff": -49
            }
          ]
        },
        {
          "divisionName": "7th Grade - Green",
          "divisionStandings": [
            {
              "teamId": 3244,
              "teamName": "Randelstown Runnin Rebels 7th",
              "wins": 5,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 263,
              "pointsAgainst": 144,
              "pointsDiff": 119
            },
            {
              "teamId": 3280,
              "teamName": "Double R Lakers 7th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 173,
              "pointsAgainst": 126,
              "pointsDiff": 47
            },
            {
              "teamId": 3239,
              "teamName": "Columbia Ravens - Paugh 7th",
              "wins": 3,
              "losses": 2,
              "winningPct": ".600",
              "pointsFor": 224,
              "pointsAgainst": 177,
              "pointsDiff": 47
            },
            {
              "teamId": 3281,
              "teamName": "Liberty Dream 7th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 154,
              "pointsAgainst": 157,
              "pointsDiff": -3
            },
            {
              "teamId": 3283,
              "teamName": "Spartans 7th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 122,
              "pointsAgainst": 161,
              "pointsDiff": -39
            },
            {
              "teamId": 3241,
              "teamName": "Team Dedication Blue 7th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 133,
              "pointsAgainst": 146,
              "pointsDiff": -13
            },
            {
              "teamId": 4298,
              "teamName": "Frederick Storm",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 141,
              "pointsAgainst": 203,
              "pointsDiff": -62
            },
            {
              "teamId": 3282,
              "teamName": "CC Crush 7th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 140,
              "pointsAgainst": 204,
              "pointsDiff": -64
            },
            {
              "teamId": 3237,
              "teamName": "Columbia Ravens Chamblee 7th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 132,
              "pointsAgainst": 194,
              "pointsDiff": -62
            }
          ]
        },
        {
          "divisionName": "7th Grade - White",
          "divisionStandings": [
            {
              "teamId": 3242,
              "teamName": "MD 3D 7th",
              "wins": 4,
              "losses": 1,
              "winningPct": ".800",
              "pointsFor": 244,
              "pointsAgainst": 197,
              "pointsDiff": 47
            },
            {
              "teamId": 3240,
              "teamName": "Team Dedication Gold  7th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 190,
              "pointsAgainst": 158,
              "pointsDiff": 32
            },
            {
              "teamId": 3234,
              "teamName": "HC Elite Phillips 7th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 165,
              "pointsAgainst": 155,
              "pointsDiff": 10
            },
            {
              "teamId": 3235,
              "teamName": "HC Elite Green- Hollwedel 7th",
              "wins": 3,
              "losses": 2,
              "winningPct": ".600",
              "pointsFor": 237,
              "pointsAgainst": 180,
              "pointsDiff": 57
            },
            {
              "teamId": 3279,
              "teamName": "Laurel Stallions 7th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 177,
              "pointsAgainst": 185,
              "pointsDiff": -8
            },
            {
              "teamId": 3236,
              "teamName": "HC Elite White - Hollwedel 7th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 135,
              "pointsAgainst": 159,
              "pointsDiff": -24
            },
            {
              "teamId": 3238,
              "teamName": "Columbia Ravens - Held 7th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 141,
              "pointsAgainst": 171,
              "pointsDiff": -30
            },
            {
              "teamId": 3243,
              "teamName": "CBSA Hoyas  7th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 157,
              "pointsAgainst": 211,
              "pointsDiff": -54
            }
          ]
        },
        {
          "divisionName": "8th Grade - Green",
          "divisionStandings": [
            {
              "teamId": 3286,
              "teamName": "Fairfax Stars 8th",
              "wins": 5,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 280,
              "pointsAgainst": 112,
              "pointsDiff": 168
            },
            {
              "teamId": 3247,
              "teamName": "Columbia Ravens 8th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 186,
              "pointsAgainst": 112,
              "pointsDiff": 74
            },
            {
              "teamId": 3246,
              "teamName": "HC Elite Borden 8th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 188,
              "pointsAgainst": 108,
              "pointsDiff": 80
            },
            {
              "teamId": 3250,
              "teamName": "MD Shockers  8th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 61,
              "pointsAgainst": 266,
              "pointsDiff": -205
            },
            {
              "teamId": 3252,
              "teamName": "MD Wildkatz 8th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 86,
              "pointsAgainst": 199,
              "pointsDiff": -113
            }
          ]
        },
        {
          "divisionName": "8th Grade - White",
          "divisionStandings": [
            {
              "teamId": 3284,
              "teamName": "MD Finest 8th",
              "wins": 4,
              "losses": 1,
              "winningPct": ".800",
              "pointsFor": 227,
              "pointsAgainst": 168,
              "pointsDiff": 59
            },
            {
              "teamId": 3245,
              "teamName": "HC Elite Eudell 8th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 167,
              "pointsAgainst": 118,
              "pointsDiff": 49
            },
            {
              "teamId": 3248,
              "teamName": "Team Dedication 8th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 157,
              "pointsAgainst": 160,
              "pointsDiff": -3
            },
            {
              "teamId": 3285,
              "teamName": "Double R Lakers 8th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 170,
              "pointsAgainst": 162,
              "pointsDiff": 8
            },
            {
              "teamId": 3251,
              "teamName": "E-Town Elite 8th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 74,
              "pointsAgainst": 191,
              "pointsDiff": -117
            }
          ]
        },
        {
          "divisionName": "9th Grade - Green",
          "divisionStandings": [
            {
              "teamId": 3253,
              "teamName": "HC Elite - Tringali 9th",
              "wins": 4,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 194,
              "pointsAgainst": 84,
              "pointsDiff": 110
            },
            {
              "teamId": 3287,
              "teamName": "MD Tar Heels 9th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 156,
              "pointsAgainst": 152,
              "pointsDiff": 4
            },
            {
              "teamId": 3255,
              "teamName": "MD Hoopmasters 9th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 177,
              "pointsAgainst": 186,
              "pointsDiff": -9
            },
            {
              "teamId": 3262,
              "teamName": "CBSA Hoyas 9th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 181,
              "pointsAgainst": 194,
              "pointsDiff": -13
            },
            {
              "teamId": 3260,
              "teamName": "Liberty Road Alliance 9th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 136,
              "pointsAgainst": 159,
              "pointsDiff": -23
            },
            {
              "teamId": 3257,
              "teamName": "Raptors 9th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 138,
              "pointsAgainst": 207,
              "pointsDiff": -69
            }
          ]
        },
        {
          "divisionName": "9th Grade - White",
          "divisionStandings": [
            {
              "teamId": 3258,
              "teamName": "York Raiders 9th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 247,
              "pointsAgainst": 170,
              "pointsDiff": 77
            },
            {
              "teamId": 3256,
              "teamName": "Liberty Basketball 9th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 228,
              "pointsAgainst": 158,
              "pointsDiff": 70
            },
            {
              "teamId": 3259,
              "teamName": "AIP  9th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 207,
              "pointsAgainst": 186,
              "pointsDiff": 21
            },
            {
              "teamId": 3254,
              "teamName": "HC Elite - Thai 9th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 180,
              "pointsAgainst": 204,
              "pointsDiff": -24
            },
            {
              "teamId": 3261,
              "teamName": "Urbana Hawks 9th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 133,
              "pointsAgainst": 277,
              "pointsDiff": -144
            }
          ]
        },
        {
          "divisionName": "HS 10th Grade - Green",
          "divisionStandings": [
            {
              "teamId": 3264,
              "teamName": "HC Elite - Clark 10th",
              "wins": 4,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 222,
              "pointsAgainst": 143,
              "pointsDiff": 79
            },
            {
              "teamId": 3268,
              "teamName": "EC Cobras 10th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 131,
              "pointsAgainst": 123,
              "pointsDiff": 8
            },
            {
              "teamId": 3290,
              "teamName": "MD 3D 10th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 201,
              "pointsAgainst": 177,
              "pointsDiff": 24
            },
            {
              "teamId": 3288,
              "teamName": "BTA Academy 10th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 126,
              "pointsAgainst": 175,
              "pointsDiff": -49
            },
            {
              "teamId": 3267,
              "teamName": "Team Ice 10th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 145,
              "pointsAgainst": 207,
              "pointsDiff": -62
            }
          ]
        },
        {
          "divisionName": "HS 10th Grade - White",
          "divisionStandings": [
            {
              "teamId": 3263,
              "teamName": "HC Elite Stefan 10th",
              "wins": 4,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 290,
              "pointsAgainst": 171,
              "pointsDiff": 119
            },
            {
              "teamId": 3289,
              "teamName": "Elite Ballers 10th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 218,
              "pointsAgainst": 169,
              "pointsDiff": 49
            },
            {
              "teamId": 3265,
              "teamName": "Delaware AIM 10th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 148,
              "pointsAgainst": 190,
              "pointsDiff": -42
            },
            {
              "teamId": 3271,
              "teamName": "MD Hoopmasters - Woodyard 10th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 180,
              "pointsAgainst": 212,
              "pointsDiff": -32
            },
            {
              "teamId": 3266,
              "teamName": "E-Town Elite 10th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 131,
              "pointsAgainst": 225,
              "pointsDiff": -94
            }
          ]
        },
        {
          "divisionName": "HS 11th Grade",
          "divisionStandings": [
            {
              "teamId": 3273,
              "teamName": "Team AIP 11th",
              "wins": 4,
              "losses": 0,
              "winningPct": "1.000",
              "pointsFor": 276,
              "pointsAgainst": 183,
              "pointsDiff": 93
            },
            {
              "teamId": 3270,
              "teamName": "HC Elite - Dan Nap 11th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 231,
              "pointsAgainst": 179,
              "pointsDiff": 52
            },
            {
              "teamId": 3274,
              "teamName": "HC Elite - Stefan 11th",
              "wins": 3,
              "losses": 1,
              "winningPct": ".750",
              "pointsFor": 251,
              "pointsAgainst": 229,
              "pointsDiff": 22
            },
            {
              "teamId": 3292,
              "teamName": "CBSA Hoyas 11th",
              "wins": 2,
              "losses": 2,
              "winningPct": ".500",
              "pointsFor": 205,
              "pointsAgainst": 223,
              "pointsDiff": -18
            },
            {
              "teamId": 3269,
              "teamName": "HC Elite - Stock 11th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 183,
              "pointsAgainst": 220,
              "pointsDiff": -37
            },
            {
              "teamId": 3272,
              "teamName": "MD Hoopmasters - Neville 11th",
              "wins": 1,
              "losses": 3,
              "winningPct": ".250",
              "pointsFor": 163,
              "pointsAgainst": 224,
              "pointsDiff": -61
            },
            {
              "teamId": 3291,
              "teamName": "MD Tar Heels 11th",
              "wins": 0,
              "losses": 4,
              "winningPct": ".000",
              "pointsFor": 167,
              "pointsAgainst": 218,
              "pointsDiff": -51
            }
          ]
        },
        {
          "divisionName": "Sunday Championships",
          "divisionStandings": [
            {
              "teamId": 3294,
              "teamName": "5th Grade Green 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3293,
              "teamName": "5th Grade White 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3295,
              "teamName": "6th Grade 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3296,
              "teamName": "6th Grade 2nd Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3299,
              "teamName": "7th Grade Green 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3300,
              "teamName": "7th Grade Green 2nd Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3297,
              "teamName": "7th Grade White 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3298,
              "teamName": "7th Grade White 2nd Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3301,
              "teamName": "8th Grade Green 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3302,
              "teamName": "8th Grade White 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3304,
              "teamName": "9th Grade Green 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3303,
              "teamName": "9th Grade White 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3306,
              "teamName": "HS 10th Grade Green 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3305,
              "teamName": "HS 10th Grade White 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3307,
              "teamName": "HS 11th Grade 1st Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            },
            {
              "teamId": 3308,
              "teamName": "HS 11th Grade 2nd Seed",
              "wins": 0,
              "losses": 0,
              "winningPct": ".000",
              "pointsFor": 0,
              "pointsAgainst": 0,
              "pointsDiff": 0
            }
          ]
        }
      ]
    };
   
    return {
      getLeague: getLeague,
      getLeagueData: getLeagueData
    };

    function getLeague() {
      return leagues
    }

    function getLeagueData() {
      return leagueData
    }

  }
})();