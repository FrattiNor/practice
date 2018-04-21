var vm = new Vue({
    el: "#book",
    data: {
        bookName:"",
        author:"",
        price:"",
        index: "3",
        books: [
            {
                bookName: "红楼梦",
                author: "曹雪芹",
                price: "32",
                index: "0"
            },
            {
                bookName: "水浒传",
                author: "施耐庵",
                price: "30",
                index: "1"
            },
            {
                bookName: "三国演义",
                author: "罗贯中",
                price: "24",
                index: "2"
            },
            {
                bookName: "西游记",
                author: "吴承恩",
                price: "20",
                index: "3"
            }
        ]
    },
    methods: {
        del: function(event){
            let tar = event.target;
            this.books.splice(tar.id,1);
            for(let i = tar.id;i < this.index;i++){
                this.books[i].index--;
            }
            this.index--;
        },
        add: function(){
            this.index++;
            let newBook = new Object();
            newBook.bookName = this.bookName;
            newBook.author = this.author;
            newBook.price = this.price;
            newBook.index = this.index;
            if(newBook.bookName == ""){
                alert("书名为空");
                return;
            }
            if(newBook.author == ""){
                alert("作者为空");
                return;
            }
            this.books.push(newBook);
            this.bookName = "";
            this.author = "";
            this.price = "";
        }
    }
})
