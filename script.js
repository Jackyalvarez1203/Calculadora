function showInputs() {
    const category = document.getElementById('category').value;
    const inputsDiv = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    inputsDiv.innerHTML = '';
    calculateBtn.disabled = false;

    if (category === 'cinematica') {
        inputsDiv.innerHTML = `
            <label>Velocidad inicial:</label>
            <input type="number" id="v0" step="any">
            <select id="v0Unit">
                <option value="m/s">m/s</option>
                <option value="km/h">km/h</option>
            </select>
            <br>
            <label>Velocidad final:</label>
            <input type="number" id="vf" step="any">
            <select id="vfUnit">
                <option value="m/s">m/s</option>
                <option value="km/h">km/h</option>
            </select>
            <br>
            <label>Aceleración (m/s²):</label>
            <input type="number" id="a" step="any">
            <br>
            <label>Tiempo (s):</label>
            <input type="number" id="t" step="any">
            <br>
            <label>Distancia (m):</label>
            <input type="number" id="d" step="any">
        `;
    } else if (category === 'dinamica') {
        inputsDiv.innerHTML = `
            <label>Masa (kg):</label>
            <input type="number" id="m" step="any">
            <label>Aceleración (m/s²):</label>
            <input type="number" id="a" step="any">
            <label>Fuerza (N):</label>
            <input type="number" id="f" step="any">
        `;
    } else if (category === 'energia') {
        inputsDiv.innerHTML = `
            <label>Masa (kg):</label>
            <input type="number" id="m" step="any">
            <label>Velocidad (m/s):</label>
            <input type="number" id="v" step="any">
            <label>Altura (m):</label>
            <input type="number" id="h" step="any">
        `;
    } else if (category === 'conversiones') {
        inputsDiv.innerHTML = `
            <label>Tipo de magnitud:</label>
            <select id="magnitude" onchange="updateUnits()">
                <option value="">Selecciona una magnitud</option>
                <option value="longitud">Longitud</option>
                <option value="masa">Masa</option>
                <option value="tiempo">Tiempo</option>
                <option value="velocidad">Velocidad</option>
                <option value="aceleracion">Aceleración</option>
                <option value="fuerza">Fuerza</option>
                <option value="energia">Energía</option>
                <option value="potencia">Potencia</option>
                <option value="presion">Presión</option>
            </select>
            <label>Valor:</label>
            <input type="number" id="value" step="any">
            <label>De:</label>
            <select id="fromUnit"></select>
            <label>A:</label>
            <select id="toUnit"></select>
        `;
        calculateBtn.disabled = true; // Deshabilitar hasta que se seleccione una magnitud
    } else if (category === 'temperatura') {
        inputsDiv.innerHTML = `
            <label>Valor:</label>
            <input type="number" id="value" step="any">
            <select id="fromUnit">
                <option value="c">Celsius (°C)</option>
                <option value="k">Kelvin (K)</option>
                <option value="f">Fahrenheit (°F)</option>
            </select>
            <select id="toUnit">
                <option value="c">Celsius (°C)</option>
                <option value="k">Kelvin (K)</option>
                <option value="f">Fahrenheit (°F)</option>
            </select>
        `;
    } else {
        calculateBtn.disabled = true;
    }
}

