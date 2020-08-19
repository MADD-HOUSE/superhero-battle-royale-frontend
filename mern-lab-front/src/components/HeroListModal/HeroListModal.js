import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateHero from '../UpdateHero/UpdateHero';
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
				<Modal.Title id='modal-hero-name'>{props.chosenHero.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body className='modal-body'>
				<div>
					<img
						src={props.chosenHero.image}
						alt={props.chosenHero.name}
						className='modal-image'
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
							variant='danger'
							onClick={() => {
								handleDelete();
								props.onHide();
							}}>
							Delete
						</Button>
						<Link to={`/update/${props.chosenHero._id}`}>
							{' '}
							<Button>Update</Button>
						</Link>
					</div>
				)}
				<Button className='modal-choose-button'>Choose</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default HeroListModal;