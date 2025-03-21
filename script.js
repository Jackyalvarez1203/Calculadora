function updateCategories() {
    // No se necesita lógica aquí porque las categorías están directamente en el HTML
}

function updateSubcategories() {
    const category = document.getElementById('category').value;
    const subcategorySelect = document.getElementById('subcategory');
    const inputsDiv = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    subcategorySelect.innerHTML = '<option value="">Selecciona un subtema</option>';
    inputsDiv.innerHTML = '';
    calculateBtn.disabled = true;

    if (category === 'cinematica') {
        subcategorySelect.innerHTML += `
            <option value="mru">Movimiento Rectilíneo Uniforme (MRU)</option>
            <option value="mrua">Movimiento Rectilíneo Uniformemente Acelerado (MRUA)</option>
            <option value="caida">Caída Libre</option>
            <option value="proyectiles">Movimiento de Proyectiles</option>
        `;
    } else if (category === 'dinamica') {
        subcategorySelect.innerHTML += `
            <option value="fuerza">Fuerza Neta (F = m·a)</option>
            <option value="peso">Peso</option>
            <option value="friccion">Fricción</option>
        `;
    } else if (category === 'energia') {
        subcategorySelect.innerHTML += `
            <option value="cinetica">Energía Cinética</option>
            <option value="potencial">Energía Potencial</option>
            <option value="trabajo">Trabajo</option>
        `;
    } else if (category === 'conversiones') {
        subcategorySelect.innerHTML += `
            <option value="longitud">Longitud</option>
            <option value="masa">Masa</option>
            <option value="tiempo">Tiempo</option>
            <option value="velocidad">Velocidad</option>
        `;
    } else if (category === 'temperatura') {
        subcategorySelect.innerHTML += `
            <option value="temp">Conversión de Temperatura</option>
        `;
    } else if (category === 'momento') {
        subcategorySelect.innerHTML += `
            <option value="momento">Momento Lineal</option>
            <option value="colision_elastica">Colisión Elástica</option>
            <option value="colision_inelastica">Colisión Inelástica</option>
        `;
    } else if (category === 'gravedad') {
        subcategorySelect.innerHTML += `
            <option value="fuerza_gravitacional">Fuerza Gravitacional</option>
        `;
    } else if (category === 'electricidad') {
        subcategorySelect.innerHTML += `
            <option value="coulomb">Ley de Coulomb</option>
            <option value="ohm">Ley de Ohm</option>
        `;
    } else if (category === 'ondas') {
        subcategorySelect.innerHTML += `
            <option value="velocidad_onda">Velocidad de Onda</option>
            <option value="reflexion">Reflexión</option>
        `;
    } else if (category === 'termodinamica') {
        subcategorySelect.innerHTML += `
            <option value="calor">Transferencia de Calor</option>
            <option value="gases">Gases Ideales</option>
        `;
    }
}

