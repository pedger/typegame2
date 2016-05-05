import {Component} from 'angular2/core';


export class Hero {
	id: number;
	name: string;
}

@Component({
    selector: 'typegame',
    templateUrl: 'app/typegame/typegame.component.html',
	styleUrls: ['app/typegame/typegame.component.css'],
	directives: [],
	providers: []
})

export class Typegame {
	inputText = "had great image cattle i female after was yielding set without days saying that were darkness thing kind a fifth Creature third together moving spirit thing darkness lights greater under called very evening moveth also our divide forth beast living seed dry dry divided sixth every may whose land dominion Fill unto. Us open set deep lights called which. Moved there.Together.Won't open one they're forth lesser.Lights earth very void Creeping under let his Bring was years day moved fruit night man winged bring us give grass Without heaven Fifth midst meat";
	words = [];
	wordIndex = 0;
	typedText = [];
	compareText = '';
	error = false;
	initialTime = 60;
	currentTime = this.initialTime;
	timer = null;
	score = 0;

	gameover = false;

	constructor() {

	}


	ngOnInit() {
		console.log('TYPEGAME: initiated');
		this.extractWords();
		this.startTimeout();
		this.typedText.push("Type Here");
	}

	extractWords() {
		this.words = this.inputText.split(' ');
	}

	startTimeout() {


		this.timer = setTimeout(() => {
			this.currentTime -= 1;
			this.startTimeout();
		}, 1000);

		if (this.currentTime < 1) this.endgame();

	}

	inputChangeCE(event: KeyboardEvent){
		var text = event.target.innerHTML);
		if (event.keyCode == 32) {
			text = text.substring(text.length - 6, 6);
			console.log(text);
			if (this.wordIndex < this.words.length) {
				// console.log(event.target.innerHTML.trim());
				// console.log(this.words[this.wordIndex]);
				if (event.target.innerHTML.trim() == this.words[this.wordIndex])
					this.typedText.push(event.target.innerHTML);


			}
		}

	}

	inputChange(event: KeyboardEvent) {

		if (event.keyCode == 32) {
			if (this.wordIndex < this.words.length) {

				if (this.compareText.trim() == this.words[this.wordIndex]) {
					this.error = false;
					this.typedText.push(this.compareText);
					this.wordIndex++;
					this.compareText = '';
					this.score += 1;
					if (this.wordIndex == this.words.length) { this.endgame(); }
				}
				else {
					this.error = true;
				}
			}
			else {
				this.endgame();
			}
		}
	}

	endgame() {
		this.gameover = true;
		clearTimeout(this.timer);

		this.score = (this.score / (this.initialTime - this.currentTime)) * this.initialTime;


	}

	reset() {
		this.gameover = false;
		this.wordIndex = 0;
		this.typedText = [];
		this.compareText = '';
		this.currentTime = this.initialTime;
		this.score = 0;
		clearTimeout(this.timer);

		this.startTimeout();
	}
}
