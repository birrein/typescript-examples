enum Role {
  Doctor,
  Nurse,
  Receptionist,
  Janitor,
}

interface Staff {
  name: string;
  email: string;
  role: Role;
}

const doctor = {
  name: 'Dr. Strange',
  email: 's@s.s',
  role: Role.Doctor,
  total: 25,
  currentBill() {
    return `Valor actual de la factura es de ${this.total}`;
  },
};

const printStaff = (staff: Staff) => {
  console.log(staff);
};

printStaff(doctor);

interface Billable {
  total: number;
  currentBill(): string;
}

const printCurrentBill = (bill: Billable) => {
  console.log(bill.currentBill());
};

printCurrentBill(doctor);