function updateUnits() {
    const magnitude = document.getElementById('magnitude').value;
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const calculateBtn = document.getElementById('calculate');
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    calculateBtn.disabled = false;

    const units = {
        longitud: [
            { value: 'm', text: 'Metros (m)' },
            { value: 'km', text: 'Kilómetros (km)' },
            { value: 'cm', text: 'Centímetros (cm)' },
            { value: 'mm', text: 'Milímetros (mm)' },
            { value: 'um', text: 'Micrómetros (µm)' },
            { value: 'nm', text: 'Nanómetros (nm)' },
            { value: 'mi', text: 'Millas (mi)' },
            { value: 'yd', text: 'Yardas (yd)' },
            { value: 'in', text: 'Pulgadas (in)' },
            { value: 'fur', text: 'Furlongs (fur)' },
            { value: 'pc', text: 'Parsecs (pc)' }
        ],
        masa: [
            { value: 'kg', text: 'Kilogramos (kg)' },
            { value: 'g', text: 'Gramos (g)' },
            { value: 'mg', text: 'Miligramos (mg)' },
            { value: 't', text: 'Toneladas (t)' },
            { value: 'lb', text: 'Libras (lb)' },
            { value: 'oz', text: 'Onzas (oz)' },
            { value: 'qq', text: 'Quintales (qq)' }
        ],
        tiempo: [
            { value: 's', text: 'Segundos (s)' },
            { value: 'min', text: 'Minutos (min)' },
            { value: 'h', text: 'Horas (h)' },
            { value: 'd', text: 'Días (d)' },
            { value: 'wk', text: 'Semanas (wk)' },
            { value: 'mo', text: 'Meses (mo)' },
            { value: 'yr', text: 'Años (yr)' }
        ],
        velocidad: [
            { value: 'm/s', text: 'Metros por segundo (m/s)' },
            { value: 'km/h', text: 'Kilómetros por hora (km/h)' },
            { value: 'mph', text: 'Millas por hora (mph)' },
            { value: 'kn', text: 'Nudos (kn)' }
        ],
        aceleracion: [
            { value: 'm/s2', text: 'Metros por segundo² (m/s²)' },
            { value: 'g', text: 'Gravedad (g)' }
        ],
        fuerza: [
            { value: 'N', text: 'Newtons (N)' },
            { value: 'dyn', text: 'Dinas (dyn)' },
            { value: 'lbf', text: 'Libras-fuerza (lbf)' }
        ],
        energia: [
            { value: 'J', text: 'Joules (J)' },
            { value: 'cal', text: 'Calorías (cal)' },
            { value: 'kcal', text: 'Kilocalorías (kcal)' },
            { value: 'eV', text: 'Electronvoltios (eV)' }
        ],
        potencia: [
            { value: 'W', text: 'Watts (W)' },
            { value: 'hp', text: 'Caballos de fuerza (hp)' }
        ],
        presion: [
            { value: 'Pa', text: 'Pascales (Pa)' },
            { value: 'bar', text: 'Bares (bar)' },
            { value: 'atm', text: 'Atmósferas (atm)' },
            { value: 'mmHg', text: 'Milímetros de mercurio (mmHg)' },
            { value: 'psi', text: 'Psi (psi)' }
        ]
    };

    if (magnitude && units[magnitude]) {
        units[magnitude].forEach(unit => {
            fromUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
            toUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
        });
    } else {
        calculateBtn.disabled = true;
    }
}

