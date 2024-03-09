const cards = [
    {
      "id": 1,
      "image": "./ferreteria-industrial.jpg",
      "title": "Ferretería industrial",
      "paragraph": "Descubre nuestra extensa selección de herramientas y equipos industriales de alta calidad para satisfacer todas tus necesidades de construcción y mantenimiento. Desde herramientas manuales hasta maquinaria especializada, nuestra ferretería ofrece soluciones robustas y duraderas para proyectos de cualquier tamaño."
    },
    {
      "id": 2,
      "image": "./bricolaje.jpg",
      "title": "Bricolaje",
      "paragraph": "Haz realidad tus proyectos de bricolaje con nuestra amplia gama de materiales, herramientas y accesorios. Ya sea que estés renovando tu hogar o creando algo desde cero, te proporcionamos todo lo que necesitas para inspirar tu creatividad y lograr resultados impresionantes."
    },
    {
      "id": 3,
      "image": "./materiales-construccion.jpg",
      "title": "Materiales de construcción",
      "paragraph": "Centro de Albañilería, electricidad y fontanería. Con nuestra completa oferta de materiales de construcción, equipos eléctricos y suministros de fontanería, somos tu destino único para todos tus proyectos de construcción y renovación. Desde cimientos hasta acabados, ofrecemos todo lo necesario para construir y mantener tu espacio con calidad y eficiencia."
    },
    {
      "id": 4,
      "image": "./piensos.jpg",
      "title": "Venta de piensos",
      "paragraph": "Ofrecemos una amplia gama de piensos de alta calidad para satisfacer las necesidades nutricionales de tus mascotas y animales de granja. Desde piensos equilibrados para perros y gatos hasta fórmulas especializadas para caballos, aves y ganado, tenemos todo lo que necesitas para mantener a tus animales sanos y felices."
    },
    {
      "id": 5,
      "image": "./semillas.jpg",
      "title": "Semillas",
      "paragraph": "Encuentra las mejores semillas para tus proyectos de jardinería y agricultura en nuestra tienda. Con una variedad de semillas de hortalizas, flores, césped y más. Podrás cultivar tu propio oasis verde con facilidad y confianza."
    },
    {
      "id": 6,
      "image": "./copia-de-llaves.jpg",
      "title": "Copia de llaves",
      "paragraph": "Con nuestro servicio de copia de llaves especializado, puedes estar tranquilo sabiendo que siempre tendrás acceso seguro a tus espacios. Ya sea para tus vehículos, tu hogar o tu negocio, ofrecemos copias precisas y confiables que garantizan tu tranquilidad en cualquier situación."
    },
    {
      "id": 7,
      "image": "./abonos.jpg",
      "title": "Abonos",
      "paragraph": "Nuestros abonos orgánicos y fertilizantes son la clave para un crecimiento vegetal saludable y vigoroso. Con una selección de productos que incluyen abonos líquidos, granulados y en polvo, podrás mejorar la calidad de tu suelo y aumentar la productividad de tus cultivos de manera natural y sostenible."
    },
    {
      "id": 8,
      "image": "./tratamientos-ecologicos.jpg",
      "title": "Tratamientos ecológicos",
      "paragraph": "Descubre nuestra gama de tratamientos ecológicos para el cuidado de tus plantas y jardines. Desde insecticidas y fungicidas naturales hasta fertilizantes orgánicos y repelentes de plagas, te ofrecemos soluciones respetuosas con el medio ambiente para mantener tus espacios verdes prósperos y libres de productos químicos nocivos."
    },
    {
      "id": 9,
      "image": "./hormigones-morteros.jpg",
      "title": "Hormigones y morteros",
      "paragraph": "Obtén la mezcla perfecta para tus proyectos de construcción con nuestros hormigones y morteros de alta calidad. Diseñados para resistir las demandas más exigentes, nuestros productos garantizan una base sólida y duradera para cualquier estructura."
    },
    {
      "id": 10,
      "image": "./aridos.jpg",
      "title": "Áridos",
      "paragraph": "Ofrecemos una variedad de áridos de alta calidad para satisfacer tus necesidades de construcción y paisajismo. Desde grava y arena hasta piedra triturada, nuestros productos son la elección ideal para proyectos que requieren materiales duraderos y confiables."
    },
    {
      "id": 11,
      "image": "./estructuras-madera.jpg",
      "title": "Estructuras de madera",
      "paragraph": "Descubre nuestra variedad de vigas, traviesas y madera de construcción de alta calidad para tus proyectos estructurales y de diseño. Con productos duraderos y resistentes, te ofrecemos soluciones confiables y estéticamente atractivas para cualquier aplicación."
    },
    {
      "id": 12,
      "image": "./butano.jpg",
      "title": "Butano",
      "paragraph": "Mantén tu hogar cálido y confortable con nuestro servicio de entrega de gas butano. Con un suministro constante y confiable, te aseguramos la comodidad y la tranquilidad en todo momento."
    },
    {
      "id": 13,
      "image": "./venta-leña.jpg",
      "title": "Venta de leña",
      "paragraph": "Disfruta del calor y la atmósfera acogedora de una chimenea con nuestra selección de leña de calidad premium. Con un secado adecuado y un corte preciso, nuestros productos garantizan un fuego eficiente y duradero para tus momentos de relajación y entretenimiento."
    },
    {
      "id": 14,
      "image": "./venta-pellets.jpg",
      "title": "Venta de pellets",
      "paragraph": "Descubre una fuente de energía limpia y eficiente con nuestra gama de pellets de madera de alta calidad. Perfectos para estufas y calderas, nuestros pellets proporcionan un calor sostenible y económico para tu hogar u oficina."
    },
    {
      "id": 15,
      "image": "./alquiler-camiones-grua.jpg",
      "title": "Alquiler de camiones con grúa",
      "paragraph": "Haz que tu próximo proyecto de construcción o carga sea más eficiente y seguro con nuestro servicio de alquiler de camiones con grúa. Nuestra flota de camiones equipados con grúas de última generación te ofrece la capacidad de elevar y transportar cargas pesadas con facilidad y precisión. Ya sea que necesites levantar materiales de construcción, equipos industriales o cualquier otro tipo de carga, nuestros camiones con grúa te proporcionan la solución ideal para tus necesidades de transporte y elevación. Con personal capacitado y equipos confiables, garantizamos un servicio excepcional que te ayudará a completar tus proyectos de manera eficiente y segura. Confía en nosotros para proporcionarte la solución de alquiler de camiones con grúa que necesitas para llevar tus proyectos al siguiente nivel."
    },
    {
      "id": 16,
      "image": "./tubos-para-pozos.jpg",
      "title": "Tubos para pozos",
      "paragraph": "Descubre nuestra gama de tubos de hormigón especialmente diseñados para la construcción de pozos de agua, alcantarillado y drenaje. Fabricados con hormigón de alta resistencia y durabilidad, nuestros tubos ofrecen una solución robusta y confiable para tus necesidades de infraestructura subterránea. Con una variedad de tamaños y especificaciones disponibles, puedes encontrar el tubo perfecto para cualquier proyecto, desde pozos domésticos hasta sistemas de drenaje municipales. Nuestros productos cumplen con los estándares de calidad más exigentes, garantizando una instalación fácil y un rendimiento duradero. Confía en nosotros para proporcionarte los tubos de hormigón de la más alta calidad que te ayudarán a construir una infraestructura sólida y resistente para tu comunidad o propiedad."
    },
    {
      "id": 17,
      "image": "./alquiler-hormigoneras.jpg",
      "title": "Alquiler hormigoneras",
      "paragraph": "Simplifica tus proyectos de vertido de hormigón con nuestro servicio de alquiler de hormigoneras. Con equipos de última generación y precios competitivos, te ofrecemos una solución rentable y conveniente para tus necesidades de mezcla de hormigón."
    },
    {
      "id": 18,
      "image": "./alquiler-maquinaria.jpg",
      "title": "Alquiler de maquinaria",
      "paragraph": "Haz frente a cualquier desafío con nuestra amplia selección de maquinaria y equipos de alquiler. Desde grupos electrógenos y herramientas eléctricas hasta maquinaria pesada y plataformas elevadoras, grupos electrógenos, taladros, martillos percutores, te proporcionamos las herramientas necesarias para completar tus proyectos con seguridad y eficiencia."
    }
]
export default cards