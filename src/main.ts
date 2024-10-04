import KitManagement from "./controllers/KitManagement.js";

const manager = new KitManagement();

// manager.showMenu();
// manager.showMedicineAvailable();
manager.getMedicineInfo("paracet");
// manager.deleteMedicine("paracet");
manager.modifyMedicine(
	"paracetnot",
	10,
	new Date("2024-08-10"),
	"new description"
);
// manager.showMedicineAvailable();
manager.getMedicineInfo("paracet");
