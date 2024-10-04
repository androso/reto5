import Medicine from "../models/Medicine.js";

const testMed = new Medicine(
	"paracet",
	2,
	new Date("2025-04-10"),
	"classical medicine"
);

export default class KitManagement {
	protected medicines: Medicine[] = [testMed];

	showMedicineAvailable() {
		if (this.medicines.length >= 1) {
			console.log("Available medicine");
			this.medicines.forEach((medicine, index) => {
				console.log("==============");
				console.log(this.getMedicineFormatted(medicine));
				console.log("==============");
			});
		} else {
			console.log("No medicines available");
		}
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

	modifyMedicine(
		name: string,
		newStock?: number,
		newExpireDate?: Date,
		newDescription?: string
	) {
		if (this.medicineExists(name)) {
			this.medicines = this.medicines.map((med) => {
				if (med.name === name) {
					return new Medicine(
						name,
						newStock ? newStock : med.stock,
						newExpireDate ? newExpireDate : med.expireDate,
						newDescription ? newDescription : med.description
					);
				}
				return med;
			});
			console.log("medicine modified!");
		} else {
			console.log("medicine not found");
		}
	}

	deleteMedicine(medName: string) {
		this.medicines = this.medicines.filter((med) => med.name !== medName);
		console.log(`${medName} was deleted if found`);
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

	medicineExists(name: string) {
		return !!this.medicines.find((med) => med.name === name);
	}

	withdrawMedicine(medName: string, withdraw_amount: number) {
		if (this.medicineExists(medName)) {
			const med = this.medicines.find((med) => med.name == medName) as Medicine;

			if (med.stock === 0) {
				console.log("medicine out of stock");
			} else if (withdraw_amount > med.stock) {
				console.log("Not enough stock");
			} else {
				med.stock -= withdraw_amount;
                console.log("withdrawal successfull")
			}
		} else {
			console.log("medicine not found :(");
		}
	}
}
