Vue.component("product", {
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
        { id: 1, type: 'original', img: './assets/index.png', stock: 10 },
        { id: 2, type: 'hot italian', img: './assets/hotitalian.png', stock: 8, default: true }
      ],

    }
  },

  methods: {
    updateProduct(variant) {
      this.selectedVariant = variant;
    },
    addToCart() {
      if (this.stock != 0) {
        this.$emit("add-to-cart", this.selectedVariant);
        this.selectedVariant.stock -= 1;
      }
    },
    removeFromCart() {
      var variantInCart = this.cart.find(product => product == this.selectedVariant)
      this.$emit("remove-from-cart", this.selectedVariant);
      if (variantInCart) {
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
    },
    shipping() {
      return this.premium == true ? "Gratis" : "$2000"
    }
  },
  created() {
    this.selectedVariant = this.variants.find(item => item.default == true)
  },
  template: `#product-template`
})
var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    premium: true
  },
  methods: {
    addToCart(variant) {
      this.cart.push(variant)
    },
    removeFromCart(variant) {
      var index = this.cart.indexOf(variant)
      if (index > -1) {
        this.cart.splice(index, 1)
      }

    }
  }
})