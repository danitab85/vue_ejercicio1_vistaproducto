var app = new Vue({
    el: '#app',
    data: {
        description: 'Lorem ipsum',
        product: 'Longaniza',
        selectedVariant: {},
        lnk: './longaniza.html',
        details: ["500gr", "16gr de proteína", "Libre de sufrimiento"],
        variants: [
            { id: 1, type: 'original', img: './assets/index.png', stock: 10 },
            { id: 2, type: 'hot italian', img: './assets/hotitalian.png', stock: 0, default: true }
        ],
        cart: 0
    },
    methods: {
        updateProduct(variant) {
            this.selectedVariant = variant;
        },
        addToCart() {
            this.cart += 1;
            this.selectedVariant.stock -= 1;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.selectedVariant.stock += 1
            }
        }

    },
    computed: {
        inStock() {
            return this.stock > 0 ? true : false

        },
        img() {
            return this.selectedVariant.img
        },
        stock() {
            return this.selectedVariant.stock
        }
    },
    created() {
        this.selectedVariant = this.variants.find(item => item.default == true)
    }
})