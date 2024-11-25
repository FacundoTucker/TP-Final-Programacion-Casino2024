import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
//import { Juego } from "./Juego";
import { Usuario } from "./Usuario"
//import { Ruleta } from "./Ruleta";
import { Tragamoneda1} from "./Tragamoneda1";

// main.ts

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.iniciar();

let tragamoneda1 : Tragamoneda1 = new Tragamoneda1()
casino.agregarJuego(tragamoneda1);