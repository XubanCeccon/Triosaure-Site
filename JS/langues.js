var lang = {
			fr:{
			'text_Xuban':"- Responsable du pôle informatique <br/>  -  Passionné par l'informatique et les ordinateurs<br/> - Originaire de San Sebastien",
			'text_Maxime':"- Responsable du pôle électronique <br/>  - Passionné par l'automobile et la cuisine<br/> - Originaire de Bordeaux",
			'text_Lyderic':"- Responsable du pôle CAO <br/>  - Passionné par les sports de glisse<br/> - Originaire d'Avignon",
			'text_Arnaud':"- Responsable du pôle mécanique <br/>  - Passionné par les drones et l'électronique<br/> - Originaire de Pau",
			'text_titre': "Les membres du projet :",
			'text_legende': "Survoler une carte",
			
			//menu and footer text
			'text_menu': "<li><a href='index.html'>Home</a></li><li><a href='projet.html'>Projet</a></li><li><a href='gestion.php'>Gestion</a></li><li><a href='about_us.html'>About us</a></li><li><a href='#bottom'>Contact</a></li>",
			'text_footer1': "ÉCOLE D’INGÉNIEURS ESTIA",
			'text_footer2': "Contacte  Outlook",
			},
			es: {
			'text_Xuban':"- Responsable de la división informática <br/>  - Apasionado de los ordenadores y la informática<br/> - Originario de San Sebastián",
			'text_Maxime':"- Responsable de la división electrónica <br/>  - Apasionado del mundo del motor y la cocina<br/> - Originario de Burdeos",
			'text_Lyderic':"- Responsable de división CAO <br/>  - Apasionado de los deportes<br/> - Originario de Avignon",
			'text_Arnaud':"- Responsable de la división mecánica <br/>  - Apasionado de los drones y la electrónica<br/> - Originario de Pau",
			'text_titre': "Los miembros del proyecto :",
			'text_legende': "Sobrevolar una carta",
			
			//menu and footer text
			'text_menu': "<li><a href='index.html#es'>Inicio</a></li><li><a href='projet.html#es'>Proyecto</a></li><li><a href='gestion.php'>Gestión</a></li><li><a href='about_us.html#es'>Equipo</a></li><li><a href='#bottom'>Contacto</a></li>",
			'text_footer1': "ESCUELA DE INGENIEROS ESTIA",
			'text_footer2': "Contacto Outlook",			
			}
		};
		
		if(window.location.hash){
			if(window.location.hash === "#es"){
				//About US
				description_Xuban.innerHTML = lang.es.text_Xuban;
				description_Maxime.innerHTML = lang.es.text_Maxime;
				description_Lyderic.innerHTML = lang.es.text_Lyderic;
				description_Arnaud.innerHTML = lang.es.text_Arnaud;
				titre.innerHTML = lang.es.text_titre;
				legende.innerHTML = lang.es.text_legende;
			
				//footer and menu
				menu_txt.innerHTML = lang.es.text_menu;
				f1.innerHTML = lang.es.text_footer1;
				f2.innerHTML = lang.es.text_footer2;
				

			}
			if(window.location.hash === "#fr"){
				//About US
				description_Xuban.innerHTML = lang.fr.text_Xuban;
				description_Maxime.innerHTML = lang.fr.text_Maxime;
				description_Lyderic.innerHTML = lang.fr.text_Lyderic;
				description_Arnaud.innerHTML = lang.fr.text_Arnaud;
				titre.innerHTML = lang.fr.text_titre;
				legende.innerHTML = lang.fr.text_legende;
				
				//footer and menu
				menu_txt.innerHTML = lang.fr.text_menu;
				f1.innerHTML = lang.fr.text_footer1;
				f2.innerHTML = lang.fr.text_footer2;
			}
		}
	