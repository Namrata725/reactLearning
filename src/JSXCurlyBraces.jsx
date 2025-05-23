function MyName() {
    const name = "World";
    return <h4>Hello {name}!</h4>; //variable inside JSX curly braces
  }

  function MySum() {
    const a = 5;
    const b = 10;
    return <h4>sum = {a + b}</h4>; //variable inside JSX curly braces
  }

  function ValidAge() {
    const age = 25;
    if (age >= 18) return <h4>You are an adult</h4>; //condition inside JSX curly braces
    return <h4>You are a minor</h4>;
  }

  function sub(a, b) { // FUNCTION
    return a - b;
  }

  function operation(a,b,op){ //funvtion
    if(op === "+"){ //operation
      return a + b;
    }else if(op === "-"){
      return a - b;
    }else if(op === "*"){
      return a * b;
    }else if(op === "/"){
      return a / b;
    }

  }

  function  MyObject(){
    const person = {
      name: "Namrata",
      age: 25,
      city: "Kathmandu"
    };
    return <h4>{person.name} is {person.age} years old and lives in {person.city}</h4>; //calling object inside JSX curly braces
  }

  function MyArray() {
    const fruits = ["apple", "banana", "cherry"];
    return <h4>{fruits[0]} is the first fruit</h4>; //calling array inside JSX curly braces
  }


function JSXCurlyBraces() {
let path= 'https://m.media-amazon.com/images/I/714d2f9gQGL.jpg'

  return (
   <div>

<div>
      <MyName />
      <MySum />
      {<h4>sub = {sub(3, 4)}</h4> /* function inside jsx curly braces */}
      <ValidAge />
      
      <h4> a=12,b=2, op = / <br /> ans={operation(12,2,"/")}</h4>
      <MyObject />
      <MyArray />
      <img src={path} alt="" srcset="" style={{width:'300px', height:'300px'}} /> {/* calling html tag property inside jsx curly braces */}
    </div>
   </div>
  );
}

export default JSXCurlyBraces;