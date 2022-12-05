const areaGame = document.querySelector('[wm-RiverRaid]')
const areaInfo = document.querySelector('[wm-info]')

const info = new Info()
let jogoRodando = false

function novoElemento(tagName, className, idName) {
    const element = document.createElement(tagName)
    element.className = className
    element.id = idName
    return element
}

function Levels() {

    this.bifurcation = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.zigzag = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.middle = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.right = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.left = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

}

function CriarLevels(levelEscolhido) {

    this.gameLevel = novoElemento("div", "barrieStyle")
    this.gameLevel.style.width = "100%";
    this.gameLevel.style.height = "100%";
    this.gameLevel.style.top = "-685px";
    this.gameLevel.style.position = `absolute`
    this.gameLevel.style.display = `grid`
    this.gameLevel.style.gridTemplateColumns = `repeat(20, 1fr)`;
    this.gameLevel.style.gridTemplateRows = `repeat(20, 1fr)`;

    this.level = levelEscolhido

    this.addMoeda = () => {
        let positions = posicaoAleatoria(this.level)
        
        while (this.level[positions[0]][positions[1]] != 0) {
            positions = posicaoAleatoria(this.level)
        }
        this.level[positions[0]][positions[1]] = 2
    }
    this.addMoeda()
    this.addCombustível = () => {
        let positions = posicaoAleatoria(this.level)
        while (this.level[positions[0]][positions[1]] != 0) {
            positions = posicaoAleatoria(this.level)
        }
        this.level[positions[0]][positions[1]] = 3
    }
    this.addCombustível()

    for (let row in this.level) {
        for (let column in this.level[row]) {

            let celula = this.level[row][column] 

            switch(celula) {
                case 0:
                    let celulaElemento0 = novoElemento("div", "air")
                    this.gameLevel.appendChild(celulaElemento0)
                    break;
                case 1:
                    let celulaElemento1 = novoElemento("div", "floresta")
                    this.gameLevel.appendChild(celulaElemento1)
                    break;
                case 2:
                    let celulaElemento2 = novoElemento("div", "bonus")
                    let imgBonus = novoElemento('img', 'moeda')
                    imgBonus.src = 'img/moeda.png'
                    celulaElemento2.appendChild(imgBonus)
                    this.gameLevel.appendChild(celulaElemento2)
                    break;
                case 3:
                    let celulaElemento3 = novoElemento("div", "fuel")
                    let imgFuel = novoElemento('img', 'combustivel')
                    imgFuel.src = 'img/combustivel.png'
                    celulaElemento3.appendChild(imgFuel)
                    this.gameLevel.appendChild(celulaElemento3)
                    break;
              }
        }
    }

    areaGame.insertAdjacentElement('afterbegin', this.gameLevel);

    this.getY = () => parseInt(this.gameLevel.style.top.split('px')[0]);
    this.setY = (y) => this.gameLevel.style.top = `${y}px`;

    this.animar = () => {

        const motion = 5 
        let newYposition = this.getY();

        newYposition = this.getY() + motion;

        this.setY(newYposition)
    }

    this.remover = () => {
        this.gameLevel.parentNode.removeChild(this.gameLevel)
    }

    function posicaoAleatoria(barrie) {

        let rowPosition = Math.floor(Math.random() * barrie.length)
        let columnPosition = Math.floor(Math.random() * barrie[rowPosition].length)
    
        return [rowPosition, columnPosition]
    }

}

function SortearLevels(barries) { 

    let LevelsPossiveis = [
        barries.bifurcation,
        barries.zigzag,
        barries.middle,
        barries.right,
        barries.left
    ]
    let i = Math.floor(Math.random() * 5)
    return LevelsPossiveis[i] 
}

function Cenario() {
    
    this.novoCenario = () => {
        const levels = new Levels()
        return new CriarLevels(SortearLevels(levels))
    }

    let novoCenario = this.novoCenario()
    let cenarioAnterior

    this.animar = () => {
        novoCenario.animar()

        if (typeof cenarioAnterior === 'object' && cenarioAnterior !== null) {
            cenarioAnterior.animar()
            if (cenarioAnterior.getY() > 680){
                info.setPontos()
                cenarioAnterior.remover()
            } 
        }

        if (novoCenario.getY() == 0) {
            cenarioAnterior = novoCenario
            novoCenario = this.novoCenario()
        }

    }

}

function Caminhao() {
    this.element = novoElemento('img', 'caminhao', 'myShip')
    this.element.src = 'img/caminhao.png'
    this.element.style.right = "450%"

    this.goingRight = false
    this.goingLeft = false

    this.getX = () => parseInt(this.element.style.right.split('px')[0])
    this.setX = (x) => this.element.style.right = `${x}px`

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.goingLeft = true
                break

            case "ArrowRight":
                this.goingRight = true
                break
        }
    });

    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.goingLeft = false
                break

            case "ArrowRight":
                this.goingRight = false
                break
        }
    });


    this.animar = () => {

        const motion = 5 
        let newXposition = this.getX()

        if (this.goingRight) {
            newXposition = this.getX() - motion;
        } else if (this.goingLeft) {
            newXposition = this.getX() + motion;
        }
        this.setX(newXposition)
    }

}

