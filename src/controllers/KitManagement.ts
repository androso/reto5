import Medicine from "../models/Medicine.js";

const testMed = new Medicine(
	"paracet",
	1,
	new Date("2025-04-10"),
	"classical medicine"
);

export default class KitManagement {
	protected medicines: Medicine[] = [testMed];

	showMedicineAvailable() {
		console.log("Available medicine");
		this.medicines.forEach((medicine, index) => {
			console.log("==============");
			console.log(this.getMedicineFormatted(medicine));
			console.log("==============");
		});
	}

	getMedicineFormatted(medicine: Medicine) {
		return `name: ${medicine.name}\nstock: ${medicine.stock}\nexpireDate: ${medicine.expireDate}\ndescription: ${medicine.description}`;
	}

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

	getMedicineInfo(name: string) {
		const med = this.medicines.find((med) => med.name === name);
		if (!med) {
			console.log("medicine not found");
		} else {
			console.log("==============");
			console.log(this.getMedicineFormatted(med));
			console.log("==============");
		}
	}
}
