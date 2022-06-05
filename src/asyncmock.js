const products = [
    {
        id: '1',
        name: 'Porta Cepillos',
        price: 500,
        category: '3d',
        img: '/images/portacepillo.jpg',
        stock: 25,
        description: 'Porta Cepillos, diferentes formas y colores. Impreso en 3D con un material apto para agua y gran duracion'
    },
    {
        id:'2',
        name: 'Soporte Notebook',
        price: 1000,
        category: '3d',
        img: '/images/soporte.jpg',
        stock: 50,
        description: 'Soporte Para Notebooks'
    },
    {
        id:'3',
        name: 'Maceta',
        price: 1000,
        category: '3d',
        img: '/images/maceta2.jpg',
        stock: 50,
        description: 'Maceta 3d'
    },
    {
        id:'4',
        name: 'Anycubic Photon',
        price: 35000,
        category: 'impresoras',
        img: '/images/anycubic2.png',
        stock: 50,
        description: 'Impresora 3D'
    },
    {
        id:'5',
        name: 'Artillery X1',
        price: 60000,
        category: 'impresoras',
        img: '/images/artillery-2.png',
        stock: 20,
        description: 'Impresora 3D'
    },
    {
        id: '6',
        name: 'Robot Otto',
        price: 12000,
        category: 'robotica',
        img:'/images/otulis.jpg',
        stock: 35,
        description: 'Kit para el armado de Robot Interactivo Bluetooth'
    }
]

export const getProductsById = (id) =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
                resolve(products)
        },500)
    })
}

export const getProducts = () => {
    return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(products)
            },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}