const handlingtodo={
    data(){
        return{
            newTodo: {
                text: null,
                done: false
            },
            todos: [],
            editing: false

        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text === null || this.newTodo.text.trim() === '') {
                alert('Please enter a to-do item.');
                return;
            }
            this.todos.push({
                text: this.newTodo.text,
                done: false

            });
            this.newTodo.text = null;
            localStorage.setItem('todos', JSON.stringify(this.todos));
                },
        toggleDone: function(todo) {
            todo.done = !todo.done;
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        editTodo: function(todo) {   
            this.editing = true;
            this.newTodo.text = todo.text;
            this.newTodo.done = todo.done;
            this.todos.splice(this.todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(this.todos));

        },
        deleteTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
            clearAll: function() {
                this.todos = [];
                localStorage.removeItem('todos');
            }


    },
    
    created() {
        console.log('created: The Vue instance has been created.');
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            this.todos = JSON.parse(savedTodos);
        }
    }   


};
Vue.createApp(handlingtodo).mount('#app');
