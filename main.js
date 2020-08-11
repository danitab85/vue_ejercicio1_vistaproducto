Vue.component("product", {
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
    },
    created() {
        this.selectedVariant = this.variants.find(item => item.default == true)
    },

    template: `<div class="row pt-5">
        <div class="col">
          <img v-bind:src="img" width="100%" />
        </div>
        <!--Atributos-->
        <div class="col">
          <h1>{{product}}</h1>
          <h3>{{description}}</h3>
          <h3>{{stock}}</h3>
          <p v-if='stock >= 10'>En Stock</p>
          <p v-else-if='stock <= 10 && stock > 0'>Quedan muy pocas</p>
          <p v-else>Agotadas</p>
          <ul>
            <li v-for='(detail, index) in details' :key="index">
              {{detail}}
            </li>
          </ul>
          <div v-for='variant in variants' :key='variant.id'>
            <p v-on:mouseover='updateProduct(variant)'>{{variant.type}}</p>
          </div>
          <a :href="lnk">Ver detalle</a>          
          <button class="btn btn-sm btn-info" @click='addToCart()' :disabled="!inStock">Agregar al carro</button>
          <button class="btn btn-sm btn-warning" @click='removeFromCart()'>Sacar del carro</button>
        </div>
      </div>`
}
)
var app = new Vue({
    el: '#app',
    data: {
        cart: 0
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