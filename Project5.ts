// Library Task
interface LibraryItem {
    id: number;
    title: string;
    author: Author;
    copiesAvailable: number;
    borrowCopy(): void;
    returnCopy(): void;
    displayInfo(): string;
  }
  class Author{
    id:number;
    name:string='';
    birthYear:number=0;
    constructor(id:number, name:string='',birthYear:number=0){
            this.id=id;
            this.name=name;
            this.birthYear=birthYear;
        }
  }
  class Book implements LibraryItem {
    id: number;
    title: string;
    author: Author;
    copiesAvailable: number;
    publicationYear:Number
    
    constructor(id: number, title: string, author: Author, copiesAvailable: number, publicationYear:Number) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.copiesAvailable = copiesAvailable;
      this.publicationYear=publicationYear;
    }
    displayInfo(): string{
        return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author.name}, Publication Year: ${this.publicationYear}, Copies Available: ${this.copiesAvailable}`;
    }
    
    borrowCopy():void {
      if (this.copiesAvailable > 0) {
        this.copiesAvailable--;
      } else {
        throw new Error('No copies available');
      }
    }
    
    returnCopy():void{
      this.copiesAvailable++;
    }
  }

  class Magazine implements LibraryItem{
    id: number;
    title: string;
    author: Author;
    copiesAvailable: number;
    publicationYear:Number
    
    constructor(id: number, title: string,author:Author, copiesAvailable: number, publicationYear:Number){
        this.id = id;
        this.title = title;
        this.author=author;
        this.copiesAvailable = copiesAvailable;
        this.publicationYear=publicationYear;
    }
displayInfo(): string {
    return `Magazine ID: ${this.id}, Title: ${this.title},  copies available:${this.copiesAvailable}, Publication Year: ${this.publicationYear}`;
}
borrowCopy(): void {
    if(this.copiesAvailable>0){
        this.copiesAvailable--;
    }
    else{
        throw new console.error("Magazine not available");
        
    }
}
returnCopy(): void {
    this.copiesAvailable--;
}

  }
  class newspaper {
    id: number;
    title: string;
    type: string;
    copiesAvailable: number;
    publicationYear:Number
    
    constructor(id: number, title: string,type:string, copiesAvailable: number, publicationYear:Number){
        this.id = id;
        this.title = title;
        this.type=type;
        this.copiesAvailable = copiesAvailable;
        this.publicationYear=publicationYear;
    }
    displayInfo(): string {
        return `Paper ID: ${this.id}, Title: ${this.title}, Type: ${this.type}, copies available:${this.copiesAvailable}, Publication Year: ${this.publicationYear}`;
    }
    buyCopy(): void {
        if(this.copiesAvailable>0){
            this.copiesAvailable--;
        }
        else{
            throw new Error("Newspaer not available")
        }
    }
   
  }
 
  class LibraryMember {
    id: number;
    name: string;
    borrowedItems: LibraryItem[];
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.borrowedItems = [];
    }
    
    borrowItem(item: LibraryItem) {
      if (item.copiesAvailable > 0) {
        item.borrowCopy();
        this.borrowedItems.push(item);
      } else {
        throw new Error('No copies available');
      }
    }
    
    returnItem(item: LibraryItem) {
      const itemIndex = this.borrowedItems.indexOf(item);
      if (itemIndex >= 0) {
        item.returnCopy();
        this.borrowedItems.splice(itemIndex, 1);
      } else {
        throw new Error('Item not borrowed');
      }
    }
  }
 const author1=new Author(1,"George orwell",1998)
  const book = new Book(1, 'The Catcher in the Rye', author1, 5, 2005);
  const Magazine1=new Magazine(1, 'The Rye', author1, 9, 2000);
  const Paper1=new newspaper(1, 'divyamarathi', "English", 2, 2005)
  const member1 = new LibraryMember(2, 'John Doe');
  member1.borrowItem(book); 
   
  
  console.log(`Book ID: ${book.id}`);
  console.log(`Book Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Publication Year: ${book.publicationYear}`)
  console.log(`Book copies available: ${book.copiesAvailable}`);
  
  member1.borrowItem(book);
 
  
  console.log(`After borrowing:`);
  console.log(`Book copies available: ${book.copiesAvailable}`);
  console.log(`Member borrowed items: ${member1.borrowedItems}`);
  
  member1.returnItem(book);
  
  console.log(`After returning book:`);
  console.log(`Book copies available: ${book.copiesAvailable}`);

