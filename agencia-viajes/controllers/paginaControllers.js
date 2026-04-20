import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viajes.js';

//Generar controladores
const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
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