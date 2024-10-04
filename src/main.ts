import KitManagement from "./controllers/KitManagement.js";

const manager = new KitManagement();

manager.showMenu();
manager.showMedicineAvailable();
// manager.getMedicineInfo("paracet");
// manager.withdrawMedicine("paracet", 3);
// manager.getMedicineInfo("paracetamol");

// manager.getMedicineInfo("paracetamol");
// manager.modifyMedicine("paracetamol", 5, new Date(), "new description");

manager.deleteMedicine("paracetamol");
// manager.modifyMedicine(
// 	"paracet",
// 	10,
// 	new Date("2024-08-10"),
// 	"new description"
// );

manager.showMedicineAvailable();
// manager.getMedicineInfo("paracetamol");
