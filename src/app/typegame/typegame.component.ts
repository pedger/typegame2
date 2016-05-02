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
	inputText = "it is great";
	words = [];
	typedText = '';
	wordIndex = 0;
	error = false;
	compareText = '';
	gameover = false;

	constructor() {}
	

	ngOnInit() {
		console.log('TYPEGAME: initiated');
		this.extractWords();
	}

	extractWords(){
		this.words = this.inputText.split(' ');
		
	}

	inputChange(event: KeyboardEvent) {
		if (event.keyCode == '32'){
			console.log("foi");
			if(this.wordIndex < this.words.length) {
				if (this.compareText.trim() == this.words[this.wordIndex]) {
					this.error = false;
					this.typedText += this.compareText +' ';
					this.wordIndex++;
					this.compareText = ''; 
					if (this.wordIndex == this.words.length) { this.gameover = true; }
				}
				else {
					this.error = true;
				}
			}
			else {
				this.gameover = true;
			}
		}
	}

	reset(){
		this.gameover = false;
		this.wordIndex = 0;
		this.typedText = '';
		this.compareText = '';
	}
}
