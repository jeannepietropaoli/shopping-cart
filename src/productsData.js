import { nanoid } from "nanoid"

const productsData = [
    {
        category : "Coffee-beans",
        items : [
            {
                name : "Tanzanian peaberry coffee beans",
                price : 20,
                id : nanoid()
            },
            {
                name : "Ethiopian sidamo coffee beans",
                price : 25,
                id : nanoid()
            },
            {
                name : "brazilian santos beans",
                price : 19,
                id : nanoid()
            },
            {
                name : "columbian supremo coffee beans",
                price : 27,
                id : nanoid()
            },
            {
                name : "yellow bourbon coffee beans",
                price : 22,
                id : nanoid()
            }
        ],
        id : nanoid()
    },
    {
        category : "Mugs",
        items : [
            {
                name : "mug blue-logo",
                price : 10,
                id : nanoid()
            },
            {
                name : "mug orange-logo",
                price : 8,
                id : nanoid()
            },
            {
                name : "mug yellow-logo",
                price : 12,
                id : nanoid()
            }
        ],
        id : nanoid()
    },
    {
        category : "Beanies",
        items : [
            {
                name : "black beanie green-logo",
                price : 10,
                id : nanoid()
            },
            {
                name : "black beanie yellow-logo",
                price : 8,
                id : nanoid()
            },
            {
                name : "sand beanie blue-logo",
                price : 10,
                id : nanoid()
            },
            {
                name : "sand beanie yellow-logo",
                price : 8,
                id : nanoid()
            }
        ],
        id : nanoid()
    },
    {
        category : "Hats",
        items : [
            {
                name : "hat orange-logo",
                price : 10,
                id : nanoid()
            },
            {
                name : "hat yellow-logo",
                price : 8,
                id : nanoid()
            }
        ],
        id : nanoid()
    }
]

function importImages() {
    productsData.forEach(productData => {
        productData.items.forEach((item, index) => {
            item.imgSrc = require(`./assets/products/${productData.category}/${index+1}.png`)
        })
    })
}

importImages()

export default productsData