const app = new Vue({
    el: '#root',
    data: {
        emails: [],

    },
    methods: {
        randomEmail: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( function (response) {
                    console.log(response.data);
                });
            },
    }
});

