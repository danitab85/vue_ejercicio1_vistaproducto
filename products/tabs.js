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
            type: String,
            required: true
        }
    },
    template: '#tabs-template',
    data() {
        return {
            tabs: ['agregar review', 'ver review', 'envio', 'detalles'],
            selectedTab: 'agregar review'
        }
    },
})