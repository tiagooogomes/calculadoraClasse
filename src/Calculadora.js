export class Calculadora {
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