/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let items = [
        { name: "Ans", preis: 1 },
        { name: "Zwa", preis: 2 },
        { name: "Drei", preis: 3 },
    ];

const brightcolor = "yellow";

var app = new Vue({
    el: "#app",
    data: { msg: "Hello User!", show: false },
    methods: {
        showLine(){
            this.show = true
        }
    }
});

var list = new Vue({
    el: "#list",
    data: {items}
})

var tab1 = new Vue({
    el: "#tabelle1",
    data: { rows: [
        {name: "Eins", preis: 1},
        {name: "Zwei", preis: 2},
        {name: "Drei", preis: 3},        
        ],
        rowName: "",
        rowPreis: 0
    },
    methods:{
        addRow(){
            this.rows.push({name: this.rowName, preis: this.rowPreis})
        },
        popRow(){
            this.rows.pop()
        }
    }
})

var eingabe = new Vue({
    el: "#eingabe",
    data: {itemName: "Buh"},
    methods: {
        setItemName(){
            this.itemName = "Set with button"
        }
    }
})

Vue.component('mylist',
    {
        props: ["item"],
        template:
        "<p>Name: {{ item.name }} Preis: {{ item.preis }}</p>"
    }
)

var listcomp = new Vue ({ 
    el: "#listcomp",
    data: { items: [
        {name: "One", preis: 1},
        {name: "Two", preis: 2},
        {name: "Three", preis: 3},          
        ]}
})

Vue.component('full-list',
    {
        props: ['items','title','subtitle'],
        template: `
        <div class="fulllist">
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
            <div v-for="item in items">
            <p>Name: {{ item.name }} Preis: {{ item.preis }}</p>
            </div>
        </div>
        `
    }
)

var fl = new Vue(
    {
        el: '#fulllist',
        data: {
            items,
            title: "My Titel",  
            subtitle: ""
        }
    }
)

var vbinding = new Vue(
    {
        el: '#binding',
        data: {
            etwas: "blaaah",
            steil: { color: brightcolor}
        }
    }
)

var vreactivet = new Vue(
    {
        el: '#reactivet',
        data: {
            theobject: {
                uno: "uno"
            },
        },
        methods: {
            setDue() {
                this.$set(this.theobject,'due',"due")
            }
        }
    }
)

var vonkey = new Vue(
    {
        el: "#onkey",
        data: {
            keyupenter: ""
        },
        methods: {
            ausgabe(message, event) {
                alert(message + " Input was: " + this.keyupenter + " Key pressed" + event.key);
                //console.log(event);
            }
        }
    }
)