function calculate() {
    const category = document.getElementById('category').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (category === 'cinematica') {
        // Obtener valores y unidades
        const v0Input = document.getElementById('v0').value;
        const vfInput = document.getElementById('vf').value;
        const aInput = document.getElementById('a').value;
        const tInput = document.getElementById('t').value;
        const dInput = document.getElementById('d').value;
        const v0Unit = document.getElementById('v0Unit').value;
        const vfUnit = document.getElementById('vfUnit').value;

        // Convertir a números o mantener como null si están vacíos
        let v0 = v0Input === '' ? null : parseFloat(v0Input);
        let vf = vfInput === '' ? null : parseFloat(vfInput);
        let a = aInput === '' ? null : parseFloat(aInput);
        let t = tInput === '' ? null : parseFloat(tInput);
        let d = dInput === '' ? null : parseFloat(dInput);

        // Guardar valores originales para mostrar en el resumen
        const v0Original = v0;
        const vfOriginal = vf;
        const v0OriginalUnit = v0Unit;
        const vfOriginalUnit = vfUnit;

        // Convertir velocidades a m/s para cálculos internos
        if (v0 !== null && v0Unit === 'km/h') {
            v0 = v0 * (1000 / 3600); // km/h a m/s
        }
        if (vf !== null && vfUnit === 'km/h') {
            vf = vf * (1000 / 3600); // km/h a m/s
        }

        // Contar los valores proporcionados (incluyendo 0 como valor válido)
        const provided = [v0Original, vfOriginal, a, t, d].filter(x => x !== null).length;
        if (provided < 3) {
            resultDiv.innerHTML = 'Se necesitan al menos 3 valores para resolver.';
            return;
        }

        // Ecuaciones de cinemática (usando valores en m/s):
        // 1. vf = v0 + a * t
        // 2. d = v0 * t + 0.5 * a * t^2
        // 3. vf^2 = v0^2 + 2 * a * d
        // 4. d = (v0 + vf) / 2 * t

        try {
            // Iterar hasta que no se puedan calcular más valores
            let changes = true;
            let iterations = 0;
            const maxIterations = 5; // Prevenir bucles infinitos

            while (changes && iterations < maxIterations) {
                changes = false;

                // Ecuación 1: vf = v0 + a * t
                if (vf === null && v0 !== null && a !== null && t !== null) {
                    vf = v0 + a * t;
                    const vfDisplay = vfUnit === 'km/h' ? (vf * (3600 / 1000)) : vf;
                    resultDiv.innerHTML += `Velocidad final (calculada): ${vfDisplay.toFixed(2)} ${vfUnit}<br>`;
                    changes = true;
                } else if (v0 === null && vf !== null && a !== null && t !== null) {
                    v0 = vf - a * t;
                    const v0Display = v0Unit === 'km/h' ? (v0 * (3600 / 1000)) : v0;
                    resultDiv.innerHTML += `Velocidad inicial (calculada): ${v0Display.toFixed(2)} ${v0Unit}<br>`;
                    changes = true;
                } else if (a === null && vf !== null && v0 !== null && t !== null && t !== 0) {
                    a = (vf - v0) / t;
                    resultDiv.innerHTML += `Aceleración (calculada): ${a.toFixed(2)} m/s²<br>`;
                    changes = true;
                } else if (t === null && vf !== null && v0 !== null && a !== null && a !== 0) {
                    t = (vf - v0) / a;
                    if (t >= 0) {
                        resultDiv.innerHTML += `Tiempo (calculado): ${t.toFixed(2)} s<br>`;
                        changes = true;
                    }
                }

                // Ecuación 2: d = v0 * t + 0.5 * a * t^2
                if (d === null && v0 !== null && t !== null && a !== null) {
                    d = v0 * t + 0.5 * a * t * t;
                    resultDiv.innerHTML += `Distancia (calculada): ${d.toFixed(2)} m<br>`;
                    changes = true;
                } else if (v0 === null && d !== null && t !== null && a !== null && t !== 0) {
                    v0 = (d - 0.5 * a * t * t) / t;
                    const v0Display = v0Unit === 'km/h' ? (v0 * (3600 / 1000)) : v0;
                    resultDiv.innerHTML += `Velocidad inicial (calculada): ${v0Display.toFixed(2)} ${v0Unit}<br>`;
                    changes = true;
                } else if (a === null && d !== null && v0 !== null && t !== null && t !== 0) {
                    a = (d - v0 * t) * 2 / (t * t);
                    resultDiv.innerHTML += `Aceleración (calculada): ${a.toFixed(2)} m/s²<br>`;
                    changes = true;
                } else if (t === null && d !== null && v0 !== null && a !== null && a !== 0) {
                    // Resolver ecuación cuadrática: 0.5 * a * t^2 + v0 * t - d = 0
                    const discriminant = v0 * v0 + 2 * a * d;
                    if (discriminant >= 0) {
                        t = (-v0 + Math.sqrt(discriminant)) / a;
                        if (t >= 0) {
                            resultDiv.innerHTML += `Tiempo (calculado): ${t.toFixed(2)} s<br>`;
                            changes = true;
                        }
                    }
                }

                // Ecuación 3: vf^2 = v0^2 + 2 * a * d
                if (vf === null && v0 !== null && a !== null && d !== null) {
                    const vfSquared = v0 * v0 + 2 * a * d;
                    if (vfSquared >= 0) {
                        vf = Math.sqrt(vfSquared);
                        const vfDisplay = vfUnit === 'km/h' ? (vf * (3600 / 1000)) : vf;
                        resultDiv.innerHTML += `Velocidad final (calculada): ${vfDisplay.toFixed(2)} ${vfUnit}<br>`;
                        changes = true;
                    }
                } else if (v0 === null && vf !== null && a !== null && d !== null) {
                    const v0Squared = vf * vf - 2 * a * d;
                    if (v0Squared >= 0) {
                        v0 = Math.sqrt(v0Squared);
                        const v0Display = v0Unit === 'km/h' ? (v0 * (3600 / 1000)) : v0;
                        resultDiv.innerHTML += `Velocidad inicial (calculada): ${v0Display.toFixed(2)} ${v0Unit}<br>`;
                        changes = true;
                    }
                } else if (a === null && vf !== null && v0 !== null && d !== null && d !== 0) {
                    a = (vf * vf - v0 * v0) / (2 * d);
                    resultDiv.innerHTML += `Aceleración (calculada): ${a.toFixed(2)} m/s²<br>`;
                    changes = true;
                } else if (d === null && vf !== null && v0 !== null && a !== null && a !== 0) {
                    d = (vf * vf - v0 * v0) / (2 * a);
                    resultDiv.innerHTML += `Distancia (calculada): ${d.toFixed(2)} m<br>`;
                    changes = true;
                }

                // Ecuación 4: d = (v0 + vf) / 2 * t
                if (d === null && v0 !== null && vf !== null && t !== null) {
                    d = ((v0 + vf) / 2) * t;
                    resultDiv.innerHTML += `Distancia (calculada): ${d.toFixed(2)} m<br>`;
                    changes = true;
                } else if (v0 === null && d !== null && vf !== null && t !== null && t !== 0) {
                    v0 = (2 * d / t) - vf;
                    const v0Display = v0Unit === 'km/h' ? (v0 * (3600 / 1000)) : v0;
                    resultDiv.innerHTML += `Velocidad inicial (calculada): ${v0Display.toFixed(2)} ${v0Unit}<br>`;
                    changes = true;
                } else if (vf === null && d !== null && v0 !== null && t !== null && t !== 0) {
                    vf = (2 * d / t) - v0;
                    const vfDisplay = vfUnit === 'km/h' ? (vf * (3600 / 1000)) : vf;
                    resultDiv.innerHTML += `Velocidad final (calculada): ${vfDisplay.toFixed(2)} ${vfUnit}<br>`;
                    changes = true;
                } else if (t === null && d !== null && v0 !== null && vf !== null && (v0 + vf) !== 0) {
                    t = (2 * d) / (v0 + vf);
                    if (t >= 0) {
                        resultDiv.innerHTML += `Tiempo (calculado): ${t.toFixed(2)} s<br>`;
                        changes = true;
                    }
                }

                iterations++;
            }

            // Si no se hicieron cambios y aún faltan valores, mostrar mensaje
            if (iterations >= maxIterations || (!changes && [v0, vf, a, t, d].some(x => x === null))) {
                resultDiv.innerHTML += 'No se pudieron calcular más valores con los datos proporcionados.<br>';
            }

            // Resumen de valores calculados o ingresados
            const v0Display = v0Original !== null ? v0Original : (v0 !== null ? (v0Unit === 'km/h' ? (v0 * (3600 / 1000)) : v0) : null);
            const vfDisplay = vfOriginal !== null ? vfOriginal : (vf !== null ? (vfUnit === 'km/h' ? (vf * (3600 / 1000)) : vf) : null);
            resultDiv.innerHTML += `Resumen:<br>
                v0 = ${(v0Display !== null ? v0Display.toFixed(2) : 'N/A')} ${v0OriginalUnit || 'm/s'}, 
                vf = ${(vfDisplay !== null ? vfDisplay.toFixed(2) : 'N/A')} ${vfOriginalUnit || 'm/s'}, 
                a = ${(a !== null ? a.toFixed(2) : 'N/A')} m/s², 
                t = ${(t !== null ? t.toFixed(2) : 'N/A')} s, 
                d = ${(d !== null ? d.toFixed(2) : 'N/A')} m`;
        } catch (error) {
            resultDiv.innerHTML += `Error: ${error.message}<br>`;
        }
    } else if (category === 'dinamica') {
        let m = parseFloat(document.getElementById('m').value) || null;
        let a = parseFloat(document.getElementById('a').value) || null;
        let f = parseFloat(document.getElementById('f').value) || null;

        const provided = [m, a, f].filter(x => x !== null).length;
        if (provided < 2) {
            resultDiv.innerHTML = 'Se necesitan al menos 2 valores para resolver.';
            return;
        }

        if (f === null && m !== null && a !== null) {
            f = m * a;
            resultDiv.innerHTML += `Fuerza: ${f.toFixed(2)} N<br>`;
        }
        if (m === null && f !== null && a !== null) {
            m = f / a;
            resultDiv.innerHTML += `Masa: ${m.toFixed(2)} kg<br>`;
        }
        if (a === null && f !== null && m !== null) {
            a = f / m;
            resultDiv.innerHTML += `Aceleración: ${a.toFixed(2)} m/s²<br>`;
        }

        resultDiv.innerHTML += `Resumen:<br>
            m = ${m.toFixed(2)} kg, a = ${a.toFixed(2)} m/s², f = ${f.toFixed(2)} N`;
    } else if (category === 'energia') {
        let m = parseFloat(document.getElementById('m').value) || null;
        let v = parseFloat(document.getElementById('v').value) || null;
        let h = parseFloat(document.getElementById('h').value) || null;
        const g = 9.81;

        if (m !== null && v !== null) {
            const kinetic = 0.5 * m * v * v;
            resultDiv.innerHTML += `Energía cinética: ${kinetic.toFixed(2)} J<br>`;
            if (h === null) {
                resultDiv.innerHTML += `No se proporcionó altura para energía potencial.<br>`;
            } else {
                const potential = m * g * h;
                resultDiv.innerHTML += `Energía potencial: ${potential.toFixed(2)} J<br>`;
            }
        } else if (m !== null && h !== null) {
            const potential = m * g * h;
            resultDiv.innerHTML += `Energía potencial: ${potential.toFixed(2)} J<br>`;
            if (v === null) {
                resultDiv.innerHTML += `No se proporcionó velocidad para energía cinética.<br>`;
            }
        } else {
            resultDiv.innerHTML = 'Se necesita al menos masa y velocidad o altura.';
        }
    } else if (category === 'conversiones') {
        const value = parseFloat(document.getElementById('value').value);
        const magnitude = document.getElementById('magnitude').value;
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        const conversions = {
            longitud: {
                m: 1,
                km: 0.001,
                cm: 100,
                mm: 1000,
                um: 1e6,
                nm: 1e9,
                mi: 0.000621371, // 1 milla = 1609.344 metros
                yd: 1.09361,     // 1 metro = 1.09361 yardas
                in: 39.3701,
                fur: 0.00497097,
                pc: 3.24078e-17
            },
            masa: {
                kg: 1,
                g: 1000,
                mg: 1e6,
                t: 0.001,
                lb: 2.20462,
                oz: 35.274,
                qq: 0.01
            },
            tiempo: {
                s: 1,
                min: 1 / 60,
                h: 1 / 3600,
                d: 1 / 86400,
                wk: 1 / 604800,
                mo: 1 / 2629746,
                yr: 1 / 31557600
            },
            velocidad: {
                'm/s': 1,
                'km/h': 0.277778,
                mph: 0.44704,
                kn: 0.514444
            },
            aceleracion: {
                'm/s2': 1,
                g: 1 / 9.81
            },
            fuerza: {
                N: 1,
                dyn: 1e5,
                lbf: 0.224809
            },
            energia: {
                J: 1,
                cal: 0.2388459,
                kcal: 0.0002388459,
                eV: 6.242e18
            },
            potencia: {
                W: 1,
                hp: 0.00134102
            },
            presion: {
                Pa: 1,
                bar: 1e-5,
                atm: 9.86923e-6,
                mmHg: 0.00750062,
                psi: 0.000145038
            }
        };

        if (!magnitude || !conversions[magnitude]) {
            resultDiv.innerHTML = 'Selecciona una magnitud válida.';
            return;
        }

        const baseValue = value / conversions[magnitude][fromUnit];
        const result = baseValue * conversions[magnitude][toUnit];

        // Corrección específica para la conversión de millas a yardas
        if (magnitude === 'longitud' && ((fromUnit === 'mi' && toUnit === 'yd') || (fromUnit === 'yd' && toUnit === 'mi'))) {
            const miToYd = 1760; // 1 milla = 1760 yardas
            if (fromUnit === 'mi' && toUnit === 'yd') {
                resultDiv.innerHTML = `${value} ${fromUnit} = ${(value * miToYd).toFixed(4)} ${toUnit}`;
            } else if (fromUnit === 'yd' && toUnit === 'mi') {
                resultDiv.innerHTML = `${value} ${fromUnit} = ${(value / miToYd).toFixed(4)} ${toUnit}`;
            }
        } else {
            resultDiv.innerHTML = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
        }
    } else if (category === 'temperatura') {
        const value = parseFloat(document.getElementById('value').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        let celsius;
        if (fromUnit === 'c') celsius = value;
        else if (fromUnit === 'k') celsius = value - 273.15;
        else if (fromUnit === 'f') celsius = (value - 32) * 5 / 9;

        let result;
        if (toUnit === 'c') result = celsius;
        else if (toUnit === 'k') result = celsius + 273.15;
        else if (toUnit === 'f') result = celsius * 9 / 5 + 32;

        resultDiv.innerHTML = `${value} °${fromUnit.toUpperCase()} = ${result.toFixed(2)} °${toUnit.toUpperCase()}`;
    }
}