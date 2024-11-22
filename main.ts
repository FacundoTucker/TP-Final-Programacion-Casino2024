import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
//import { Juego } from "./Juego";
import { Usuario } from "./Usuario"
//import { Ruleta } from "./Ruleta";

// main.ts

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.iniciar();