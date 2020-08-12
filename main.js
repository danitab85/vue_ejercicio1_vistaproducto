Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
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
        { id: 2, type: 'hot italian', img: './assets/hotitalian.png', stock: 0, default: true }
      ],

    }
  },

  methods: {
    updateProduct(variant) {
      this.selectedVariant = variant;
    },
    addToCart() {
      if (this.stock != 0) {
        this.$emit("add-to-cart", 1);
        this.selectedVariant.stock -= 1;
      }
    },
    removeFromCart() {
      this.$emit("remove-from-cart", 1);
      this.selectedVariant.stock += 1
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
    cart: 0,
    premium: true
  },
  methods: {
    addToCart(cant) {
      this.cart += cant
    },
    removeFromCart(cant) {
      if (this.cart > 0) {
        this.cart -= cant
      }

    }
  }
})