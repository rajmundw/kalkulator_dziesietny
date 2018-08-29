
    import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(selectorName) {
        super();
        this.name = selectorName;
        this.$calculatorDOMElement = $(selectorName);

        this.firstNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.secondNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    }

    changeNumber() {
        let $span = this.$calculatorDOMElement.children('.group-number');
        for (let j = 1; j < $span.children('label').length; j++) {
            let i = 1
            $span.children(`label.display-${j}`).on('click', () => {
                $span.children(`label.display-${j}`).children().text(i++);
                if (i == 10) {
                    i = 0;
                }
                if (j % 2 == 0) {
                    let currentSecondInt = parseInt($span.children(`label.display-${j}`).text());
                    this.secondNumberArray[Math.round(($span.children('label').length - j) / 2)] = currentSecondInt
                    console.log(this.secondNumberArray)

                }

                else {
                    let currentSecondInt = parseInt($span.children(`label.display-${j}`).text());
                    this.firstNumberArray[Math.round(($span.children('label').length - j) / 2 - 1)] = currentSecondInt;
                    console.log(this.firstNumberArray)
                }
                return this.secondNumberArray;
            })

        }
    }

    add() {
        let $span = this.$calculatorDOMElement.children('.group-number');
        $span.children(`label`).on('click', () => {

            let string2 = '';
            let string1 = '';
            let sum = 0;
            let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            this.secondNumberArray.forEach((a) => {
                string2 = string2 + a;
                return string2;
            });
            this.firstNumberArray.forEach((a) => {
                string1 = string1 + a;
                return string1
            });

                sum = parseInt(string1) + parseInt(string2);
            console.log(sum);
            sum = sum.toString(10)
            console.log(typeof sum);
            for (let i = 0; i < sum.length; i++) {
                arr[i] = sum[sum.length - i - 1]
                this.$calculatorDOMElement.children('div').children(`span.result-${i + 1}`).children().text(sum[sum.length - i - 1])
            }
            console.log(arr)
        })

    }




}
export { DecCalculator  };


/*

    console.log(this.$calculatorDOMElement.children('div.operator-bar').children('span').text())
    if(this.$calculatorDOMElement.children('div.operator-bar').children('span').text()=="+"){
        sum = parseInt(string1) + parseInt(string2);}
    else if(this.$calculatorDOMElement.children('div.operator-bar').children().text()=="-"){
        sum = parseInt(string1) - parseInt(string2);
    }*/
