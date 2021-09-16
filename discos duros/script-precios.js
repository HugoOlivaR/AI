window.onload = iniciar;

function iniciar() {
    const redneuronal = new brain.NeuralNetwork();

    const datos = [
        
        // SSD

            // 500 Gb
            
            {
                "input": {"Tipo":0.1, "Capacidad":0.5, "Precio":0.5}, // SSD 500GB 50€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":0.5, "Precio":0.8}, // SSD 500GB 80€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":0.5, "Precio":0.3}, // SSD 500GB 30€
                "output": {"Barato":1}
            },
            
            // 1TB
            
            {
                "input": {"Tipo":0.1, "Capacidad":1, "Precio":0.5}, // SSD 1TB 50€
                "output": {"Barato":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":1, "Precio":1.3}, // SSD 1TB 130€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":1, "Precio":0.8}, // SSD 1TB 80€
                "output": {"Bien de precio":1}
            },
            
            // 250 Gb
            
            {
                "input": {"Tipo":0.1, "Capacidad":0.25, "Precio":0.5}, // SSD 250GB 50€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":0.25, "Precio":0.30}, // SSD 250GB 30€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.1, "Capacidad":0.25, "Precio":0.2}, // SSD 250GB 20€
                "output": {"Barato":1}
            },
        
        // M.2

            //500 Gb

            {
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.5}, // SSD 500GB 50€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.8}, // SSD 500GB 80€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.3}, // SSD 500GB 30€
                "output": {"Barato":1}
            },

            //1TB

            {
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":1.3}, // SSD 1TB 130€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":2.2}, // SSD 1TB 220€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":0.8}, // SSD 1TB 80€
                "output": {"Barato":1}
            },

            //2TB

            {
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":2.5}, // SSD 2TB 250€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":4}, // SSD 2TB 400€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":1.9}, // SSD 2TB 190€
                "output": {"Barato":1}
            },
        
        // HDD

            //500 Gb

            {
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.5}, // SSD 500GB 50€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.8}, // SSD 500GB 80€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":0.5, "Precio":0.3}, // SSD 500GB 30€
                "output": {"Barato":1}
            },

            //1TB

            {
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":1.3}, // SSD 1TB 130€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":2.2}, // SSD 1TB 220€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":1, "Precio":0.8}, // SSD 1TB 80€
                "output": {"Barato":1}
            },

            //2TB

            {
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":2.5}, // SSD 2TB 250€
                "output": {"Bien de precio":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":4}, // SSD 2TB 400€
                "output": {"Caro":1}
            },{
                "input": {"Tipo":0.2, "Capacidad":2, "Precio":1.9}, // SSD 2TB 190€
                "output": {"Barato":1}
            },

    ];

    redneuronal.train(datos);

    let resultado = brain.likely({"Tipo":0.1, "Capacidad":0.5, "Precio":0.75}, redneuronal);
    alert(resultado);
}



// Medidas:

// Tipo: (0.1 = SSD) (0.2 = M2) (0.3 = HDD)
// Capacidad: (1 = 1TB) (o.5 = 500Gb)
// Precio: (1 = 100€) (0.5 = 50€)