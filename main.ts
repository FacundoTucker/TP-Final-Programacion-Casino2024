import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
//import { Juego } from "./Juego";
import { Usuario } from "./Usuario"
//import { Ruleta } from "./Ruleta";
import { tragamonedaClasico} from "./TragamonedaClasico";
import { Raspadita } from "./Raspadita"
import { tragamonedaPadre } from "./TragamonedaPadre";
import { tragamonedaDiamante } from "./TragamonedaDiamante";
// main.ts

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
let raspadita : Raspadita = new Raspadita()
let tragamoneda: tragamonedaPadre = new tragamonedaPadre();
let traClasico: tragamonedaClasico = new tragamonedaClasico();
let traDiamante: tragamonedaDiamante = new tragamonedaDiamante();

casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.agregarJuego(raspadita);
casino.agregarJuego(tragamoneda);
casino.agregarJuego(traClasico);
casino.agregarJuego(traDiamante);

casino.iniciar();

