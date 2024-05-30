//classes

/*
    data modifiers
    public: modificador padrão
    private: significa que a propriedade so pode ser assessada dentro da classe
    protected: permite que classes que herdem essa classe possam ver essa propriedade
*/

class Personagem {
    protected name?: string
    stregth: number
    Skill: number

    constructor(stregth: number, skill: number) {
        this.stregth = stregth
        this.Skill = skill
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

const p1 = new Personagem(10, 98)

//subclasse

class Mago extends Personagem {
    magicPoints: number

    constructor(stregth: number, skill: number, magicPoints: number){
        super(stregth, skill)

        this.magicPoints = magicPoints
    }
}

const p2 = new Mago(0o4, 34, 100)

//generics
function concatArray<T>(...itens: T[]):T[] {
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 2], [5])
const stringArray = concatArray<string[]>(['Felipe', 'Saitama'], ['Vegeta'])

console.log('Oi porra')