let game_randomsum = { 
    running: false,

    range: 10,
    addingNumbers: [],
    guess: 0,
    answer: [0, 0, 0, 0],
    correctAnswer: 0,

    createRandomAnswers: function(n){
        let newAnswer = [];

        this.correctAnswer = this.addingNumbers[0] + this.addingNumbers[1];
        newAnswer[0] = this.correctAnswer;

        // Create Answers
        for (let i = 1; i < n; i++){
            newAnswer[i] = Math.floor( Math.random() * this.range*2 +1)
        }

        // Check All numbers distinct
        // function allnumber(){
        //     for (let i = 0; i < newAnswer.length; i++){
        //         for(let j = 0; j < newAnswer.length; j++){
        //             if ( i === j) continue;
        //             console.log( newAnswer[i], newAnswer[j])
        //             if ( newAnswer[i] === newAnswer[j]) return false;
        //         }
        //     }
        // }
        
        // allnumber() ? this.answer = newAnswer : this.createRandomAnswers(n);
        


        if ( newAnswer.every( (val, i, arr) => {
            for (let j = 0; j < arr.length; j++){
                if (i === j) continue;
                console.log( val, newAnswer[j])
                console.log( arr[j] != val )
                if( arr[j] === val ) return false;
            }
        })){
            this.answer = newAnswer;
        }
        else {
            this.createRandomAnswers(n);
        }
    },

    createRandomNumbers: function(){
        let n1 = Math.floor(Math.random()* this.range+1);
        let n2 = Math.floor(Math.random()* this.range+1);

        this.addingNumbers = [n1, n2];
    },

    checkGuess: function(){
        return this.guess === this.correctAnswer ? true : false;
    },

    makeGuess: function(newGuess){
        newGuess = this.guess;
    },

    start: function(){
       this.running = true;

       this.createRandomNumbers();
       this.createRandomAnswers(5);

       console.log(this.answer)
    },

};

export { game_randomsum as default};