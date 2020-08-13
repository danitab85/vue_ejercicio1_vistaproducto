Vue.component('review-list', {
    template: '#list-template',
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
})