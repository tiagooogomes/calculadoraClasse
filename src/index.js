class Calculadora {
    operand1 = 0;
    operand2 = 0;
    operation;

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }

    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult() {

        if(this.operation === 'soma') {
            return this.operand1 + this.operand2;
        } else if(this.operation === 'subtracao') {
            return this.operand1 - this.operand2;
        } else if(this.operation === 'divisao') {
            return this.operand1 / this.operand2;
        }else if(this.operation === 'multiplicacao') {
            return this.operand1 * this.operand2
        }
    }

    clearCalculator() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = 0;
    }
}

onload = () => {
    document.getElementById('bt-limpar').onclick = () => digito('limpar');
    document.getElementById('bt+').onclick = () => digito('+');
    document.getElementById('bt-').onclick = () => digito('-');
    document.getElementById('bt*').onclick = () => digito('*');
    document.getElementById('bt/').onclick = () => digito('/');
    document.getElementById('bt=').onclick = () => digito('=');
    document.getElementById('bt-0').onclick = () => digito(0);
    document.getElementById('bt-1').onclick = () => digito(1);
    document.getElementById('bt-2').onclick = () => digito(2);
    document.getElementById('bt-3').onclick = () => digito(3);
    document.getElementById('bt-4').onclick = () => digito(4);
    document.getElementById('bt-5').onclick = () => digito(5);
    document.getElementById('bt-6').onclick = () => digito(6);
    document.getElementById('bt-7').onclick = () => digito(7);
    document.getElementById('bt-8').onclick = () => digito(8);
    document.getElementById('bt-9').onclick = () => digito(9);
}

const calc = new Calculadora();
const display = document.getElementById('display');
let valorDigitado = '';
let operador = '';

const digito = (n) => {

    if(n === '=') {
        calc.setOperand2(parseInt(valorDigitado))

        switch(operador) {
            case '+':
                calc.setOperation('soma');
                break
            case '-':
                calc.setOperation('subtracao');
                break
            case '/':
                calc.setOperation('divisao');
                break  
            case '*':
                calc.setOperation('multiplicacao');
                break   
        }

        display.innerHTML = calc.getResult();
    }

    if(n === '+' || n === '-' || n === '*' || n === '/' || n === '=') {
        calc.setOperand1(parseInt(valorDigitado));
  
        operador = n;
        valorDigitado = '';      
      } else {
          valorDigitado += n;
      }

      display.innerHTML += n;

    if(n === 'limpar'){

        calc.clearCalculator();
        valorDigitado = ''; 
        display.innerHTML = '';
    }
}
