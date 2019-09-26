var app = new Vue({
    el: '#hello-vue',
    data: {
      message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    },
    methods: {
        updateMsg: function(e) {
            this.message = 'refreshed on  ' + new Date().toLocaleString()
        }
    }
})

var appH = new Vue({
    el: '#hidden-block',
    data: {
        isVisible: Math.round(Math.random()) === 1 ? 'none' : 'block'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!',
      isTrue: true
    }
})

// Define a new component called todo-item
Vue.component('todo-item', {
    props: ['text'],
    template: '<li>{{text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        todoList: [
            {index: 0, text: 'eat'},
            {index: 1, text: 'code'},
            {index: 2, text: 'sleap'},
            {index: 3, text: 'repeat'}
        ]
    }
});