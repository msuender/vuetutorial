/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let items = [
        { name: "Ans", preis: 1 },
        { name: "Zwa", preis: 2 },
        { name: "Drei", preis: 3 },
    ];

const brightcolor = "orange";

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
        "<p>Name: {{ item.name }} Price: {{ item.preis }}</p>"
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
        <div class="graycolor">
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
            items,  //holt const
            title: "My Titel",  //Text für Titel
            subtitle: ""  //Text aus html binding
        }
    }
)

var vbinding = new Vue(
    {
        el: '#binding',
        data: {
            etwas: "blaaah",
            steil: { color: brightcolor},
            abbrtitle: "Alphabet"
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
                alert(message + " Input was: " + this.keyupenter + " Key pressed " + event.key);
                //console.log(event);
            }
        }
    }
)

var vradioon = new Vue(
    {
        el: "#radioon",
        data: {
            answer: ""
        },
        methods: {
            radioselected(message) {
                alert("You selected " + message + " but bound answer is " + this.answer + "BUT the event.target.value is" + event.target.value);
            }
        }
    }

)

var vradiofor = new Vue(
    {
        el: "#radiofor",
        data: {
            options: [ 
                {name: "Beer", value: 1},
                {name: "Wine", value: 2},
                {name: "Water", value: 3}
            ],
            selectedDrink: ""
        }
    }
)

/**LANGUAGE SELECTION */

const langData = {
    "de": { "language": "German", "greet": "Hallo!", "disabled": true},
    "mx": { "language": "Mexican", "greet": "Hola!", "disabled": false},
    "en": { "language": "English", "greet": "Hello!", "disabled": false},
}

let defaultLang = "de";
let prevLang = defaultLang;
let selectedLang = langData[defaultLang];

let disabledLang = {
    "de": true,
    "mx": false,
    "en": false,
}

var vlanguages = new Vue(
    {
        el: "#languages",
        data: {
            langData,
            selectedLang,
            disabledLang,
            prevLang,
        },
        methods: {
            setLanguage(language) {
                this.disabledLang[this.prevLang] = false;
                this.selectedLang = this.langData[language];
                this.disabledLang[language] = true;
                this.prevLang = language;
            }
        }

    }
)

/** MORE COMPONENTS */

let helloData = { h1: "HELLO ALL :-)"};

//global registered component

Vue.component('say-hello', {
        // data MUST be a function!!
        props: ['hellodata'],
        template: `
        <h1>{{ hellodata }}</h1>
        `
    }
)

// <div> needed to wrap the component used!!
Vue.component('hello-one', {
        props: ['sometext','hellodata','datatext'],
        data: function () {
            return { 
                localtext: "this is a fix text defined in the component data function",
                compdatatext: "I AM FIX TEXT, text coming from a variable in data ---> " + this.datatext}
        },
        template: `
        <div>
            <p>First a text passed from the Vue to the component and then to a sub-component with :bind</p>
            <say-hello :hellodata="hellodata"></say-hello>
            And here text passed directly from the Vue: {{ sometext }} <br>
            Finally data defined directly in the component: {{ localtext }} <br>
            Then we have text passed from the Vue data into a new variable of the component data: {{ compdatatext }}
        </div>
        `
    }
)

//you need to create a pimary Vue instance to be able to use!
let vhello = new Vue(
    {
        el: "#hello",
        data: {
            hellodata: "",
            sometext: "",
            datatext: "beeeh"
        }
    }
)

/** LOCAL component */

const myLocalComp =  {
    props: ['mytext'],
    template: `
    <div>
        My text is: <code>{{ mytext }}</code>
    </div>
    `
}

let vhello1 = new Vue(
    {
        el: "#hello1",
        data: {
            mytext: ""
        },
        components: {
            'hello-two': myLocalComp
        }
    }
)

//custom events

const myEventComp = {
    props: ['counter','stupidtext'],
    template: `
    <div>
    <h2>Custom Event</h2>
    <button @click="$emit('counter-pp')">Set counter with custom event</button>
    <p>The counter is: {{ counter }} and {{ stupidtext }}</p>
    </div>
    `
}

const myDataCounter = {
    props: ['thedata'],
    data: function () { return {thedata: this.thedata} },

}

let vcustcounter = new Vue (
    {
        el: "#custcounter",
        data: {
            counter: 0,
            stupidtext: "blaaa"
        },
        components: {
            'my-cust-counter': myEventComp
        },
        methods: {
            counterpp(){
                this.counter++;
            }
        }
    }
)


// WATCH

let dataWatched = { wd: 'a', nwd: null};

let vwatcher = new Vue(
    {
        el: "#watcher",
        data: dataWatched,
        watch: {
            wd: function() {
                alert("wd has changed!");
            }
        },
        methods: {
            changeIt: function(){
                this.wd = 'b';
            }
        }
    }
)
