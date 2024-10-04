export default class KitManagement {
	constructor() {}

	showMenu() {
		console.log("===========================");
		console.log("BOTIQUIN DEL HOSPITAL");
		console.log("===========================");
        console.log(`
            1. Agregar el medicamento
            2. Mostrar el medicamento
            3. Buscar el medicamento
            4. Actualizar medicamento
            5. Eliminar medicamento
            6. Crear la requisicion
            7. Salir
            ============================ 
        `);
	}
}
