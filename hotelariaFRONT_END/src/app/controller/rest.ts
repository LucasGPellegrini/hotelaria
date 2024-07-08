
export async function pegaTodosUsuarios():Promise<any> {

    const res = await fetch("http://localhost:8080/usuario", {
        method: "GET"
    });

    const json = await res.json();

    return json
 }

 export async function pegaUsuario(cpf:string):Promise<any> {

    const res = await fetch("http://localhost:8080/usuario/"+cpf, {
        method: "GET"
    })
    
    try {
        const json = await res.json();
        return json
    }
    catch (SyntaxError) {
        return null
    }
 }

 export async function criaUsuario(ucpf:string, unome:string, udata_nascimento:Date):Promise<any> {

    //const formattedDate = `${udata_nascimento.getFullYear()}-${udata_nascimento.getMonth() + 1}-${udata_nascimento.getDate()}`;
    var payload = {
        cpf: ucpf,
        nome: unome,
        data_nascimento: udata_nascimento.toJSON().slice(0,10)
    }

    //var data = new FormData();
    //data.append( "json", JSON.stringify( payload ) );

    const res = await fetch("http://localhost:8080/usuario?=", {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify( payload )
    })//.then(function(res){ return res.json(); })
    //.then(function(data){ alert( JSON.stringify( data ) ) })

    
 }