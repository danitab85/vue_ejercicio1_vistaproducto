Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            description: 'Lorem ipsum',
            product: 'Longaniza',
            selectedVariant: {},
            lnk: './longaniza.html',
            details: ["500gr", "16gr de proteína", "Libre de sufrimiento"],
            variants: [
                { id: 1, type: 'original', img: './assets/index.png', stock: 10, default: true },
                { id: 2, type: 'hot italian', img: './assets/hotitalian.png', stock: 0 }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.selectedVariant);
            this.selectedVariant.stock -= 1;
        },
        removeFromCart() {
            var variantInCart = this.cart.find(e => e == this.selectedVariant)
            if (variantInCart) {
                this.$emit('remove-from-cart', this.selectedVariant);
                this.selectedVariant.stock += 1;
            }
        },


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
        },
        shipping() {
            return this.premium == true ? 'Gratis' : '$2.000'
        }
    },
    created() {
        this.selectedVariant = this.variants.find(e => e.default === true)
    },
    mounted() {
        eventBus.$on('review-added', review => this.reviews.push(review))
    },
    template: '#product-template'

})