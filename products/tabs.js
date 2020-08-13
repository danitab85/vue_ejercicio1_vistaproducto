Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        },
        send: {
            type: String,
            required: true
        },
        detailsList: {
            type: Array,
            required: true
        }
    },
    template: '#tabs-template',
    data() {
        return {
            tabs: ['Agregar review', 'Ver review', 'Envío', 'Detalles'],
            selectedTab: 'Agregar review'
        }
    },
})