import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
	constructor(props) {
		super(props);

		// Game data
		this.state = {
			numberOfObjects: 4,
			letters: [
				"q",
				"w",
				"e",
				"r",
				"t",
				"y",
				"u",
				"i",
				"o",
				"p",
				"a",
				"s",
				"d",
				"f",
				"g",
				"h",
				"j",
				"k",
				"l",
				"z",
				"x",
				"c",
				"v",
				"b",
				"n",
				"m",
			],
			topics: [
				"Dog breeds",
				"Things found in a church",
				"Car Brands",
				"Chocolate Bars",
				"Band names",
				"Solo Artists",
				"Boy bands",
				"Cartoon Characters",
				"Musical instruments",
				"Sporting events",
				"Articles of Clothing",
				"Creative pursuits",
				"Artists",
				"Toys",
				"Biscuits",
				"Diseases",
				"Medicines",
				"Capital Cities",
				"Horror Movies",
				"Comedy Movies",
				"Stand-Up Comedians",
				"James Bond Movies",
				"Harry Potter Characters",
				"Beer names",
				"Sandwich Fillings",
				"Fizzy Drinks",
				"Things you see at Christmas",
				"Nice smells",
				"Bad smells",
				"Adjectives",
				"Olympic Events",
				"Olympians",
				"Elements",
				"Names of Bones in the human body",
				"Well Known Websites",
				"Things you can buy for under £5",
				"Drugs",
				"Round things",
				"Stripy things",
				"Male names",
				"Female names",
				"Things with wheels",
				"Sticky things",
				"Spotty things",
				"Hairy things",
				"Phobias",
				"Hand Tools",
				"Common Desk Accessories",
				"Car Parts",
				"Famous Paintings",
				"Flowers",
				"Birds",
				"Countries",
				"Things that rhyme with simple",
				"Things that rhyme with hunt",
				"Things that rhyme with finch",
				"Things that rhyme with might",
				"Things that rhyme with sad",
				"Things that rhyme with May",
				"Things that rhyme with rock",
				"Things that rhyme with Vodka",
				"Green things",
				"Orange things",
				"Pink things",
				"Wobbly things",
				"Yellow things",
				"People with ginger hair",
				"People with blonde hair",
				"People with brown hair",
				"Bald people",
			],
		};

		// Bindings
		this.getIntArray = this.getIntArray.bind(this);
		this.numberGenerator = this.numberGenerator.bind(this);
	}
	numberGenerator(possibleRange) {
		let rInt = Math.floor(Math.random() * possibleRange);
		return rInt;
	}
	getIntArray(dataSource) {
		console.log(dataSource);
		let intArray = [];

		while (intArray.length < this.state.numberOfObjects) {
			let rInt = this.numberGenerator(dataSource.length);
			if (!intArray.includes(rInt)) {
				intArray.push(rInt);
				console.log(rInt + " added!");
			} else {
				console.log(rInt + " already used!");
			}
		}
		console.log(intArray);
		return intArray;
	}

	render() {
		let letterArray = this.getIntArray(this.state.letters);
		let topicArray = this.getIntArray(this.state.topics);

		let gameData = this.state;
		return (
			<div>
				<h1 className='heading'>Things that rhyme with 'Orange'</h1>
				<table className='gameTable'>
					<tr className='tableRow'>
						<th className='tableHeading'></th>
						<th className='textHeading'>
							{this.state.letters[letterArray[0]]}
						</th>
						<th className='textHeading'>
							{this.state.letters[letterArray[1]]}
						</th>
						<th className='textHeading'>
							{this.state.letters[letterArray[2]]}
						</th>
						<th className='textHeading'>
							{this.state.letters[letterArray[3]]}
						</th>
					</tr>
					<tr className='tableRow'>
						<th className='tableHeading'>{this.state.topics[topicArray[0]]}</th>
						<td className='tableHeading'></td>
						<td className='tableHeading'></td>
						<td className='tableHeading'></td>
						<td className='tableHeading'></td>
					</tr>
					<tr className='tableRow'>
						<th className='tableHeading'>{this.state.topics[topicArray[1]]}</th>{" "}
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
					</tr>
					<tr className='tableRow'>
						<th className='tableHeading'>{this.state.topics[topicArray[2]]}</th>{" "}
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
					</tr>
					<tr className='tableRow'>
						<th className='tableHeading'>{this.state.topics[topicArray[3]]}</th>{" "}
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
						<th className='tableHeading'></th>
					</tr>
				</table>
				<div className='instructions'>
					<p>
						The aim of the game is to fill in your form with as many answers as
						possible. Answer each category with a word beginning with the letter
						at the top of each column. Try to fill in every square.

						Decide on a time limit before you start. 1-2 minutes is a good amount of time.
					</p>
					<p>
						Every unique answer scores a point. Answers which are not unique do
						not count. Any discrepancies as to whether an answer counts are
						judged by all other players. Majority rules.
					</p>
				</div>
			</div>
		);
	}
}

export default Game;
