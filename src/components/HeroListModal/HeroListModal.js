import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HeroListModal(props) {
	const handleDelete = () => {
		console.log(props.chosenHero._id);
		axios
			.delete(
				`https://hero-royale-db-test.herokuapp.com/heroes/${props.chosenHero._id}`
			)
			.then((res) => console.log(res));
	};
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			className='modal-card'>
			<Modal.Header closeButton>
				<Modal.Title id='modal-hero-name'>
					{!props.fighterOne
						? `Fighter One: ${props.chosenHero.name}`
						: `Opponent: ${props.chosenHero.name}`}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='modal-body'>
				<div>
					{props.fighterOne ? (
						<div>
							<p>{props.fighterOne.name}</p>
							<Image
								src={props.fighterOne.image}
								alt=''
								className='modal-image'
								fluid
							/>
							<p>Strength: {props.fighterOne.strength}</p>
							<p>Durability: {props.fighterOne.durability}</p>
							<h3>VS</h3>
						</div>
					) : (
						''
					)}

					<Image
						src={props.chosenHero.image}
						alt={props.chosenHero.name}
						className='modal-image'
						fluid
					/>
					<p>Strength: {props.chosenHero.strength}</p>
					<p>Durability: {props.chosenHero.durability}</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				{props.chosenHero.id ? (
					''
				) : (
					<div>
						<Button
							className='modal-choose-button'
							variant='danger'
							onClick={() => {
								handleDelete();
								props.onHide();
							}}>
							Delete
						</Button>
						<Link to={`/update/${props.chosenHero._id}`}>
							{' '}
							<Button className='modal-choose-button'>Update</Button>
						</Link>
					</div>
				)}
				{!props.fighterOne ? (
					<Button
						onClick={props.confirmFirstChoice}
						className='modal-choose-button'>
						Choose
					</Button>
				) : (
					<Button onClick={props.confirmBattle} className='modal-choose-button'>
						Battle
					</Button>
				)}
				<Button onClick={props.cancel} className='modal-choose-button'>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default HeroListModal;
