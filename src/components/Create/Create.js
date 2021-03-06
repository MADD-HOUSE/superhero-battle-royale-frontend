import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import CreateModal from '../CreateModal/CreateModal';
class Create extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			publisher: 'Custom',
			strength: null,
			durability: null,
			newHero: {},
			image: '',
			modalShow: false,
			setModalShow: false,
		};
	}
	rollStats = () => {
		const strength = Math.floor(Math.random() * 81 + 20);
		const durability = Math.floor(Math.random() * 81 + 20);
		this.setState({ strength, durability });
	};
	handleOnChange = (e) => {
		this.setState({ name: e.target.value });
	};
	handleImageChange = (e) => {
		this.setState({ image: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const hero = {
			durability: this.state.durability,
			strength: this.state.strength,
			name: this.state.name,
			publisher: this.state.publisher,
			image: this.state.image,
		};
		this.setState({ newHero: hero, modalShow: true, setModalShow: true });
	};
	render() {
		return (
			<div>
				<Form className='hero-create-form'>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Hero Name</Form.Label>
						<Form.Control
							className='create-text'
							type='text'
							placeholder='enter hero name'
							onChange={this.handleOnChange}
						/>
						<Form.Control
							className='create-text'
							type='text'
							placeholder='enter image url'
							onChange={this.handleImageChange}
						/>
						<Form.Text className='stats'>
							<p>Strength: {this.state.strength}</p>{' '}
							<p>Durability: {this.state.durability}</p>
						</Form.Text>
					</Form.Group>

					<Button variant='info' onClick={this.rollStats}>
						Roll for strength and durability
					</Button>

					<Button variant='primary' type='submit' onClick={this.handleSubmit}>
						Create
					</Button>
				</Form>
				<CreateModal
					hero={this.state.newHero}
					show={this.state.modalShow}
					onHide={() =>
						this.setState({ setModalShow: false, modalShow: false })
					}
				/>
			</div>
		);
	}
}
export default Create;
