var rasmusprip = angular.module("rasmusprip", ['ngRoute', 'ngAnimate']);


rasmusprip.factory('pages', function(){
    var pagesList = [];
    var addPage = function(title, url, realUrl){
        pagesList.push({"title":title, "url":url}); 
   };
   addPage("Uddannelse", "uddannelse");
   addPage("Erhverserfaring", "erhverv");
   addPage("IT kundskaaber", "IT");
   addPage("Musik kundskaber", "musik");
   addPage("Større projekter", "projekter");
//   addPage("Interesser", "interesser");
//   addPage("Referencer", "referencer");
   addPage("Spil", "spil");
   return pagesList 
});

rasmusprip.factory('erhverv', function(){
    var items = [];
    var addItem = function(year, place, city, remark){
        items.push({"year":year, "place": place, "city": city, "remark": remark});
    };
    addItem("2014 - 2015", "Radubyte", "Aalborg", "udvikler applikationer til mobiltelefoner");
    addItem("2012 - 2013",  "Den Rytmiske i Nordkraft", "Aalborg", "Guitarlærer");
    addItem("2011 - 2012", "Aalborg Kulturskole", "Aalborg", "Guitarlærer");
    addItem("2009 - nu",  "Partybandet Funky Monkeys", "Aalborg", "Guitarist");
    addItem("2008 - 2009", "Tønder Musikskole", "Toftlund", "Guitarlærer");
    addItem("2007", "Rejse", "New Zealand", "", "Rejse som backpacker");
    addItem("2006 - 2007", "Post Danmark", "Haderslev", "Postomdeler");
    addItem("2006", "Føtex", "Haderslev", "Kasseassistent");
    return items;
});

rasmusprip.factory('about', function(){
   var me = {
       subtitle: 'Om mig',
       text:'Jeg er en engageret og målbevidst person, som er passioneret og arbejdsflittig i alle de projekter som jeg deltager i. Mine primære kompetencer er udvikling af mobil applikationer, web-service og andre software systemer. Udover dette har jeg stor erfaring som underviser i musik(primært guitar), og jeg har i lang tid fungeret som aktiv live og studie musiker i diverse sammenhænge.\n\nJeg har to forskellige uddannelser på to fagområder(datalogi og musikkonservatoriet), hvilket giver mig et bredt spektre af muligheder. Jeg brænder på lige vis for begge fagområder, og er tilfreds med at beskæftige mig med det ene eller det andet. Dog er det lidt en drøm for mig, at jeg en dag vil kunne kombinere mine mine kompetencer i relation til mit arbejde. '
   }; 
    return me;
});




rasmusprip.factory('uddannelse', function(){
    var items = [];
    var addItem = function(year, title, place, remark){
        items.push({"year":year, "title": title, "place": place, "remark": remark});
    };
    
    addItem("2012 - 2015", "Bachelor i dataogi", "Aalborg Universitet", "");
    addItem("2008 - 2011",  "Bachelor i musik", "Det Jyske Musikkonservatorium", "Rytmisk guitar og sammenspilsledelse");
    addItem("2005", "Musik & Teater Højskolen", "Toftlund", "Kursus i lydproduktion");
    addItem("2004 - 2005",  "Musikalsk Grundkursus", "Vojens", "Forberedende kursus til musikkonservatoriet");
    addItem("2000 - 2004", "Matematisk student", "Haderslev Katedralskole", "");
    return items;
});

