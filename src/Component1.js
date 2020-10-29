import react from "react";

// <Component1 nombre="alejandro" apellido="iglesias" />
// {nombre: "alejandro", apellido: "iglesoas"}
export function Component1(props){
    let { nombre, apellido} = props; // es6

    return (<div>
        <p>{nombre} {apellido} </p>
        <p>{`${nombre} ${apellido} con literal strings`} </p>

    </div>)

}