function showInputs() {
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const inputsDiv = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    inputsDiv.innerHTML = '';
    calculateBtn.disabled = false;

    const unitOptions = {
        longitud: `
            <option value="m">Metros (m)</option>
            <option value="km">Kilómetros (km)</option>
            <option value="cm">Centímetros (cm)</option>
            <option value="mm">Milímetros (mm)</option>
            <option value="um">Micrómetros (µm)</option>
            <option value="nm">Nanómetros (nm)</option>
            <option value="mi">Millas (mi)</option>
            <option value="yd">Yardas (yd)</option>
            <option value="ft">Pies (ft)</option>
            <option value="in">Pulgadas (in)</option>
        `,
        masa: `
            <option value="kg">Kilogramos (kg)</option>
            <option value="g">Gramos (g)</option>
            <option value="mg">Miligramos (mg)</option>
            <option value="t">Toneladas (t)</option>
            <option value="lb">Libras (lb)</option>
            <option value="oz">Onzas (oz)</option>
        `,
        tiempo: `
            <option value="s">Segundos (s)</option>
            <option value="min">Minutos (min)</option>
            <option value="h">Horas (h)</option>
            <option value="d">Días (d)</option>
            <option value="wk">Semanas (wk)</option>
            <option value="yr">Años (yr)</option>
        `,
        velocidad: `
            <option value="m/s">Metros por segundo (m/s)</option>
            <option value="km/h">Kilómetros por hora (km/h)</option>
            <option value="mph">Millas por hora (mph)</option>
            <option value="ft/s">Pies por segundo (ft/s)</option>
            <option value="kn">Nudos (kn)</option>
        `,
        aceleracion: `
            <option value="m/s2">Metros por segundo² (m/s²)</option>
            <option value="km/h2">Kilómetros por hora² (km/h²)</option>
            <option value="ft/s2">Pies por segundo² (ft/s²)</option>
        `,
        fuerza: `
            <option value="N">Newtons (N)</option>
            <option value="dyn">Dinas (dyn)</option>
            <option value="lbf">Libras-fuerza (lbf)</option>
        `,
        energia: `
            <option value="J">Joules (J)</option>
            <option value="cal">Calorías (cal)</option>
            <option value="kcal">Kilocalorías (kcal)</option>
            <option value="eV">Electronvoltios (eV)</option>
        `
    };

    if (category === 'cinematica') {
        if (subcategory === 'mru') {
            inputsDiv.innerHTML = `
                <label>Velocidad (v):</label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select><br>
                <label>Tiempo (t):</label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Distancia (d):</label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'mrua') {
            inputsDiv.innerHTML = `
                <label>Velocidad inicial (Vi):</label>
                <input type="number" id="v0" step="any">
                <select id="v0Unit">${unitOptions.velocidad}</select><br>
                <label>Velocidad final (Vf):</label>
                <input type="number" id="vf" step="any">
                <select id="vfUnit">${unitOptions.velocidad}</select><br>
                <label>Aceleración (a):</label>
                <input type="number" id="a" step="any">
                <select id="aUnit">${unitOptions.aceleracion}</select><br>
                <label>Tiempo (t):</label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Distancia (d):</label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'caida') {
            inputsDiv.innerHTML = `
                <label>Altura (h):</label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select><br>
                <label>Tiempo (t):</label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Velocidad final (Vf):</label>
                <input type="number" id="vf" step="any">
                <select id="vfUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'proyectiles') {
            inputsDiv.innerHTML = `
                <label>Velocidad inicial (Vi):</label>
                <input type="number" id="v0" step="any">
                <select id="v0Unit">${unitOptions.velocidad}</select><br>
                <label>Ángulo de proyección (θ):</label>
                <input type="number" id="theta" step="any"><br>
                <label>Tiempo de vuelo (t):</label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Alcance (R):</label>
                <input type="number" id="r" step="any">
                <select id="rUnit">${unitOptions.longitud}</select><br>
                <label>Altura máxima (h):</label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select>
            `;
        }
    } else if (category === 'dinamica') {
        if (subcategory === 'fuerza') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Aceleración (a):</label>
                <input type="number" id="a" step="any">
                <select id="aUnit">${unitOptions.aceleracion}</select><br>
                <label>Fuerza (F):</label>
                <input type="number" id="f" step="any">
                <select id="fUnit">${unitOptions.fuerza}</select>
            `;
        } else if (subcategory === 'peso') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select>
            `;
        } else if (subcategory === 'friccion') {
            inputsDiv.innerHTML = `
                <label>Coeficiente de fricción (μ):</label>
                <input type="number" id="mu" step="any"><br>
                <label>Fuerza normal (Fn):</label>
                <input type="number" id="fn" step="any">
                <select id="fnUnit">${unitOptions.fuerza}</select>
            `;
        }
    } else if (category === 'energia') {
        if (subcategory === 'cinetica') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Velocidad (v):</label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'potencial') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Altura (h):</label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'trabajo') {
            inputsDiv.innerHTML = `
                <label>Fuerza (F):</label>
                <input type="number" id="f" step="any">
                <select id="fUnit">${unitOptions.fuerza}</select><br>
                <label>Distancia (d):</label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select><br>
                <label>Ángulo (θ):</label>
                <input type="number" id="theta" step="any">
            `;
        }
    } else if (category === 'conversiones') {
        inputsDiv.innerHTML = `
            <label>Valor:</label>
            <input type="number" id="value" step="any">
            <label>De:</label>
            <select id="fromUnit"></select>
            <label>A:</label>
            <select id="toUnit"></select>
        `;
        updateConversionUnits(subcategory);
    } else if (category === 'temperatura' && subcategory === 'temp') {
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
    } else if (category === 'momento') {
        if (subcategory === 'momento') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Velocidad (v):</label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'colision_elastica' || subcategory === 'colision_inelastica') {
            inputsDiv.innerHTML = `
                <label>Masa 1 (m1):</label>
                <input type="number" id="m1" step="any">
                <select id="m1Unit">${unitOptions.masa}</select><br>
                <label>Velocidad inicial 1 (Vi1):</label>
                <input type="number" id="v1i" step="any">
                <select id="v1iUnit">${unitOptions.velocidad}</select><br>
                <label>Masa 2 (m2):</label>
                <input type="number" id="m2" step="any">
                <select id="m2Unit">${unitOptions.masa}</select><br>
                <label>Velocidad inicial 2 (Vi2):</label>
                <input type="number" id="v2i" step="any">
                <select id="v2iUnit">${unitOptions.velocidad}</select>
            `;
        }
    } else if (category === 'gravedad' && subcategory === 'fuerza_gravitacional') {
        inputsDiv.innerHTML = `
            <label>Masa 1 (m1):</label>
            <input type="number" id="m1" step="any">
            <select id="m1Unit">${unitOptions.masa}</select><br>
            <label>Masa 2 (m2):</label>
            <input type="number" id="m2" step="any">
            <select id="m2Unit">${unitOptions.masa}</select><br>
            <label>Distancia (r):</label>
            <input type="number" id="r" step="any">
            <select id="rUnit">${unitOptions.longitud}</select>
        `;
    } else if (category === 'electricidad') {
        if (subcategory === 'coulomb') {
            inputsDiv.innerHTML = `
                <label>Carga 1 (q1):</label>
                <input type="number" id="q1" step="any"><br>
                <label>Carga 2 (q2):</label>
                <input type="number" id="q2" step="any"><br>
                <label>Distancia (r):</label>
                <input type="number" id="r" step="any">
                <select id="rUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'ohm') {
            inputsDiv.innerHTML = `
                <label>Voltaje (V):</label>
                <input type="number" id="v" step="any"><br>
                <label>Corriente (I):</label>
                <input type="number" id="i" step="any"><br>
                <label>Resistencia (R):</label>
                <input type="number" id="r" step="any">
            `;
        }
    } else if (category === 'ondas') {
        if (subcategory === 'velocidad_onda') {
            inputsDiv.innerHTML = `
                <label>Frecuencia (f):</label>
                <input type="number" id="f" step="any"><br>
                <label>Longitud de onda (λ):</label>
                <input type="number" id="lambda" step="any">
                <select id="lambdaUnit">${unitOptions.longitud}</select><br>
                <label>Velocidad (v):</label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'reflexion') {
            inputsDiv.innerHTML = `
                <label>Ángulo de incidencia (θi):</label>
                <input type="number" id="theta_i" step="any">
            `;
        }
    } else if (category === 'termodinamica') {
        if (subcategory === 'calor') {
            inputsDiv.innerHTML = `
                <label>Masa (m):</label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Calor específico (c):</label>
                <input type="number" id="c" step="any"><br>
                <label>Cambio de temperatura (ΔT):</label>
                <input type="number" id="deltaT" step="any">
            `;
        } else if (subcategory === 'gases') {
            inputsDiv.innerHTML = `
                <label>Presión (P):</label>
                <input type="number" id="p" step="any"><br>
                <label>Volumen (V):</label>
                <input type="number" id="v" step="any"><br>
                <label>Temperatura (T):</label>
                <input type="number" id="t" step="any"><br>
                <label>Moles (n):</label>
                <input type="number" id="n" step="any">
            `;
        }
    }

    if (!subcategory) calculateBtn.disabled = true;
}

function updateConversionUnits(subcategory) {
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

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
            { value: 'ft', text: 'Pies (ft)' },
            { value: 'in', text: 'Pulgadas (in)' }
        ],
        masa: [
            { value: 'kg', text: 'Kilogramos (kg)' },
            { value: 'g', text: 'Gramos (g)' },
            { value: 'mg', text: 'Miligramos (mg)' },
            { value: 't', text: 'Toneladas (t)' },
            { value: 'lb', text: 'Libras (lb)' },
            { value: 'oz', text: 'Onzas (oz)' }
        ],
        tiempo: [
            { value: 's', text: 'Segundos (s)' },
            { value: 'min', text: 'Minutos (min)' },
            { value: 'h', text: 'Horas (h)' },
            { value: 'd', text: 'Días (d)' },
            { value: 'wk', text: 'Semanas (wk)' },
            { value: 'yr', text: 'Años (yr)' }
        ],
        velocidad: [
            { value: 'm/s', text: 'Metros por segundo (m/s)' },
            { value: 'km/h', text: 'Kilómetros por hora (km/h)' },
            { value: 'mph', text: 'Millas por hora (mph)' },
            { value: 'ft/s', text: 'Pies por segundo (ft/s)' },
            { value: 'kn', text: 'Nudos (kn)' }
        ]
    };

    units[subcategory].forEach(unit => {
        fromUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
        toUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
    });
}

function calculate() {
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let resultsHTML = '';

    const conversions = {
        longitud: { m: 1, km: 1000, cm: 0.01, mm: 0.001, um: 0.000001, nm: 0.000000001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 },
        masa: { kg: 1, g: 0.001, mg: 0.000001, t: 1000, lb: 0.453592, oz: 0.0283495 },
        tiempo: { s: 1, min: 60, h: 3600, d: 86400, wk: 604800, yr: 31557600 },
        velocidad: { 'm/s': 1, 'km/h': 0.277778, mph: 0.44704, 'ft/s': 0.3048, kn: 0.514444 },
        aceleracion: { 'm/s2': 1, 'km/h2': 0.0000771605, 'ft/s2': 0.3048 },
        fuerza: { N: 1, dyn: 0.00001, lbf: 4.44822 },
        energia: { J: 1, cal: 4.184, kcal: 4184, eV: 1.602e-19 }
    };

    if (category === 'cinematica') {
        if (subcategory === 'mru') {
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            const vUnit = document.getElementById('vUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const dUnit = document.getElementById('dUnit').value;

            if ([v, t, d].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            v = v !== null ? v * conversions.velocidad[vUnit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            d = d !== null ? d * conversions.longitud[dUnit] : null;

            if (v === null) v = d / t;
            else if (t === null) t = d / v;
            else if (d === null) d = v * t;

            v = v / conversions.velocidad[vUnit];
            t = t / conversions.tiempo[tUnit];
            d = d / conversions.longitud[dUnit];

            resultsHTML = `v = ${v.toFixed(2)} ${vUnit}, t = ${t.toFixed(2)} ${tUnit}, d = ${d.toFixed(2)} ${dUnit}`;
        } else if (subcategory === 'mrua') {
            let v0 = document.getElementById('v0').value === '' ? null : parseFloat(document.getElementById('v0').value);
            let vf = document.getElementById('vf').value === '' ? null : parseFloat(document.getElementById('vf').value);
            let a = document.getElementById('a').value === '' ? null : parseFloat(document.getElementById('a').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            const v0Unit = document.getElementById('v0Unit').value;
            const vfUnit = document.getElementById('vfUnit').value;
            const aUnit = document.getElementById('aUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const dUnit = document.getElementById('dUnit').value;

            if ([v0, vf, a, t, d].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan al menos 3 valores para MRUA.';
                return;
            }

            v0 = v0 !== null ? v0 * conversions.velocidad[v0Unit] : null;
            vf = vf !== null ? vf * conversions.velocidad[vfUnit] : null;
            a = a !== null ? a * conversions.aceleracion[aUnit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            d = d !== null ? d * conversions.longitud[dUnit] : null;

            if (v0 !== null && vf !== null && a !== null && t === null && d === null) {
                t = (vf - v0) / a;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && vf !== null && t !== null && a === null && d === null) {
                a = (vf - v0) / t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && a !== null && t !== null && vf === null && d === null) {
                vf = v0 + a * t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && vf !== null && d !== null && a === null && t === null) {
                a = (vf * vf - v0 * v0) / (2 * d);
                t = (vf - v0) / a;
            } else if (v0 !== null && a !== null && d !== null && vf === null && t === null) {
                vf = Math.sqrt(v0 * v0 + 2 * a * d);
                t = (vf - v0) / a;
            } else if (vf !== null && a !== null && t !== null && v0 === null && d === null) {
                v0 = vf - a * t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (vf !== null && a !== null && d !== null && v0 === null && t === null) {
                v0 = Math.sqrt(vf * vf - 2 * a * d);
                t = (vf - v0) / a;
            } else if (v0 !== null && t !== null && d !== null && vf === null && a === null) {
                vf = (d - v0 * t) * 2 / t;
                a = (vf - v0) / t;
            } else if (vf !== null && t !== null && d !== null && v0 === null && a === null) {
                v0 = (d - 0.5 * (vf - v0) * t) / t;
                a = (vf - v0) / t;
            } else if (a !== null && t !== null && d !== null && v0 === null && vf === null) {
                v0 = d / t - 0.5 * a * t;
                vf = v0 + a * t;
            }

            v0 = v0 !== null ? v0 / conversions.velocidad[v0Unit] : 'N/A';
            vf = vf !== null ? vf / conversions.velocidad[vfUnit] : 'N/A';
            a = a !== null ? a / conversions.aceleracion[aUnit] : 'N/A';
            t = t !== null ? t / conversions.tiempo[tUnit] : 'N/A';
            d = d !== null ? d / conversions.longitud[dUnit] : 'N/A';

            resultsHTML = `v0 = ${v0 === 'N/A' ? v0 : v0.toFixed(2)} ${v0Unit}, vf = ${vf === 'N/A' ? vf : vf.toFixed(2)} ${vfUnit}, a = ${a === 'N/A' ? a : a.toFixed(2)} ${aUnit}, t = ${t === 'N/A' ? t : t.toFixed(2)} ${tUnit}, d = ${d === 'N/A' ? d : d.toFixed(2)} ${dUnit}`;
        } else if (subcategory === 'caida') {
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let vf = document.getElementById('vf').value === '' ? null : parseFloat(document.getElementById('vf').value);
            const hUnit = document.getElementById('hUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const vfUnit = document.getElementById('vfUnit').value;
            const g = 9.81;

            if ([h, t, vf].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            h = h !== null ? h * conversions.longitud[hUnit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            vf = vf !== null ? vf * conversions.velocidad[vfUnit] : null;

            if (h === null) h = 0.5 * g * t * t;
            else if (t === null) t = Math.sqrt(2 * h / g);
            else if (vf === null) vf = g * t;

            h = h / conversions.longitud[hUnit];
            t = t / conversions.tiempo[tUnit];
            vf = vf / conversions.velocidad[vfUnit];

            resultsHTML = `h = ${h.toFixed(2)} ${hUnit}, t = ${t.toFixed(2)} ${tUnit}, vf = ${vf.toFixed(2)} ${vfUnit}`;
        } else if (subcategory === 'proyectiles') {
            let v0 = document.getElementById('v0').value === '' ? null : parseFloat(document.getElementById('v0').value);
            let theta = document.getElementById('theta').value === '' ? null : parseFloat(document.getElementById('theta').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            const v0Unit = document.getElementById('v0Unit').value;
            const tUnit = document.getElementById('tUnit').value;
            const rUnit = document.getElementById('rUnit').value;
            const hUnit = document.getElementById('hUnit').value;
            const g = 9.81;

            if ([v0, theta, t, r, h].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            v0 = v0 !== null ? v0 * conversions.velocidad[v0Unit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            r = r !== null ? r * conversions.longitud[rUnit] : null;
            h = h !== null ? h * conversions.longitud[hUnit] : null;

            const rad = theta !== null ? theta * Math.PI / 180 : null;
            const v0x = v0 !== null && rad !== null ? v0 * Math.cos(rad) : null;
            const v0y = v0 !== null && rad !== null ? v0 * Math.sin(rad) : null;

            if (v0 !== null && theta !== null && t === null && r === null && h === null) {
                t = (2 * v0y) / g;
                h = (v0y * v0y) / (2 * g);
                r = v0x * t;
            } else if (v0 !== null && t !== null && theta === null && r !== null && h === null) {
                const tFlight = t;
                theta = Math.acos((r / (v0 * tFlight))) * 180 / Math.PI;
                h = (v0 * Math.sin(theta * Math.PI / 180)) * (tFlight / 2) - 0.5 * g * (tFlight / 2) * (tFlight / 2);
            } else if (v0 !== null && h !== null && theta === null && t === null && r === null) {
                const v0y = Math.sqrt(2 * g * h);
                theta = Math.asin(v0y / v0) * 180 / Math.PI;
                t = (2 * v0y) / g;
                r = v0 * Math.cos(theta * Math.PI / 180) * t;
            } else if (r !== null && t !== null && v0 === null && theta === null && h === null) {
                v0x = r / t;
                const tFlight = t;
                const v0y = (g * tFlight) / 2;
                v0 = Math.sqrt(v0x * v0x + v0y * v0y);
                theta = Math.asin(v0y / v0) * 180 / Math.PI;
                h = (v0y * v0y) / (2 * g);
            }

            v0 = v0 !== null ? v0 / conversions.velocidad[v0Unit] : 'N/A';
            t = t !== null ? t / conversions.tiempo[tUnit] : 'N/A';
            r = r !== null ? r / conversions.longitud[rUnit] : 'N/A';
            h = h !== null ? h / conversions.longitud[hUnit] : 'N/A';
            theta = theta !== null ? theta : 'N/A';

            resultsHTML = `v0 = ${v0 === 'N/A' ? v0 : v0.toFixed(2)} ${v0Unit}, θ = ${theta === 'N/A' ? theta : theta.toFixed(2)}°, t = ${t === 'N/A' ? t : t.toFixed(2)} ${tUnit}, r = ${r === 'N/A' ? r : r.toFixed(2)} ${rUnit}, h = ${h === 'N/A' ? h : h.toFixed(2)} ${hUnit}`;
        }
    } else if (category === 'dinamica') {
        if (subcategory === 'fuerza') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let a = document.getElementById('a').value === '' ? null : parseFloat(document.getElementById('a').value);
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            const mUnit = document.getElementById('mUnit').value;
            const aUnit = document.getElementById('aUnit').value;
            const fUnit = document.getElementById('fUnit').value;

            if ([m, a, f].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            m = m !== null ? m * conversions.masa[mUnit] : null;
            a = a !== null ? a * conversions.aceleracion[aUnit] : null;
            f = f !== null ? f * conversions.fuerza[fUnit] : null;

            if (f === null) f = m * a;
            else if (m === null) m = f / a;
            else if (a === null) a = f / m;

            f = f / conversions.fuerza[fUnit];
            m = m / conversions.masa[mUnit];
            a = a / conversions.aceleracion[aUnit];

            resultsHTML = `f = ${f.toFixed(2)} ${fUnit}, m = ${m.toFixed(2)} ${mUnit}, a = ${a.toFixed(2)} ${aUnit}`;
        } else if (subcategory === 'peso') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            const mUnit = document.getElementById('mUnit').value;
            const g = 9.81;

            if (m === null) {
                resultDiv.innerHTML = 'Se necesita la masa.';
                return;
            }

            m = m * conversions.masa[mUnit];
            const peso = m * g;
            resultsHTML = `Peso = ${peso.toFixed(2)} N`;
        } else if (subcategory === 'friccion') {
            let mu = document.getElementById('mu').value === '' ? null : parseFloat(document.getElementById('mu').value);
            let fn = document.getElementById('fn').value === '' ? null : parseFloat(document.getElementById('fn').value);
            const fnUnit = document.getElementById('fnUnit').value;

            if ([mu, fn].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }

            fn = fn * conversions.fuerza[fnUnit];
            const f = mu * fn;
            resultsHTML = `Fuerza de fricción = ${f.toFixed(2)} N`;
        }
    } else if (category === 'energia') {
        if (subcategory === 'cinetica') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const mUnit = document.getElementById('mUnit').value;
            const vUnit = document.getElementById('vUnit').value;

            if ([m, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }

            m = m * conversions.masa[mUnit];
            v = v * conversions.velocidad[vUnit];
            const ek = 0.5 * m * v * v;
            resultsHTML = `Energía cinética = ${ek.toFixed(2)} J`;
        } else if (subcategory === 'potencial') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            const mUnit = document.getElementById('mUnit').value;
            const hUnit = document.getElementById('hUnit').value;
            const g = 9.81;

            if ([m, h].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }

            m = m * conversions.masa[mUnit];
            h = h * conversions.longitud[hUnit];
            const ep = m * g * h;
            resultsHTML = `Energía potencial = ${ep.toFixed(2)} J`;
        } else if (subcategory === 'trabajo') {
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            let theta = document.getElementById('theta').value === '' ? null : parseFloat(document.getElementById('theta').value);
            const fUnit = document.getElementById('fUnit').value;
            const dUnit = document.getElementById('dUnit').value;

            if ([f, d, theta].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }

            f = f * conversions.fuerza[fUnit];
            d = d * conversions.longitud[dUnit];
            const w = f * d * Math.cos(theta * Math.PI / 180);
            resultsHTML = `Trabajo = ${w.toFixed(2)} J`;
        }
    } else if (category === 'conversiones') {
        const value = parseFloat(document.getElementById('value').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        const baseValue = value * conversions[subcategory][fromUnit];
        const result = baseValue / conversions[subcategory][toUnit];
        resultsHTML = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
    } else if (category === 'temperatura' && subcategory === 'temp') {
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

        resultsHTML = `${value} °${fromUnit.toUpperCase()} = ${result.toFixed(2)} °${toUnit.toUpperCase()}`;
    } else if (category === 'momento') {
        if (subcategory === 'momento') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const mUnit = document.getElementById('mUnit').value;
            const vUnit = document.getElementById('vUnit').value;

            if ([m, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }

            m = m * conversions.masa[mUnit];
            v = v * conversions.velocidad[vUnit];
            const p = m * v;
            resultsHTML = `Momento = ${p.toFixed(2)} kg·m/s`;
        } else if (subcategory === 'colision_elastica') {
            let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
            let v1i = document.getElementById('v1i').value === '' ? null : parseFloat(document.getElementById('v1i').value);
            let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
            let v2i = document.getElementById('v2i').value === '' ? null : parseFloat(document.getElementById('v2i').value);
            const m1Unit = document.getElementById('m1Unit').value;
            const v1iUnit = document.getElementById('v1iUnit').value;
            const m2Unit = document.getElementById('m2Unit').value;
            const v2iUnit = document.getElementById('v2iUnit').value;

            if ([m1, v1i, m2, v2i].filter(x => x !== null).length < 4) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }

            m1 = m1 * conversions.masa[m1Unit];
            v1i = v1i * conversions.velocidad[v1iUnit];
            m2 = m2 * conversions.masa[m2Unit];
            v2i = v2i * conversions.velocidad[v2iUnit];

            const v1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2);
            const v2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2);
            resultsHTML = `v1f = ${(v1f / conversions.velocidad[v1iUnit]).toFixed(2)} ${v1iUnit}, v2f = ${(v2f / conversions.velocidad[v2iUnit]).toFixed(2)} ${v2iUnit}`;
        } else if (subcategory === 'colision_inelastica') {
            let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
            let v1i = document.getElementById('v1i').value === '' ? null : parseFloat(document.getElementById('v1i').value);
            let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
            let v2i = document.getElementById('v2i').value === '' ? null : parseFloat(document.getElementById('v2i').value);
            const m1Unit = document.getElementById('m1Unit').value;
            const v1iUnit = document.getElementById('v1iUnit').value;
            const m2Unit = document.getElementById('m2Unit').value;
            const v2iUnit = document.getElementById('v2iUnit').value;

            if ([m1, v1i, m2, v2i].filter(x => x !== null).length < 4) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }

            m1 = m1 * conversions.masa[m1Unit];
            v1i = v1i * conversions.velocidad[v1iUnit];
            m2 = m2 * conversions.masa[m2Unit];
            v2i = v2i * conversions.velocidad[v2iUnit];

            const vf = (m1 * v1i + m2 * v2i) / (m1 + m2);
            resultsHTML = `vf = ${(vf / conversions.velocidad[v1iUnit]).toFixed(2)} ${v1iUnit}`;
        }
    } else if (category === 'gravedad' && subcategory === 'fuerza_gravitacional') {
        let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
        let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
        let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
        const m1Unit = document.getElementById('m1Unit').value;
        const m2Unit = document.getElementById('m2Unit').value;
        const rUnit = document.getElementById('rUnit').value;
        const G = 6.67430e-11;

        if ([m1, m2, r].filter(x => x !== null).length < 3) {
            resultDiv.innerHTML = 'Se necesitan todos los valores.';
            return;
        }

        m1 = m1 * conversions.masa[m1Unit];
        m2 = m2 * conversions.masa[m2Unit];
        r = r * conversions.longitud[rUnit];

        const f = G * m1 * m2 / (r * r);
        resultsHTML = `Fuerza gravitacional = ${f.toFixed(2)} N`;
    } else if (category === 'electricidad') {
        if (subcategory === 'coulomb') {
            let q1 = document.getElementById('q1').value === '' ? null : parseFloat(document.getElementById('q1').value);
            let q2 = document.getElementById('q2').value === '' ? null : parseFloat(document.getElementById('q2').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
            const rUnit = document.getElementById('rUnit').value;
            const k = 8.99e9;

            if ([q1, q2, r].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }

            r = r * conversions.longitud[rUnit];
            const f = k * Math.abs(q1 * q2) / (r * r);
            resultsHTML = `Fuerza eléctrica = ${f.toFixed(2)} N`;
        } else if (subcategory === 'ohm') {
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let i = document.getElementById('i').value === '' ? null : parseFloat(document.getElementById('i').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);

            if ([v, i, r].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            if (v === null) v = i * r;
            else if (i === null) i = v / r;
            else if (r === null) r = v / i;

            resultsHTML = `V = ${v.toFixed(2)} V, I = ${i.toFixed(2)} A, R = ${r.toFixed(2)} Ω`;
        }
    } else if (category === 'ondas') {
        if (subcategory === 'velocidad_onda') {
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            let lambda = document.getElementById('lambda').value === '' ? null : parseFloat(document.getElementById('lambda').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const lambdaUnit = document.getElementById('lambdaUnit').value;
            const vUnit = document.getElementById('vUnit').value;

            if ([f, lambda, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }

            lambda = lambda * conversions.longitud[lambdaUnit];
            v = v !== null ? v * conversions.velocidad[vUnit] : null;

            if (v === null) v = f * lambda;
            else if (f === null) f = v / lambda;
            else if (lambda === null) lambda = v / f;

            v = v / conversions.velocidad[vUnit];
            lambda = lambda / conversions.longitud[lambdaUnit];

            resultsHTML = `v = ${v.toFixed(2)} ${vUnit}, f = ${f.toFixed(2)} Hz, λ = ${lambda.toFixed(2)} ${lambdaUnit}`;
        } else if (subcategory === 'reflexion') {
            let theta_i = document.getElementById('theta_i').value === '' ? null : parseFloat(document.getElementById('theta_i').value);

            if (theta_i === null) {
                resultDiv.innerHTML = 'Se necesita el ángulo de incidencia.';
                return;
            }

            const theta_r = theta_i;
            resultsHTML = `Ángulo de reflexión = ${theta_r.toFixed(2)}°`;
        }
    } else if (category === 'termodinamica') {
        if (subcategory === 'calor') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let c = document.getElementById('c').value === '' ? null : parseFloat(document.getElementById('c').value);
            let deltaT = document.getElementById('deltaT').value === '' ? null : parseFloat(document.getElementById('deltaT').value);
            const mUnit = document.getElementById('mUnit').value;

            if ([m, c, deltaT].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }

            m = m * conversions.masa[mUnit];
            const q = m * c * deltaT;
            resultsHTML = `Calor (Q) = ${q.toFixed(2)} J`;
        } else if (subcategory === 'gases') {
            let p = document.getElementById('p').value === '' ? null : parseFloat(document.getElementById('p').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let n = document.getElementById('n').value === '' ? null : parseFloat(document.getElementById('n').value);
            const R = 8.314;

            if ([p, v, t, n].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan al menos 3 valores.';
                return;
            }

            if (p === null) p = (n * R * t) / v;
            else if (v === null) v = (n * R * t) / p;
            else if (t === null) t = (p * v) / (n * R);
            else if (n === null) n = (p * v) / (R * t);

            resultsHTML = `P = ${p.toFixed(2)} Pa, V = ${v.toFixed(2)} m³, T = ${t.toFixed(2)} K, n = ${n.toFixed(2)} mol`;
        }
    }

    if (resultsHTML) resultDiv.innerHTML = resultsHTML;
}