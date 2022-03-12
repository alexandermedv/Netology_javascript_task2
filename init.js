const goods = [
    {
        id: '1',  
        name: 'Кроссовки CORERACER CBLACK/CBLACK/FTWWHT',  
        description: 'Кроссовки adidas Coreracer идеально сочетают в себе поддержку стопы и уличный стиль. Легкая и дышащая модель дарит комфорт в течение всего дня. Логотип adidas завершает спортивный образ. Шнуровка Текстильный верх Дышащая модель Легкие беговые кроссовки',
        sizes: [39, 40, 42, 43],
        price: 3249,
        available: 'Да'
    },
    {
        id: '2',  
        name: 'Кроссовки RUNFALCON 2.0 CRENAV/FTWWHT/LEGINK',  
        description: 'текстиль, синтетический материал',
        sizes: [38, 41, 42, 43],
        price: 4159,
        available: 'Нет'
    },
    {
        id: '3',  
        name: 'Кроссовки Exhibit A CBLACK/SILVMT/TMDRGR',  
        description: 'Если бы Exhibit A были спортсменом, они были бы универсальным игроком. Баскетбольные кроссовки adidas обеспечат тебе устойчивость и скорость на площадке, а их дизайн будет отлично смотреться и на улицах города. Дышащий верх усилен в ключевых зонах для поддержки стопы. Промежуточная подошва Lightstrike гарантирует легкость и динамичность движений. Модель выполнена из переработанных материалов в рамках наших обязательств по сокращению пластиковых отходов. 20% элементов верха минимум на 50% состоят из переработанных материалов.',
        sizes: [42, 43],
        price: 7149,
        available: 'Да'
    },
    {
        id: '4',  
        name: 'Кроссовки ROGUERA CBLACK/CBLACK/GREY',  
        description: 'Спортивные тренды 80-х. Удобные современные кроссовки с классическим силуэтом. Кожаный верх с покрытием дополнен культовой промежуточной подошвой с двумя выступами.',
        sizes: [44],
        price: 3249,
        available: 'Да'
    },
    {
        id: '5',  
        name: 'Кроссовки OWNTHEGAME 2.0 FTWWHT/CBLACK/GREFOU',  
        description: 'текстиль, синтетический материал',
        sizes: [40, 41],
        price: 5149,
        available: 'Да'
    }
]

const basket = [
    {
        good: '1',
        amount: 2
    },
    {
        good: '3',
        amount: 3
    }
]

function add(good_id, amount) {
    if (goods[good_id-1].available === 'Да') {
        let basket_item = {
            good: goods[good_id-1].id,
            amount: amount
        }
        basket[basket.length] = basket_item;
    }
    else console.log('Не удалось добавить товар. Нет товара в наличии:', goods[good_id-1].name)
}

function delete_good(del_id) {
    for (i=0; i<basket.length; i++) {
        if (basket[i].good === del_id) {
            var to_del = basket[i]
        }
    }
    basket.splice(basket.indexOf(to_del), 1)
}

function clear() {
    basket.length=0;
}

function total() {
    let amount = 0
    let summ = 0
    for (i=0; i<basket.length; i++) {
        amount += basket[i].amount;
        for (j=0; j<goods.length; j++) {
            if (goods[j].id === basket[i].good) {var price=goods[j].price}
        }
        summ += basket[i].amount * price;
    }

    let total = {
        totalAmount: amount,
        totalSumm: summ
    }
    console.log('total:', total)
}

clear()
add(2, 2)
add(3, 1)
add(4, 2)
add(5, 3)
delete_good('4')
console.log('basket =', basket)
total()