import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';
import './styles.css'

function Landing(){
	return(
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-conteiner">
					<img src={LogoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online.</h2>
				</div>
					<img src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>
					<div className="buttons-conteiner">
						<Link to="/study" className="study">
							<img src={studyIcon} alt="Estudar"/>
							Estudar
							
						</Link>
						<Link to="/give-classes" className="give-classes">
							<img src={giveClassesIcon} alt="Dar Aulas"/>
							Dar Aulas
							
						</Link>
					</div>
					<span className="total-connections">
						Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
					</span>
			</div>

		</div>
	);
}

export default Landing;