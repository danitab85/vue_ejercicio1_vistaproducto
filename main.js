var app = new Vue({
    el: '#app',
    data: {
        description: 'Lorem ipsum',
        product: 'Longaniza',
        img: './assets/index.png',
        lnk: './longaniza.html',
        stock: 12,
        details: ["500gr", "16gr de proteína", "Libre de sufrimiento"],
        variants: [
            { id: 1, type: 'original', img: './assets/index.png' },
            { id: 2, type: 'hot italian', img: './assets/hotitalian.png' }
        ],
        cart: 0
    },
    methods: {
        updateImg(imagen) {
            this.img = imagen;
        },
        addToCart() {
            this.cart += 1;
            this.stock -= 1;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.stock += 1
            }
        }

    },
    computed: {
        inStock() {
            return this.stock > 0 ? true : false
            // if (this.stock > 0) {
            //     return true
            // }
            // else {
            //     return false
            // }
        }

    }
})