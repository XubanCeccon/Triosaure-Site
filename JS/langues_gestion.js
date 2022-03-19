var lang = {
			fr:{
			//gestion text
			
			//menu and footer text
			'text_menu': "<li><a href='index.html#fr'>Accueil</a></li><li><a href='projet.html#fr'>Projet</a></li><li><a href='gestion.php#fr'>Gestion</a></li><li><a href='about_us.html#fr'>Equipe</a></li><li><a href='#bottom'>Contact</a></li>",
			'text_footer1': "ÉCOLE D’INGÉNIEURS ESTIA",
			'text_footer2': "Contacte  Outlook",
			},
			es: {
			//gestion text
			
			//menu and footer text
			'text_menu': "<li><a href='index.html#es'>Inicio</a></li><li><a href='projet.html#es'>Proyecto</a></li><li><a href='gestion.php#es'>Gestión</a></li><li><a href='about_us.html#es'>Equipo</a></li><li><a href='#bottom'>Contacto</a></li>",
			'text_footer1': "ESCUELA DE INGENIEROS ESTIA",
			'text_footer2': "Contacto Outlook",			
			}
		};
		
		if(window.location.hash){
			if(window.location.hash === "#es"){
				//gestion
				
			
				//footer and menu
				menu_txt.innerHTML = lang.es.text_menu;
				f1.innerHTML = lang.es.text_footer1;
				f2.innerHTML = lang.es.text_footer2;
				

			}
			if(window.location.hash === "#fr"){
				//gestion
				
				
				//footer and menu
				menu_txt.innerHTML = lang.fr.text_menu;
				f1.innerHTML = lang.fr.text_footer1;
				f2.innerHTML = lang.fr.text_footer2;
			}
		}
	