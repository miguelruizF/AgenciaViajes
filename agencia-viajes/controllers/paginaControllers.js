import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viajes.js';

//Generar controladores
const paginaInicio = async (req, res) => {

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));
    //Consultar 3 viajes del modelo Viaje
    try{
        
        const resultado = await Promise.all(promiseDB);
        const viajes = resultado[0];
        const testimoniales = resultado[1];

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //Consultar BD
    const viajes = await Viaje.findAll();
    //console.log(viajes)

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

const paginaTestimoniales = async(req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}

//Pagina de detalle de viaje
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug } })
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}