function Colisao() {

    this.estaColidindo = () => {

        let caminhaoElement = document.getElementById("myShip")
        let barriesLenght = document.getElementsByClassName("floresta").length

        for (let i = 0; i < barriesLenght; i++) {
            let barrieElement = document.getElementsByClassName("floresta")[i]
            const a = caminhaoElement.getBoundingClientRect()
            const b = barrieElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false

    }

    this.sobrepondoCombustivel = () => {

        let caminhaoElement = document.getElementById("myShip")
        let fuelsLenght = document.getElementsByClassName("fuel").length

        for (let i = 0; i < fuelsLenght; i++) {
            let fuelElement = document.getElementsByClassName("fuel")[i]
            const a = caminhaoElement.getBoundingClientRect()
            const b = fuelElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                fuelElement.removeChild(fuelElement.firstChild)
                return true
            }
        }
        return false

    }

    this.sobrepondoMoeda = () => {

        let caminhaoElement = document.getElementById("myShip")
        let bonusLenght = document.getElementsByClassName("bonus").length

        for (let i = 0; i < bonusLenght; i++) {
            let bonusElement = document.getElementsByClassName("bonus")[i]
            const a = caminhaoElement.getBoundingClientRect()
            const b = bonusElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                bonusElement.removeChild(bonusElement.firstChild)
                return true
            }
        }
        return false

    }

    this.perdeu = () => {

        if (this.estaColidindo()){
            info.finalizar()
        }
            

    }

    this.pegouCombustivel = () => {
        if (this.sobrepondoCombustivel()){
            info.ganhouCombustivel()
            info.pegouCombustivel()
        }
            

    }

    this.pegouMoeda = () => {

        if (this.sobrepondoMoeda()){
            info.pegouMoeda()
        }

    }

}

function Info() {
    let Pontos = 0
    let Combustivel = 0
    
    this.pontos = novoElemento("div", "pontos")
    this.pontos.appendChild(document.createTextNode(`Sua pontuação: ${Pontos}`))

    this.titleFuel = novoElemento("div", "textoCombustivel")
    this.fuelCount = novoElemento("div", "fuelCount")
    this.fuelCount.appendChild(document.createTextNode(`    ${Combustivel}`))
    this.titleFuel.appendChild(document.createTextNode(`Combustíveis: `))
    this.titleFuel.appendChild(this.fuelCount)
    
    this.progressBarFuel = novoElemento("div", "barraCombustivel")
    
    areaInfo.style.display = 'flex'
    areaInfo.style.flexDirection = 'column'
    areaInfo.style.justifyContent = 'flex-start'
    areaInfo.style.alignItems = 'center'
    areaInfo.appendChild(this.pontos)
    areaInfo.appendChild(this.titleFuel)
    areaInfo.appendChild(this.progressBarFuel)

    
    this.getPontos = () => {
        return Pontos
    }

    this.setPontos = () => {
        Pontos += 10
        this.pontos.removeChild(this.pontos.firstChild);
        this.pontos.appendChild(document.createTextNode(`Sua pontuação: ${Pontos}`))
    }

    this.pegouMoeda = () => {
        Pontos += 100
        this.pontos.removeChild(this.pontos.firstChild);
        this.pontos.appendChild(document.createTextNode(`Sua pontuação: ${Pontos}`))
    }

    this.pegouCombustivel = () => {
       Combustivel += 1
       this.fuelCount.removeChild(this.fuelCount.firstChild);
       this.fuelCount.appendChild(document.createTextNode(` (${Combustivel}) `))
    }

    this.getCombustivel = () => {
        return parseFloat(getComputedStyle(document.querySelector('.barraCombustivel')).getPropertyValue('--levelFuel'))
    }

    this.setCombustivel = (valor) => {
        this.progressBarFuel.style.setProperty('--levelFuel', `${valor}`)
    }

    this.diminuirCombustivel = () => {
        this.setCombustivel(this.getCombustivel() - 0.1)
    }

    this.ganhouCombustivel = () => {
        this.setCombustivel(this.getCombustivel() + 20)
    }

    this.verificarCombustivel = () => {
        let valor = this.getCombustivel()
        if(valor < 0){
            this.finalizar()
        }
    }

    this.finalizar = () => {
        jogoRodando = false
        alert("GAME OVER!");
        if(Combustivel == 0){
            alert("Sua pontuação final foi de " + Pontos + " pontos e você não coletou nenhum combustível!");
        }else if(Combustivel == 1){
            alert("Sua pontuação final foi de " + Pontos + " pontos e você coletou " + Combustivel + " combustível!");
        }else{
            alert("Sua pontuação final foi de " + Pontos + " pontos e você coletou " + Combustivel + " combustíveis!");
        }
        alert("O Jogo irá reiniciar ao apertar OK.");

        window.location.reload(true)
    }
}

function Jogo() {
    const cenario = new Cenario()
    const caminhao = new Caminhao()
    
    areaGame.appendChild(caminhao.element)

    const colisao = new Colisao()

    this.iniciar = () => {
        jogoRodando = true;
        const timerGeral = setInterval(() => {
            if (jogoRodando) {
                caminhao.animar()
                info.verificarCombustivel()
                colisao.perdeu()
                colisao.pegouCombustivel()
                colisao.pegouMoeda()
            }
        }, 20)

        const timerCenario = setInterval(() => {
            if (jogoRodando) {
                cenario.animar()
                info.diminuirCombustivel()
            }
        }, 28)

        const timerCombustivel = setInterval(() => {
            if (jogoRodando) {
                info.diminuirCombustivel()
            }
        }, 100)
    }

}

new Jogo().iniciar();