
const DBquestions = () => {
    const ArrayQuestions = [

        {
            question: 'Las señales de tránsito se clasifican en:',
            options: [
                {
                   answer: 'Preventivas (Amarillas) , Restrictivas (Rojas Con Negro) y Informativas (Azules)', 
                   correct: true,
                } ,
                {
                    answer: 'Preventivas (Amarillas) , Seguridad (Rojas con negro) y Auxilio (Azules)',
                    correct: false,
                },
                {
                    answer: 'Preventivas (Amarillas) , Reguladoras (Rojas con negro) e Informativas (Azules)',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿Cuántos pasajeros pueden viajar dentro de un vehículo?',
            options: [
                {
                    answer: 'Los indicados en la tarjeta de circulación.',
                    correct: true,
                },
                {
                   answer: 'Los indicados en la factura.', 
                   correct: false,
                } ,
                {
                    answer: 'Depende de los asientos.',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'Por conducir sin licencia, se hace acreedor a una multa consiste en:',
            options: [
                {
                   answer: '20 días de salario mínimo.', 
                   correct: true,
                } ,
                {
                    answer: '15 días de salario mínimo',
                    correct: false,
                },
                {
                    answer: '10 días de salario mínimo',
                    correct: false,
                },
            ]
        } , 
        {
            question: '¿Quién está obligado a utilizar el cinturón de seguridad dentro de un vehículo?',
            options: [
                {
                    answer: 'Todos los pasajeros del vehículo.',
                    correct: true,
                },
                {
                    answer: 'Nadie esta obligado.',
                    correct: false,
                },
                {
                   answer: 'Copiloto y conductor.', 
                   correct: false,
                } ,
            ]
        } , 
        {
            question: 'En centros educativos, oficinas públicas hospitales o cualquier otro lugar de reunión ¿Cuál es el límite de velocidad permitido para circular?',
            options: [
                {
                    answer: '20 Km/h',
                    correct: true,
                },
                {
                   answer: '10 Km/h', 
                   correct: false,
                } ,
                {
                    answer: '5 Km/h',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿Bajo qué circunstancias es permitida la vuelta a la derecha?',
            options: [
                {
                    answer: 'Nunca.',
                    correct: true,
                },
                {
                   answer: 'Siempre y que sea con precaucion.', 
                   correct: false,
                } ,
                {
                    answer: 'Siempre que el carril este libre.',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿En qué lugares está prohibido el estacionamiento de cualquier tipo de vehículo?',
            options: [
                {
                    answer: 'Camellones, frente a rampas especiales de acceso a la banqueta para minusválidos, en más de una fila, andadores y otras vías reservadas a los peatones',
                    correct: true,
                },
                {
                   answer: 'Donde lo marquen los señalamientos.', 
                   correct: false,
                } ,
                {
                    answer: 'No hay lugares prohibidos.',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿En qué caso a un vehículo matriculado fuera del Estado de México se le podrá retirar la placa de matrícula?',
            options: [
                {
                    answer: 'Cuando se detecte con adeudos por infracciones al Reglamento de Tránsito.',
                    correct: true,
                },
                {
                   answer: 'Cuando se detecten irregularidades como robo o este mal estacionado.', 
                   correct: false,
                } ,
                {
                    answer: 'Cuando cometa infracciones al Reglamento de transito.',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿En qué caso pueden circular los vehículos de servicio público por los carriles centrales de las vías primarias?',
            options: [
                {
                    answer: 'En ningún caso.',
                    correct: true,
                },
                {
                   answer: 'Cuando Haya una emergencia.', 
                   correct: false,
                } ,
                {
                    answer: 'En caso de una situacion importante.',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'Si un pasajero arroja basura hacia el exterior del vehículo; ¿Quién es el responsable y por lo tanto acreedor de la sanción',
            options: [
                {
                    answer: 'El conductor del vehiculo.',
                    correct: true,
                },
                {
                   answer: 'La persona que comete la accion.', 
                   correct: false,
                } ,
                {
                    answer: 'La persona mas adulta que se encuentre en el vehiculo',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'Qué tipos de vehículos podrán circular con los vidrios polarizados? ',
            options: [
                {
                    answer: 'Los vehículos que vengan instalados con vidrios polarizados desde la fábrica.',
                    correct: true,
                },
                {
                   answer: 'Los vehiculos tuneados.', 
                   correct: false,
                } ,
                {
                    answer: 'Los vehiculos que cuenten con permiso del las oficina de transito.',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'En las glorietas sin semáforos; ¿Quién tiene la preferencia?',
            options: [
                {
                    answer: 'Los vehículos que ya se encuentren circulando en ella.',
                    correct: true,
                },
                {
                   answer: 'Los vehiculos que se incorporan al carril.', 
                   correct: false,
                } ,
                {
                    answer: 'Los vehiculos que cuenten con permiso.',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'En caso de que el vehículo produzca un ruido excesivo generado por el claxon o válvulas de escape; ¿Cuál será la sanción?',
            options: [
                {
                    answer: 'Multa de 5 días de salario mínimo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 10 días de salario mínimo.', 
                   correct: false,
                } ,
                {
                    answer: 'Multa de 9 días de salario mínimo.',
                    correct: false,
                }
            ]
        } , 
        {
            question: '¿Qué casos están prohibidos realizar en la vía pública?',
            options: [
                {
                    answer: 'Efectuar carreras o “arrancones” o situar cualquier otro objeto que obstaculice o afecte la vialidad.',
                    correct: true,
                },
                {
                   answer: 'Efectuar carreras o “arrancones” que no tengan permiso de la autoridad.', 
                   correct: false,
                } ,
                {
                    answer: 'Efectuar carreras o “arrancones” o tocar el claxón.',
                    correct: false,
                }
            ]
        } , 
        {
            question: 'Es una regla para los motociclistas y su acompañante',
            options: [
                {
                    answer: 'El uso de casco y anteojos protectores.',
                    correct: true,
                },
                {
                   answer: 'El uso de casco.', 
                   correct: false,
                } ,
                {
                    answer: 'El uso de casco y cubrebocas.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuándo deben de ir acompañados por una persona mayor, los menores de edad con un permiso provisional de práctica?',
            options: [
                {
                    answer: 'Siempre, y el acompañante deberá portar una licencia vigente',
                    correct: true,
                },
                {
                   answer: 'Nunca , siempre y cuando el menor cuente con un permiso vigente.', 
                   correct: false,
                } ,
                {
                    answer: 'Algunas veces.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Todos los vehículos automotores de uso particular deberán contar con:',
            options: [
                {
                    answer: 'Póliza de seguro de responsabilidad civil vigente que ampare al menos daños a terceros en su persona y en su patrimonio.',
                    correct: true,
                },
                {
                   answer: 'Poliza de seguro que ampare todos los daños.', 
                   correct: false,
                } ,
                {
                    answer: 'Póliza de seguro de responsabilidad civil vigente que ampare al menos daños a su patrimonip.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Son causas de cancelación de la licencia:',
            options: [
                {
                    answer: 'Manejar bajo los efectos de drogas enervantes o psicotrópicos, así como, conducir en estado de ebriedad.',
                    correct: true,
                },
                {
                   answer: 'Tirar basura a la carretera.', 
                   correct: false,
                } ,
                {
                    answer: 'Manejar sin cinturon de seguridad.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Qué deben de hacer los conductores cuando el semáforo se encuentra en luz roja?',
            options: [
                {
                    answer: 'Detener su vehículo en la línea de “alto”, sin invadir la zona para cruce de los peatones.',
                    correct: true,
                },
                {
                   answer: 'Detener su vehiculo adelante de la linea de "alto"', 
                   correct: false,
                } ,
                {
                    answer: 'Detener su vehiculo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Está permitido realizar llamadas por el celular mientras conduce un vehículo?',
            options: [
                {
                    answer: 'No está permitido.',
                    correct: true,
                },
                {
                   answer: 'Esta permitido siempre y cuando se usen manos libres.', 
                   correct: false,
                } ,
                {
                    answer: 'Esta permitido mientras sea con precaucion.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿En qué casos pueden circular los conductores de motocicletas por las banquetas y áreas reservadas a los peatones?',
            options: [
                {
                    answer: 'En ningun caso.',
                    correct: true,
                },
                {
                   answer: 'Siempre y cuando no haya peatones.', 
                   correct: false,
                } ,
                {
                    answer: 'Esta permitido mientras sea con precaucion.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuánto como máximo, puede sobresalir la carga de las dimensiones laterales de un vehículo?',
            options: [
                {
                    answer: '1 metro.',
                    correct: true,
                },
                {
                   answer: '2 metros', 
                   correct: false,
                } ,
                {
                    answer: 'No puede sobresalir la carga.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es la sanción cuando un conductor no acata las restricciones de circulación de los programas ambientales?',
            options: [
                {
                    answer: 'Multa de 20 días y retención del vehículo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 20 días', 
                   correct: false,
                } ,
                {
                    answer: 'Multa de 10 días y retención del vehículo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es la sanción o multa por conducir un automotor, abrazado a una persona o a un objeto?',
            options: [
                {
                    answer: 'Multa de 20 días de salario mínimo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 20 días de salario mínimo y retencion del vehiculo', 
                   correct: false,
                } ,
                {
                    answer: 'Multa de 10 días y retención del vehículo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Qué tipo de vehículos podrán circular en carriles de contraflujo?',
            options: [
                {
                    answer: 'Vehículos de emergencia, patrullas, ambulancias y bomberos.',
                    correct: true,
                },
                {
                   answer: 'Vehículos de emergencia, patrullas, ambulancias.', 
                   correct: false,
                } ,
                {
                    answer: 'Todos los vehiculos publicos.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Qué sanción se aplica cuándo los datos de la placa no coinciden con los del engomado, la calcomanía o la tarjeta de circulación?',
            options: [
                {
                    answer: 'Multa de 20 días y retención del vehículo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 10 días y retnecion del vehiculo.', 
                   correct: false,
                } ,
                {
                    answer: 'Retencion del vehiculo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Los conductores que violen lo dispuesto en el Reglamento de Tránsito y muestren síntomas de conducir en estado de ebriedad serán:',
            options: [
                {
                    answer: 'Presentados ante el Oficial calificador o autoridad competente.',
                    correct: true,
                },
                {
                   answer: 'Seran castigados de acuerdo a la ley antidrogas.', 
                   correct: false,
                } ,
                {
                    answer: 'Sean multados con 20 dias de salario minimo y retención de vehiculo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Cuando solo existan daños materiales en un accidente, el agente de tránsito está obligado a:',
            options: [
                {
                    answer: 'Exhortar a los afectados, a fin de que lleguen a un arreglo inmediato para evitar el entorpecimiento de la circulación.',
                    correct: true,
                },
                {
                   answer: 'Llevar a los involucrados a la oficina de transito.', 
                   correct: false,
                } ,
                {
                    answer: 'Obligar a los afectados, a que lleguen a un arreglo inmediato para evitar el entorpecimiento de la circulación.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es el límite de alcohol espirado para los operadores de transportes de sustancias peligrosas, de carga o de transportes de pasajeros?',
            options: [
                {
                    answer: 'Ninguna cantidad de alcohol en la sangre o en aire espirado.',
                    correct: true,
                },
                {
                   answer: 'Una poca cantidad en la sangre o en aire espirado.', 
                   correct: false,
                } ,
                {
                    answer: 'Una cantidad de acuerdo a lo marcado al reglamento de transito.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Qué procede cuando su vehículo tiene instaladas torretas, faros rojos, o dispositivos usados en vehículos de emergencia o patrullas?',
            options: [
                {
                    answer: 'Multa de 20 días de salario mínimo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 20 días de salario mínimo y rentención del vehiculo.', 
                   correct: false,
                } ,
                {
                    answer: 'Multa de 10 días de salario minimo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿De qué color deberán ser las luces delanteras de los vehículos?',
            options: [
                {
                    answer: 'Blanco.',
                    correct: true,
                },
                {
                   answer: 'Amarillo.', 
                   correct: false,
                } ,
                {
                    answer: 'Naranja.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Los vehículos no deberán portar en la parte trasera faros de qué color',
            options: [
                {
                    answer: 'Blanco.',
                    correct: true,
                },
                {
                   answer: 'Amarillo.', 
                   correct: false,
                } ,
                {
                    answer: 'Naranja.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Cuando un conductor, transite con un vehículo con llantas lisas o en mal estado, se procederá a:',
            options: [
                {
                    answer: 'Multa de 5 días de salario mínimo.',
                    correct: true,
                },
                {
                   answer: 'Multa de 10 días de salario mínimo.', 
                   correct: false,
                } ,
                {
                    answer: 'Multa de 2 días de salario mínimo.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'El Reglamento de Tránsito prevé disposiciones que deberán obedecer los peatones, en caso contrario será susceptible de ser:',
            options: [
                {
                    answer: 'Amonestado.',
                    correct: true,
                },
                {
                   answer: 'Remitido a la autoridad competente.', 
                   correct: false,
                } ,
                {
                    answer: 'Regañado por un oficial.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Bajo qué circunstancias el conductor de un vehículo puede pasarse un semáforo en rojo?',
            options: [
                {
                    answer: 'Solo si un oficial de tránsito lo indica.',
                    correct: true,
                },
                {
                   answer: 'Nunca', 
                   correct: false,
                } ,
                {
                    answer: 'Solo si hay mucho trafico.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Para qué sirven las rayas longitudinales en el pavimento?',
            options: [
                {
                    answer: 'Delimitan los carriles de circulación y guían a los conductores dentro de los mismos',
                    correct: true,
                },
                {
                   answer: 'Delimitan donde deben parar los carros en caso de semaforo rojo.', 
                   correct: false,
                } ,
                {
                    answer: 'Indican el límite de parada de los vehículos y delimitan la zona de cruce de peatones.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Para qué sirven las rayas transversales en el pavimento?',
            options: [
                {
                    answer: 'Indican el límite de parada de los vehículos y delimitan la zona de cruce de peatones.',
                    correct: true,
                },
                {
                   answer: 'Delimitan los carriles de circulación y guían a los conductores dentro de los mismos.', 
                   correct: false,
                } ,
                {
                    answer: 'Delimitan los carriles de circulación y guían a los conductores dentro de los mismos',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Si el vehículo que conduce carece de direccionales o en su caso no funcionan, y requiere cambiar de dirección, deberá:',
            options: [
                {
                    answer: 'Hacer la señal respectiva con el brazo izquierdo extendido hacia arriba, si el cambio es a la derecha y extendiéndolo hacia abajo, si va a hacerlo hacia la izquierda.',
                    correct: true,
                },
                {
                   answer: 'Tocar el claxon', 
                   correct: false,
                } ,
                {
                    answer: 'Hacer la señal respectiva con el brazo derecho extendido hacia arriba, si el cambio es a la derecha y extendiéndolo hacia abajo, si va a hacerlo hacia la izquierda.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'El conductor que se aproxime a un crucero de ferrocarril deberá hacer alto total a una distancia mínima de:',
            options: [
                {
                    answer: '5 metros del riel más cercano del cruce del ferrocarril.',
                    correct: true,
                },
                {
                   answer: '7 metros del riel más cercano del cruce del ferrocarril.', 
                   correct: false,
                } ,
                {
                    answer: '2 metros del riel más cercano del cruce del ferrocarril.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Qué función tienen los fantasmas o indicadores de alumbrado?',
            options: [
                {
                    answer: 'Delimitan la orilla de los acotamientos.',
                    correct: true,
                },
                {
                   answer: 'Delimita el trafico.', 
                   correct: false,
                } ,
                {
                    answer: 'Inidica que estamos en problemas.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es el objeto de las señales restrictivas?',
            options: [
                {
                    answer: 'Indicar determinadas limitaciones o prohibiciones que regulen el tránsito.',
                    correct: true,
                },
                {
                   answer: 'Indican el límite de parada de los vehículos y delimitan la zona de cruce de peatones.', 
                   correct: false,
                } ,
                {
                    answer: 'Delimitan la orilla de los acotamientos.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿En qué caso se permite efectuar carreras o arrancones en la vía pública?',
            options: [
                {
                    answer: 'No están permitidos.',
                    correct: true,
                },
                {
                   answer: 'Estan permitidos siempre y cuando se cuente con permiso.', 
                   correct: false,
                } ,
                {
                    answer: 'Estan permitidos bajo ciertas condiciones.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿En qué condiciones se permite la instalación y el uso de sistemas antirradares o detector de radares de velocidad?',
            options: [
                {
                    answer: 'Bajo ninguna condición.',
                    correct: true,
                },
                {
                   answer: 'Estan permitidos siempre y cuando no se le den mal uso.', 
                   correct: false,
                } ,
                {
                    answer: 'Estan permitidos con un permiso especial de la autoridad.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Sería una causa por la cual no se expida o reexpida una licencia y/o permiso para conducir?',
            options: [
                {
                    answer: 'Cuando la documentación exhibida sea falsa o proporcionen informes falsos en la solicitud correspondiente.',
                    correct: true,
                },
                {
                   answer: 'Cuando se tengan antecedentes penales.', 
                   correct: false,
                } ,
                {
                    answer: 'Cuando la persona no sea mayor de edad o proporcione informacion falsa.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Las ambulancias, patrullas de policía y los vehículos de bomberos tienen preferencia de paso, siempre y cuando:',
            options: [
                {
                    answer: 'Circulen con la sirena o con la torreta luminosa y encendida.',
                    correct: true,
                },
                {
                   answer: 'En caso de que tengan una emergencia.', 
                   correct: false,
                } ,
                {
                    answer: 'Solo las ambulancias y bomberos tienen preferencia cuando circulen con la sirena o con la torreta luminosa encendida.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Qué se debe hacer cuando los conductores pretendan incorporarse a una vía primaria?',
            options: [
                {
                    answer: 'Ceder el paso a los vehículos que circulen por la misma.',
                    correct: true,
                },
                {
                   answer: 'Ceder el paso a todos lo vehiculos que sean posibles.', 
                   correct: false,
                } ,
                {
                    answer: 'No ceder el paso y que los conductores esperen su turno.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Por dónde queda prohibido rebasar a otro vehículo?',
            options: [
                {
                    answer: 'Por el acotamiento.',
                    correct: true,
                },
                {
                   answer: 'Por la derecha.', 
                   correct: false,
                } ,
                {
                    answer: 'Por la izquierda.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cómo deben de actuar los conductores de vehículos implicados en accidentes donde resulten personas lesionadas o fallecidas?',
            options: [
                {
                    answer: 'Permanecer en el lugar del accidente para prestar o facilitar asistencia al lesionado o lesionados, procurando que se dé aviso al personal de auxilio y autoridad competente.',
                    correct: true,
                },
                {
                   answer: 'Dar aviso a las autoridades y retirarse.', 
                   correct: false,
                } ,
                {
                    answer: 'Llegar a un acuerdo entre amabas partes.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es el objeto de las señales preventivas?',
            options: [
                {
                    answer: 'Advertir la existencia y naturaleza de un peligro o cambio de situación en la vía pública.',
                    correct: true,
                },
                {
                   answer: 'Indicar determinadas limitaciones o prohibiciones que regulen el tránsito.', 
                   correct: false,
                } ,
                {
                    answer: 'Indicar donde se encuentran sitios generalmente estas señales son de color azul.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿En qué caso se permite estacionarse en segunda fila?',
            options: [
                {
                    answer: 'En ningun caso.',
                    correct: true,
                },
                {
                   answer: 'Cuando un oficial de transito lo indique.', 
                   correct: false,
                } ,
                {
                    answer: 'Cuando la persona tenga una emergencia.',
                    correct: false,
                }
            ]
        } ,
        {
            question: 'Indique cuál es la condición para que los vehículos puedan realizar el ascenso y descenso de pasajeros.',
            options: [
                {
                    answer: 'Que el vehículo esté sin movimiento.',
                    correct: true,
                },
                {
                   answer: 'Que un oficial de transito lo indique.', 
                   correct: false,
                } ,
                {
                    answer: 'Que el vehiculo active sus intermitentes.',
                    correct: false,
                }
            ]
        } ,
        {
            question: '¿Cuál es el objeto de las señales informativas?',
            options: [
                {
                    answer: 'Servir de guía para localizar o identificar calles, carreteras, nombres de poblaciones y lugares de interés con servicios existentes.',
                    correct: true,
                },
                {
                   answer: 'Advertir la existencia y naturaleza de un peligro o cambio de situación en la vía pública.', 
                   correct: false,
                } ,
                {
                    answer: 'Indicar determinadas limitaciones o prohibiciones que regulen el tránsito.',
                    correct: false,
                }
            ]
        } ,
    ]

    return {
        ArrayQuestions,
    };
}

export default DBquestions;