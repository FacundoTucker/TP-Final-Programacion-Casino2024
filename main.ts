import { Casino } from "./Casino";
import { Ruleta } from "./Ruleta";
import { Usuario } from "./Usuario"
import { TragamonedasClasico} from "./TragamonedasClasico";
import { Raspadita } from "./Raspadita"
import { TragamonedasDiamante } from "./TragamonedaDiamante";

let casino = new Casino();
let usuario : Usuario = new Usuario()
let ruleta : Ruleta = new Ruleta()
let raspadita : Raspadita = new Raspadita()
let traClasico: TragamonedasClasico = new TragamonedasClasico();
let traDiamante: TragamonedasDiamante = new TragamonedasDiamante();

casino.agregarUsuario(usuario);
casino.agregarJuego(ruleta);
casino.agregarJuego(raspadita);
casino.agregarJuego(traClasico);
casino.agregarJuego(traDiamante);

casino.iniciar();

