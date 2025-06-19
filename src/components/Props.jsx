function Greeting({ name = "Guest", age }) {
  return (
    <p>
      I'm {name},My age is{age}
    </p>
  );
}

function Details() {
  function SayHello() {
    return <h1>Hello,user</h1>;
  }
  return (
    <>
      <Greeting name="Indhu" age="22" />
      <Greeting name="Arun" age="24" />
      <Greeting age="24" />
      <Profile name="Devi" />
      <Travel name="Akshi" place="Dubai" />
      <Data hello={SayHello} />
    </>
  );
}
//without destructuring
function Profile(props) {
  return <h5>Hello,{props.name}</h5>;
}

//function destructuring
function Travel(detail) {
  const { name, place } = detail;
  return (
    <p>
      Welcome {name},Enjoy your holiday in {place}
    </p>
  );
}

//function as props
function Data({ hello }) {
  return <>{hello()}</>;
}

export { Details };
