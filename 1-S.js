// Single Responsibility Principle


// This class represents what is not SINGLE RESPONSIBILITY PRINCIPLE
// Single Responsibility Principle says that class has to include functionality that fits only to this class
class News {
    constructor(title, text) {
        this.title = title,
            this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    // News class can't include toHTML and toJSON when you are using Single Responsibility Principle

    // toHTML() {
    //     return `
    //         <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //         </div>
    //     `
    // }

    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2)
    // }
}

// Valid syntax will be representing these methods to another class
class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
             <div class="news">
                 <h1>${this.news.title}</h1>
                 <p>${this.news.text}</p>
             </div>
         `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

// Single Responsibility Principle - принцып декомпозиции функционала к соответствующиму классу

const news = new News('Джо Байден - президент', 'Неожидано для общества Джо Байден стал президентом!')
const printer = new NewsPrinter(news)

console.log(news);

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());