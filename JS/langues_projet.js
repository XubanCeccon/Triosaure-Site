var lang = {
			fr:{
			//gestion text
			'text_titre': "<h1>Attention! sur cette page nous allons présenter notre projet d'un point de vue plus technique.<br>No panic, les explications sont claires.<h1/>",			
			'text_titre1': "CONTEXTE",	
			'text_phrase1':"Nous développons un système pour accompagner les plus petits dans leur apprentissage du tri. Notre monde est dépassé par l’abondance des déchets. Le Monde parle d’un 7ème continent de déchets, les pics de pollution sont de plus en plus fréquents, et il est donc nécessaire d’inciter les jeunes générations à mieux respecter l’environnement. Cette prise de conscience doit se faire le plus tôt possible afin d’amplifier son efficacité car nous savons que nos futurs utilisateurs sont dans une classe d’âge qui favorise leur apprentissage car ils sont en plein développement intellectuel et social entre 6 et 10 ans.",
			'text_titre2': "TRAVAUX PRECEDENTS",
			'text_phrase2':"Lors du premier semestre, nous avons réalisé l’analyse fonctionnelle du système. Cela va de la définition du besoin a l’analyse du milieu extérieur. Pour cela nous avons dans un premier temps réalisé un diagramme bête à corne. Celui-ci permet de répondre à trois questions : à qui il s’adresse, sur quoi on agit et quel est l’objectif. À la suite de ça, nous avons réalisé une analyse du milieu extérieur, faisant apparaitre les différentes phases de vie du système, cela permet de notifier les fonctions principales du système ainsi que les contraintes. Lors de ce semestre nous avons également définie certain element basiques du système, comme le type de déchet qui accueil. Nous avons choisi les 4 types de déchets les plus commun : verre, papier/plastique/métal, organique et les déchets ménager. Nous avons ensuite établi le fonctionnement général du système, c’est-à-dire comment se passe une interaction entre l’utilisateur et Triosaure.Concernant l’aspect économique du système, n’analyse des couts a été faite, celle-ci a permis de mettre en évidence certaine fonctions (issues de l’analyse du milieu extérieur) ayant un cout trop élevé vis-à-vis de leur importance. Un bilan économique concernant les actionneurs et les capteurs du système a aussi été réalisée pour nous permettre d’évaluer le budget nécessaire a la réalisation du projet. Ensuite, nous avons divisé notre système en différents sous-systèmes comme l'interaction ou les trappes. Pour chaque sous-système, nous avons comparé différentes solutions, puis nous les avons regroupées dans des diagrammes comme le diagramme organique ou l'architecture électronique. Nous avons également pu réaliser nos idées pour l'apparence du système, grâce à la CAO.",
			'text_titre3': "DIAGRAMME BETE A CORNES",
			'text_titre4': "COMPARTIMENTS DE TRI",
			'text_titre5': "NOTRE SYSTEME",
			'text_phrase3':"En pratique, il s’agit d’une poubelle qui comporte 4 conteneurs et des couvercles qui coulissent pour ouvrir et fermer chaque compartiment. Pour ouvrir le couvercle, l'utilisateur doit sélectionner le type de déchets sur l'écran, puis toucher le bouton du bon compartiment. Si cela est fait correctement, le couvercle du bac coulissera sur le côté, laissant le bac ouvert.Si le système se retrouve plein, un technicien arrive pour la vider. Pour cela, il a accès aux bacs via la porte bleue qui peut s’abaissée pour permettre de retirer les bacs par le côté.",
			'text_titre6': "VUE 3D",
			'text_titre7': "DEVELOPPEMENT DE L'APPLICATION",
			'text_phrase4': "Nous avons travaillé sur la manière dont allé se passer l’interaction entre l’utilisateur et notre système. Pour cela, nous avons développé une application utilisant le langage C-sharp. Dans un premier temps nous avons réalisé une maquette de ce à quoi ressemblera notre interface.<br>Sur la première page, vous pouvez voir une zone de saisie et différents boutons qui vous permettent de sélectionner le type de déchets mais aussi d'accéder à une page d'authentification. Sur cette page, il est possible de se connecter pour accéder aux paramètres du système ou de revenir au menu.Une fois cette partie faite, nous avons voulu donner une apparence plus agréable à notre interface. Sur cette page, vous pouvez voir un rendu plus avancé de l'application, avec l'apparence des différentes pages.<br>Enfin, nous avons commencé à travailler sur un jeu qui serait disponible sur l’interface pour permettre aux enfants d’apprendre en s’amusant. Vous pouvez ainsi voir un premier visuel du jeu dans lequel des déchets tombe, l’enfant doit alors les attraper et les placer dans le compartiment correspondant. Si c’est le cas, l’enfant marque un point, le but étant d’avoir le plus de point possible.",
			'text_titre8': "PAGE ACCUEIL",
			'text_titre9': "IDENTIFIACTION",
			'text_titre10': "MENU ADMINISTRATEUR",
			'text_titre11': "JEUX",
			'text_titre12': "DEVELOPPEMENT DU SITE INTERNET",
			'text_phrase5': "En plus de l'application, nous commençons à développer un site web pour présenter le projet. Ce site aura plusieurs sections : une page d'accueil, une page sur l'avancement du projet, une page pour nous présenter et une page qui permet d'avoir l'état de remplissage des systèmes. Les pages sont codées en html, css, java et php. Sur la page d'accueil, il y aura une description du projet, à quoi il servira, puis des images pour l'illustrer et enfin une carte interactive où l'on pourra voir où se trouvent les systèmes. La page qui parle de l'avancement du projet sera un résumé du travail effectué pour le projet. Il sera de nature générale afin de ne pas alourdir la page, mais il sera suffisamment détaillé pour comprendre les différents aspects du projet. La page indiquant l'état des systèmes nous montrera le niveau de remplissage des bacs, mais aussi les erreurs éventuelles.<br> Enfin, la dernière page montre les différents membres du groupe avec leur participation au projet. Sur cette page, chaque membre figure sur une carte. Lorsque vous passez la souris sur la carte, elle s'agrandit, ce qui vous permet de lire ce qui est marqué dessus.<br><br>",
			'text_titre13': "ELECTRONIQUE",
			'text_phrase6': "Le système dispose pour chaque type de déchets d’un bac et une trappe qui s'ouvre lorsque l'utilisateur le demande. Notre projet aura des moteurs à courant continu chargés de faire glisser les trappes. Le système a 4 trappes, nous aurons donc besoin de 4 moteurs à courant continu qui transmettront leur force grâce à une crémaillère qui se trouve sous chaque bac. Une fois que l'utilisateur a terminé, les trappes doivent revenir à leur position initiale.<br>",
			'text_titre14': "CABLAGE MOTEUR",
			'text_titre15': "CABLAGE CAPTEUR DISTANCE",
			'text_titre16': "CABLAGE CAPTEUR FORCE",
			'text_titre17': "CONCEPTION ASSITEE PAR ORDINATEUR",
			'text_phrase7': "L'année dernière, nous en avons réalisé une CAO un avec des formes de base. Cela ayant pour but de montrer l’allure générale du système. Cette année nous avons fait une CAO avec des formes complexes dans le but de lui donner une esthétique plus agréable et attrayante pour les utilisateurs. Xuban a choisi de réaliser un distributeur de gel hydroalcoolique, avec l’apparence d’un canard, prenant la forme d'un Pokémon. Finalement, Lyderic et moi avons eu la même idée : illustrer chaque compartiment avec des maquettes.<br>Nous avons comparé nos différentes créations pour juger si l'une d'entre elles pouvait être combinée dans notre système. Finalement, Arnaud a réalisé une CAO ayant pour forme une pokeball, englobant  notre système, cela est malheureusement difficilement réalisable car l’accès au système serait bloqué. Nous avons comparé nos CAO sur la qualité de leur production et leur utilité pour notre système.<br>Le fait de modéliser notre système est important dans la phase de conception, cela nous permet d’avoir un regard global sur ce que nous sommes en train de faire. De voir si nos choix techniques sont applicables à l’allure que nous voudrions donner à notre système. De plus, cela permet aussi de pouvoir faire un sondage auprès des utilisateurs pour savoir si le produit leur plait. Cela est important car un enfant peut juger rapidement si quelque chose lui plait ou non. Si le système de l’attrait pas, il ne viendra pas l’utiliser. Au contraire si le systeme lui plait, il viendra l’utiliser plus régulièrement et donc aura un meilleur apprentissage.",
		
			'text_titre18': "ANALYSE MECANIQUE",
			'text_phrase8': "Cette trappe s’ouvre via une liaison pivot située au bas de celle-ci. Afin de rendre l’ensemble plus stable lorsque la trappe est ouverte, deux pieds carrés de 6cm de côté viennent se poser directement sur le sol. La trappe servira de « porte » pour atteindre l’intérieur du système mais aussi de support pour faire coulisser la plaque supportant les bacs. En contraite la trappe seradonc dans cette position :Cette trappe est l’un des piliers de notre système. En effet son ouverture permet de sortir les bacs afin de les atteindre plus facilement. Une fois ouvert elle supportera le poids de la plaque de soutiens des bacs ains que le poids des bacs se trouvant au-dessus. C’est donc un élément très important de notre système, c’est pour cela que nous avons choisi de mener cette étude de dimensionnement.<br>Nous avons modélisé notre pièce en CAO surfacique afin de rester sur une simulation par élément finis bidimensionnel. Pour cela nous avons utilisé le logiciel 3D Expérience. Ainsi, lors de la simulation, nous pourront représenter au mieux la réalité. De plus nous plaçons deux points sur la trappe correspondant aux appuis ponctuels des roues (lien entre les bacs et la trappe) afin de pouvoir y appliquer les forces lors de la simulation.Dans le but de vérifier que notre trappe est capable de supporter une telle charge, nous avons vérifié la correspondance des lois de comportement matérielle et géométrique. Dans un premier temps nous avons voulu valider la loi de comportement matérielle. Pour cela il fallait que la contrainte équivalente obtenue à l’aide de la formule de Von Mises soit inférieures à la contrainte maximale soit σeq ≤ σlim. Par la suite nous avons voulu savoir si la déformation de notre plaque était inférieure à 1% soit εij < 1%. Si ces 2 inéquations s’avèrent vraies, alors le dimensionnement de notre trappe sera validé.<br>Lors de nos simulations, nous avons utilisé du plastique ABS. Lors de nos simulations, la contrainte maximum appliqué sur notre pièce a été inferieur a la contrainte maximum que peux supporter le matériau. De même pour les déformations. En d’autres termes, nos simulations montrent que notre pièce est en mesure de supporter les efforts qui lui seront appliqués durant son utilisation.</div>",
			'text_titre19': "PLAQUE DE SUPPORT DES BACS",
			'text_titre20': "REPRESENTATION",
			'text_titre21': "PORTE D'ACCES",
			'text_titre22': "ECONOMIE",
			'text_phrase9': "Dans le but d'évaluer le coût fiancier de notre système, nous avons listé tout les commposants de celui-ci. Ainsi, vous trouverez les materiaux nécessaires pour construire le bâti du système, les composants électroniques, et les fixations.Il est spécifié si les éléments sont fabriqués ou achetés, si nous avons la CAO, la quantité nécéssaire, le prix et pour finir les liens afin de pouvoir retrouver facilement les produits.<br><br>",
			//menu and footer text
			
			'text_menu': "<li><a href='index.html#fr'>Accueil</a></li><li><a href='projet.html#fr'>Projet</a></li><li><a href='gestion.php#fr'>Gestion</a></li><li><a href='about_us.html#fr'>Equipe</a></li><li><a href='#bottom'>Contact</a></li>",
			'text_footer1': "ÉCOLE D’INGÉNIEURS ESTIA",
			'text_footer2': "Contacte  Outlook",
			},
			es: {
			//gestion text
			'text_titre': "<h1>¡Atención! en esta página vamos a presentar nuestro proyecto desde un punto de vista más técnico.<br>No panic, las explicaciones son claras.<h1/>",
			'text_titre1': "CONTEXTO",
			'text_phrase1':"Estamos desarrollando un sistema para ayudar a los más pequeños a aprender a clasificar. Nuestro mundo está abrumado por una gran cantidad de basura. Le Monde habla de un séptimo continente de residuos, los picos de contaminación son cada vez más frecuentes, por lo que es necesario animar a las generaciones más jóvenes a respetar mejor el medio ambiente. Esta toma de conciencia debe hacerse lo antes posible para poder amplificar su efectividad porque sabemos que nuestros futuros usuarios se encuentran en un grupo de edad que favorece su aprendizaje porque se encuentran en pleno desarrollo intelectual y social entre los 6 y los 10 años.",
			'text_titre2': "TRABAJOS PRECEDENTES",
		
			'text_phrase2':"Durante el primer semestre, realizamos el análisis funcional del sistema. Esto va desde definir la necesidad hasta analizar el entorno externo. Para hacer esto, primero produjimos un diagrama de bestia a cuerno. Esto responde a tres preguntas: para quién es, en qué estamos trabajando y cuál es el objetivo. Posteriormente, realizamos un análisis del entorno externo, mostrando las diferentes fases de la vida del sistema, esto permite notificar las principales funciones del sistema así como las limitaciones. Durante este semestre también definimos ciertos elementos básicos del sistema, como el tipo de residuo que recibe. Hemos elegido los 4 tipos de residuos más habituales: vidrio, papel / plástico / metal, orgánicos y residuos domésticos. Luego se estableció el funcionamiento general del sistema, es decir cómo se produce una interacción entre el usuario y Triosaurus. En cuanto al aspecto económico del sistema, no se realizó análisis de costos, se permitió resaltar ciertas funciones (resultantes de la análisis del entorno externo) que tienen un costo demasiado alto en comparación con su importancia. También se realizó una evaluación económica de los actuadores y sensores del sistema que nos permitirá evaluar el presupuesto necesario para la realización del proyecto. Luego dividimos nuestro sistema en diferentes subsistemas como interacción o eclosiones. Para cada subsistema, comparamos diferentes soluciones, luego las agrupamos en diagramas como diagrama orgánico o arquitectura electrónica. También pudimos hacer realidad nuestras ideas para la apariencia del sistema, gracias a CAD.",
			
			'text_titre3': "DIAGRAMA BETE A CORNES",
			'text_titre4': "COMPARTIMENTOS",
			'text_titre5': "NUESTRO SISTEMAS",
			'text_phrase3':"En la práctica, este es un bote de basura que tiene 4 contenedores y tapas que se deslizan para abrir y cerrar cada compartimento. Para abrir la tapa, el usuario debe seleccionar el tipo de residuo en la pantalla y luego tocar el botón del compartimiento correcto. Si se hace correctamente, la tapa del depósito se deslizará hacia un lado, dejando el depósito abierto, si el sistema se llena, llegará un técnico para vaciarlo. Para ello, tiene acceso a los contenedores a través de la puerta azul que se puede bajar para permitir que los contenedores se retiren por un lado.",
		
			'text_titre6': "VISTA 3D",
			
			'text_titre7': "DESARROLLO DE LA APLICACIÓN",
			'text_phrase4': "Trabajamos en cómo sería la interacción entre el usuario y nuestro sistema. Para ello, hemos desarrollado una aplicación utilizando el lenguaje C-sharp. Primero, hicimos una maqueta de cómo se verá nuestra interfaz.<br>En la primera página, puede ver un área de entrada y diferentes botones que le permiten seleccionar el tipo de residuo pero también acceder a una página de autenticación. En esta página es posible iniciar sesión para acceder a la configuración del sistema o volver al menú, una vez que esta parte está terminada, queríamos que nuestra interfaz se viera mejor. En esta página, puede ver una representación más avanzada de la aplicación, con la apariencia de las diferentes páginas.<br>Finalmente, comenzamos a trabajar en un juego que estaría disponible en la interfaz para que los niños aprendan mientras se divierten. De esta forma se puede ver una primera visual del juego en la que cae la basura, luego el niño debe agarrarla y colocarla en el compartimento correspondiente. Si es así, el niño anota un punto, el objetivo es conseguir tantos puntos como sea posible.",
			'text_titre8': "PÁGINA PRINCIPAL",
			'text_titre9': "IDENTIFICACIÓN",
			'text_titre10': "MENU ADMINISTRACIÓN",
			'text_titre11': "JUEGOS",
			'text_titre12': "DESARROLLO DE LA PÁGINA WEB",
			'text_phrase5': "Además de la aplicación, estamos comenzando a desarrollar un sitio web para presentar el proyecto. Este sitio tendrá varias secciones: una página de inicio, una página sobre el avance del proyecto, una página para presentarnos y una página que permite tener el estado de llenado de los sistemas. Las páginas están codificadas en html, css, java y php. En la página de inicio habrá una descripción del proyecto, para qué se utilizará, luego imágenes para ilustrarlo y finalmente un mapa interactivo donde podremos ver dónde están ubicados los sistemas. La página que habla sobre el progreso del proyecto será un resumen del trabajo realizado para el proyecto. Será de carácter general para no sobrecargar la página, pero será lo suficientemente detallado como para comprender los diferentes aspectos del proyecto. La página que indica el estado de los sistemas nos mostrará el nivel de llenado de los tanques, pero también los errores.<br> Finalmente, la última página muestra a los diferentes miembros del grupo con su participación en el proyecto. En esta página, cada miembro aparece en una tarjeta. Cuando pasa el mouse sobre el mapa, se expande, lo que le permite leer lo que está marcado en él.<br><br>",
			'text_titre13': "ELECTRÓNICA",
			'text_phrase6': "El sistema tiene para cada tipo de residuo un contenedor y una trampilla que se abre cuando el usuario lo solicita. Nuestro proyecto contará con motores de corriente continua encargados de deslizar las escotillas. El sistema tiene 4 trampillas, por lo que necesitaremos 4 motores DC que transmitirán su fuerza a través de un rack que se encuentra debajo de cada contenedor. Una vez que el usuario haya terminado, las escotillas deben volver a su posición original.",
			'text_titre14': "ESQUEMA DE CABLES DEL MOTOR CC",
			'text_titre15': "ESQUEMA DE CABLES DEL SENSOR DE DISTANCIA",
			'text_titre16': "ESQUEMA DE CABLES DEL SENSOR DE PESO",
			'text_titre17': "CONCEPCIÓN ASISTIDA POR ORDENADOR",
			'text_phrase7': "El año pasado hicimos uno CAD con formas básicas. Esto está destinado a mostrar el aspecto general del sistema. Este año realizamos un CAD con formas complejas con el fin de darle una estética más agradable y atractiva para los usuarios. Xuban optó por hacer un dispensador de gel hidroalcohólico, con apariencia de pato, en forma de Pokémon. Finalmente, Lyderic y yo tuvimos la misma idea: ilustrar cada compartimento con modelos. <br> Comparamos nuestras diferentes creaciones para juzgar si alguna de ellas podía combinarse en nuestro sistema. Finalmente, Arnaud produjo un CAD en forma de pokebola, que engloba nuestro sistema, esto lamentablemente es difícil de lograr porque el acceso al sistema estaría bloqueado. Comparamos nuestros CAD en cuanto a la calidad de su producción y su utilidad para nuestro sistema. <br> El hecho de modelar nuestro sistema es importante en la fase de diseño, nos permite tener una visión global de lo que estamos haciendo actualmente. Para ver si nuestras elecciones técnicas son aplicables al aspecto que nos gustaría darle a nuestro sistema. Además, también le permite realizar una encuesta a los usuarios para averiguar si el producto les atrae. Esto es importante porque un niño puede juzgar rápidamente si algo es agradable o no. Si el sistema de señuelos no lo hace, no vendrá a usarlo. Por el contrario, si el sistema le agrada, llegará a utilizarlo con más regularidad y por tanto tendrá un mejor aprendizaje.",
		
			'text_titre18': "ANÁLISIS MECÁNICO",
			'text_phrase8': "Esta escotilla se abre a través de un enlace de pivote ubicado en la parte inferior. Para que todo sea más estable cuando la escotilla está abierta, dos pies cuadrados de 6 cm se apoyan directamente en el suelo. La trampilla servirá como « puerta » para llegar al interior del sistema pero también como soporte para deslizar la placa que soporta los contenedores. Por el contrario, la trampilla estará en esta posición: esta trampilla es uno de los pilares de nuestro sistema. De hecho, su apertura permite sacar los contenedores para llegar a ellos más fácilmente. Una vez abierta, soportará el peso de la placa de soporte de la bandeja, así como el peso de las bandejas de arriba. Por lo tanto, es un elemento muy importante de nuestro sistema, por lo que decidimos realizar este estudio de dimensionamiento. <br> Modelamos nuestra pieza en CAD de superficie para permanecer en una simulación bidimensional de elementos finitos. Para ello utilizamos el software 3D Experience. Por lo tanto, durante la simulación, podemos representar mejor la realidad. Además, colocamos dos puntos en la trampilla correspondientes a los apoyos específicos de las ruedas (enlace entre las bandejas y la trampilla) para poder aplicar las fuerzas durante la simulación, con el fin de comprobar que nuestra trampilla es capaz de soportando tal carga, verificamos la correspondencia de las leyes constitutivas geométricas y materiales. Inicialmente queríamos validar la ley constitutiva material. Para ello, la tensión equivalente obtenida mediante la fórmula de Von Mises tenía que ser menor que la tensión máxima o σeq ≤ σlim. Posteriormente quisimos saber si la deformación de nuestra placa era menor al 1% o εij <1%. Si estas 2 desigualdades resultan ser ciertas, entonces se validará el tamaño de nuestra trampilla. <br> En nuestras simulaciones, usamos plástico ABS. Durante nuestras simulaciones, la tensión máxima aplicada a nuestra pieza fue menor que la tensión máxima que puede soportar el material. Lo mismo ocurre con las deformaciones. En otras palabras, nuestras simulaciones muestran que nuestra pieza es capaz de resistir las fuerzas que se le aplicarán durante su uso. </div>",
			'text_titre19': "PLACA DE SOPORTE DE LOS COMPARTIMENTOS",
			'text_titre20': "REPRESENTACIÓN",
			'text_titre21': "PUERTA DE ACCESO",
			'text_titre22': "ECONOMÍA",
			'text_phrase9': "Para evaluar el costo financiero de nuestro sistema, hemos enumerado todos sus componentes. Así, encontrarás los materiales necesarios para construir el marco del sistema, los componentes electrónicos y los sujetadores, se especifica si los elementos son fabricados o comprados, si tenemos el CAD, la cantidad necesaria, el precio y finalmente el enlaces. para poder encontrar fácilmente los productos. <br> <br> ",
			//menu and footer text
			'text_menu': "<li><a href='index.html#es'>Inicio</a></li><li><a href='projet.html#es'>Proyecto</a></li><li><a href='gestion.php#es'>Gestión</a></li><li><a href='about_us.html#es'>Equipo</a></li><li><a href='#bottom'>Contacto</a></li>",
			'text_footer1': "ESCUELA DE INGENIEROS ESTIA",
			'text_footer2': "Contacto Outlook",			
			}
		};
		
		if(window.location.hash){
			
			if(window.location.hash === "#fr"){
				//About US
				titre.innerHTML = lang.fr.text_titre;
				titre1.innerHTML = lang.fr.text_titre1;	
				phrase1.innerHTML = lang.fr.text_phrase1;
				titre2.innerHTML = lang.fr.text_titre2;
				phrase2.innerHTML = lang.fr.text_phrase2;
				titre3.innerHTML = lang.fr.text_titre3;
				titre4.innerHTML = lang.fr.text_titre4;
				titre5.innerHTML = lang.fr.text_titre5;
				phrase3.innerHTML = lang.fr.text_phrase3
				titre6.innerHTML = lang.fr.text_titre6;
				titre7.innerHTML = lang.fr.text_titre7;
				phrase4.innerHTML = lang.fr.text_phrase4;
				titre8.innerHTML = lang.fr.text_titre8;
				titre9.innerHTML = lang.fr.text_titre9;
				titre10.innerHTML = lang.fr.text_titre10;
				titre11.innerHTML = lang.fr.text_titre11;
				titre12.innerHTML = lang.fr.text_titre12;
				phrase5.innerHTML = lang.fr.text_phrase5;
				titre13.innerHTML = lang.fr.text_titre13;
				phrase6.innerHTML = lang.fr.text_phrase6;
				titre14.innerHTML = lang.fr.text_titre14;
				titre15.innerHTML = lang.fr.text_titre15;
				titre16.innerHTML = lang.fr.text_titre16;
				titre17.innerHTML = lang.fr.text_titre17;
				phrase7.innerHTML = lang.fr.text_phrase7;
				titre18.innerHTML = lang.fr.text_titre18;
				phrase8.innerHTML = lang.fr.text_phrase8;
				titre19.innerHTML = lang.fr.text_titre19;
				titre20.innerHTML = lang.fr.text_titre20;
				titre21.innerHTML = lang.fr.text_titre21;
				titre22.innerHTML = lang.fr.text_titre22;
				phrase9.innerHTML = lang.fr.text_phrase9;
				
				
				
				//footer and menu
				menu_txt.innerHTML = lang.fr.text_menu;
				f1.innerHTML = lang.fr.text_footer1;
				f2.innerHTML = lang.fr.text_footer2;
			}
			
			if(window.location.hash === "#es"){
				//About US
				titre.innerHTML = lang.es.text_titre;
				titre1.innerHTML = lang.es.text_titre1;	
				phrase1.innerHTML = lang.es.text_phrase1;
				titre2.innerHTML = lang.es.text_titre2;
				phrase2.innerHTML = lang.es.text_phrase2;
				titre3.innerHTML = lang.es.text_titre3;
				titre4.innerHTML = lang.es.text_titre4;
				titre5.innerHTML = lang.es.text_titre5;
				phrase3.innerHTML = lang.es.text_phrase3
				titre6.innerHTML = lang.es.text_titre6;
				titre7.innerHTML = lang.es.text_titre7;
				phrase4.innerHTML = lang.es.text_phrase4;
				titre8.innerHTML = lang.es.text_titre8;
				titre9.innerHTML = lang.es.text_titre9;
				titre10.innerHTML = lang.es.text_titre10;
				titre11.innerHTML = lang.es.text_titre11;
				titre12.innerHTML = lang.es.text_titre12;
				phrase5.innerHTML = lang.es.text_phrase5;
				titre13.innerHTML = lang.es.text_titre13;
				phrase6.innerHTML = lang.es.text_phrase6;
				titre14.innerHTML = lang.es.text_titre14;
				titre15.innerHTML = lang.es.text_titre15;
				titre16.innerHTML = lang.es.text_titre16;
				titre17.innerHTML = lang.es.text_titre17;
				phrase7.innerHTML = lang.es.text_phrase7;
				titre18.innerHTML = lang.es.text_titre18;
				phrase8.innerHTML = lang.es.text_phrase8;
				titre19.innerHTML = lang.es.text_titre19;
				titre20.innerHTML = lang.es.text_titre20;
				titre21.innerHTML = lang.es.text_titre21;
				titre22.innerHTML = lang.es.text_titre22;
				phrase9.innerHTML = lang.es.text_phrase9;
				
		
				//footer and menu
				menu_txt.innerHTML = lang.es.text_menu;
				f1.innerHTML = lang.es.text_footer1;
				f2.innerHTML = lang.es.text_footer2;
				
				

			}
		}
	