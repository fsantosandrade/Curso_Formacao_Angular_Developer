class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement('div')
        componentRoot.classList.add('card')


        const cardLeft = document.createElement('div')
        cardLeft.classList.add('card-left')

        const user = document.createElement('span')
        user.textContent = 'By ' + (this.getAttribute('usuario') || 'Anonymous')

        const tittle = document.createElement('a')
        tittle.textContent = this.getAttribute('titulo')
        tittle.href = this.getAttribute('url')

        const resumo = document.createElement('p')
        resumo.textContent = this.getAttribute('conteudo')


        const cardRight = document.createElement('div')
        cardRight.classList.add('card-right')

        const image = document.createElement('img')
        image.src = this.getAttribute('image')
        image.alt = 'Imagem da Notícia'


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        cardLeft.appendChild(user)
        cardLeft.appendChild(tittle)
        cardLeft.appendChild(resumo)
        cardRight.appendChild(image)

        return componentRoot
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = 
        `
        .card {
            display: flex;
            justify-content: space-between;
            -webkit-box-shadow: 6px 10px 30px 0px rgba(0,0,0,0.49);
            -moz-box-shadow: 6px 10px 30px 0px rgba(0,0,0,0.49);
            box-shadow: 6px 10px 30px 0px rgba(0,0,0,0.49);
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 15px;
        }

        .card:last-child {
            margin-bottom: 0;
        }
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card-left a {
            font-size: 1.850rem;
            margin-top: 15px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        .card-left a
        
        .card-left p {
            color: gray;
        }
        
        .card .card-right img {
            width: 150px;
            height: 100%;
        }
        `

        return style
    }
}

customElements.define('card-news', CardNews)