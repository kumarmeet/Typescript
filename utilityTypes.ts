interface User {
  name: string;
  email: string;
  age: number;
}

type Roles = "author" | "editor" | "researcher";

interface Article {
  title: string;
  content: string;
  contributors: Record<Roles, User>;
}

const article: Article = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urna, eleifend at malesuada id, suscipit eu",
  contributors: {
    author: { name: "John", email: "john@email.com", age: 32 },
    editor: { name: "Frank", email: "frank@email.com", age: 36 },
    researcher: { name: "Mark", email: "mark@email.com", age: 36 },
  },
};

//------------------------------------------------------------------------------------------

interface Blog{
  id: string;
  title: string;
  desc: string;
  likes: number;
  details:{
    userName:string;
    userLikes:number
  }
}

type BlogTitleAndDesc = Pick<Blog, "title" | "desc">
type BlogDetails = Pick<Blog["details"], "userName" | "userLikes">

const blog:BlogTitleAndDesc = {
  desc:"desc",
  title:"title"
}

const blogDetails:BlogDetails ={
  userLikes:44,
  userName:"name"
}

//------------------------------------------------------------------------------------------

interface UserDetails {
  id:string;
  email:string;
  password:string;
}

type UserWithoutPassowrd = Omit<UserDetails, "password">

const userData: UserWithoutPassowrd ={
  id:"41254",
  email:"test@test.com"
}

//------------------------------------------------------------------------------------------

interface Person {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<Person>

const partialPerson:PartialPerson = {
  age:14
}

//------------------------------------------------------------------------------------------

interface Order {
  orderId?: number;
  customerName?: string;
  orderDate?: string;
  orderTotal?: number;
}

type RequiredOrder = Required<Order>

const order:RequiredOrder = {
  customerName:"name",
  orderDate:"2024-10-10",
  orderId:44,
  orderTotal:45
}

type PartialRequiredOrder = Required<Pick<Order, "customerName" | "orderId">>;

const partialRequiredOrder:PartialRequiredOrder = {
customerName:"name",
orderId:444
}

//------------------------------------------------------------------------------------------

type City = "new york" | "london" | "tokyo";
type UppercaseCity = Uppercase<City>;

type Email = "JohnDoe@example.com" | "JaneDoe@example.COM";
type LowercaseEmail = Lowercase<Email>;

type BlogTitle = "a day in the life" | "my trip to london";
type CapitalizedTitle = Capitalize<BlogTitle>;

type BookTitle = "The Catcher In The Rye" | "To Kill A Mockingbird";
type UncapitalizedTitle = Uncapitalize<BookTitle>;

interface StringUtility {
  city: UppercaseCity;
  email: LowercaseEmail;
  blogTitle: CapitalizedTitle;
  bookTitle: UncapitalizedTitle;
}

const stringUtility:StringUtility = {
  blogTitle:"A day in the life",
  bookTitle:"the Catcher In The Rye",
  city:"NEW YORK",
  email:"janedoe@example.com"
}

//------------------------------------------------------------------------------------------

type Animal = "Dog" | "Cat" | "Fish" | "Bird";
type Pet = Extract<Animal, "Dog" | "Cat">; // Result: "Dog" | "Cat"

//------------------------------------------------------------------------------------------

//  https://cloudaffle.com/series/typescript-utility-types/what-are-utility-types/
