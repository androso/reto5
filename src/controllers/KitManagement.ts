import Medicine from "../models/Medicine.js";
import * as readline from "readline";
const med = new Medicine(
	"paracetamol",
	10,
	new Date("2025-04-10"),
	"random stuff"
);

export default class KitManagement {
	protected medicines: Medicine[] = [med];
	private rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

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
            2. Mostrar lista de medicamentos
            3. Buscar el medicamento
            4. Actualizar medicamento
            5. Eliminar medicamento
            6. Crear la requisicion
            7. Salir
            ============================ 
            `);

		this.rl.question("Please choose one of the options above: ", (option) => {
			const optionParsed = parseInt(option);
			switch (optionParsed) {
				case 1:
					this.addMedicine();
					break;
				case 2:
					this.showMedicineAvailable();
					break;
				case 3:
					// this.getMedicineInfo();
					break;
				case 4:
					// this.modifyMedicine();
					break;
				case 5:
					// this.deleteMedicine();
					break;
				case 6:
				// this.withdrawMedicine();
				default:
					console.log("Please introduce a valid option");
					this.rl.close();
					return;
			}
		});
	}

	addMedicine() {
		this.rl.question("Please introduce the medicine's name: ", (medName) => {
			this.rl.question(
				"Please introduce the initial stock: ",
				(initialStock) => {
					this.rl.question(
						"Please introduce the expiration date: ",
						(expDate) => {
							this.rl.question(
								"Please introduce the description: ",
								(description) => {
									if (this.medicineExists(medName)) {
										console.log("Medicine is duplicated!");
										this.rl.close();
									}
									const med = new Medicine(
										medName,
										parseInt(initialStock),
										new Date(expDate),
										description
									);
									console.log(JSON.stringify(med));
									this.medicines.push(med);
									this.showMenu();
								}
							);
						}
					);
				}
			);
		});
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
				console.log("withdrawal successfull");
			}
		} else {
			console.log("medicine not found :(");
		}
	}
}