rasmusprip.factory('IT', function(){
    var items = [];
    var addItem = function(item, comment, section){
        items.push({"item":item, "comment": comment, "section": section});
    };
    addItem("C#", "Jeg har stor erfaring med sproget. Jeg har blandt andet lavet projekter i Visual Studio, og udviklet mobil apps til både Android og Iphone med Xamarin", "Sprog");
    addItem("Python", "Flere af de projekter jeg var en del af under mit uddannelsesforløb, omhandlede udvikling af distribueret systemer. Jeg har i denne sammenhæng arbejdet en del med sproget, og særligt frameworket Flask til opsætning af http services.", "Sprog");
    addItem("C", "Under mit uddannelses forløb har jeg i mange sammenhænge arbejdet med sproget. Jeg har blandt andet lavet implementationer af diverse klassiske sorterings algoritmer.", "Sprog");
    addItem("JavaScript", "I diverse sammenhænge har jeg brugt javascript. Jeg har blandt andet lavet et lille spil, der kører i en web-browser ved brug af et html5 canvas element. Udover dette har jeg også lavet små hjemmesider i AngularJS frameworket.", "Sprog");
    addItem("Java", "Jeg har været en del af et projekt hvor vi designede et programmerings sprog. Her var jeg med til at implementere en compiler i Java, ved brug af frameworket SableCC.", "Sprog");

    addItem("Visual Studio", "Jeg har i forbindelse med programmering i C\# udviklet meget i visual studio. Jeg har stiftet bekendtskab med ASP.NET MVC, Web-forms, Windows-forms, team foundation server og mm.", "IDE/Text editor");
    addItem("Xamarin Studio", "Jeg har et samarbejde med to andre programmører, hvor jeg udvikler apps til Mobil telefoner. Her udvikler jeg hovedsaligt i Xamarin Studio, hvor jeg har erfaringer med både Android og Iphone, Men også cross-platform moduler.", "IDE/Text editor");
    addItem("Vim", "Jeg har et stort kendskab og et godt workflow i text editoren Vim. Det har været til stor gavn i tekst baseret miljøer hvor der ikke er grafisk brugergrænseflade til rådighed.", "IDE/Text editor");
    
    addItem("MySQL", "De fleste projekter jeg har været med i har brugt MySQL som database management system, og jeg har i den sammenhæng fået et godt kendskab til dette.", "Database");
    addItem("SQLight", "Har god erfaring med at bruge SQLight, i forbindelse med udvikling af smartphone apps. Det har hovedsaligt været med brug af SQLight.NET ORM.", "Database");
    addItem("PostgreSQL", "På universitetet tog jeg kurset Database Systemer, hvor det primære værktøj i lektionerne var PostgreSQL.", "Database");
    
    addItem("Versions kontrol", "Jeg har stor erfaring med Git. Jeg har i mange projekter arbejdet med commits, branches, staging mm. og har både profiler på github og bitbucket. Udover dette har jeg også arbejdet med Team foundation server i Visual Studio.", "Diverse");
    addItem("Virtuelle maskiner", "Har deltaget i et projekt, som omhandlede at køre virtuelle maskiner i en browser som en  web-service. I denne sammenhæng fik jeg god erfaring med virtualiserings værktøjer som VirtualBox, QUME, Libvirt mm.", "Diverse");
    addItem("Model checking", "Model Checking er i særligt fokus på Aalborg Universitet, og jeg har derfor et godt kendskab til CCS, Timed Automatas, UPPAAL mm.", "Diverse");
    return items;
});

rasmusprip.factory('musik', function(){
    var items = [];
    var addItem = function(item, comment, section){
        items.push({"item":item, "comment": comment, "section": section});
    };

    addItem("Guitar", "Har spillet guitar siden jeg var barn, og har de seneste år gjort det professionelt i alt fra hård rock til jazz.", "Instrumenter");
    addItem("Klaver", "Spiller på på brugsklaver niveau.", "Instrumenter");
    addItem("Trommer", "Fik trommeundervisning fra 8 til 14 års alderen.", "Instrumenter");


    addItem("Studie", "Har stor erfaring med indspilning og elektronisk musik i følgende programmer - Ableton Live, Logic Pro, Pro Tools", "Musik og Teknik");
    addItem("Lydmand", "Har god erfaring som livelydmand.", "Musik og Teknik");
    return items;
});

rasmusprip.factory('projekter', function(){
    var items = [];
    var addItem = function(section, description){
        items.push({"description": description, "section": section});
    };

    addItem("SSP Søg", "En Iphone app til Familie- og beskæftigelses afdelingen på Aalborg kommune. Det er et opslagsværk som omhandler indsatser i forbindelse med udsatte unge i Aalborg. Appen er en klient i en client-server arkitektur. Serveren indeholder alt data til opslagsværket, som kan redigeres fra en tilhørende hjemmeside.");
    addItem("Actioncards", "En android app som henvender sig til ambulance personale. Det er et opslagsværk til medikamenter og nødhjælpsinstrukser, som ambulance personalet skal kende til. Appen er en klient i en client-server arkitektur. Serveren indeholder alt data til opslagsværket, som kan redigeres fra en tilhørende hjemmeside.");
    addItem("Wuppaal", "Wuppaal - Model checking in a cloud based environment using a RESTful archite- cural style er et bachelor gruppe projekt som omhandler formel verifikation igennem model checking i skyen. Projektet blev udarbejdet som en implementation af sys- temet, og en artikel blev efterfølgende udarbejdet. Artiklen omhandler designet af Wuppaal, og en use-case som tager udgangspunkt i machine to machine(M2M) kommunikation med web-servicen.");
    addItem("UniMachine", "Et gruppe projekt, som startede ud fra en ide om at tilbyde studerende på Aalborg universitet et distribueret arbejdsmiljø. Ofte kræver kurser at elever installerer software på deres computer, hvilket kan være problematisk grundet diverse kompat- ibilitets problemer. Løsningen består af en webservice, hvor undervisere kan lave virtuelle maskiner med den påkrævede software. De virtuelle maskiner er tilgængelig for eleverne igennem webservicen, og softwaren kan køres direkte i en internet browser.");
    addItem("Record Based UPPAAL Typer", "Et gruppe projekt som omhandlede design af et programmerings sprog, og dertil- hørende compiler. Resultatet var sproget Record based UPPAAL typer(rbut), som er et sprog der er designet til at løse skeduleringsproblemer. Compileren kompilerer sproget til et filformat som kan læses af Model checking værktøjet UPPAAL, som kan give et bud på en skedulering af problemet.");
    addItem("Hotel Manager", "Et gruppe projekt som havde useabillity og problem domænet i fokus. Vi fik kontakt med informant, som drev et hotel. Han var interesseret i et bedre og mere overskueligt system til at lave kunde-bookinger af hans værelser, samt andre aktiviteter som hotellet udbyder. I tæt samarbejde med ham, designede vi en hjemmeside, som muligjorde for både kunder og personale, at booke værelser og aktiviteter online.");
    addItem("Diet-Planner", "Et gruppe projekt hvor objekt-orienteret programmering var i fokus. I løbet af projektet konstruerede vi et program til oprettelse af diæt planer for typisk unge studerende. Vi lavede en analyse af problemområdet, designede og implementerede en algoritme, som ud fra data som højde og vægt, sammensatte en diæt-plan ved brug af en database af opskrifter og råvare deklarationer.");
    return items;
});

