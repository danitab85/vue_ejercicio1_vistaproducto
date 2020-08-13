Vue.component('details-component', {
    template: '#details-template',
    props: {
        detailsList: {
            type: Array,
            required: true
        }
    }

})