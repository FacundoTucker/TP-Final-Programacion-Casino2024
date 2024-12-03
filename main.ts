import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
//import { Juego } from "./Juego";
import { Usuario } from "./Usuario"
//import { Ruleta } from "./Ruleta";
import { TragamonedaClasico} from "./TragamonedaClasico";
import { Raspadita } from "./Raspadita"
import { TragamonedaDiamante } from "./TragamonedaDiamante";
// main.ts

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
let raspadita : Raspadita = new Raspadita()
let tragamonedaClasico: TragamonedaClasico = new TragamonedaClasico()
let tragamonedaDiamante: TragamonedaDiamante = new TragamonedaDiamante()

casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.agregarJuego(raspadita);
casino.agregarJuego(tragamonedaClasico);
casino.agregarJuego(tragamonedaDiamante);
casino.iniciar();

// let tragamoneda1 : Tragamoneda1 = new Tragamoneda1()
// casino.agregarJuego(tragamoneda1);