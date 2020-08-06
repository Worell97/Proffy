import React from 'react';
import whasappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
	return(
		<article className="teacher-item">
			<header>
				<img src="https://scontent.fcac3-1.fna.fbcdn.net/v/t1.0-9/116437485_3169049966547316_8974785438872925500_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=AouGAf_a-FcAX916oLp&_nc_ht=scontent.fcac3-1.fna&oh=a9b449259c2c62a02730616fd331b018&oe=5F4FEFD4" alt="Oscar W. Filho"/>
				<div>
					<strong>Oscar Worell Filho</strong>
					<span>Algoritmos e tecnicas de programação</span>
				</div>
			</header>
			<p>
			Desenvolvedor desktop, web e mobile, tendo como pontos fortes a resolução de problemas, a facilidade no aprendizado.
			<br/>
			Conhecimentos em ERP's utilizando a linguagem Delphi, MySQL, FireBird, PostgreSql, programação orientada a objetos, tratamentos de exceções e RTTI, 
			métodos ágeis de desenvolvimento, Scrum, padrões de projeto e persistência de dados DAO e DTO.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 50,00</strong>
				</p>
				<button type="button">
					<img src={whasappIcon} alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;