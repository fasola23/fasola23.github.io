const liczby= document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelectorAll('.wyczysc')
const usun = document.querySelectorAll('.usun')
const rownosc = document.querySelectorAll('.rownosc')
const wynikPoprzednie = document.querySelectorAll('.poprzednie-dzialnie')
const wynikAktualne = document.querySelector('aktualne-dzialanie')


var aktualneDzialanie = ''
var poprzednieDzialanie = ''
var operacja = undefined


const oblicz = () => {
    let dzialanie
    if(!poprzednieDzialanie || !aktualneDzialanie) {
        return
    }
    const poprzednie = parseFloat(poprzednieDzialanie)
    const aktualne = parseFloat(aktualneDzialanie)

    if(isNaN(poprzednie) || isNaN(aktualne)) {
        return
    }

    switch (operacja) {
        case '+':
            dzialanie = poprzednie + aktualne
        break;
        case '-':
            dzialanie = poprzednie - aktualne
        break;
        case 'x':
            dzialanie = poprzednnie * aktualne
        break;
        case '÷':
            if(aktualne === 0){
                wyczyscWynik()
                return
            }
            dzialanie = poprzednie / aktualne
        break;
        case '√':
            dzialanie = Math.pow(poprzednie, 1/aktualny)
        break;
        case '%':
            dzialanie = poprzednie / 100 * aktualne
        break;
        case '^':
            dzialanie = Math.pow(poprzednie, aktualne)
        break;
        case 'log':
            dzialanie = Math.log(poprzednie) / Math.log(aktualne)
        break;
        default:
        return
    }
    aktualneDzialanie = dzialanie
    operacja = undefined
    poprzednieDzialanie = ''
}

const wybierzOperacje = (operator) => {
    if(aktualneDzialanie === '') {
        return
    }
    if(poprzednieDzialanie !== '') {
        const poprzednie = wynikPoprzednie.innerText
        if(aktualneDzialanie.toString() === '0' && poprzednie[poprzednie.length-1] === '÷') {
            wyczyscWynik()
            return
        }
        oblicz()
    }
    operacja = operator
    poprzednieDzialanie = aktualneDzialanie
    aktualneDzialanie = ''
}

const zaktualizujWynik =() => {
    wynikAktualne.innerText = aktualneDzialanie
     if(operacja != null) {
      wynikPoprzednie.innerText = poprzednieDzialanie + operacja
     } else {
            wybierzPoprzednie.innerText = ''
     } 
}

const dodajLiczbe = (liczba) => {
    if(liczba === '.') {
        if(aktualneDzialanie.includes('.')) {
            return
        }
        liczba = '.'
    }
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}

const ununLiczbe = () => {
    aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)
}

liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})

const wyczyscWynik = () => {
     aktualneDzialanie = ''
     poprzednieDzialanie = ''
     operacja = undefined
}

usun.addEventListener('click', () => {
    ununLiczbe()
    zaktualizujWynik()
})

operatory.forEach((operator) => {
    operator.addEventListener('click', () => {
        wybierzOperacje(operator.innerText)
        zaktualizujWynik()
    }) 
});

rownosc.addEventListener('click', () => {
    oblicz()
    zaktualizujWynik()
    
})

wyczysc.addEventListener('click', () => {
    wyczyscWynik()
    zaktualizujWynik()
})