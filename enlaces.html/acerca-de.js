// ============================================================
// FUNCIONES DE ACERCA DE
// Menú de pestañas (Qué es/Objetivo/Misión/Visión), carrusel
// de Antecedentes/Origen/Beneficios y menú de Ejes del PNA.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

	// Eventos de botones: menú de pestañas Qué es / Objetivo / Misión / Visión
	const botonesPestana = document.querySelectorAll('.pestana-boton');
	botonesPestana.forEach((boton) => {
		boton.addEventListener('click', () => {
			const idPanel = boton.dataset.pestana;

			botonesPestana.forEach((b) => b.classList.remove('activo'));
			document.querySelectorAll('.pestana-panel').forEach((panel) => panel.classList.remove('activo'));

			boton.classList.add('activo');
			document.getElementById(idPanel).classList.add('activo');
		});
	});

	// Carrusel: Antecedentes / Origen / Qué permitirá el CICM
	const diapositivas = document.querySelectorAll('.carousel-slide');
	const indicadores = document.querySelectorAll('#carrusel-indicadores .indicador');
	const botonAnterior = document.getElementById('btn-anterior');
	const botonSiguiente = document.getElementById('btn-siguiente');
	let indiceActual = 0;

	function mostrarDiapositiva(indice) {
		diapositivas.forEach((slide) => slide.classList.remove('activo'));
		indicadores.forEach((indicador) => indicador.classList.remove('activo'));

		indiceActual = (indice + diapositivas.length) % diapositivas.length;
		diapositivas[indiceActual].classList.add('activo');
		if (indicadores[indiceActual]) {
			indicadores[indiceActual].classList.add('activo');
		}
	}

	if (botonAnterior && botonSiguiente) {
		botonAnterior.addEventListener('click', () => mostrarDiapositiva(indiceActual - 1));
		botonSiguiente.addEventListener('click', () => mostrarDiapositiva(indiceActual + 1));
	}

	indicadores.forEach((indicador, indice) => {
		indicador.addEventListener('click', () => mostrarDiapositiva(indice));
	});

	// Eventos de botones: menú de Ejes del Plan Nacional Anticorrupción
	const botonesEje = document.querySelectorAll('.eje-boton');
	botonesEje.forEach((boton) => {
		boton.addEventListener('click', () => {
			const idEje = boton.dataset.eje;

			botonesEje.forEach((b) => b.classList.remove('activo'));
			document.querySelectorAll('.eje-panel').forEach((panel) => panel.classList.remove('activo'));

			boton.classList.add('activo');
			document.getElementById(idEje).classList.add('activo');
		});
	});
});
