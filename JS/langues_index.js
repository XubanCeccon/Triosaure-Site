var lang = {
			
			fr:{
			//text index pour le français
			'text_titre': "Le projet TRIOSAURE",
			'text_phrase1': "Dans le cadre de notre formation Bachelor de technologies à l’ESTIA, nous devons étudier le fonctionnement d’un projet du début à la fin, travailler en coopération, et découvrir les méthodes de conception et de travail en équipe nécessaires au bon déroulement d'un projet pluridisciplinaire.",
			'text_phrase2': "EDUCATION",
			'text_phrase3': "ECOLOGIE",
			'text_phrase4': "AVENIR",
			'text_phrase5': "Ainsi, nous devons étudier, concevoir et réaliser un système visant à aider les usagers à trier leurs déchets à l’aide d’une interaction pédagogique. Nous avons choisi de nommer notre produit « Triosaure ». Ce nom lui confère une consonance infantile visant les principaux utilisateurs qui ne sont autres que les enfants de 6 à 10 ans. Il permettra aux enfants d’acquérir des connaissances sur les bonnes pratiques à adopter par rapport au tri.",
			
			'text_phrase6': "% des francais trient systématiquement",
			'text_phrase7': "Kg de dechet triés par personne en 2019",
			'text_phrase8': "million de tonnes de CO2 évitées",
			'text_phrase9': "millions de tonnes d'emballages ménagers recyclées",
			
			'text_phrase10': "Ces chiffres montrent l'importance du tri selectif et surtout sa necessité. En montrant et expliqant aux enfants dès leur plus jeune age, le fonctionnement du tri et sa bonne pratique, nous esperons renforcer ces chiffres. Cela consitue une etape essentiel pour preserver notre planète aussi longtemps que possible.",
			'text_phrase11': "Ci-dessous vous pouvez retrouver les différents sites sur lesquels se situent notre système :",
			'text_phrase12': "Le bachelor est composé d'une trentaine d'étudiants, regroupé par 3 ou 4, ainsi nous vous proposons d'aller découvrir leurs projets :",
			//menu and footer text en français
			'text_menu': "<li><a href='index.html#fr'>Accueil</a></li><li><a href='projet.html#fr'>Projet</a></li><li><a href='gestion.php#fr'>Gestion</a></li><li><a href='about_us.html#fr'>Equipe</a></li><li><a href='#bottom'>Contact</a></li>",
			'text_footer1': "ÉCOLE D’INGÉNIEURS ESTIA",
			'text_fblink': "<h3 class='blink' >Contact outlook</h3><a  href='mailto:a.berard@net.estia.fr'>BERARD Arnaud</a><a  href='mailto:m.bourra@net.estia.fr'>BOURRA Maxime</a><a  href='mailto:l.faure@net.estia.fr'>FAURE Lyderic</a><a   href='mailto:x.ceccon@net.estia.fr'>CECCON Xuban</a>",
			
			},
			
			bottom_es:{
				'text_fblink': "",
			},
			
			bottom_fr:{
				'text_fblink': "",
			},
			
			
			es: {
			//text index pour l'espagnol
			'text_titre': "El proyecto TRIOSAURE",
			'text_phrase1': "Como parte de nuestra formación del Bachelor en Tecnología de ESTIA, debemos estudiar el funcionamiento de un proyecto de principio a fin, trabajar en cooperación y descubrir los métodos de diseño y trabajo en equipo necesarios para el buen funcionamiento de un proyecto multidisciplinar.",
			'text_phrase2': "EDUCACIÓN",
			'text_phrase3': "ECOLOGÍA",
			'text_phrase4': "FUTURO",
			'text_phrase5': "Entonces, necesitamos estudiar, diseñar y crear un sistema para ayudar a los usuarios a clasificar sus desechos a través de la interacción educativa. Hemos elegido llamar a nuestro producto « Triosaure ». Este nombre le confiere un tono infantil dirigido a los principales usuarios que son otros que niños de 6 a 10 años. Los niños necesitan aprender sobre lo bueno de prácticas a adoptar en relación con la clasificación.",
			
			'text_phrase6': "% de los franceses reciclan de manera sistemática",
			'text_phrase7': "Kg de desechos reciclados por persona en 2019",
			'text_phrase8': "millones de toneladas de CO2 evitados",
			'text_phrase9': "millones de toneladas de desechos de casas reciclados",
			
			'text_phrase10': "Estas cifras definen la importancia de la clasificación selectiva y proporcionan su necesidad. En el ejemplo y la explicación a los niños de menor edad, la operación de clasificación y su buena práctica, esperamos potenciar estas cifras. Este es un paso esencial para preservar nuestro planeta durante el mayor tiempo posible.",
			'text_phrase11': "A continuación puede encontrar los diferentes sitios en los que se encuentra nuestro sistema:",
			'text_phrase12': "El Bachelor está formado por una treintena de alumnos, agrupados en grupos de 3 o 4, por lo que te invitamos a descubrir algunos de sus proyectos:",
			
			//menu and footer text en espagnol
			'text_menu': "<li><a href='index.html#es'>Inicio</a></li><li><a href='projet.html#es'>Proyecto</a></li><li><a href='gestion.php#es'>Gestión</a></li><li><a href='about_us.html#es'>Equipo</a></li><li><a href='#bottom'>Contacto</a></li>",
			'text_footer1': "ESCUELA DE INGENIEROS ESTIA",
			'text_fblink': "<h3 class='blink' >Contactos Outlook</h3><a  href='mailto:a.berard@net.estia.fr'>BERARD Arnaud</a><a  href='mailto:m.bourra@net.estia.fr'>BOURRA Maxime</a><a  href='mailto:l.faure@net.estia.fr'>FAURE Lyderic</a><a   href='mailto:x.ceccon@net.estia.fr'>CECCON Xuban</a>",		
			}
			
		
		};
		
		if(window.location.hash){
			
			if(window.location.hash === "#fr"){
				//index fr
				titre.innerHTML = lang.fr.text_titre;
				phrase1.innerHTML = lang.fr.text_phrase1;
				phrase2.innerHTML = lang.fr.text_phrase2;
				phrase3.innerHTML = lang.fr.text_phrase3;
				phrase4.innerHTML = lang.fr.text_phrase4;
				phrase5.innerHTML = lang.fr.text_phrase5;
				
				phrase6.innerHTML = lang.fr.text_phrase6;
				phrase7.innerHTML = lang.fr.text_phrase7;
				phrase8.innerHTML = lang.fr.text_phrase8;
				phrase9.innerHTML = lang.fr.text_phrase9;
				
				phrase10.innerHTML = lang.fr.text_phrase10;
				phrase11.innerHTML = lang.fr.text_phrase11;
				phrase12.innerHTML = lang.fr.text_phrase12;
				//footer and menu
				menu_txt.innerHTML = lang.fr.text_menu;
				f1.innerHTML = lang.fr.text_footer1;
				fblink.innerHTML = lang.fr.text_footer2;
			}
			if(window.location.hash === "#es"){
				//index es
				titre.innerHTML = lang.es.text_titre;
				phrase1.innerHTML = lang.es.text_phrase1;
				phrase2.innerHTML = lang.es.text_phrase2;
				phrase3.innerHTML = lang.es.text_phrase3;
				phrase4.innerHTML = lang.es.text_phrase4;
				phrase5.innerHTML = lang.es.text_phrase5;
				
				phrase6.innerHTML = lang.es.text_phrase6;
				phrase7.innerHTML = lang.es.text_phrase7;
				phrase8.innerHTML = lang.es.text_phrase8;
				phrase9.innerHTML = lang.es.text_phrase9;
				
				phrase10.innerHTML = lang.es.text_phrase10;
				phrase11.innerHTML = lang.es.text_phrase11;
				phrase12.innerHTML = lang.es.text_phrase12;
				//footer and menu
				menu_txt.innerHTML = lang.es.text_menu;
				f1.innerHTML = lang.es.text_footer1;
				f2.innerHTML = lang.es.text_footer2;
				

			}
		}
	