rasmusprip.factory('sectionDependency', ['IT', 'musik', "projekter", function(IT, musik, projekter){
    var items = {};
    items.IT = IT;
    items.musik = musik;
    items.projekter = projekter;
    return items;
}]);



rasmusprip.controller('pageController', ['$scope', "pages", function($scope, pages){
    $scope.pages = pages;
    var selected = "";
    $scope.setSelected = function(s){
        console.log("setting selected nav item to: " + s)
        selected = s; 
    } 

    $scope.isSelected = function(s){
        console.log("sectionController isSelected called with : " + s);

        if(selected === s){
            return 'selectednav';
        }
        else{
            return 'navbaritem';
        }
    }

}]);

rasmusprip.controller('erhvervController', ['$scope', 'erhverv', function($scope, erhverv){
    $scope.erhverv = erhverv; 
}]);

rasmusprip.controller('uddannelseController', ['$scope', 'uddannelse', function($scope, uddannelse){
    $scope.erhverv = uddannelse; 
}]);

rasmusprip.controller('sectionController', ['$scope', 'sectionDependency', function($scope, sectionDependency){
    
        

    
    console.log("sectionController - total Number of IT elements: " + sectionDependency.IT.length);
    console.log("sectionController - total Number of musik elements: " + sectionDependency.musik.length);
    
    $scope.foundSections = [];
    $scope.sectionsAndData = []
    sections = [];
    var selected = "";
    

    $scope.initWith = function(sectionType){
        
        console.log("sectionController getSections called with: " + sections);
        sections = sectionDependency[sectionType];
        $scope.sectionsAndData = sectionDependency[sectionType];
        
        for(var i = 0; i < sections.length; i++){
            var sectionExist = $scope.foundSections.some(function(x){return sections[i].section === x});
            if(!sectionExist){
                $scope.foundSections.push(sections[i].section);
                console.log("sectionController found section: " + sections[i].section);
            }
            selected = $scope.foundSections[0];
        }

        //selected = foundSections[0];
        console.log("sectionController selected: " + selected);
    }

    $scope.setSelected = function(s){
        console.log("setting selected tab to: " + s)
        selected = s; 
    } 

    $scope.isSelected = function(s){
        console.log("sectionController isSelected called with : " + s);

        if(selected === s){
            return 'active';
        }
        else{
            return '';
        }
    }

    $scope.getSelectedSection = function(){
        var selectedSection = sections.filter(function(x){return x.section === selected});
        console.log("sectionController returned selected section: " + selectedSection);
        return selectedSection;
    }
    
    $scope.select = function(tag, section){
        
        console.log("called select with: " + tag + " and section " + section);
        var element = '#' + tag;
        
        
        if($(element).is(':visible')){  
            $(element).animate({left:'-=30'}, 300);
            $(element).slideUp();
            $scope.setSelected(section);

            
        }else{
            $(element).attr("style", "position:relative;");
            $(element).hide();
            $(element).slideDown();
            $(element).animate({left:'+=30'}, 300);

        }
        

    
    }
}]);


rasmusprip.config(function($routeProvider){
    var routes = ["erhverv", "uddannelse", "IT", "musik", "projekter", "interesser", "referencer", "spil"];
    for(var r in routes){
        $routeProvider
            .when('/' + routes[r], {
                templateUrl:'partials/' + routes[r] + '.html'
       //         controller:'pageController'
            }).otherwise({
                templateUrl: 'partials/home.html',
                controller: function ($scope) {
                    $scope.message = 'Welcome!!';
                }
            });;

    }
    console.log("partial selected...")
});

rasmusprip.controller("homeController", ["$scope", "about", function($scope, about){
    $scope.about = about;
    
    $scope.initWith = function(element){
        
        console.log('animating the about text');
            $(element).attr("style", "position:relative;");
            $(element).hide();
            $(element).delay(800);
            $(element).slideDown();
            $(element).animate({left:'+=30'}, 500);
    }
}]);

